import prisma from '@/app/(src)/prisma';
import fs from 'fs';
import path from 'path';

async function main() {
  const projectSlug = 'client-relationships';

  //await fetchBody('project', projectSlug);
  await setBody('blogPost', projectSlug);
}

type BodyTable = 'blogPost' | 'project';

function importFile(filePath: string): string {
  const fullPath = path.resolve(filePath);

  return fs.readFileSync(fullPath, 'utf-8');
}

function setFile(filePath: string, content: string) {
  const fullPath = path.resolve(filePath);

  return fs.writeFileSync(fullPath, content, 'utf-8');
}

async function setKeywords(table: BodyTable, slug: string) {
  const keywords = importFile('scripts/keywords.txt').split('\n');

  const params = {
    where: {
      slug: slug,
    },
    data: {
      keywords: keywords,
    },
  };

  await (table == 'blogPost'
    ? prisma.blogPost.update(params)
    : prisma.project.update(params));
}

async function fetchBody(table: BodyTable, slug: string) {
  const params = { where: { slug } };

  const record = await (table == 'blogPost'
    ? prisma.blogPost.findFirstOrThrow(params)
    : prisma.project.findFirstOrThrow(params));

  setFile('scripts/body.md', record.body);
}

async function setBody(table: BodyTable, slug: string) {
  const body = importFile('scripts/body.md');

  const params = {
    where: {
      slug: slug,
    },
    data: {
      body: body,
    },
  };

  await (table == 'blogPost'
    ? prisma.blogPost.update(params)
    : prisma.project.update(params));
}

main();

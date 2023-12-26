import prisma from '@/app/(src)/prisma';
import fs from 'fs';
import path from 'path';

async function main() {
  await setBody('portfolio');
}

function importFile(filePath: string): string {
  const fullPath = path.resolve(filePath);

  return fs.readFileSync(fullPath, 'utf-8');
}

async function setKeywords(slug: string) {
  const keywords = importFile('scripts/keywords.txt').split('\n');

  await prisma.blogPost.update({
    where: {
      slug: slug,
    },
    data: {
      keywords: keywords,
    },
  });
}

async function setBody(slug: string) {
  const body = importFile('scripts/body.md');

  await prisma.blogPost.update({
    where: {
      slug: slug,
    },
    data: {
      body: body,
    },
  });
}

main();

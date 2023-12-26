import prisma from '@/app/(src)/prisma';
import Footer from '@/app/(ui)/widgets/footer';
import Header from '@/app/(ui)/widgets/header';
import JakeUser from '@/app/(ui)/widgets/jake_user';
import Renderable from '@/app/(ui)/widgets/renderable';
import SkillIcon from '@/app/(ui)/widgets/skill_icon';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

import initIcons from '@/app/(ui)/util/fa_icons';
import BlogPostCard from '@/app/(ui)/widgets/blog_post_card';
import LinkRenderer from '@/app/(ui)/widgets/link_renderer';
initIcons();

export const revalidate = 60 * 60 * 12;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | null> {
  const project = await prisma.project.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!project) {
    return null;
  }

  return {
    title: project.name,
    description: project.shortDescription,
    authors: [{ name: 'Jake Boychenko' }],
    keywords: project.keywords,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await prisma.project.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      renderable: true,
      skills: {
        include: {
          renderable: true,
        },
      },
      links: {
        include: {
          linkTemplate: {
            include: {
              renderable: true,
            },
          },
        },
      },
      relatedBlogPosts: {
        include: {
          renderable: true,
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <section className="dark">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Renderable
            renderable={project.renderable}
            width={350}
            color={'white'}
            className="rounded-lg"
          />
          <div className="flex flex-col flex-grow basis-[650px] gap-4 items-start">
            <h2 className="text-start">{project.name}</h2>
            <p className="text-primary">{project.shortDescription}</p>
            <JakeUser />
            <div className="flex-grow" />
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => {
                return <LinkRenderer key={link.id} link={link} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div>
          <Markdown components={{ h1: 'h4', h2: 'h5', h3: 'h6' }}>
            {project.body}
          </Markdown>
        </div>
      </section>
      {project.relatedBlogPosts.length > 0 && (
        <section>
          <h5 className="text-center">
            {project.relatedBlogPosts.length == 1
              ? 'Related Blog Post'
              : 'Related Blog Posts'}
          </h5>
          <div className="flex flex-wrap justify-center items-center">
            {project.relatedBlogPosts.map((blogPost) => (
              <BlogPostCard key={blogPost.slug} blogPost={blogPost} />
            ))}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}

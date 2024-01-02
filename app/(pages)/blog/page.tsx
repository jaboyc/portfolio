import prisma from '@/app/(src)/prisma';
import Footer from '@/app/(ui)/widgets/footer';
import Header from '@/app/(ui)/widgets/header';
import JakeUser from '@/app/(ui)/widgets/jake_user';
import Renderable from '@/app/(ui)/widgets/renderable';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import initIcons from '@/app/(ui)/util/fa_icons';
import Markdown from 'react-markdown';
import ProjectCard from '@/app/(ui)/widgets/project_card';
import BlogPostCard from '@/app/(ui)/widgets/blog_post_card';
initIcons();

export const revalidate = 60 * 60 * 12;

export async function generateMetadata({}): Promise<Metadata | null> {
  return {
    title: "Jake Boychenko's Blog",
    description:
      'Jake Boychenko tackles real-world programming challenges, shares industry trends, and offers practical tips for developers of all levels.',
    authors: [{ name: 'Jake Boychenko' }],
    keywords: [
      'software development',
      'programming',
      'coding',
      'tech',
      'developer',
      'blog',
      'flutter',
      'web',
      'next.js',
      'client',
      'freelancing',
    ],
    metadataBase: new URL('https://www.jakeboychenko.com'),
  };
}

export default async function Page({}: {}) {
  const blogPosts = await prisma.blogPost.findMany({
    orderBy: {
      createdTime: 'desc',
    },
    include: {
      renderable: true,
    },
  });

  return (
    <>
      <Header />
      <section className="light">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <h4>Blog</h4>
          <p>
            Dive into my world of software engineering, where I share the
            essence of my project development, my approach to architectural
            design, and the secrets to maintaining lasting client relationships.
            This blog is a window into my professional journey, offering a blend
            of technical expertise and client-centric strategies. Whether you're
            in the tech industry or simply curious, there's something here for
            you.
          </p>
          {blogPosts.map((blogPost) => BlogPostCard({ blogPost: blogPost }))}
        </div>
      </section>
      <Footer />
    </>
  );
}

import prisma from '@/app/(src)/prisma';
import Footer from '@/app/(ui)/widgets/footer';
import Header from '@/app/(ui)/widgets/header';
import JakeUser from '@/app/(ui)/widgets/jake_user';
import Renderable from '@/app/(ui)/widgets/renderable';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import initIcons from '@/app/(ui)/util/fa_icons';
initIcons();

export const revalidate = 60 * 60 * 12;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | null> {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!blogPost) {
    return null;
  }

  return {
    title: blogPost.title,
    description: blogPost.subtitle,
    authors: [{ name: 'Jake Boychenko' }],
    keywords: blogPost.keywords,
  };
}

export default async function Page({ params }: Props) {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      renderable: true,
    },
  });

  if (!blogPost) {
    notFound();
  }

  return (
    <>
      <Header />
      <section>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Renderable
            renderable={blogPost.renderable}
            width={350}
            color={'white'}
            className="rounded-lg"
          />
          <div className="flex flex-col flex-grow basis-[450px] gap-2 items-start">
            <h5 className="text-white">{blogPost.title}</h5>
            <p className="text-primary">{blogPost.subtitle}</p>
            <JakeUser isDark />
          </div>
        </div>
      </section>
      <section className="bg-white items-center">
        <p className="text-gray-800">{blogPost.body}</p>
      </section>
      <Footer />
    </>
  );
}

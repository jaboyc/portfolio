import prisma from '@/app/(src)/prisma';
import Footer from '@/app/(ui)/widgets/footer';
import Header from '@/app/(ui)/widgets/header';
import JakeUser from '@/app/(ui)/widgets/jake_user';
import Renderable from '@/app/(ui)/widgets/renderable';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import initIcons from '@/app/(ui)/util/fa_icons';
import Markdown from 'react-markdown';
import ProjectCard from '@/app/(ui)/widgets/project_card';
initIcons();

export const revalidate = 60 * 60 * 12;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | null> {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      renderable: true,
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
    metadataBase: new URL('https://www.jakeboychenko.com'),
    openGraph: {
      images: blogPost.renderable.src ?? undefined,
    },
  };
}

export default async function Page({
  params,
  searchParams: { raw },
}: {
  params: { slug: string };
  searchParams: { raw: string };
}) {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      renderable: true,
      relatedProjects: {
        include: {
          renderable: true,
          skills: {
            include: {
              renderable: true,
            },
          },
        },
      },
    },
  });

  if (!blogPost) {
    notFound();
  }

  if (raw == 'true') {
    return (
      <>
        <pre>{blogPost.body}</pre>
      </>
    );
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
            <JakeUser />
          </div>
        </div>
      </section>
      <section className="light">
        <div>
          <Markdown
            components={{
              h1(props) {
                const { node, ...rest } = props;
                return <h4 className="pt-3 pb-1" {...rest} />;
              },
              h2(props) {
                const { node, ...rest } = props;
                return <h5 className="pt-3 pb-1" {...rest} />;
              },
              h3(props) {
                const { node, ...rest } = props;
                return <h6 className="pt-3 pb-1" {...rest} />;
              },
              p(props) {
                const { node, ...rest } = props;
                return <p className="pt-3 pb-1" {...rest} />;
              },
            }}
          >
            {blogPost.body}
          </Markdown>
        </div>
      </section>
      {blogPost.relatedProjects.length > 0 && (
        <section>
          <h5 className="text-center">
            {blogPost.relatedProjects.length == 1
              ? 'Related Project'
              : 'Related Projects'}
          </h5>
          <div className="flex flex-wrap justify-center items-center">
            {blogPost.relatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}

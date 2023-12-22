import Footer from '@/app/(ui)/widgets/footer';
import Header from '@/app/(ui)/widgets/header';
import JakeUser from '@/app/(ui)/widgets/jake_user';
import Renderable from '@/app/(ui)/widgets/renderable';
import SkillIcon from '@/app/(ui)/widgets/skill_icon';
import prisma from '@/app/(src)/prisma';
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
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <section>
        <div className="flex flex-wrap gap-4 items-center">
          <Renderable
            renderable={project.renderable}
            width={350}
            color={'white'}
            className="rounded-lg"
          />
          <div className="flex flex-col flex-grow basis-[650px] gap-4 items-start">
            <h2 className="text-start text-white">{project.name}</h2>
            <p className="text-primary">{project.shortDescription}</p>
            <JakeUser foregroundColor="white" />
            <div className="flex-grow" />
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <p className="text-gray-800">{project.body}</p>
      </section>
      <Footer />
    </>
  );
}

import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

export const revalidate = 60 * 60 * 12;

export default async function Page({ params }: { params: { slug: string } }) {
  const prisma = new PrismaClient();
  const project = await prisma.project.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <section>
        <h2 className="text-start text-white">{project.name}</h2>
      </section>
      <section className="bg-white">
        <p className="subbody">{project.shortDescription}</p>
      </section>
      <Footer />
    </>
  );
}

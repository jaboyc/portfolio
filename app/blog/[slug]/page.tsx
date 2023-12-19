import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

export const revalidate = 60 * 60 * 12;

export default async function Page({ params }: { params: { slug: string } }) {
  const prisma = new PrismaClient();
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!blogPost) {
    notFound();
  }

  return (
    <>
      <Header />
      <section>
        <h2 className="text-start text-white">{blogPost.title}</h2>
        <p className="text-start text-primary">{blogPost.subtitle}</p>
      </section>
      <section className="bg-white">
        <p className="subbody">{blogPost.body}</p>
      </section>
      <Footer />
    </>
  );
}
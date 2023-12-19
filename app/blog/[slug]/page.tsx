import Footer from '@/app/ui/footer';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

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
      <header className="sticky top-0 z-[100] flex bg-background px-16 py-3 justify-center">
        <nav>
          <h5 className="text-primary text-center text-[20px] md:text-[24px] transition hover:brightness-[120%]">
            <a className="no-underline" href="/">
              JAKE BOYCHENKO
            </a>
          </h5>
        </nav>
      </header>
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

import { PrismaClient } from '@prisma/client';

export default async function Footer() {
  const prisma = new PrismaClient();
  const resume = await prisma.resume.findFirstOrThrow();

  return (
    <footer className="flex flex-row items-center justify-evenly bg-black h-16">
      <a
        className="subbody text-primary"
        style={{ fontSize: 12 }}
        href={`mailto:${resume.email}`}
      >
        {resume.email}
      </a>
      <div className="flex flex-col justify-center">
        <p
          className="subbody text-white text-center opacity-80"
          style={{ fontSize: 12 }}
        >
          Built with Next.js
        </p>
        <p
          className="subbody text-white text-center opacity-80"
          style={{ fontSize: 12 }}
        >
          View it on Github <a href="#">here</a>
        </p>
      </div>
    </footer>
  );
}
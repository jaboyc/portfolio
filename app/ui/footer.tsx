import prisma from '@/src/prisma';
import { Link } from '@nextui-org/link';

export default async function Footer() {
  const resume = await prisma.resume.findFirstOrThrow();

  return (
    <footer className="flex flex-row items-center justify-evenly bg-black h-16">
      <Link
        className="text-primary text-tiny"
        size="sm"
        href={`mailto:${resume.email}`}
      >
        {resume.email}
      </Link>
      <div className="flex flex-col justify-center">
        <p className="text-tiny text-white text-center opacity-80">
          Built with Next.js
        </p>
        <div className="flex flex-row items-center">
          <p className="text-tiny text-white text-center opacity-80">
            View it on Github
          </p>
          &nbsp;
          <Link
            href="https://github.com/jaboyc/portfolio"
            target="_blank"
            showAnchorIcon
            className={'text-tiny'}
          >
            here
          </Link>
        </div>
      </div>
    </footer>
  );
}

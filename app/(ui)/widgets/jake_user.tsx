import prisma from '@/app/(src)/prisma';
import { Link } from '@nextui-org/link';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

export default async function JakeUser() {
  const resume = await prisma.resume.findFirstOrThrow();

  return (
    <div className={`card flex flex-row gap-2 p-2 rounded-small`}>
      <Image
        as={NextImage}
        width={40}
        height={40}
        src="/profile_pic.jpg"
        alt="Jake's Profile Picture"
      />
      <div>
        <p className="text-small font-bold">Jake Boychenko</p>
        <Link href={resume.linkedInUrl} size="sm" isExternal>
          @jaboyc
        </Link>
      </div>
    </div>
  );
}

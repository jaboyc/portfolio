import prisma from '@/app/(src)/prisma';
import { Link } from '@nextui-org/link';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

export default async function JakeUser({
  foregroundColor,
}: {
  foregroundColor: string;
}) {
  const resume = await prisma.resume.findFirstOrThrow();

  return (
    <div className="flex flex-row gap-2 border px-2 py-1 rounded-small">
      <Image
        as={NextImage}
        width={40}
        height={40}
        src="/profile_pic.jpg"
        alt="Jake's Profile Picture"
      />
      <div
        className={`flex flex-col ${
          foregroundColor == 'white' ? 'text-gray-200' : 'text-gray-800'
        }`}
      >
        <p className="text-small font-bold">Jake Boychenko</p>
        <Link href={resume.linkedInUrl} size="sm" isExternal>
          @jaboyc
        </Link>
      </div>
    </div>
  );
}

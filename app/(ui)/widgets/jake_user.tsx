import prisma from '@/app/(src)/prisma';
import { Link } from '@nextui-org/link';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

export default async function JakeUser({ isDark }: { isDark?: boolean }) {
  const resume = await prisma.resume.findFirstOrThrow();

  return (
    <div
      className={`flex flex-row gap-2 ${
        isDark === true
          ? 'bg-slate-900 border border-gray-700'
          : 'bg-white border'
      } px-2 py-2 rounded-small`}
    >
      <Image
        as={NextImage}
        width={40}
        height={40}
        src="/profile_pic.jpg"
        alt="Jake's Profile Picture"
      />
      <div
        className={`flex flex-col ${
          isDark === true ? 'text-gray-200' : 'text-gray-800'
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

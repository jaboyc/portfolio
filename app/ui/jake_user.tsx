import prisma from '@/src/prisma';
import { Link } from '@nextui-org/link';
import { User } from '@nextui-org/user';

export default async function JakeUser({
  foregroundColor,
}: {
  foregroundColor: string;
}) {
  const resume = await prisma.resume.findFirstOrThrow();

  return (
    <User
      name="Jake Boychenko"
      className="border"
      description={
        <Link href={resume.linkedInUrl} size="sm" isExternal>
          @jaboyc
        </Link>
      }
      classNames={{
        base: 'px-2 py-1 max-w-[200px] border',
        name: foregroundColor == 'white' ? 'text-gray-200' : 'text-gray-800',
      }}
      avatarProps={{ src: '/profile_pic.jpg', size: 'sm' }}
    />
  );
}

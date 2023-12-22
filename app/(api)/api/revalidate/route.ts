import { revalidatePath } from 'next/cache';
export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Check for secret to confirm this is a valid request
  if (searchParams.get('secret') !== process.env.MY_SECRET_TOKEN) {
    return Response.json({ message: 'Invalid token', status: '401' });
  }

  try {
    revalidatePath('/');
    return Response.json({ revalidated: true });
  } catch (err) {
    return Response.error();
  }
}

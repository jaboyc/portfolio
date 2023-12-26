import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { BlogPost, Renderable as RenderableData } from '@prisma/client';
import JakeUser from './jake_user';
import Renderable from './renderable';

export default function BlogPostCard({
  blogPost,
  isDark,
}: {
  blogPost: BlogPost & { renderable: RenderableData };
  isDark?: boolean;
}) {
  const blogUrl = `/blog/${blogPost.slug}`;
  return (
    <Card
      key={blogPost.slug}
      className={`${
        isDark == true ? '' : 'bg-slate-50 border'
      }  flex-grow basis-[850px] max-w-[950px]`}
      shadow={isDark == true ? 'md' : 'none'}
    >
      <CardBody>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link href={blogUrl}>
            <Renderable
              renderable={blogPost.renderable}
              width={250}
              height={160}
              fit="cover"
              className="rounded-lg"
            />
          </Link>
          <div className="flex-grow basis-[250px] flex flex-col gap-2 items-start">
            <Link href={blogUrl}>
              <h6
                className={`${
                  isDark == true ? 'text-gray-200' : 'text-gray-800'
                } font-semibold`}
              >
                {blogPost.title}
              </h6>
            </Link>
            <p className="text-primary text-small">{blogPost.subtitle}</p>
            <JakeUser isDark={isDark} />
          </div>
        </div>
      </CardBody>
      <Divider className="bg-gray-200" />
      <CardFooter>
        <div className="flex flex-col gap-4 items-center">
          <p
            className={`${
              isDark == true ? 'text-gray-200' : 'text-gray-800'
            } text-small`}
          >
            {blogPost.shortDescription}
          </p>
          <Button
            variant="bordered"
            color="primary"
            as={Link}
            href={blogUrl}
            style={{ maxWidth: '200px' }}
          >
            Read More
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

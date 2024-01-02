import { MetadataRoute } from 'next';
import prisma from '@/app/(src)/prisma';

type SitemapItem = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resume = await prisma.resume.findFirstOrThrow({
    include: {
      projects: {
        orderBy: {
          order: 'asc',
        },
      },
      blogPosts: {
        orderBy: {
          createdTime: 'desc',
        },
      },
    },
  });

  return [
    {
      url: `https://www.jakeboychenko.com`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...resume.projects.map(
      (project) =>
        ({
          url: `https://www.jakeboychenko.com/project/${project.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        }) as SitemapItem,
    ),
    ...resume.blogPosts.map(
      (blogPost) =>
        ({
          url: `https://www.jakeboychenko.com/blog/${blogPost.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        }) as SitemapItem,
    ),
  ];
}

import prisma from '@/app/(src)/prisma';
import Footer from '@/app/(ui)/widgets/footer';
import Renderable from '@/app/(ui)/widgets/renderable';
import SkillChip from '@/app/(ui)/widgets/skill_chip';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Spacer } from '@nextui-org/spacer';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import Image from 'next/image';
import ProjectCard from '../(ui)/widgets/project_card';
import BlogPostCard from '../(ui)/widgets/blog_post_card';

export const revalidate = 60 * 60 * 12;

export default async function Home() {
  const resume = await prisma.resume.findFirstOrThrow({
    include: {
      renderable: true,
      skills: {
        orderBy: {
          id: 'asc',
        },
        include: {
          renderable: true,
        },
      },
      projects: {
        orderBy: {
          order: 'asc',
        },
        include: {
          renderable: true,
          skills: {
            include: {
              renderable: true,
            },
          },
        },
      },
      workHistories: {
        orderBy: {
          id: 'asc',
        },
        include: {
          renderable: true,
          skills: {
            include: {
              renderable: true,
            },
          },
        },
      },
      blogPosts: {
        orderBy: {
          createdTime: 'desc',
        },
        take: 3,
        include: {
          renderable: true,
        },
      },
    },
  });
  const skillsByCategory = groupBy(resume.skills, (skill) => skill.category);

  return (
    <>
      <Navbar className="p-2" maxWidth="full">
        <NavbarBrand className="justify-center sm:justify-start">
          <Link href="#" size="lg" className="uppercase font-bold">
            <h6>Jake Boychenko</h6>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4">
          <Spacer className="flex flex-grow" />
          <NavbarItem>
            <Link color="foreground" href="#skills">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#experience">
              Experience
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#blog">
              Blog
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main>
        <section>
          <h1 className="text-center uppercase">
            Innovative Engineer Crafting the Future of{' '}
            <span className="bg-gradient-to-tr from-[#b18d73] to-[#755443] text-transparent bg-clip-text">
              Mobile
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-tr from-[#f7835e] to-[#e65728] text-transparent bg-clip-text">
              Web
            </span>{' '}
            Applications
          </h1>
          <div className="flex flex-wrap gap-4 p-8 items-center justify-center">
            <Image
              alt="Jake's Profile Pic"
              src="/profile_pic.jpg"
              width={240}
              height={240}
              className="rounded-full"
            />
            <div className="flex-grow basis-[500px] flex flex-col gap-4">
              <p>
                Seasoned mid-level full-stack software engineer having led the
                backend of over 5 enterprise projects and building
                cross-platform apps having over 1,000 installs. Proficient in
                Flutter, Next.js, and Java backend frameworks, with a proven
                ability to mentor teams and streamline processes. Committed to
                leveraging deep technical expertise and a creative approach to
                deliver impactful solutions.
              </p>
              <div className="flex flex-wrap justify-start gap-4">
                <Button
                  as={Link}
                  color="primary"
                  startContent={<FontAwesomeIcon icon={faFile} />}
                  href="/JakeBoychenkoResume.pdf"
                  target="_blank"
                  className="text-black"
                >
                  Download Resume
                </Button>
                <Button
                  as={Link}
                  className="bg-[#0077b5]"
                  startContent={<FontAwesomeIcon icon={faLinkedin} />}
                  href={resume.linkedInUrl}
                  target="_blank"
                >
                  Connect
                </Button>
                <Button
                  as={Link}
                  variant="light"
                  color="primary"
                  startContent={<FontAwesomeIcon icon={faEnvelope} />}
                  href={`mailto:${resume.email}`}
                  target="_blank"
                >
                  {resume.email}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <h2 id="skills" className="text-black text-center scroll-m-28">
            Skills
          </h2>
          <p className="text-black">
            Harnessing a versatile technology stack, the following skills
            highlight my proficiency across various programming languages,
            frameworks, and tools, essential for delivering innovative and
            robust software solutions.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {Object.keys(skillsByCategory).map((category) => {
              const skills = skillsByCategory[category];
              return (
                <Card
                  key={category}
                  className="basis-[550px] border bg-slate-50"
                  shadow="none"
                >
                  <CardHeader>
                    <h6 className="text-gray-800 text-center w-full">
                      {category}
                    </h6>
                  </CardHeader>
                  <CardBody>
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                      {skills.map((skill) => (
                        <SkillChip key={skill.id} skill={skill} />
                      ))}
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-center scroll-m-28" id="experience">
            Experience
          </h2>
          <h6 className="text-center text-primary">Projects</h6>
          <p>
            Below is a curated selection of personal and professional projects
            that demonstrate my full-stack development capabilities,
            problem-solving skills, and commitment to building impactful and
            user-centered applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {resume.projects.map((project) => {
              return ProjectCard({ project: project });
            })}
          </div>
          <Divider />
          <h6 className="text-center text-primary">Work History</h6>
          <p>
            My career journey showcases a progressive track record of leading,
            developing, and optimizing software solutions. Here&amp;s an
            overview of my roles, responsibilities, and achievements in the
            field of software engineering.
          </p>
          {resume.workHistories.map((workHistory) => {
            const timeline = `${moment(workHistory.startTime).format(
              'MMM yyyy',
            )} - ${
              workHistory.endTime
                ? moment(workHistory.endTime).format('MMM yyyy')
                : 'Present'
            }`;

            return (
              <Card key={workHistory.id}>
                <CardHeader>
                  <div className="flex flex-row gap-4 items-center">
                    <div className="bg-white p-2 rounded-full">
                      <Renderable
                        renderable={workHistory.renderable}
                        width={40}
                      />
                    </div>
                    <div className="flex-grow flex flex-col gap-0">
                      <h6>{workHistory.name}</h6>
                      <p className="text-primary">{workHistory.title}</p>
                      <p className="text-tiny">{timeline}</p>
                    </div>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <ul className="pl-4">
                    {workHistory.lineItems.map((lineItem, i) => (
                      <li key={i}>{lineItem}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            );
          })}
        </section>
        <section className="bg-white">
          <h2 id="blog" className="text-black text-center scroll-m-28">
            Blog
          </h2>
          <p className="text-black">
            Dive into my world of software engineering, where I share the
            essence of my project development, my approach to architectural
            design, and the secrets to maintaining lasting client relationships.
            This blog is a window into my professional journey, offering a blend
            of technical expertise and client-centric strategies. Whether
            you&apos;re in the tech industry or simply curious, there&apos;s
            something here for you.
          </p>
          <div className="flex flex-wrap gap-4 items-stretch justify-center">
            {resume.blogPosts.map((blogPost) =>
              BlogPostCard({ blogPost: blogPost }),
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

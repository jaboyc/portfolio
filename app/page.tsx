import prisma from '@/src/prisma';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
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
import Footer from './ui/footer';
import JakeUser from './ui/jake_user';
import Renderable from './ui/renderable';
import SkillChip from './ui/skill_chip';
import SkillIcon from './ui/skill_icon';

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
      workHistory: {
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
      blogPost: {
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
          <h1 className="text-center">
            INNOVATIVE SOFTWARE ENGINEER WITH A FLAIR FOR{' '}
            <span className="bg-gradient-to-tr from-[#b18d73] to-[#f7835e] text-transparent bg-clip-text">
              FULL-STACK SOLUTIONS
            </span>
          </h1>
          <div className="flex flex-wrap gap-4 p-8 items-center justify-center">
            <Image
              alt="Jake's Profile Pic"
              src="/profile_pic.jpg"
              width={240}
              height={240}
              radius="full"
              disableAnimation={true}
            />
            <div className="flex-grow basis-[500px] flex flex-col gap-4">
              <p>
                As a Full-Stack Web and Mobile Developer, I&apos;ve carved a
                niche in creating sophisticated and user-centric solutions. My
                expertise lies in seamlessly integrating front-end and back-end
                technologies, primarily leveraging the versatility of Flutter
                for mobile applications and modern web frameworks for robust web
                development. My journey includes crafting dynamic full-stack
                solutions, where I&apos;ve utilized technologies like Flutter,
                Firebase, and various web technologies to deliver
                high-performance applications. This experience is bolstered by
                my ability to analyze and transition complex data structures,
                ensuring a seamless user experience across both web and mobile
                platforms. Passionate about coding and design, I aim to bridge
                functionality with innovation in every project I undertake.
              </p>
              <div className="flex flex-wrap justify-start gap-4">
                <Button
                  as={Link}
                  color="primary"
                  startContent={<FontAwesomeIcon icon={faFile} />}
                  href="/JakeBoychenkoResume.pdf"
                  target="_blank"
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
            As a seasoned software engineer, I am deeply committed to honing my
            existing expertise while remaining open and eager to embrace new
            technologies. My journey has been marked by a relentless pursuit of
            technical excellence, blending proven methodologies with innovative
            solutions. In this ever-evolving field, I believe that continuous
            learning is key, and I am always on the lookout for fresh challenges
            and opportunities to expand my horizons. Below is a snapshot of the
            skills I&apos;ve mastered and the new frontiers I&apos;m exploring.
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
                    <h6 className="text-primary text-center w-full">
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
            Explore my portfolio of distinctive projects, each showcasing a
            unique blend of technical skills and creative solutions. From
            dynamic mobile apps to comprehensive web platforms, these projects
            represent my commitment to excellence in full-stack development and
            user-centric design.
          </p>
          <div className="flex flex-wrap gap-4">
            {resume.projects.map((project) => {
              const projectUrl = `/project/${project.slug}`;
              return (
                <Card key={projectUrl} className="flex-grow basis-[550px]">
                  <CardBody>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link href={projectUrl} className="min-w-[200px]">
                        <Renderable
                          renderable={project.renderable}
                          width={200}
                          height={200}
                          fit="cover"
                          className="rounded-lg"
                        />
                      </Link>
                      <div className="flex flex-col flex-grow basis-[380px] gap-2">
                        <Link href={projectUrl}>
                          <h6>{project.name}</h6>
                        </Link>
                        <p className="text-small text-white">
                          {project.shortDescription}
                        </p>
                        <div className="flex-grow" />
                        <div className="flex flex-row gap-2">
                          {project.skills.map((skill) => {
                            return <SkillIcon key={skill.id} skill={skill} />;
                          })}
                          <div className="flex-grow" />
                          <Button as={Link} href={projectUrl}>
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          <Divider />
          <h6 className="text-center text-primary">Work History</h6>
          <p>
            Welcome to a snapshot of my professional path! As a passionate
            Software Engineer, I&apos;ve navigated diverse roles, from enhancing
            mission-critical government applications to pioneering mobile app
            development and immersive game design. Each role has been a stepping
            stone, enriching my skillset in full-stack development,
            cross-functional collaboration, and innovative problem-solving.
            Below, you&apos;ll find a detailed chronicle of my experiences that
            collectively shape my expertise in mobile and web development.
          </p>
          {resume.workHistory.map((workHistory) => {
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
          <div className="flex flex-col gap-4">
            {resume.blogPost.map((blogPost) => {
              const blogUrl = `/blog/${blogPost.slug}`;
              return (
                <Card
                  key={blogPost.slug}
                  className="bg-slate-50 border"
                  shadow="none"
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
                          <h6 className="text-gray-800 font-semibold">
                            {blogPost.title}
                          </h6>
                        </Link>
                        <p className="text-primary text-small">
                          {blogPost.subtitle}
                        </p>
                        <JakeUser foregroundColor={'black'} />
                      </div>
                    </div>
                  </CardBody>
                  <Divider className="bg-gray-200" />
                  <CardFooter>
                    <div className="flex flex-col gap-4 items-center">
                      <p className="text-black text-small">
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
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

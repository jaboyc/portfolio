import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrismaClient } from '@prisma/client';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import Script from 'next/script';
import Renderable from './ui/renderable';
import SkillChip from './ui/skill_chip';
import SkillIcon from './ui/skill_icon';

export default async function Home() {
  const prisma = new PrismaClient();
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
        include: {
          renderable: true,
        },
      },
    },
  });
  const skillsByCategory = groupBy(resume.skills, (skill) => skill.category);

  return (
    <main>
      <div className="flex flex-col gap-2">
        <div className="sticky top-0 z-[100] flex bg-background px-16 py-6 gap-6 justify-center">
          <h5 className="text-primary text-center text-[22px] md:text-[28px] transition hover:brightness-[120%]">
            <a className="no-underline" href="#">
              JAKE BOYCHENKO
            </a>
          </h5>
          <div className="md:block hidden grow"></div>
          <a
            className="md:block hidden no-underline font-outfit text-[24px] font-thin tracking-widest text-[#ffffffc0] transition hover:text-white"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="md:block hidden no-underline font-outfit text-[24px] font-thin tracking-widest text-[#ffffffc0] transition hover:text-white"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="md:block hidden no-underline font-outfit text-[24px] font-thin tracking-widest text-[#ffffffc0] transition hover:text-white"
            href="#blog"
          >
            Blog
          </a>
        </div>
        <div className="px-8 py-12 md:px-24">
          <h1 className="text-white text-[38px] uppercase text-center md:text-[47px]">
            Innovative Software Engineer with a Flair for{' '}
            <span className="text-primary">Full-Stack Solutions</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-around items-center px-16 py-8 gap-6 xl:px-48">
          <Renderable
            renderable={resume.renderable}
            width={288}
            color="white"
            className="flex-shrink-0 rounded-full "
          />
          <div className="flex basis-[500px] flex-grow flex-col min-w-[60px] justify-around gap-4">
            <p className="text-white">
              As a Full-Stack Web and Mobile Developer, I&apos;ve carved a niche
              in creating sophisticated and user-centric solutions. My expertise
              lies in seamlessly integrating front-end and back-end
              technologies, primarily leveraging the versatility of Flutter for
              mobile applications and modern web frameworks for robust web
              development. My journey includes crafting dynamic full-stack
              solutions, where I&apos;ve utilized technologies like Flutter,
              Firebase, and various web technologies to deliver high-performance
              applications. This experience is bolstered by my ability to
              analyze and transition complex data structures, ensuring a
              seamless user experience across both web and mobile platforms.
              Passionate about coding and design, I aim to bridge functionality
              with innovation in every project I undertake.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="/JakeBoychenkoResume.pdf" target="_blank">
                <button className="flex bg-primary rounded-xl px-3 py-2 gap-2 items-center transition hover:brightness-110 hover:scale-[101%]">
                  <FontAwesomeIcon height={16} icon={faFile} color="black" />
                  <p className="button-text text-black">Download Resume</p>
                </button>
              </a>
              <a href={resume.linkedInUrl} target="_blank">
                <button className="flex bg-[#0077B5] text-white rounded-xl px-3 py-2 gap-2 items-center hover:brightness-110 hover:scale-[101%]">
                  <FontAwesomeIcon
                    height={16}
                    icon={faLinkedin}
                    color="white"
                  />
                  <p className="text-white">Connect</p>
                </button>
              </a>
              <a
                className="flex gap-2 items-center text-primary-soft hover:brightness-110"
                href={`mailto:${resume.email}`}
              >
                <FontAwesomeIcon height={16} icon={faEnvelope} />
                {resume.email}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white px-4 py-8 md:px-12 xl:px-48">
          <h5 id="skills" className="text-black text-center scroll-m-28">
            Skills
          </h5>
          <p className="text-black px-16">
            As a seasoned software engineer, I am deeply committed to honing my
            existing expertise while remaining open and eager to embrace new
            technologies. My journey has been marked by a relentless pursuit of
            technical excellence, blending proven methodologies with innovative
            solutions. In this ever-evolving field, I believe that continuous
            learning is key, and I am always on the lookout for fresh challenges
            and opportunities to expand my horizons. Below is a snapshot of the
            skills I&apos;ve mastered and the new frontiers I&apos;m exploring.
          </p>
          <div className="flex flex-wrap justify-evenly items-center gap-x-16">
            {Object.keys(skillsByCategory).map((category) => {
              const skills = skillsByCategory[category];
              return (
                <div key={category} className="flex flex-col w-[440px] gap-2">
                  <h6 className="text-primary text-center pt-8">{category}</h6>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    {skills.map((skill) => (
                      <SkillChip key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 py-8 md:px-12 xl:px-48">
          <h5 id="experience" className="text-center text-white scroll-m-28">
            Experience
          </h5>
          <h6 className="text-center text-primary md:px-24 xl:px-64">
            Projects
          </h6>
          <p className="text-white">
            Explore my portfolio of distinctive projects, each showcasing a
            unique blend of technical skills and creative solutions. From
            dynamic mobile apps to comprehensive web platforms, these projects
            represent my commitment to excellence in full-stack development and
            user-centric design.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-6">
            {resume.projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="flex flex-wrap flex-grow basis-[550px] justify-center gap-4 p-2"
                >
                  <div className="min-w-[200px]">
                    <a href="#" className="transition hover:brightness-105">
                      <Renderable
                        renderable={project.renderable}
                        width={200}
                        height={200}
                        color={project.foregroundColor}
                      />
                    </a>
                  </div>
                  <div className="flex flex-col flex-grow flex-shrink min-w-[220px] basis-[220px] gap-2 px-2 py-4">
                    <h6 className="text-white text-e">{project.name}</h6>
                    <p className="subbody text-white">
                      {project.shortDescription}
                    </p>
                    <a className="text-primary" href="#">
                      Learn More
                    </a>
                    <div className="flex-grow" />
                    <div className="flex flex-row gap-2">
                      {project.skills.map((skill) => {
                        return <SkillIcon key={skill.id} skill={skill} />;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h6 className="text-center text-primary pt-10">Work History</h6>
          <p className="text-white">
            Welcome to a snapshot of my professional path! As a passionate
            Software Engineer, I&apos;ve navigated diverse roles, from enhancing
            mission-critical government applications to pioneering mobile app
            development and immersive game design. Each role has been a stepping
            stone, enriching my skillset in full-stack development,
            cross-functional collaboration, and innovative problem-solving.
            Below, you&apos;ll find a detailed chronicle of my experiences that
            collectively shape my expertise in mobile and web development.
          </p>
          <div className="flex flex-col gap-14 py-8">
            {resume.workHistory.map((workHistory) => {
              const timeline = `${moment(workHistory.startTime).format(
                'MMM yyyy',
              )} - ${
                workHistory.endTime
                  ? moment(workHistory.endTime).format('MMM yyyy')
                  : 'Present'
              }`;
              return (
                <div
                  key={workHistory.id}
                  className="flex flex-row items-start gap-4"
                >
                  <p className="hidden md:block w-[220px] flex-shrink-0 pt-6 text-white font-bold">
                    {timeline}
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <div className="flex justify-center items-center rounded-full p-2 bg-white">
                        <Renderable
                          renderable={workHistory.renderable}
                          width={36}
                          height={36}
                          color={'white'}
                        />
                      </div>
                      <div className="flex flex-col items-start flex-grow">
                        <h6 className="text-white">{workHistory.name}</h6>
                        <p className="text-white opacity-95">
                          {workHistory.title}
                        </p>
                        <p className="block md:hidden text-white font-bold">
                          {timeline}
                        </p>
                      </div>
                    </div>
                    <ul className="px-4">
                      {workHistory.lineItems.map((lineItem) => (
                        <li
                          key={lineItem.substring(3)}
                          className="subbody text-white"
                        >
                          {lineItem}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-row justify-start gap-2">
                      {workHistory.skills.map((skill) => {
                        return <SkillIcon key={skill.id} skill={skill} />;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 bg-white px-4 py-8 md:px-12 xl:px-48">
          <h5 id="blog" className="text-black text-center scroll-m-28">
            Blog
          </h5>
          <p className="text-black px-16">
            Dive into my world of software engineering, where I share the
            essence of my project development, my approach to architectural
            design, and the secrets to maintaining lasting client relationships.
            This blog is a window into my professional journey, offering a blend
            of technical expertise and client-centric strategies. Whether you're
            in the tech industry or simply curious, there's something here for
            you.
          </p>
          <div className="flex flex-col items-center justify-center py-2 gap-4 px-4">
            {resume.blogPost.map((blogPost) => {
              return (
                <div
                  key={blogPost.slug}
                  className="flex flex-wrap items-center justify-center gap-6"
                >
                  <div className="min-w-[250px] flex-shrink-0">
                    <a href="#">
                      <Renderable
                        renderable={blogPost.renderable}
                        width={280}
                        height={200}
                        color={'blue'}
                      />
                    </a>
                  </div>
                  <div className="flex flex-col flex-grow basis-[450px] gap-2">
                    <h6>{blogPost.title}</h6>
                    <p className="text-primary">{blogPost.subtitle}</p>
                    <p className="subbody">{blogPost.shortDescription}</p>
                    <div className="flex-grow" />
                    <a href="#">Read More</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly bg-black h-16">
          <a
            className="subbody text-primary"
            style={{ fontSize: 12 }}
            href="mailto:contact@jakeboychenko.com"
          >
            contact@jakeboychenko.com
          </a>
          <div className="flex flex-col justify-center">
            <p
              className="subbody text-white text-center opacity-80"
              style={{ fontSize: 12 }}
            >
              Built with Next.js
            </p>
            <p
              className="subbody text-white text-center opacity-80"
              style={{ fontSize: 12 }}
            >
              View it on Github <a href="#">here</a>
            </p>
          </div>
        </div>
      </div>

      <Script
        src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"
        strategy="beforeInteractive"
      />
      <Script src="/scripts/tippy_init.js" strategy="afterInteractive" />
    </main>
  );
}

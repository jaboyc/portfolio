import {
  faAws,
  faDocker,
  faFigma,
  faGithub,
  faJava,
  faJira,
  faLinkedin,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase,
  faDatabase,
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import SkillChip from './ui/skill_chip';
import Script from 'next/script';
import SkillIcon from './ui/skill_icon';
import { Resume } from '@/src/resume';
import { IconRenderableData, ImageRenderableData } from '@/src/ui-types';
import Renderable from '@/src/ui/Renderable';
import first from 'lodash/first';

function getResume(): Resume {
  return new Resume(
    [
      // Dart
      {
        id: 'dart',
        category: 'Programming Languages',
        name: 'Dart',
        description:
          'Employed Dart in conjunction with Flutter to develop full-stack mobile applications, taking advantage of its reactive programming capabilities and smooth UI design potential.',
        color: '#C0EBFF',
        foregroundColor: 'black',
        renderableData: new ImageRenderableData('/dart_logo.svg', 'Dart Logo'),
      },
      // Typescript
      {
        id: 'typescript',
        category: 'Programming Languages',
        name: 'Typescript',
        color: '#3178C6',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData(
          '/ts_logo.svg',
          'Typescript Logo',
        ),
      },
      // Java
      {
        id: 'java',
        category: 'Programming Languages',
        name: 'Java',
        color: '#A61C3C',
        foregroundColor: 'white',
        renderableData: new IconRenderableData(faJava),
      },
      // C#
      {
        id: 'csharp',
        category: 'Programming Languages',
        name: 'C#',
        color: '#3C2264',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData('/c_sharp_logo.svg', 'C# Logo'),
      },
      // Flutter
      {
        id: 'flutter',
        category: 'Frameworks',
        name: 'Flutter',
        color: '#C0EBFF',
        foregroundColor: 'black',
        renderableData: new ImageRenderableData(
          '/flutter_logo.svg',
          'Flutter Logo',
        ),
      },
      // Next.js
      {
        id: 'nextJs',
        category: 'Frameworks',
        name: 'Next.js',
        color: 'black',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData(
          '/next_js_logo.svg',
          'Next.js Logo',
        ),
      },
      // Struts
      {
        id: 'struts',
        category: 'Frameworks',
        name: 'Struts',
        color: '#B7C4FF',
        foregroundColor: 'black',
        renderableData: new ImageRenderableData(
          '/apache_struts_logo.svg',
          'Apache Struts Logo',
        ),
      },
      // Unity
      {
        id: 'unity',
        category: 'Frameworks',
        name: 'Unity',
        color: 'white',
        foregroundColor: 'black',
        renderableData: new IconRenderableData(faUnity),
      },
      // Firebase
      {
        id: 'firebase',
        category: 'Backends & Databases',
        name: 'Firebase',
        color: '#FFA000',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData(
          '/firebase_logo.svg',
          'Firebase Logo',
        ),
      },
      // AWS
      {
        id: 'aws',
        category: 'Backends & Databases',
        name: 'AWS',
        color: '#232F3E',
        foregroundColor: '#FF9900',
        renderableData: new IconRenderableData(faAws),
      },
      // Appwrite
      {
        id: 'appwrite',
        category: 'Backends & Databases',
        name: 'Appwrite',
        color: '#FD366E',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData(
          '/appwrite_logo.svg',
          'Appwrite Logo',
        ),
      },
      // SQL
      {
        id: 'sql',
        category: 'Backends & Databases',
        name: 'SQL',
        color: 'var(--primary-color)',
        foregroundColor: 'white',
        renderableData: new IconRenderableData(faDatabase),
      },
      // Github
      {
        id: 'github',
        category: 'Tools',
        name: 'Github',
        color: '#333333',
        foregroundColor: 'white',
        renderableData: new IconRenderableData(faGithub),
      },
      // Docker
      {
        id: 'docker',
        category: 'Tools',
        name: 'Docker',
        color: '#0DB7ED',
        foregroundColor: 'white',
        renderableData: new IconRenderableData(faDocker),
      },
      // Figma
      {
        id: 'figma',
        category: 'Tools',
        name: 'Figma',
        color: '#C7B9FF',
        foregroundColor: 'black',
        renderableData: new IconRenderableData(faFigma),
      },
      // Jira
      {
        id: 'jira',
        category: 'Tools',
        name: 'Jira',
        color: '#0052CC',
        foregroundColor: 'white',
        renderableData: new IconRenderableData(faJira),
      },
    ],
    [
      {
        id: 'jakeboychenko.com',
        name: 'JakeBoychenko.com',
        description:
          'A personal portfolio website showcasing my full-stack development expertise in mobile and web applications.',
        skillIds: ['nextJs', 'firebase', 'figma'],
        color: 'var(--primary-color)',
        foregroundColor: 'black',
        renderableData: new IconRenderableData(faBriefcase),
      },
      {
        id: 'safealone',
        name: 'SafeAlone',
        description:
          'A safety-focused application leveraging real-time location tracking and push notifications to ensure the well-being of users.',
        skillIds: ['flutter', 'firebase'],
        color: '#1381EF',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData(
          '/safealone_logo.png',
          'SafeAlone Logo',
        ),
      },
      {
        id: 'valet',
        name: 'Valet',
        description:
          'An automated budgeting application that simplifies personal finance management with customizable budgeting strategies.',
        skillIds: ['flutter', 'firebase'],
        color: '#4CAF50',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData(
          '/valet_logo.png',
          'Valet Logo',
        ),
      },
      {
        id: 'signpartnerpro',
        name: 'Sign Partner Pro',
        description:
          'A suite of apps for project management, lead-generation, and AR viewing in the sign business industry.',
        skillIds: ['flutter', 'unity', 'firebase'],
        color: '#003959',
        foregroundColor: 'white',
        renderableData: new ImageRenderableData(
          '/spp_logo.png',
          'Sign Partner Pro Logo',
        ),
      },
    ],
    [
      {
        id: 'pangiam',
        name: 'Pangiam',
        title: 'Mid-level Software Engineer',
        startTime: 'August 2023',
        endTime: 'Present',
        experiences: [
          'Involved in the enhancement and maintenance of mission-critical government applications.',
          'Utilize Java EJB, Struts, and JSP in full-stack development.',
          'Collaborate in a cross-functional team, adhering to agile methodologies.',
        ],
        skillIds: ['java', 'struts', 'sql'],
        renderableData: new ImageRenderableData(
          '/pangiam_logo.png',
          'Pangiam Logo',
        ),
      },
      {
        id: 'brightspot',
        name: 'Brightspot',
        title: 'Software Engineer II',
        startTime: 'June 2021',
        endTime: 'May 2023',
        experiences: [
          'Led backend development and data migration for over 5 enterprise projects, analyzing and transitioning various data structures (SQL, JSON) to our platform.',
          'Customized CMS backend, including Java modifications, custom API creation, and integration with external services (AWS, Getty, Google Analytics).',
          'Managed full release cycle, from lower environment to production, along with configuration and health monitoring using Kubernetes.',
          'Mentored a summer intern, focusing on technical skill enhancement and career development.',
        ],
        skillIds: ['java', 'aws', 'sql', 'docker'],
        renderableData: new ImageRenderableData(
          '/brightspot_logo.jpg',
          'Brightspot Logo',
        ),
      },
      {
        id: 'jlogical',
        name: 'JLogical Apps',
        title: 'Freelance Mobile Developer',
        startTime: 'August 2020',
        endTime: 'Present',
        experiences: [
          'Built a side-business specializing in full-stack Flutter mobile application development.',
          'Seamlessly integrated Flutter with Unity and Firebase to deliver comprehensive app solutions.',
          'Innovated with Flood, a custom-built Flutter framework designed to streamline and enhance the app development process.',
          'Collaborated with a mentoree in leading the development of applications, instilling best practices like Test-Driven Development (TDD) and Agile methodologies.',
          'Maintained long-term client relationships, with multiple satisfied clients and the successful release of 4 full-stack Flutter applications.',
        ],
        skillIds: ['flutter', 'unity', 'firebase', 'appwrite'],
        renderableData: new ImageRenderableData(
          '/jlogical_logo.png',
          'JLogical Logo',
        ),
      },
    ],
  );
}

export default function Home() {
  const resume = getResume();
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
            href="#"
          >
            Blog
          </a>
        </div>
        <div className="px-8 py-12 md:px-32 lg:px-60">
          <h1 className="text-white text-[38px] uppercase text-center md:text-[47px]">
            Innovative Software Engineer with a Flair for{' '}
            <span className="text-primary">Full-Stack Solutions</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-around items-center px-16 py-8 gap-6 xl:px-48">
          <Image
            src="/profile_pic.jpg"
            width={288}
            height={288}
            alt="Jake's Profile Picture"
            className="flex-shrink-0 rounded-full	w-72 h-auto object-cover"
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
              <a href="https://www.linkedin.com/in/jaboyc/" target="_blank">
                <button className="flex bg-[#0077B5] text-white rounded-xl px-3 py-2 gap-2 items-center hover:brightness-110 hover:scale-[101%]">
                  <FontAwesomeIcon
                    height={16}
                    icon={faLinkedin}
                    color="white"
                  />
                  <p className="text-white">LinkedIn</p>
                </button>
              </a>
              <a
                className="flex gap-2 items-center text-primary-soft hover:brightness-110"
                href="mailto:contact@jakeboychenko.com"
              >
                <FontAwesomeIcon height={16} icon={faEnvelope} />
                contact@jakeboychenko.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white px-4 py-8 xl:px-48">
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
            {Object.keys(resume.getSkillsByCategory()).map((category) => {
              const skills = resume.getSkillsByCategory()[category];
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
        <div className="flex flex-col p-8 md:px-32 xl:px-72 gap-4">
          <h5 id="experience" className="text-center text-white scroll-m-28">
            Experience
          </h5>
          <h6 className="text-center text-primary">Projects</h6>
          <p className="text-white">
            Explore my portfolio of distinctive projects, each showcasing a
            unique blend of technical skills and creative solutions. From
            dynamic mobile apps to comprehensive web platforms, these projects
            represent my commitment to excellence in full-stack development and
            user-centric design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {resume.projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="flex flex-col w-[260px] h-[280px] items-center justify-start gap-2 p-2 rounded-lg"
                  style={{ background: project.color }}
                >
                  <div className="flex flex-row justify-center items-center bg-white rounded-full w-[50px] h-[50px] p-2 ">
                    <Renderable
                      renderableData={project.renderableData}
                      width={50}
                      height={50}
                      color={project.foregroundColor}
                    />
                  </div>
                  <h6 style={{ color: project.foregroundColor }}>
                    {project.name}
                  </h6>
                  <p
                    className="subbody"
                    style={{ color: project.foregroundColor }}
                  >
                    {project.description}
                  </p>
                  <div className="flex-grow" />
                  <div className="flex flex-row gap-2">
                    {project.skillIds.map((skillId) => {
                      const skill = first(
                        resume.skills.filter((skill) => skill.id == skillId),
                      )!;
                      return <SkillIcon key={skill.id} skill={skill} />;
                    })}
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
              return (
                <div
                  key={workHistory.id}
                  className="flex flex-row items-start gap-4"
                >
                  <p className="hidden md:block w-[220px] flex-shrink-0 pt-6 text-white font-bold">{`${workHistory.startTime} - ${workHistory.endTime}`}</p>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <div className="flex justify-center items-center rounded-full p-2 bg-white">
                        <Renderable
                          renderableData={workHistory.renderableData}
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
                        <p className="block md:hidden text-white font-bold">{`${workHistory.startTime} - ${workHistory.endTime}`}</p>
                      </div>
                    </div>
                    <ul>
                      {workHistory.experiences.map((experience) => (
                        <li
                          key={experience.substring(3)}
                          className="subbody text-white"
                        >
                          {experience}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-row justify-start gap-2">
                      {workHistory.skillIds.map((skillId) => {
                        const skill = first(
                          resume.skills.filter((skill) => skill.id == skillId),
                        )!;
                        return <SkillIcon key={skill.id} skill={skill} />;
                      })}
                    </div>
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

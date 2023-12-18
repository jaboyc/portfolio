import { Resume } from '@/src/resume';
import {
  IconRenderableData,
  ImageRenderableData,
  RenderableData,
} from '@/src/ui-types';
import {
  faAws,
  faDocker,
  faFigma,
  faGithub,
  faJava,
  faJira,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { PrismaClient, Skill } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const resume = new Resume(
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
        startTime: new Date(2023, 7),
        endTime: null,
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
        startTime: new Date(2021, 5),
        endTime: new Date(2023, 4),
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
        startTime: new Date(2020, 7),
        endTime: null,
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

  function createDbRenderable(renderableData: RenderableData) {
    if (renderableData.isImage()) {
      return {
        src: renderableData.src,
        alt: renderableData.alt,
      };
    } else if (renderableData.isIcon()) {
      return {
        iconPack: renderableData.icon.prefix,
        icon: renderableData.icon.iconName,
      };
    }
  }

  await prisma.resume.deleteMany();
  await prisma.project.deleteMany();
  await prisma.workHistory.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.renderable.deleteMany();

  console.log(`Deleted existing records.`);

  const resumeDb = await prisma.resume.create({
    data: {
      email: 'contact@jakeboychenko.com',
      linkedInUrl: 'https://www.linkedin.com/in/jaboyc/',
      renderable: {
        create: {
          src: '/profile_pic.jpg',
          alt: "Jake Boychenko's Profile Picture",
        },
      },
    },
  });

  console.log(`Created Resume`);

  const dbSkillById = new Map<string, Skill>();
  for (const skill of resume.skills) {
    dbSkillById.set(
      skill.id,
      await prisma.skill.create({
        data: {
          category: skill.category,
          name: skill.name,
          description: skill.description ?? 'TODO',
          color: skill.color,
          foregroundColor: skill.foregroundColor,
          renderable: {
            create: createDbRenderable(skill.renderableData),
          },
          resume: {
            connect: resumeDb,
          },
        },
      }),
    );
    console.log(`Created Skill [${skill.id}]`);
  }

  for (const project of resume.projects) {
    await prisma.project.create({
      data: {
        name: project.name,
        shortDescription: project.description,
        color: project.color,
        foregroundColor: project.foregroundColor,
        renderable: {
          create: createDbRenderable(project.renderableData),
        },
        skills: {
          connect: project.skillIds.map((skillId) => dbSkillById.get(skillId)!),
        },
        resume: {
          connect: resumeDb,
        },
      },
    });
    console.log(`Created Project [${project.name}]`);
  }

  for (const workHistory of resume.workHistory) {
    await prisma.workHistory.create({
      data: {
        name: workHistory.name,
        title: workHistory.title,
        startTime: workHistory.startTime,
        endTime: workHistory.endTime,
        lineItems: workHistory.experiences,
        skills: {
          connect: workHistory.skillIds.map(
            (skillId) => dbSkillById.get(skillId)!,
          ),
        },
        renderable: {
          create: createDbRenderable(workHistory.renderableData),
        },
        resume: {
          connect: resumeDb,
        },
      },
    });
    console.log(`Created Work History [${workHistory.name}]`);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

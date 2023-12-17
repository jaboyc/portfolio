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
  faDatabase,
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import SkillChip from './ui/skill_chip';
import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-2">
        <div className="sticky top-0 z-[100] flex bg-background px-16 py-6 gap-6 justify-center">
          <h5 className="text-primary text-[28px] transition hover:brightness-[120%]">
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
            href="#"
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
        <div className="px-8 py-8 md:px-32">
          <h1 className="text-[38px] uppercase text-center md:text-[47px]">
            Innovative Software Engineer with a Flair for{' '}
            <span className="text-primary-soft">Full-Stack Solutions</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-around items-center px-16 py-8 gap-6">
          <Image
            src="/profile_pic.jpg"
            width={288}
            height={288}
            alt="Jake's Profile Picture"
            className="flex-shrink-0 rounded-full	w-72 h-auto object-cover"
          />
          <div className="flex basis-[500px] flex-grow flex-col min-w-[60px] justify-around gap-4">
            <p>
              As a Full-Stack Web and Mobile Developer, I've carved a niche in
              creating sophisticated and user-centric solutions. My expertise
              lies in seamlessly integrating front-end and back-end
              technologies, primarily leveraging the versatility of Flutter for
              mobile applications and modern web frameworks for robust web
              development. My journey includes crafting dynamic full-stack
              solutions, where I've utilized technologies like Flutter,
              Firebase, and various web technologies to deliver high-performance
              applications. This experience is bolstered by my ability to
              analyze and transition complex data structures, ensuring a
              seamless user experience across both web and mobile platforms.
              Passionate about coding and design, I aim to bridge functionality
              with innovation in every project I undertake.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="flex bg-primary rounded-xl px-3 py-2 gap-2 items-center transition hover:brightness-110 hover:scale-[101%]">
                <FontAwesomeIcon height={16} icon={faFile} />
                Download Resume
              </button>
              <button className="flex bg-[#0077B5] text-white rounded-xl px-3 py-2 gap-2 items-center hover:brightness-110 hover:scale-[101%]">
                <FontAwesomeIcon height={16} icon={faLinkedin} />
                LinkedIn
              </button>
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
        <div className="flex flex-col gap-2 bg-white p-4">
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
            skills I've mastered and the new frontiers I'm exploring.
          </p>
          <div className="flex flex-wrap justify-evenly items-center gap-x-16">
            <div className="flex flex-col w-[440px] gap-2">
              <h6 className="text-primary text-center pt-8">
                Programming Languages
              </h6>
              <div className="flex flex-wrap gap-2 justify-center items-center">
                <SkillChip
                  id="skill-dart"
                  skillName="Dart"
                  backgroundColor="#C0EBFF"
                  textColor="black"
                  imageSrc="/dart_logo.svg"
                  alt="Dart Logo"
                />
                <SkillChip
                  id="skill-typescript"
                  skillName="Typescript"
                  backgroundColor="#3178C6"
                  textColor="white"
                  imageSrc="/ts_logo.svg"
                  alt="Typescript Logo"
                />
                <SkillChip
                  id="skill-java"
                  skillName="Java"
                  backgroundColor="#A61C3C"
                  textColor="white"
                  icon={faJava}
                />
                <SkillChip
                  id="skill-c-sharp"
                  skillName="C#"
                  backgroundColor="#3C2264"
                  textColor="white"
                  imageSrc="/c_sharp_logo.svg"
                  alt="C# Logo"
                />
              </div>
            </div>
            <div className="flex flex-col max-w-[440px] gap-2">
              <h6 className="text-primary text-center pt-8">Frameworks</h6>
              <div className="flex flex-wrap gap-2 justify-center items-center">
                <SkillChip
                  id="skill-flutter"
                  skillName="Flutter"
                  backgroundColor="#C0EBFF"
                  textColor="black"
                  imageSrc="/flutter_logo.svg"
                  alt="Flutter Logo"
                />
                <SkillChip
                  id="skill-next-js"
                  skillName="Next.js"
                  backgroundColor="black"
                  textColor="white"
                  imageSrc="/next_js_logo.svg"
                  alt="Next.js Logo"
                />
                <SkillChip
                  id="skill-struts"
                  skillName="Struts"
                  backgroundColor="#B7C4FF"
                  textColor="black"
                  imageSrc="/apache_struts_logo.svg"
                  alt="Apache Struts Logo"
                />
                <SkillChip
                  id="skill-unity"
                  skillName="Unity"
                  backgroundColor="white"
                  textColor="black"
                  icon={faUnity}
                />
              </div>
            </div>
            <div className="flex flex-col max-w-[440px] gap-2">
              <h6 className="text-primary text-center pt-8">
                Backends & Databases
              </h6>
              <div className="flex flex-wrap gap-2 justify-center items-center">
                <SkillChip
                  id="skill-firebase"
                  skillName="Firebase"
                  backgroundColor="#FFA000"
                  textColor="white"
                  imageSrc="/firebase_logo.svg"
                  alt="Firebase Logo"
                />
                <SkillChip
                  id="skill-aws"
                  skillName="AWS"
                  backgroundColor="#232F3E"
                  textColor="#FF9900"
                  icon={faAws}
                />
                <SkillChip
                  id="skill-appwrite"
                  skillName="Appwrite"
                  backgroundColor="#FD366E"
                  textColor="white"
                  imageSrc="/appwrite_logo.svg"
                  alt="Appwrite Logo"
                />
                <SkillChip
                  id="skill-sql"
                  skillName="SQL"
                  backgroundColor="var(--primary-color)"
                  textColor="white"
                  icon={faDatabase}
                />
              </div>
            </div>
            <div className="flex flex-col max-w-[440px] gap-2">
              <h6 className="text-primary text-center pt-8">Tools</h6>
              <div className="flex flex-wrap gap-2 justify-center items-center">
                <SkillChip
                  id="skill-github"
                  skillName="Github"
                  backgroundColor="#333333"
                  textColor="white"
                  icon={faGithub}
                />
                <SkillChip
                  id="skill-docker"
                  skillName="Docker"
                  backgroundColor="#0DB7ED"
                  textColor="white"
                  icon={faDocker}
                />
                <SkillChip
                  id="skill-figma"
                  skillName="Figma"
                  backgroundColor="#C7B9FF"
                  textColor="black"
                  icon={faFigma}
                />
                <SkillChip
                  id="skill-jira"
                  skillName="Jira"
                  backgroundColor="#0052CC"
                  textColor="white"
                  icon={faJira}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
      <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
      <Script id="tippy">
        {`tippy('#skill-dart', {
          content: 'Employed Dart in conjunction with Flutter to develop full-stack mobile applications, taking advantage of its reactive programming capabilities and smooth UI design potential.',
          interactive: true,
        });`}
      </Script>
    </main>
  );
}

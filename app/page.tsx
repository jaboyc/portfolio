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
        <div className="px-8 py-8 md:px-32">
          <h1 className="text-white text-[38px] uppercase text-center md:text-[47px]">
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
            <p className="text-white">
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
                  description="Employed Dart in conjunction with Flutter to develop full-stack mobile applications, taking advantage of its reactive programming capabilities and smooth UI design potential."
                  skillName="Dart"
                  backgroundColor="#C0EBFF"
                  textColor="black"
                  imageSrc="/dart_logo.svg"
                  alt="Dart Logo"
                />
                <SkillChip
                  skillName="Typescript"
                  backgroundColor="#3178C6"
                  textColor="white"
                  imageSrc="/ts_logo.svg"
                  alt="Typescript Logo"
                />
                <SkillChip
                  skillName="Java"
                  backgroundColor="#A61C3C"
                  textColor="white"
                  icon={faJava}
                />
                <SkillChip
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
                  skillName="Flutter"
                  backgroundColor="#C0EBFF"
                  textColor="black"
                  imageSrc="/flutter_logo.svg"
                  alt="Flutter Logo"
                />
                <SkillChip
                  skillName="Next.js"
                  backgroundColor="black"
                  textColor="white"
                  imageSrc="/next_js_logo.svg"
                  alt="Next.js Logo"
                />
                <SkillChip
                  skillName="Struts"
                  backgroundColor="#B7C4FF"
                  textColor="black"
                  imageSrc="/apache_struts_logo.svg"
                  alt="Apache Struts Logo"
                />
                <SkillChip
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
                  skillName="Firebase"
                  backgroundColor="#FFA000"
                  textColor="white"
                  imageSrc="/firebase_logo.svg"
                  alt="Firebase Logo"
                />
                <SkillChip
                  skillName="AWS"
                  backgroundColor="#232F3E"
                  textColor="#FF9900"
                  icon={faAws}
                />
                <SkillChip
                  skillName="Appwrite"
                  backgroundColor="#FD366E"
                  textColor="white"
                  imageSrc="/appwrite_logo.svg"
                  alt="Appwrite Logo"
                />
                <SkillChip
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
                  skillName="Github"
                  backgroundColor="#333333"
                  textColor="white"
                  icon={faGithub}
                />
                <SkillChip
                  skillName="Docker"
                  backgroundColor="#0DB7ED"
                  textColor="white"
                  icon={faDocker}
                />
                <SkillChip
                  skillName="Figma"
                  backgroundColor="#C7B9FF"
                  textColor="black"
                  icon={faFigma}
                />
                <SkillChip
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
      <div className="flex flex-col p-8 md:px-32 gap-4">
        <h5 id="experience" className="text-center text-white">
          Experience
        </h5>
        <h6 className="text-center text-primary ">Projects</h6>
        <p className="text-white">
          Explore my portfolio of distinctive projects, each showcasing a unique
          blend of technical skills and creative solutions. From dynamic mobile
          apps to comprehensive web platforms, these projects represent my
          commitment to excellence in full-stack development and user-centric
          design.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex flex-col w-[260px] h-[300px] items-center justify-start gap-2 p-2 bg-primary rounded-lg">
            <div className="flex flex-row justify-center items-center bg-white rounded-full w-[50px] h-[50px] p-2 ">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <h6 className="text-black">JakeBoychenko.com</h6>
            <p className="subbody">
              A personal portfolio website showcasing my full-stack development
              expertise in mobile and web applications.
            </p>
            <div className="flex-grow" />
            <div className="flex flex-row gap-2">
              <SkillIcon
                backgroundColor="black"
                imageSrc="./next_js_logo.svg"
                alt="Next.js Logo"
              />
              <SkillIcon
                backgroundColor="#FFA000"
                imageSrc="./firebase_logo.svg"
                alt="Firebase Logo"
              />
              <SkillIcon
                backgroundColor="#C7B9FF"
                icon={faFigma}
                iconColor="black"
              />
            </div>
          </div>
          <div className="flex flex-col w-[260px] h-[300px] items-center justify-start gap-2 p-2 bg-[#1381EF] rounded-lg">
            <div className="flex flex-row justify-center items-center bg-white rounded-full w-[50px] h-[50px] p-2 ">
              <Image
                src="/safealone_logo.png"
                alt="SafeAlone Logo"
                className="w-[50px] h-[50px]"
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h6 className="text-white">SafeAlone</h6>
            <p className="subbody text-white">
              A safety-focused application leveraging real-time location
              tracking and push notifications to ensure the well-being of users.{' '}
            </p>
            <div className="flex-grow" />
            <div className="flex flex-row gap-2">
              <SkillIcon
                backgroundColor="#C0EBFF"
                imageSrc="./flutter_logo.svg"
                alt="Flutter Logo"
              />
              <SkillIcon
                backgroundColor="#FFA000"
                imageSrc="./firebase_logo.svg"
                alt="Firebase Logo"
              />
            </div>
          </div>
          <div className="flex flex-col w-[260px] h-[300px] items-center justify-start gap-2 p-2 bg-[#4CAF50] rounded-lg">
            <div className="flex flex-row justify-center items-center bg-white rounded-full w-[50px] h-[50px] ">
              <Image
                src="/valet_logo.png"
                alt="Valet"
                className="w-[50px] h-[50px]"
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h6 className="text-white">Valet</h6>
            <p className="subbody text-white">
              An automated budgeting application that simplifies personal
              finance management. Empowers users to customize their budgeting
              strategies using intuitive rules for envelope budgeting.{' '}
            </p>
            <div className="flex-grow" />
            <div className="flex flex-row gap-2">
              <SkillIcon
                backgroundColor="#C0EBFF"
                imageSrc="./flutter_logo.svg"
                alt="Flutter Logo"
              />
              <SkillIcon
                backgroundColor="#FFA000"
                imageSrc="./firebase_logo.svg"
                alt="Firebase Logo"
              />
            </div>
          </div>
          <div className="flex flex-col w-[260px] h-[300px] items-center justify-start gap-2 p-2 bg-[#003959] rounded-lg">
            <Image
              src="/spp_logo.png"
              alt="Sign Partmer Pro Logo"
              className="w-[50px] h-[50px]"
              width={50}
              height={50}
            />
            <h6 className="text-white">Sign Partner Pro</h6>
            <p className="subbody text-white">
              A collection of apps to help with project management,
              lead-generation, and viewing signs in AR for sign businesses.
            </p>
            <div className="flex-grow" />
            <div className="flex flex-row gap-2">
              <SkillIcon
                backgroundColor="#C0EBFF"
                imageSrc="./flutter_logo.svg"
                alt="Flutter Logo"
              />
              <SkillIcon
                backgroundColor="white"
                icon={faUnity}
                iconColor="black"
              />
              <SkillIcon
                backgroundColor="#FFA000"
                imageSrc="./firebase_logo.svg"
                alt="Firebase Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"
        strategy="afterInteractive"
      />
      <Script id="tippy" strategy="lazyOnload">
        {`
          document.querySelectorAll('div[data-description]:not([data-description=""])').forEach(div => {
            // Create a Tippy instance for each div
            tippy(div, {
              content: div.getAttribute('data-description'),
            });

            div.removeAttribute('data-description');
          });
        `}
      </Script>
    </main>
  );
}

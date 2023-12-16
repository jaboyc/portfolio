import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

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
            href="#"
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
            width={72}
            height={72}
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
      </div>
    </main>
  );
}

import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

const Footer = () => (
  <footer className="flex flex-col gap-4 bg-gradient-to-t from-blue-500 to-blue-400 p-4 pt-20 pb-8 dark:from-sky-700 dark:to-sky-900">
    <ul className="flex flex-row items-center justify-center gap-4">
      <li className="transition-all delay-100 duration-300 hover:-translate-y-2 hover:scale-110">
        <a
          href="https://github.com/sncalvo/"
          className="text-gray-200 transition-all delay-100 duration-300 hover:text-gray-100"
          target="Github"
        >
          <SiGithub className="h-8 w-8" />
          <span className="sr-only">Github</span>
        </a>
      </li>
      <li className="transition-all delay-100 duration-300 hover:-translate-y-2 hover:scale-110">
        <a
          href="https://www.linkedin.com/in/santiago-calvo-vello/"
          className="text-gray-200 transition-all delay-100 duration-300 hover:text-gray-100"
          target="LinkedIn"
        >
          <SiLinkedin className="h-8 w-8" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </li>
      <li className="transition-all delay-100 duration-300 hover:-translate-y-2 hover:scale-110">
        <a
          href="https://twitter.com/santi_c_dev"
          className="text-gray-200 transition-all delay-100 duration-300 hover:text-gray-100"
          target="Twitter"
        >
          <SiTwitter className="h-8 w-8" />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
    </ul>

    <div className="text-white-300 text-center">
      <p className="text-sm">Designed &amp; Built by Santiago Calvo</p>
      <p className="text-xs">Senior Full Stack Developer</p>
    </div>
  </footer>
);

export default Footer;

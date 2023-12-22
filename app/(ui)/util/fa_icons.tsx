import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
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
config.autoAddCss = false;

export default function initIcons() {
  library.add(
    faLinkedin,
    faUnity,
    faGithub,
    faJava,
    faEnvelope,
    faFile,
    faAws,
    faDocker,
    faFigma,
    faJira,
    faDatabase,
  );
}

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
  faAppStore,
  faUnity,
  faGooglePlay,
  faSteam,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faEnvelope,
  faFile,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function initIcons() {
  library.add(
    faLinkedin,
    faAppStore,
    faGooglePlay,
    faCloud,
    faSteam,
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

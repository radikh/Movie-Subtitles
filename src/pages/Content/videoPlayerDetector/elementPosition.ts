import s from './sites'

interface VideoPlayer {
  [site: string]: PlayerElement
}

export interface PlayerElement {
  video: ElementInfo,
  container: ElementInfo,
  iconWrapper: IconInfo | null,
}

interface ElementInfo {
  selector: string,
  index: number,
}

interface IconInfo extends ElementInfo {
  spacing: string,
}

const elementPosition: VideoPlayer = {
  [s.youtube]: {
    video: { selector: 'video', index: 0 },
    container: { selector: '#movie_player', index: 0 },
    iconWrapper: { selector: '.ytp-right-controls', index: 0, spacing: '8px' },
  },
  [s.amazon]: {
    video: { selector: 'video', index: 1 },
    container: { selector: '.cascadesContainer', index: 0 },
    iconWrapper: {
      selector: '.hideableTopButtons div:first-child',
      index: 0,
      spacing: '18px',
    },
  },
  [s.default]: {
    video: { selector: 'video', index: 0 },
    container: { selector: 'video', index: 0 },
    iconWrapper: null,
  },
};

export default elementPosition;

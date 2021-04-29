import elementPosition from './elementPosition';
import updateSite from './updateSite';
import attachIconWrapper from './attachIconWrapper';
import attachContainer from './attachContainer';

export default function videoPlayerDetector(element) {
  let site = window.location.hostname;
  site = updateSite(site);

  const elem = elementPosition[site][element];

  if (!elem) return null;

  const selector = elem.selector;
  const index = elem.index || 0;

  if (element === 'video') {
    const video = document.querySelectorAll(selector)[index];

    if (!video) return null;

    // Check if the dataset has already been injected
    if (!video.dataset.npmVideoPlayerDetector) {
      video.dataset.npmVideoPlayerDetector =
        'https://www.npmjs.com/package/detect-file-encoding-and-language';
    }
    return video;
  } else if (element === 'container') {
    const rootElement = document.querySelectorAll(selector)[index];

    if (!rootElement) return null;

    const container = attachContainer(rootElement, site);
    return container;
  } else if (element === 'iconWrapper') {
    const rootElement = document.querySelectorAll(selector)[index];

    if (!rootElement) return null;

    const spacing = elementPosition[site].iconWrapper.spacing;
    const iconWrapper = attachIconWrapper(rootElement, spacing);
    return iconWrapper;
  }
}

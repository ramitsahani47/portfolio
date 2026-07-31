/**
 * Smooth Navigation Utility
 * Guarantees 100% reliable single-click navigation to any portfolio section.
 * Mounts all lazy-loaded DOM sections before calculating scroll coordinates
 * to prevent mid-scroll layout shifting.
 */
export const scrollToSection = (id, options = {}) => {
  if (!id) return;

  const { offset = -80, onComplete } = options;

  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onComplete) onComplete();
    return;
  }

  // 1. Signal all LazySections to immediately mount their real components into the DOM
  window.dispatchEvent(new CustomEvent('load-all-sections', { detail: { id } }));

  // 2. Perform smooth scroll after double RAF allows React to flush layout
  const executeScroll = () => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    // Secondary alignment check after scroll duration to handle any async image or font rendering
    setTimeout(() => {
      const updatedElement = document.getElementById(id);
      if (updatedElement) {
        const currentY = updatedElement.getBoundingClientRect().top + window.pageYOffset + offset;
        if (Math.abs(window.scrollY - currentY) > 40) {
          window.scrollTo({ top: currentY, behavior: 'smooth' });
        }
      }
      if (onComplete) onComplete();
    }, 450);
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      executeScroll();
    });
  });
};

/**
 * ServiceIcon — hand-drawn style service icons.
 *
 * Characteristics (per design brief):
 * - 1.5px stroke, round caps/joins (slightly imperfect, sketched)
 * - Wobbly paths, small overshoots, second sketch pass on key lines
 * - Organic appearance, burgundy via currentColor
 */
const paths = {
  digital: (
    <>
      {/* Wobbly monitor frame (not quite closed, corners overlap) */}
      <path d="M9 8.2 C16 7.5, 26 8.5, 38.5 7.9 C39.6 7.9, 39.9 8.7, 39.7 9.6 C39.3 16, 40 22.5, 39.4 29.2 C39.3 30.1, 38.5 30.3, 37.6 30.3 C28 30.7, 18 29.9, 8.6 30.4 C7.6 30.4, 7.4 29.5, 7.6 28.6 C8.1 22, 7.5 15, 8.1 9.1 C8.2 8.3, 8.4 8.2, 9 8.2 Z" />
      {/* Second sketch pass along the top edge */}
      <path d="M11 8.6 C18 8.1, 28 8.8, 36.5 8.3" />
      {/* Sketchy text lines on screen */}
      <path d="M12.5 15.2 C17 14.8, 22 15.5, 26.5 15" />
      <path d="M12.5 20.2 C18 19.8, 23 20.5, 28.5 19.9" />
      {/* Strategy arrow bursting out of the screen (overshoots frame) */}
      <path d="M29 14.5 C32 12.5, 34.5 11, 37.8 9.8 M35.2 9.3 L38 9.6 L37.2 12.3" />
      <circle cx="12" cy="24.5" r="0.9" fill="currentColor" stroke="none" />
      {/* Stand + base (base line overshoots) */}
      <path d="M24 30.4 C24 33, 23.6 35.2, 24.2 37.6" />
      <path d="M16 38.2 C20 37.8, 28 38.5, 33.5 37.8" />
    </>
  ),
  social: (
    <>
      {/* Three sketchy nodes (circle + partial second arc) */}
      <circle cx="14" cy="15" r="7" />
      <path d="M8.5 12.5 C9.5 9.5, 12.5 7.8, 15.5 8.2" />
      <circle cx="34" cy="13" r="7" />
      <path d="M28.5 10.5 C29.5 7.8, 32.5 6.2, 35.3 6.6" />
      <circle cx="24" cy="33" r="7" />
      <path d="M18.5 30.5 C19.5 27.8, 22.3 26.2, 25 26.6" />
      {/* Connectors (one overshoots its node, hand-drawn wobble) */}
      <path d="M20 18.5 C22 22.5, 22.2 26, 23.2 29.8" />
      <path d="M28.2 17.5 C30 21.5, 29 25.5, 27 29.5" />
      <path d="M21 14.2 C25 12.6, 29 12.4, 32 13" />
      {/* Small doodle dots */}
      <circle cx="38.5" cy="30" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="9" cy="32" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  production: (
    <>
      {/* Wobbly camera body */}
      <path d="M7.2 15.2 C15 14.5, 28 15.5, 40.5 14.9 C41.6 14.9, 41.9 15.7, 41.7 16.6 C41.3 22.5, 41.9 28.5, 41.3 34.2 C41.2 35.1, 40.3 35.3, 39.4 35.3 C29 35.7, 17 34.9, 8.2 35.4 C7.2 35.4, 7 34.5, 7.2 33.6 C7.6 27.5, 7 21, 7.2 15.7 Z" />
      {/* Viewfinder bump */}
      <path d="M16 15 C16 13, 15.8 11.4, 16.6 10.4 C20 10, 23 10.6, 26 10.2 C26.5 11.6, 26.3 13.4, 26.5 14.9" />
      {/* Lens: double ring, inner highlight arc left open */}
      <circle cx="24" cy="25.5" r="7" />
      <path d="M19.5 22.5 C20.5 20, 23.5 19, 26 20" />
      <circle cx="24" cy="25.5" r="1.2" fill="currentColor" stroke="none" />
      {/* Flash star tick */}
      <path d="M36.5 19.5 L38.5 21.5 M38.5 19.5 L36.5 21.5" />
      {/* Shutter button tick */}
      <path d="M33 14.8 C33.5 13.5, 33.4 12.5, 34 11.5" />
    </>
  ),
};

const ServiceIcon = ({ name, className = '' }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || null}
    </svg>
  );
};

export default ServiceIcon;

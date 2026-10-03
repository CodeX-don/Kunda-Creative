import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container, Button } from '@components/common';
import { OptimizedImage } from '@components/ui';
import { useReducedMotion, useIsMobile } from '@hooks';
import heroPoster from '@assets/images/hero/hero-bg 2.jpeg';
import heroVideo from '@assets/New_hero-section.mp4';
import heroVideoMobile from '@assets/for mobile.mp4';

/**
 * HeroVideo — full-bleed cinematic hero (Aesop-inspired tranquility).
 *
 * Footage: "Dramatic Cloudscape Over African Savanna" timelapse (Pexels,
 * free license) — slow clouds, golden tones, no distracting subjects.
 * Warm burgundy gradient keeps text readable; the global film-grain
 * overlay sits on top for the analog finish.
 *
 * Fallbacks: static poster on mobile (<768px), on reduced-motion
 * preference, or if the video fails to load.
 */


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 + 0.15 * i },
  }),
};

const HeroVideo = () => {
  const isMobileView = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [readySrc, setReadySrc] = useState(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef(null);

  const videoSrc = isMobileView ? heroVideoMobile : heroVideo;
  const videoReady = readySrc === videoSrc;
  const showVideo = !prefersReducedMotion && !videoFailed;

  // React sets `muted` as an attribute, but autoplay policies check the
  // DOM property — enforce it imperatively and start playback explicitly.
  // If playback is blocked, fall back to the static poster.
  useEffect(() => {
    const video = videoRef.current;
    if (!showVideo || !video) return;
    video.muted = true;
    video.play().catch(() => setVideoFailed(true));
  }, [showVideo]);

  return (
    <section
      className="relative flex min-h-[95vh] items-center overflow-hidden bg-charcoal pt-28 pb-20 lg:pt-[120px] lg:pb-[120px]"
      aria-labelledby="hero-heading"
    >
      {/* Backdrop: video on desktop, warm poster otherwise */}
      {showVideo ? (
        <video
          key={videoSrc}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
          onCanPlay={() => setReadySrc(videoSrc)}
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <OptimizedImage
          src={heroPoster}
          alt="African savannah at golden hour with acacia tree silhouettes against a warm sunset sky"
          className="absolute inset-0 pointer-events-none [filter:sepia(15%)_saturate(90%)_brightness(95%)]"
          priority
          aria-hidden="true"
        />
      )}

      {/* Warm dimming overlay — burgundy tint melting into dark */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-burgundy/30 via-charcoal/40 to-charcoal/60"
        aria-hidden="true"
      />

      <Container variant="wide" className="relative z-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Message — left aligned, room to breathe */}
          <div className="lg:col-span-8">
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="font-mono text-label tracking-[0.2em] text-cream/80 uppercase mb-10"
            >
              Kunda Creative
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="font-serif font-normal text-[34px] md:text-[48px] leading-[1.15] tracking-[0.1em] text-cream uppercase [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]"
            >
              Digital
              <br />
              Creative
              <br />
              Agency
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
              className="font-mono text-[12px] leading-relaxed tracking-[0.2em] text-cream/80 uppercase mt-10"
            >
              Digital Services
              <span className="mx-3" aria-hidden="true">
                ·
              </span>
              Social Media Services
              <span className="mx-3" aria-hidden="true">
                ·
              </span>
              Professional Production
            </motion.p>

            {/* CTA deliberately indented — slightly off-center */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="mt-12 lg:pl-16"
            >
              <Button variant="ghost-light" size="small" as={Link} to="/services">
                Explore Our Work
              </Button>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroVideo;

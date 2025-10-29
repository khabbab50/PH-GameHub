import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const slides = [
  {
    image: slider1,
    title: "Drop In and Dominate Fortnite",
    subtitle:
      "Build, battle, and survive in the ultimate arena of creativity and chaos.",
    cta: "Play Now",
    aria: "Drop in and dominate Fortnite - Play now",
  },
  {
    image: slider2,
    title: "Go All Out with Battlefield 6",
    subtitle:
      "Experience next-gen warfare — massive battles, stunning visuals, total chaos.",
    cta: "Join the Fight",
    aria: "Go all out with Battlefield 6 - Join the fight",
  },
  {
    image: slider3,
    title: "Fortnite and Other Classics Rule the Charts",
    subtitle:
      "From Fortnite to timeless fan favorites — see which games dominate every platform.",
    cta: "Discover the Rankings",
    aria: "Fortnite and other oldies are the most popular video games on each platform - Discover the rankings",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const Slider = ({ onCtaClick }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Keyboard, A11y]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        className="mySwiper"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx} aria-label={s.aria}>
            <div className="w-full h-[52vh] sm:h-[60vh] md:h-[70vh] lg:h-[78vh] relative overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transform transition-transform duration-[1000ms] ease-[cubic-bezier(.2,.8,.2,1)]"
                style={{ willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
                <div className="max-w-3xl text-center z-10">
                  <motion.h2
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.08}
                  >
                    {s.title}
                  </motion.h2>

                  <motion.p
                    className="mt-3 text-white text-sm sm:text-base md:text-lg opacity-95"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.25}
                  >
                    {s.subtitle}
                  </motion.p>

                  <motion.div
                    className="mt-6 flex justify-center"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.45}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        onCtaClick?.(s) ||
                        window.scrollTo({ top: 600, behavior: "smooth" })
                      }
                      className="px-5 py-2.5 sm:px-6 sm:py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 transition transform hover:-translate-y-0.5"
                    >
                      {s.cta}
                    </button>
                  </motion.div>
                </div>
              </div>

              <div className="absolute left-4 bottom-4 z-20 hidden sm:flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                <span className="text-sm">🌿</span>
                <span className="text-xs sm:text-sm">
                  Easy care tips inside
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

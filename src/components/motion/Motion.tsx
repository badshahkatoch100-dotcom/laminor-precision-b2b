import { ReactNode, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";

/* ---- Shared motion language -------------------------------------------- */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const DUR = { fast: 0.22, medium: 0.4, large: 0.75, hero: 1 } as const;

/** Fade + rise on scroll into view. Hierarchy via `distance`. */
export function FadeIn({
  children,
  delay = 0,
  distance = 24,
  duration = DUR.large,
  className = "",
  as = "div",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span" | "p";
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/** Masked, word-by-word heading reveal. Renders plain text for reduced motion. */
export function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.08em" }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : undefined}
              transition={{ duration: 0.8, delay: delay + i * stagger, ease: EASE }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

/** Editorial image reveal: mask wipes away while the image settles from 1.06 → 1. */
export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
  priority = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const active = reduce || inView;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={`w-full h-full object-cover ${imgClassName}`}
        initial={reduce ? false : { scale: 1.06 }}
        animate={active ? { scale: 1 } : undefined}
        transition={{ duration: 1.2, delay, ease: EASE }}
      />
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-burgundy origin-bottom"
          initial={{ scaleY: 1 }}
          animate={active ? { scaleY: 0 } : undefined}
          transition={{ duration: 0.9, delay, ease: EASE }}
        />
      )}
    </div>
  );
}

/** Button/link wrapper with a restrained magnetic pull on pointer devices. */
export function Magnetic({
  children,
  className = "",
  strength = 0.18,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(0, { stiffness: 220, damping: 22, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 22, mass: 0.4 });

  if (reduce) return <span className={className}>{children}</span>;

  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      className={className}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/** Vertical parallax driven by page scroll. */
export function useParallax(range = 60) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return { ref, y: reduce ? 0 : y };
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

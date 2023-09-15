import { Variants, Variant } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down' | '';
type TransitionType = 'spring' | 'tween' | '';

interface Transition {
  type: TransitionType;
  duration?: number;
  delay?: number;
  ease?: string;
}

interface AnimationVariant extends Variants {
  hidden: {
    x?: number | string;
    y?: number | string;
    scale?: number;
    opacity?: number;
  };
  show: {
    x?: number | string;
    y?: number | string;
    scale?: number;
    opacity?: number;
    transition?: Transition;
  };
}

export interface StaggerTransition {
  staggerChildren?: number | Variant;
  delayChildren?: number | Variant;
}

export const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
interface StaggerVariant {
  [key: string]: object | undefined;
  hidden: Variant;
  show: {
    transition: StaggerTransition;
  };
}

export const textVariant = (delay: number = 0.1): AnimationVariant => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  type: TransitionType,
  delay: number,
  duration: number
): AnimationVariant => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number): AnimationVariant => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  type: TransitionType,
  delay: number,
  duration: number
): AnimationVariant => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
): Variants => {
  return {
    hidden: { opacity: 0 },
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const stretchIn = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scaleX: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const slideUp = {
  enter: {
    opacity: 0,
    y: '20%',
    position: 'absolute',
  },
  center: {
    opacity: 1,
    y: 0,
    position: 'absolute',
  },
  exit: {
    opacity: 0,
    y: '-25%',
    position: 'absolute',
    transition: {
      duration: 0.2,
    },
  },
};

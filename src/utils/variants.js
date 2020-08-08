export const slideLeftVariants = {
  hidden: {
    opacity: 0,
    x: '50%',
  },
  visible: {
    opacity: 1,
    x: '0%',
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: '-50%',
    transition: {
      duration: 0.2,
    },
  },
};

export const slideUpVariants = {
  enter: {
    opacity: 0,
    y: '75%',
    position: 'absolute',
  },
  center: {
    opacity: 1,
    y: 0,
    position: 'absolute',
  },
  exit: {
    opacity: 0,
    y: '-75%',
    position: 'absolute',
    transition: {
      duration: 0.2,
    },
  },
};

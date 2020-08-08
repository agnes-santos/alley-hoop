const score = (props) => {
  const { isGameActivated, score } = props;

  return isGameActivated && !score ? '-' : score;
};

export default score;

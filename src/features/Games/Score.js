const score = (props) => {
  const { isGameActivated, nugget, score } = props;

  return nugget === 'Postponed' || (isGameActivated && !score) ? '-' : score;
};

export default score;

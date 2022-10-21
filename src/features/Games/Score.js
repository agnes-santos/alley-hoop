const score = (props) => {
  const { status, score } = props;
  return status === 1 ? '-' : score;
};

export default score;

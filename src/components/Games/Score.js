import React from "react";
import { motion } from "framer-motion";

const score = (props) => {
  return (
    <motion.div
      initial={{ y: "25%" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      overflow={"hidden"}
      key={props.team.triCode + props.team.score}
    >
      {props.isGameActivated && !props.team.score ? "-" : props.team.score}
    </motion.div>
  );
};

export default score;

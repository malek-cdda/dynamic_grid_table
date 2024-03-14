import React from "react";
import {
  ProgressArea,
  ProgressBar,
  ProgressBarInner,
  ProgressBarInnerText,
} from "./StyledComponent";

const Progressbar = ({ progress }: any) => {
  let progressColor;

  if (progress <= 30) {
    progressColor = "red";
  } else if (progress > 30 && progress <= 60) {
    progressColor = "#ff9800";
  } else {
    progressColor = "#079455";
  }
  let obj = {
    progress,
    progressColor,
  };
  return (
    <ProgressArea>
      <ProgressBar>
        <ProgressBarInner $progressData={obj}></ProgressBarInner>
      </ProgressBar>
      <ProgressBarInnerText>{progress}%</ProgressBarInnerText>
    </ProgressArea>
  );
};

export default Progressbar;

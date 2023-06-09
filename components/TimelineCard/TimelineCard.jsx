import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./TimelineCard.module.css";

export default function TimelineCard(props) {
  return (
    <div className={styles.timelineCard + " p-s"}>
      <Subtitle>{props.taskName}</Subtitle>
      <Paragraph>{props.taskDate}</Paragraph>
    </div>
  );
}

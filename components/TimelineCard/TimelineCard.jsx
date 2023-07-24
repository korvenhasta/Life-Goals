import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./TimelineCard.module.css";
import { DateTime } from "luxon";

export default function TimelineCard(props) {
  return (
    <div className={styles.timelineCard + " p-s"}>
      <Subtitle>{props.taskName}</Subtitle>
      <Paragraph>
        {DateTime.fromISO(props.taskDate).toFormat("dd-MM-yyyy")}
      </Paragraph>
    </div>
  );
}

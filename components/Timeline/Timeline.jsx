import React from "react";
import TimelineContainer from "../TimelineContainer/TimelineContainer";
import Title from "../Title/Title";
import styles from "./Timeline.module.css";
import Paragraph from "../Paragraph/Paragraph";
import defaultTasks from "../../dummyData/tasks";

export default function Timeline(props) {
  return (
    <div className={styles.timeline + " p-m"}>
      <Title>Timeline</Title>
      <TimelineContainer>
        <Paragraph>2025</Paragraph>
        <TimelineContainer>
          <Paragraph>Tasks</Paragraph>
        </TimelineContainer>
      </TimelineContainer>
    </div>
  );
}

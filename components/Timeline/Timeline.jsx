import React from "react";
import TimelineContainer from "../TimelineContainer/TimelineContainer";
import Title from "../Title/Title";
import styles from "./Timeline.module.css";
import Paragraph from "../Paragraph/Paragraph";
import defaultTasks from "../../dummyData/tasks";
import TimelineCard from "../TimelineCard/TimelineCard";
import Container from "../Container/Container";

function getArrayOfYears(tasks) {
  return tasks.map((task) => {
    return task.date.slice(0, 4);
  });
}

let uniqueArray = [...new Set(getArrayOfYears(defaultTasks))];

defaultTasks.sort((a, b) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.date) - new Date(b.date);
});

function tasksToObject(yearsArray) {
  return yearsArray.map((year) => {
    // Get all tasks for this year here
    let filteredTasks = defaultTasks.filter((task) => {
      return year === task.date.slice(0, 4);
    });
    // Add to this object below
    return { year: year, tasks: filteredTasks };
  });
}

let timeLineTasks = tasksToObject(uniqueArray);
console.log(timeLineTasks);

export default function Timeline(props) {
  return (
    <div className={styles.timeline + " p-m"}>
      <Title>Timeline</Title>

      <Container>
        {timeLineTasks.map((task) => {
          return (
            <Container key={task.year}>
              <TimelineContainer>
                <Paragraph className={styles.year}>{task.year}</Paragraph>
                {task.tasks.map((task) => {
                  return (
                    <TimelineCard
                      key={task.id}
                      taskId={task.id}
                      taskName={task.task}
                      taskDate={task.date}
                    />
                  );
                })}
              </TimelineContainer>
            </Container>
          );
        })}
      </Container>
    </div>
  );
}

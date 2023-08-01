import React, { useEffect, useState } from "react";
import TimelineContainer from "../TimelineContainer/TimelineContainer";
import Title from "../Title/Title";
import styles from "./Timeline.module.css";
import Paragraph from "../Paragraph/Paragraph";
import TimelineCard from "../TimelineCard/TimelineCard";
import Container from "../Container/Container";

function getArrayOfYears(tasks) {
  return tasks.map((task) => {
    return task.date.slice(0, 4);
  });
}

function tasksToObject(yearsArray, tasks) {
  return yearsArray.map((year) => {
    // Get all tasks for this year here
    let filteredTasks = tasks.filter((task) => {
      return year === task.date.slice(0, 4);
    });
    // Add to this object below
    return { year: year, tasks: filteredTasks };
  });
}

export default function Timeline() {
  const [years, setYears] = useState([]);

  async function getTasks() {
    const response = await fetch("/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    let uniqueArray = [...new Set(getArrayOfYears(data))];
    const sortedTasks = data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    let timeLineTasks = tasksToObject(uniqueArray, data);
    setYears(timeLineTasks);
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className={styles.timeline + " p-m"}>
      <Title>Timeline</Title>
      <Container>
        {years.map((task) => {
          return (
            <Container key={task.year}>
              <TimelineContainer>
                <Paragraph className={styles.year}>{task.year}</Paragraph>
                {task.tasks.map((task) => {
                  return (
                    <TimelineCard
                      key={task.id}
                      taskId={task.id}
                      taskName={task.name}
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

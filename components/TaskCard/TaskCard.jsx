import React, { Children } from 'react'
import styles from './TaskCard.module.css'
import Title from '../Title/Title'
import Paragraph from '../Paragraph/Paragraph'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import Button from '../Button/Button'

export default function TaskCard({...props}) {
  return (
    <div className={styles.taskCard}>
      <Title>{props.title}</Title>
      <Paragraph>Estimated due date: {props.date}</Paragraph>
      <ButtonContainer>
        <Button>Edit</Button>
        <Button variant={"button_close"}>Close</Button>
        <Button variant={"button_delete"}>Delete</Button>
      </ButtonContainer>
    </div>
  )
}

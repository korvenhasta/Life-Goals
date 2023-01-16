import React, { Children } from 'react'
import styles from './TaskCard.module.css'
import Title from '../Title/Title'
import Paragraph from '../Paragraph/Paragraph'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import Button from '../Button/Button'
import Container from '../Container/Container'

export default function TaskCard({...props}) {
  return (
    <div className={styles.taskCard}>
      <Title>{props.title}</Title>
      <Paragraph>Estimated due date: {props.date}</Paragraph>
      <Container>

        <ButtonContainer>
          <Button>Complete</Button>
        </ButtonContainer>

        <Container>
          <ButtonContainer>
            <Button variant={"button_edit"}>Edit</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant={"button_danger"}>Delete</Button>
          </ButtonContainer>
        </Container>

      </Container>
    </div>
  )
}

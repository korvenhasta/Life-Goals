import React from 'react'
// import styles from 'AddingTask.module.css'
import Form from '../Form/Form'
import Title from '../Title/Title'
import FormLabel from '../FormLabel/FormLabel'
import Input from '../Input/Input'
import Subtitle from '../Subtitle/Subtitle'
import Paragraph from '../Paragraph/Paragraph'

export default function AddingTask() {
  return (
    <Form>
      <Title>New Task</Title>
      <FormLabel htmlFor="task">
        <Subtitle>Task Name</Subtitle>
        <Paragraph>Add a short, descriptive headline</Paragraph>
        <Input></Input>
        <Subtitle>Estimated due date</Subtitle>
        <Paragraph>Add a date when you think this task should be completed</Paragraph>
        <Input></Input>
      </FormLabel>
    </Form>
  )
}

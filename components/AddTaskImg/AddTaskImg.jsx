import Image from 'next/image'
import React from 'react'
import ImageContainer from '../ImageContainer/ImageContainer'
import styles from './AddTaskImg.module.css'

export default function AddTaskImg() {
  return (
    <ImageContainer>
      <Image
        src="/addtask.svg"
        alt="Picture of the adding a new task"
        className={styles.addTaskImg}
        fill
        sizes="(min-width: 768px) 100vw"
      />
    </ImageContainer>
  )
}

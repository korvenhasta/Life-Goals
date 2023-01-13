import Image from 'next/image'
import React from 'react'
import styles from './AddTaskImg.module.css'

export default function AddTaskImg() {
  return (
    <Image
      src="/addtask.svg"
      alt="Picture of the adding a new task"
      width={40}
      height={40}
      className={styles.addTaskImg}
    />
  )
}

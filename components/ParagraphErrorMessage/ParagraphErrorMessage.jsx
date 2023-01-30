import React from 'react'
import styles from './ParagraphErrorMessage.module.css'

export default function ParagraphErrorMessage({children, ...props}) {
  return (
    <p {...props} className={styles.paragraphErrorMessage}>
    {children}
  </p>
  )
}

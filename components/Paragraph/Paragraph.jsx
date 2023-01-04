import React from 'react'
import styles from './Paragraph.module.css'

export default function Paragraph({children, ...props}) {
  return (
    <p {...props} className={styles.paragraph}>
      {children}
    </p>
  )
}

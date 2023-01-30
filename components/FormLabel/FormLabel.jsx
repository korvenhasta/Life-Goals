import React from 'react'
import styles from "./FormLabel.module.css"

export default function FormLabel({
  children,
  ...props
}) {
  return (
    <label
      {...props}
      className={styles.label}
    >
      {children}
    </label>
  )
}

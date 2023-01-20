import React from 'react'
import styles from './Input.module.css'

export default function Input({ register, name, validationConfig, ...rest }) {
  console.log("VC: ", validationConfig);
  return <input {...register(name, validationConfig)} className={styles.input} {...rest} />;
}
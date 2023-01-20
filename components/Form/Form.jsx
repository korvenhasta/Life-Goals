import React from 'react'
import styles from './Form.module.css'
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import ParagraphErrorMessage from '../ParagraphErrorMessage/ParagraphErrorMessage'

export default function Form({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const {register, handleSubmit, formState: { errors }} = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {
        React.Children.map(children, child => {
            return <>
              {child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    key: child.props.name
                  }
                })
              : child
              }
                <ErrorMessage 
                  errors={errors} 
                  name={child.props.name}
                  render={({ message }) => <ParagraphErrorMessage>{message}</ParagraphErrorMessage>}
                />
            </>
          }
        )
       }
    </form>
  );
}
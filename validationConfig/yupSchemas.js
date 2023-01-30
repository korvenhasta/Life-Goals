import * as yup from "yup";

export const taskSchema = yup
  .object({
    taskName: yup.string().required("Task name is a required!"),
    taskDate: yup
      .date()
      .required("The date should be valid!")
      .nullable()
      .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
  })
  .required();

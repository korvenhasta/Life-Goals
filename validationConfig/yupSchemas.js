import * as yup from "yup";

const schema = yup
  .object({
    taskName: yup.string().required(),
    taskDate: yup.date().isValid().required(),
  })
  .required();

export default schema;

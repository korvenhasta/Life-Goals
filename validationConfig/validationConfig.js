const validationConfig = {
  addingTask: {
    taskName: {
      required: "This is required",
      minLength: {
        value: 5,
        message: "Min length is 5",
      },
    },
    taskDate: {
      valueAsDate: "valueAsDate",
    },
  },
};

export default validationConfig;

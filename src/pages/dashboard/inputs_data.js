import { createListCollection } from "@chakra-ui/react";

const lessonsInputs = [
  {
    name: "title",
    placeholder: "javaScript for beginners.",
    type: "text",
  },
  {
    name: "description",
    placeholder:
      "Understand programming basics like variables, functions, and events to create interactive web pages.",
    type: "text",
  },
  {
    name: "classLevel",
    type: "select",
    options: createListCollection({
      items: [
        { label: "Grade 1", value: "Grade 1 Secondary" },
        { label: "Grade 2", value: "Grade 2 Secondary" },
        { label: "Grade 3", value: "Grade 3 Secondary" },
      ],
      itemToString: (item) => item.label,
    }),
  },
  {
    name: "price",
    placeholder: "20.99",
    type: "number",
  },
  {
    name: "video",
    placeholder: "https://www.youtube.com/(video_link)",
    type: "text",
  },
  {
    name: "title",
    placeholder: "",
    type: "text",
  },
  // start data
];
const examsInputs = [
  {
    name: "title",
    placeholder: "JavaScript Basics Exam",
    type: "text",
  },
  {
    name: "description",
    placeholder:
      "Test your knowledge of JavaScript fundamentals like variables, functions, and data types.",
    type: "text",
  },
  {
    name: "duration",
    placeholder: "10 (minutes)",
    type: "number",
  },
  {
    name: "classLevel",
    type: "select",
    options: createListCollection({
      items: [
        { label: "Grade 1", value: "Grade 1 Secondary" },
        { label: "Grade 2", value: "Grade 2 Secondary" },
        { label: "Grade 3", value: "Grade 3 Secondary" },
      ],
      itemToString: (item) => item.label,
    }),
  },

  // startdata,end data, questions
];

export { lessonsInputs, examsInputs };

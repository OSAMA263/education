import { createListCollection } from "@chakra-ui/react";

const lessonsInputs = [
  {
    name: "title",
    label: "Title",
    placeholder: "javaScript for beginners.",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder:
      "Understand programming basics like variables, functions, and events to create interactive web pages.",
    type: "text",
  },
  {
    name: "classLevel",
    label: "Grade",
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
    label: "Price",
    placeholder: "0.00",
    type: "text",
  },
  {
    name: "video",
    label: "Video url",
    placeholder: "https://www.youtube.com/(video_link)",
    type: "text",
  },
  {
    name: "startDate",
    label: "Available date",
    type: "date",
  },
];

const examsInputs = [
  {
    name: "title",
    label: "Title",
    placeholder: "JavaScript Basics Exam",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder:
      "Test your knowledge of JavaScript fundamentals like variables, functions, and data types.",
    type: "text",
  },
  {
    name: "duration",
    label: "Duration (in minutes)",
    placeholder: "5 (minutes)",
    type: "number",
  },
  {
    name: "classLevel",
    label: "Grade",
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
    name: "startDate",
    label: "Available date",
    type: "date",
  },
  {
    name: "endDate",
    label: "Expire date",
    type: "date",
  },
  // questions lule
];

export { lessonsInputs, examsInputs };

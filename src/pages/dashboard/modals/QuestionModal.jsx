import Modal from "@/components/Modal";
import { Button, Field, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import OptionsSelect from "./OptionsSelect";

export default function QuestionModal({ data, setExamData }) {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState(data.answers ?? []);
  const [question, setQuestion] = useState(data.question || "");
  const [correctAnswer, setCorrectAnswer] = useState(data.correctAnswer || "");

  useEffect(() => {
    // on cancel, set the updateed back to the original data optins
    if (!open) {
      setAnswers(data.answers || []);
      setQuestion(data.question || "");
      setCorrectAnswer(data.correctAnswer ?? "");
    }
  }, [open, data]);

  // handle storing the data
  const handleSave = () => {
    // a shitty way to check validation
    if (answers.length < 2 || question == "" || correctAnswer == "") {
      return;
    } else {
      const updatedData = {
        ...data,
        id: data.id,
        answers,
        correctAnswer,
        question,
      };
      //updated the exam quesiton state
      setExamData((prev) => {
        return {
          ...prev,
          questions: prev.questions.map((q) =>
            q.id == updatedData.id ? updatedData : q
          ),
        };
      });
      setOpen(false);
    }
  };

  return (
    <Modal
      openBtnClasses="!justify-start !ps-2"
      openModalContent={question}
      {...{ open, setOpen }}
    >
      <div className="w-full space-y-10">
        {/* exam title */}
        <Field.Root className="!relative">
          <Field.Label htmlFor="title" className="md:!text-lg">
            Question title
          </Field.Label>
          <Input
            onChange={(e) => setQuestion(e.target.value)}
            defaultValue={question}
            name="title"
            id="title"
            placeholder="what 9 + 10?"
          />
          {question == "" && (
            <span className="text-red-400">Question cant be empty</span>
          )}
        </Field.Root>

        {/* options */}
        <OptionsSelect
          {...{ setAnswers, answers, correctAnswer, setCorrectAnswer }}
        />
        <Button onClick={handleSave} className="!py-0 !flex place-self-center">
          save
        </Button>
      </div>
    </Modal>
  );
}

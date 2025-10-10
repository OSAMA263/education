import { RadioCard } from "@chakra-ui/react";

export default function SelectAnswers(props) {
  const { data, setAnswers, answers, currQuestion, submitted } = props;

  const {
    correctAnswer,
    question,
    answers: options,
    id,
  } = data[currQuestion - 1];

  const handleChangeAnswers = (e) => {
    setAnswers((answers) => {
      // filter out the other answers
      const otherAnswers = answers.filter((ans) => ans.id !== id);
      // ddd the new answer
      return [...otherAnswers, { id, answer: e.value }];
    });
  };

  const selectedAnswer = answers.find((ans) => ans.id === id)?.answer;
  return (
    <>
      <RadioCard.Root
        onValueChange={(e) => handleChangeAnswers(e)}
        value={answers.find((ans) => ans.id == id)?.answer}
        variant={"surface"}
        colorPalette="blue"
        readOnly={submitted}
      >
        <RadioCard.Label className="mb-6">{question}</RadioCard.Label>
        {options.map((opt, i) => {
          const letter = String.fromCharCode(97 + i);

          const isSelected = selectedAnswer === opt;
          const isCorrect = correctAnswer === opt;

          const highlightClass = isCorrect
            ? "!bg-green-400/80 !text-white"
            : isSelected
              ? "!bg-red-400/80 !text-white"
              : "";

          return (
            <RadioCard.Item
              className={`cursor-pointer !border-secondary/30 !rounded-xl ${submitted && highlightClass}`}
              key={opt}
              value={opt}
            >
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemText className="flex justify-between">
                  <div className="items-center flex gap-2">
                    <span className="rounded-full size-6 flex items-center justify-center p-2 bg-secondary/15 border border-secondary/50 uppercase">
                      {letter}
                    </span>
                    {opt}
                  </div>
                  <span className="opacity-60">
                    {isSelected && submitted && "Your Answer"}
                  </span>
                </RadioCard.ItemText>
              </RadioCard.ItemControl>
            </RadioCard.Item>
          );
        })}
      </RadioCard.Root>
    </>
  );
}

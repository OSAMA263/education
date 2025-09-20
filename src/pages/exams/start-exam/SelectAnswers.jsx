import { RadioCard } from "@chakra-ui/react";

export default function SelectAnswers({ data, setAnswers, answers }) {
  const { text, _id, options } = data;

  const handleStoreAnswer = (e) => {
    setAnswers((answers) => {
      // filter out the other answers
      const otherAnswers = answers.filter((ans) => ans.questionId !== _id);
      // ddd the new answer
      return [...otherAnswers, { questionId: _id, selectedAnswer: e.value }];
    });
  };

  return (
    <>
      <RadioCard.Root
        onValueChange={(e) => handleStoreAnswer(e)}
        value={answers.find((q) => q.questionId === _id)?.selectedAnswer}
        variant={"surface"}
        colorPalette="blue"
      >
        <RadioCard.Label className="mb-6">{text}</RadioCard.Label>
        {options.map((opt, i) => {
          const letter = String.fromCharCode(97 + i);
          return (
            <RadioCard.Item
              className="cursor-pointer !border-secondary/30 !rounded-xl"
              key={opt}
              value={opt}
            >
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemText className="flex items-center gap-2">
                  <span className="rounded-full size-6 flex items-center justify-center p-2 bg-secondary/15 border border-secondary/50 uppercase">
                    {letter}
                  </span>
                  {opt}
                </RadioCard.ItemText>
              </RadioCard.ItemControl>
            </RadioCard.Item>
          );
        })}
      </RadioCard.Root>
    </>
  );
}

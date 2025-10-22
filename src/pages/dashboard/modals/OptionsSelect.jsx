import { toast } from "@/utils/utils";
import { Button, Editable, RadioCard, useMediaQuery } from "@chakra-ui/react";
import { FaDeleteLeft, FaPlus } from "react-icons/fa6";

export default function OptionsSelect(props) {
  const { setAnswers, answers, correctAnswer, setCorrectAnswer } = props;
  const [smolScreen] = useMediaQuery("(max-width: 1024px)");

  const handleChangeOption = (e, i) => {
    setAnswers((opts) => opts.map((opt, ind) => (ind == i ? e.value : opt)));
  };

  // add new option
  const handleAddOption = () => {
    if (answers.length < 7) {
      setAnswers((prev) => [...prev, ""]);
    } else {
      toast("error", "E", "7 options is enough dude");
    }
  };

  // remove option handler
  const handleDeleteOption = (i) => {
    setAnswers((prev) => {
      const deleted = prev[i];
      const updated = prev.filter((_, ind) => ind !== i);

      // if the deleted one was the correct answer, reset it
      if (deleted == correctAnswer) {
        setCorrectAnswer("");
      }
      return updated;
    });
  };

  return (
    <div>
      <div className="md:!text-lg w-full flex justify-between font-semibold mb-2">
        Options (select the correct answer){" "}
        <Button onClick={handleAddOption} size={"sm"} variant="outline">
          Add <FaPlus />
        </Button>
      </div>
      <div className="space-y-2">
        {answers.map((ans, i) => (
          <div className="flex w-full" key={i}>
            <RadioCard.Root
              className="!w-full"
              variant={"surface"}
              value={correctAnswer}
              onValueChange={(e) => e.vale !== "" && setCorrectAnswer(e.value)}
            >
              <RadioCard.Item
                className="!w-full !border-secondary/35"
                value={ans}
              >
                <Editable.Root
                  activationMode={smolScreen ? "click" : "dblclick"}
                  textAlign="start"
                  className="!w-full !h-full"
                  value={ans}
                  onValueChange={(e) => handleChangeOption(e, i)}
                >
                  <Editable.Input className="!w-full !outline-none" />
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl className="!ps-0 !py-0 !items-center">
                    <RadioCard.ItemText>
                      <Editable.Preview className="!w-full" />
                    </RadioCard.ItemText>
                    <RadioCard.ItemIndicator />
                  </RadioCard.ItemControl>
                </Editable.Root>
              </RadioCard.Item>
            </RadioCard.Root>
            {/* remove option */}
            <Button
              onClick={() => handleDeleteOption(i)}
              className="!p-0"
              variant={"outline"}
              colorPalette={"red"}
            >
              <FaDeleteLeft />
            </Button>
          </div>
        ))}
        {/* cheap way for validation */}
        <span className="text-red-400">
          {correctAnswer == ""
            ? "correct answer needs to be selected, and it must not be empty"
            : answers.length < 2
              ? "Minimum 2 options are needed"
              : ""}
        </span>
      </div>
    </div>
  );
}

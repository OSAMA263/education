import CustomAlert from "@/components/CustomAlert";
import PlainCard from "@/components/PlainCard";
import { List } from "@chakra-ui/react";
import { CiClock1, CiUser, CiCircleQuestion, CiWarning } from "react-icons/ci";

export default function ExamDetails({examData}) {
  const { duration, title, questions, classLevel, description } = examData;

  const examInfo = [
    { label: "Duration", icon: CiClock1, value: duration },
    { label: "Questions", icon: CiCircleQuestion, value: questions?.length },
    { label: "Grade", icon: CiUser, value: classLevel },
  ];

  return (
    <>
      {/* exam details */}
      <PlainCard className={"flex flex-col gap-6"}>
        <h1 className="text-xl font-semibold flex items-center gap-2">
          icons
          {title}
        </h1>
        <p className="text-secondary">{description}</p>
        {/* exam details */}
        <div className="flex items-center flex-wrap gap-1 justify-between">
          {examInfo.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="text-2xl" />
              <span className="font-semibold">{label}:</span>
              {value}
              <span>{label === "Duration" && "minutes"}</span>
            </div>
          ))}
        </div>
      </PlainCard>
      {/* instructions */}
      <PlainCard>
        <h1 className="mb-4 text-xl font-semibold">Exam instructions</h1>
        <List.Root variant={"plain"} className="space-y-1">
          {instructions.map((item, i) => (
            <List.Item key={i}>
              <List.Indicator asChild color={"yellow.600"}>
                <CiWarning />
              </List.Indicator>
              {item}
            </List.Item>
          ))}
        </List.Root>
      </PlainCard>
      {/*  warning */}
      <CustomAlert
        status="warning"
        title={"Warning"}
        des={
          "Once you start the exam, the timer will begin and cannot be paused. Make sure you have a stable internet connection and enough time to complete the exam."
        }
      />
    </>
  );
}

const instructions = [
  "Read each question carefully before selecting your answer.",
  "You can navigate between questions using the Previous/Next buttons.",
  "Your progress is automatically saved as you answer questions.",
  "Make sure to submit your exam before the time expires.",
  "Once submitted, you cannot modify your answers.",
];

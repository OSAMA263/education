import PlainCard from "@/components/PlainCard";
import Timer from "@/components/Timer";
import AnsweringExamQuesitons from "./start-exam/AnsweringExamQuesitons";

export default function StartExam({ examData, endTime, submitted ,setExamStart}) {
  const { questions, id } = examData;

  return (
    <div className="space-y-6">
      <PlainCard className="flex items-center justify-between">
        <h1 className="font-semibold flex items-center gap-1">Time Remaing</h1>
        <Timer endTime={endTime} submitted={submitted} />
      </PlainCard>
      {/* questions + answers */}
      <AnsweringExamQuesitons {...{ questions, id, endTime,setExamStart }} />
    </div>
  );
}

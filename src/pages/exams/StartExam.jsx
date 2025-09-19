import PlainCard from "@/components/PlainCard";
import Timer from "@/components/Timer";
import { useGetRemainTime } from "@/hooks/useExams";
import AnsweringExamQuesitons from "./start-exam/AnsweringExamQuesitons";
import LoaderPage from "../LoaderPage";
import ErrorPage from "../ErrorPage";

export default function StartExam({ examData }) {
  const { questions, _id } = examData;
  const { isLoading, data, error } = useGetRemainTime(_id);

  if (isLoading) return <LoaderPage className="!min-h-fit" />;
  if (error) return <ErrorPage fetchErr={error} className="!min-h-fit" />;

  const {
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = data?.data?.remainingTime || {};

  const initialTime = (hours * 3600 + minutes * 60 + seconds) * 1000;

  return (
    <div className="space-y-6">
      <PlainCard className="flex items-center justify-between">
        <h1 className="font-semibold flex items-center gap-1">Time Remaing</h1>
        <Timer time={initialTime} />
      </PlainCard>
      {/* questions + answers */}
      <AnsweringExamQuesitons {...{ questions, _id, initialTime }} />
    </div>
  );
}

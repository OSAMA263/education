import { Button } from "@chakra-ui/react";
import Card from "../../components/Card";

export default function ExamsCard() {
  return (
    <Card>
      {/* dates */}
      <div className="flex gap-4 items-center text-secondary">
        icon
        <p>Scheduled 7/7/ and shit idk</p>
      </div>
      {/* exam title + the grade */}
      <div>
        <h1 className="text-lg font-semibold">title</h1>
        <p className="text-sm text-secondary">icon Grade 4</p>
      </div>
      {/* description */}
      <p className="text-sm text-secondary">
        Final exam covering algebra, geometry, and calculus 1!!.
      </p>
      {/* exam details */}
      <div className="space-x-4 flex gap-2 [&>h1]:space-x-1 text-sm">
        <h1>
          <span>icon</span>
          <span>16 min</span>
        </h1>
        <h1>
          <span>icon</span>
          <span>5 questions</span>
        </h1>
      </div>
      {/* start the exam action btn */}
      <div className="flex justify-end">
        <Button>start the exam</Button>
      </div>
    </Card>
  );
}

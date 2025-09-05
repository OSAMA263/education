import { Button } from "@chakra-ui/react";
import Card from "../../components/Card";

export default function LessonsCard() {
  return (
    <Card>
      {/* dates */}
      <div className="flex gap-4 items-center text-secondary">
        icon
        <p>Scheduled 7/7/ and shit idk</p>
      </div>
      {/* lesson title + uploader */}
      <div>
        <h1 className="text-xl font-semibold">title</h1>
        <p>By jhon doe</p>
      </div>
      {/* description */}
      <p className="text-sm text-secondary">
        Final exam covering algebra, geometry, and calculus 1!!.
      </p>
      {/* price + pay */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">
          EGP {Number(10000).toLocaleString()}
        </h1>
        <Button>buy or shit</Button>
      </div>
    </Card>
  );
}

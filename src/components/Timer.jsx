import { Badge } from "@chakra-ui/react";
import Countdown from "react-countdown";

export default function Timer({ time }) {
  return (
    <Countdown
      date={Date.now() + time}
      renderer={({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <Badge size="lg" colorPalette="red">
              Time is up!
            </Badge>
          );
        }
        const isCritical = hours === 0 && minutes < 5;
        return (
          <Badge colorPalette={isCritical ? "red" : ""} size={"lg"}>
            <span>{String(hours).padStart(2, "0")} :</span>
            <span>{String(minutes).padStart(2, "0")} :</span>
            <span>{String(seconds).padStart(2, "0")}</span>
          </Badge>
        );
      }}
    />
  );
}

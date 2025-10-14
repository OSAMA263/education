import { Badge } from "@chakra-ui/react";
import Countdown from "react-countdown";

export default function Timer({ endTime, renderNull, submitted, ...rest }) {
  const date = new Date(endTime);
  const isInvalid = isNaN(date.getTime());

  return (
    <Countdown
      date={date}
      {...rest}
      renderer={({ hours, minutes, seconds, completed }) => {
        if (renderNull) return null;
        if (completed) {
          return submitted ? (
            <Badge size={"lg"}>Submitted</Badge>
          ) : (
            <Badge size="lg">Time is up!</Badge>
          );
        }
        const isCritical = hours === 0 && minutes < 5;

        return isInvalid ? (
          <Badge size={"lg"}>Loading...</Badge>
        ) : submitted ? (
          <Badge size={"lg"}>Submitted</Badge>
        ) : (
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

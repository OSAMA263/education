import { Box } from "@chakra-ui/react";
import { FaGraduationCap, FaRegCalendarAlt } from "react-icons/fa";

export default function Card({
  children,
  className,
  description,
  classLevel,
  title,
  availableDate,
  expriedDate,
}) {
  return (
    <Box
      _dark={{ bg: "gray.800" }}
      className={
        "space-y-3 border rounded-2xl border-bg-gray px-6 py-8 flex flex-col " +
        className
      }
    >
      {/* available date*/}
      <div className="flex gap-4 items-center text-secondary">
        {expriedDate ? (
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <FaRegCalendarAlt />
              <p>Starts: {availableDate}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegCalendarAlt />
              <p>Ends: {expriedDate}</p>
            </div>
          </div>
        ) : (
          <>
            <FaRegCalendarAlt />
            <p>Scheduled: {availableDate}</p>
          </>
        )}
      </div>

      {/* title & des */}
      <div className="[&>p]:text-secondary [&>p]:text-sm">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="flex items-center gap-1">
          <FaGraduationCap /> {classLevel}
        </p>
        <p className="mt-4">{description}</p>
      </div>

      {/* rest of the card (diffrent contecnt) */}
      {children}
    </Box>
  );
}

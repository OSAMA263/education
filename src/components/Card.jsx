import { Box } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Card({ exam, className, children }) {
  const { description, title, startDate, endDate, created_by } = exam;

  const availableDate = new Date(startDate).toLocaleDateString(
    "en-GB",
  );
  const expriedDate = new Date(endDate).toLocaleDateString("en-GB");

  return (
    <Box
      className={
        "space-y-4! border rounded-2xl bg-bg-gray border-gray-400/35 px-6 py-8 flex flex-col overflow-hidden " +
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
            {endDate && (
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt />
                <p>Ends: {expriedDate}</p>
              </div>
            )}
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
          <span className="text-white/80">Created by:</span>
          {created_by}
        </p>
        <p className="mt-4">{description}</p>
      </div>

      {/* rest of the card (diffrent contecnt) */}
      {children}
    </Box>
  );
}

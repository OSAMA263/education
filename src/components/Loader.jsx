import { Spinner } from "@chakra-ui/react";

export default function Loader({ size = "lg" }) {
  return (
    <div className="flex flex-col items-center gap-3 text-lg font-bold">
      <Spinner borderWidth={"3px"} size={size} />
      <h1>Loading...</h1>
    </div>
  );
}

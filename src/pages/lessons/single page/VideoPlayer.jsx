import Loader from "@/components/Loader";
import { Button, ButtonGroup, SkeletonText } from "@chakra-ui/react";
import { FaLightbulb, FaExpand } from "react-icons/fa";

export default function VideoPlayer(props) {
  const { setPlayerOptions, playerOptions, data } = props;

  const handlePlayerOptions = (opt) => {
    setPlayerOptions((prev) => ({ ...prev, [opt]: !prev[opt] }));
  };
  const publishedData = new Date(data?.scheduledDate).toLocaleDateString(
    "en-GB"
  );

  return (
    <div className="flex flex-col bg-bg-gray border border-secondary/40 rounded-xl overflow-hidden h-full">
      <div className="aspect-video w-full min-h-[60dvh] max-h-[60dvh]">
        {data?.video ? (
          <iframe
            src={data.video.replace("watch?v=", "embed/")}
            title={data.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        )}
      </div>
      {/* video player footer */}
      <div className="space-y-4 mt-1 flex justify-between">
        {/* player options */}
        <ButtonGroup attached>
          {btnsControls.map(({ label, icon: Icon }) => (
            <Button
              key={label}
              variant={"surface"}
              textTransform={"capitalize"}
              onClick={() => handlePlayerOptions(label)}
              bg={playerOptions[label] ? "gray.500" : ""}
            >
              <Icon /> {label}
            </Button>
          ))}
        </ButtonGroup>
        <p className="pe-2 space-x-2">
          <span className="font-semibold"> Published Data:</span>
          <span className=" text-secondary">{publishedData}</span>
        </p>
      </div>
      {/* video description */}
      <div className="p-4 text-secondary">
        {data?.description ? (
          <p>{data?.description}</p>
        ) : (
          <SkeletonText noOfLines={1} />
        )}
      </div>
    </div>
  );
}

const btnsControls = [
  {
    label: "expand",
    icon: FaExpand,
  },
  {
    label: "focus",
    icon: FaLightbulb,
  },
];

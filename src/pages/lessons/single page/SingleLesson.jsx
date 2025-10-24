import CustomContainer from "@/components/layout/CustomContainer";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import LessonsList from "./LessonsList";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGetLessonById } from "@/hooks/useLessons";
import ErrorPage from "@/pages/ErrorPage";
import { SkeletonText } from "@chakra-ui/react";
import SEOWrapper from "@/components/layout/SEOWrapper";

export default function SingleLesson() {
  const { lessonId } = useParams();
  const { error, data } = useGetLessonById(lessonId);
  // video player states
  const [playerOptions, setPlayerOptions] = useState({
    expand: false,
    focus: false,
  });

  useEffect(() => {
    document.title = `Lesson-${lessonId}`;
  }, [lessonId]);

  // handle fetch status UI
  if (error) return <ErrorPage />;

  return (
    <SEOWrapper des="Learn this lesson step by step with clear explanations, examples, and exercises to strengthen your understanding of the topic.">
      <CustomContainer lg="90%" xl="90%" className="!space-y-10">
        <h1
          className={`lg:text-3xl text-xl font-bold rounded-xl bg-bg-gray px-2`}
        >
          {data ? data?.title : <SkeletonText noOfLines={1} />}
        </h1>
        {/* video player & lessons list */}
        <div className="grid grid-cols-4 gap-4 min-h-[70vh] relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              key="player"
              className={`z-50 h-full max-xl:!col-span-4 ${playerOptions.expand ? "col-span-4" : "col-span-3"}`}
              transition={{ duration: 0.3 }}
            >
              <VideoPlayer {...{ playerOptions, setPlayerOptions, data }} />
            </motion.div>
            {!playerOptions.expand && (
              <motion.div
                layout
                key="lesson-list"
                transition={{ duration: 0.3 }}
                className={`max-xl:hidden col-span-1 overflow-hidden`}
              >
                <LessonsList />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CustomContainer>
      {/* video overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ display: "none", opacity: 0 }}
          animate={{
            display: playerOptions.focus ? "block" : "none",
            opacity: playerOptions.focus ? 1 : 0,
          }}
          exit={{
            display: playerOptions.focus ? "none" : "block",
            opacity: playerOptions.focus ? 0 : 1,
          }}
          className="bg-black/50 backdrop-blur-md inset-0 absolute z-10"
        />
      </AnimatePresence>
    </SEOWrapper>
  );
}

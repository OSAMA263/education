import { AbsoluteCenter, IconButton } from "@chakra-ui/react";
import { reviews } from "../data";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function ReviewsSection() {
  return (
    <section id="reviews">
      <h1 className="text-4xl font-bold text-center mb-20">
        Trusted by Thousands of Students & Teachers
      </h1>
      <ReviewsSwipers />
    </section>
  );
}

const ReviewsSwipers = () => {
  const swiperVariants = {
    slidesPerView: 1,
    spaceBetween: 25,
    speed: 500,
    navigation: {
      nextEl: "#next-review",
      prevEl: "#prev-review",
    },
    breakpoints:{
      1600:{
        slidesPerView:3
      }
    },
    modules: [Navigation],
  };

  return (
    <div className="relative py-4">
      <Swiper {...swiperVariants} className="w-[90%] mx-auto">
        {reviews.map(({ avatar, name, review, role }) => (
          <SwiperSlide key={name}>
            <div className="border border-bg-gray rounded-2xl p-12 space-y-6">
              {/* review */}
              <p className="italic text-xl">"{review}"</p>
              {/* reviwer */}
              <div className="flex items-center gap-4">
                <img src={avatar} className="size-12 rounded-full" alt={name} />
                <div>
                  <h1 className="font-bold text-lg">{name} </h1>
                  <span className="text-secondary">{role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AbsoluteCenter zIndex={50} axis={"vertical"}>
        <IconButton rounded={"full"} aria-label="prev-slide" id="prev-review">
          <RiArrowLeftLine />
        </IconButton>
      </AbsoluteCenter>
      <AbsoluteCenter zIndex={50} axis={"vertical"} right="0">
        <IconButton rounded={"full"} aria-label="next-slide" id="next-review">
          <RiArrowRightLine />
        </IconButton>
      </AbsoluteCenter>
    </div>
  );
};

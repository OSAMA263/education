import CustomContainer from "../../components/layout/CustomContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import ContactInfo from "./ContactInfo";

export default function AboutPage() {
  return (
    <CustomContainer>
      <SectionHeader {...headerProps} />
      {/* contact information */}
      <ContactInfo />
    </CustomContainer>
  );
}

const headerProps = {
  title: "Our Mission is to Empower Every Learner",
  par: "At EduPress, we believe education should be a right, not a privilege. Our mission is to close the gap between learners and high-quality education by offering a platform where anyone can access reliable, up-to-date, and engaging learning materials — anytime, anywhere. Our team consists of educators, designers, developers, and passionate thinkers who are committed to building a world where knowledge is borderless. From high school math and science to soft skills and professional development, EduPress offers something for every stage of life and learning.",
};

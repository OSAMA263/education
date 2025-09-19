import Loader from "../components/Loader";
import CustomContainer from "../components/layout/CustomContainer";

export default function LoaderPage({ className = "" }) {
  return (
    <div>
      <CustomContainer className={`!py-0 !space-y-0 ${className}`}>
        <Loader />
      </CustomContainer>
    </div>
  );
}

import { Button } from "@chakra-ui/react";
import CustomContainer from "../components/layout/CustomContainer";
import { TbMoodSadDizzy } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ErrorPage({
  fetchErr,
  badReq,
  children,
  className = "",
}) {
  return (
    <div>
      <CustomContainer className={"items-center !space-y-3 " + className}>
        <TbMoodSadDizzy className="text-5xl" />
        {fetchErr ? (
          <FetchError err={badReq || fetchErr} children={children} />
        ) : (
          <NotFoundPage />
        )}
      </CustomContainer>
    </div>
  );
}

const FetchError = ({ err, children }) => {
  const badRequest = err?.response.data.message;

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">ERROR - COLLECTING THE DATA</h1>
      {err ? badRequest : <>{children}</>}
    </>
  );
};

const NotFoundPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">404 - PAGE NOT FOUND</h1>
      <p className="text-secondary">
        This page you are looking for dosnt exist, or temporarily unavailable.
      </p>
      <Button asChild rounded={"full"}>
        <Link className="font-semibold" to="/">
          GO BACK TO HOMEPAGE
        </Link>
      </Button>
    </>
  );
};

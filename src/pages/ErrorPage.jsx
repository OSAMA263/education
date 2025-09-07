import { Button } from "@chakra-ui/react";
import CustomContainer from "../components/layout/CustomContainer";
import { TbMoodSadDizzy } from "react-icons/tb";
import { Link } from "react-router-dom";
import { logout } from "@/utils/utils";

export default function ErrorPage({ fetchErr }) {
  return (
    <div>
      <CustomContainer className="items-center !space-y-3">
        <TbMoodSadDizzy className="text-5xl" />
        {fetchErr ? <FetchError /> : <NotFoundPage />}
      </CustomContainer>
    </div>
  );
}

const FetchError = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">ERROR - COLLECTING THE DATA</h1>
      <p className="text-secondary">
        Looks like we didnt find a user with these data
      </p>
      <Button className="!font-semibold" rounded={"full"}
      onClick={logout}>
        TRY LOGIN AGAIN
      </Button>
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

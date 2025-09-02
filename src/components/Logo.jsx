import { HiOutlineBookOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center font-bold">
      <HiOutlineBookOpen className="text-4xl" />
      <h1 className="ms-2 text-xl">Edu</h1>
    </Link>
  );
}

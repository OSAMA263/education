import CustomContainer from "../layout/CustomContainer";
import { contact_info } from "../../pages/about/data";
import NavLinks from "../NavLinks";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="border-t border-bg-gray py-10 bg-bg-secondary ">
      <CustomContainer className="!py-0 !space-y-0 min-h-fit [&>div]:space-y-4 grid grid-cols-3">
        {/* intro */}
        <div>
          <Logo />
          <p className="text-secondary text-sm">
            e-learning Platform is a web application that provides access to
            lessons and exams, a tool for learning and evaluating knowledge.
          </p>
        </div>
        {/* links */}
        <div className="justify-self-center">
          <h1 className="text-2xl font-semibold">Links</h1>
          <NavLinks className="flex-col text-sm text-secondary items-start !gap-2" />
        </div>
        {/* contact */}
        <div>
          <h1 className="font-semibold text-2xl">Contact</h1>
          <div className="space-y-2">
            {contact_info.map(({ label, value }) => (
              <p key={label} className="text-sm text-secondary">
                <span>{label}: </span>
                {value}
              </p>
            ))}
          </div>
        </div>
      </CustomContainer>
      {/* copayrights */}
      <div className="mt-8 pt-4 border-t border-bg-gray text-center">
        <h1 className="text-secondary text-sm">© 2025 All rights reserved</h1>
      </div>
    </footer>
  );
}

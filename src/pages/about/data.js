import {
  FaFacebookF,
  FaDesktop ,
  FaLinkedinIn,
  FaGithub ,
} from "react-icons/fa";
import {
  MdOutlineMail,
  MdOutlineLocationOn,
  MdOutlineWhatsapp,
  MdAlarm,
} from "react-icons/md";

const contact_info = [
  {
    label: "Email",
    icon: MdOutlineMail,
    value: "osamaelseify2@gmail.com",
  },
  {
    label: "WhatsApp",
    icon: MdOutlineLocationOn,
    value: "01121451306",
  },
  {
    label: "Location",
    icon: MdOutlineWhatsapp,
    value: "Cairo, Egypt",
  },
  {
    label: "Support hours",
    icon: MdAlarm,
    value: "09:00 AM - 05:00 PM, All Days",
  },
];

const media_links = [
  {
    icon: FaFacebookF,
    platform: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    icon: FaGithub ,
    platform: "github",
    url: "https://github.com/OSAMA263",
  },
  {
    icon: FaDesktop ,
    platform: "portfolio",
    url: "https://alright-ten.vercel.app/",
  },
  {
    icon: FaLinkedinIn,
    platform: "linkedin",
    url: "https://www.linkedin.com/in/osama00/",
  },
];

export { contact_info, media_links };

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
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
    value: "support@edu.com",
  },
  {
    label: "WhatsApp",
    icon: MdOutlineLocationOn,
    value: "+123456789",
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
    icon: FaTwitter,
    platform: "twitter",
    url: "https://www.twitter.com/",
  },
  {
    icon: FaYoutube,
    platform: "youtube",
    url: "https://www.youtube.com/",
  },
  {
    icon: FaLinkedinIn,
    platform: "linkedin",
    url: "https://www.linkedin.com/",
  },
];

export { contact_info, media_links };

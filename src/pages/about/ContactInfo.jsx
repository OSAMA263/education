import { IconButton } from "@chakra-ui/react";
import { contact_info, media_links } from "./data";
import ContactForm from "./ContactForm";
import { NavLink } from "react-router-dom";

export default function ContactInfo() {
  return (
    <section id="contact-informations" className="grid lg:grid-cols-2 gap-10">
      {/* contact links */}
      <div className="space-y-10 max-lg:order-1">
        <h1 className="text-2xl font-semibold">Additional Info</h1>
        <div className="space-y-3">
          {contact_info.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex gap-3">
              <Icon className="text-5xl bg-bg-gray p-2 rounded-full" />
              <div>
                <h1 className="font-semibold">{label}</h1>
                <p className="text-secondary">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-semibold">Social Media Links</h1>
        <div className="flex space-x-4">
          {media_links.map(({ icon: Icon, url, platform }) => (
            <IconButton
              className="rounded-2xl border border-bg-gray"
              key={url}
              asChild
              aria-label={platform}
            >
              <NavLink
                target="_blank"
                aria-label={platform}
                className={"text-4xl"}
                to={url}
              >
                <Icon />
              </NavLink>
            </IconButton>
          ))}
        </div>
      </div>
      {/* form inputs message */}
      <ContactForm />
    </section>
  );
}

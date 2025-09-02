import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-6">
      {nav_links.map(({ label, link }) => (
        <li key={label}>
          <NavLink className="hover:text-gray-400" to={link}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export const nav_links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Lessons", link: "/lessons" },
  { label: "Exams", link: "/exams" },
];

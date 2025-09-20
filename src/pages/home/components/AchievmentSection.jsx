import { users_amount } from "../data";

export default function AchievmentSection() {
  return (
    <section
      id="achivment"
      className="border border-bg-gray py-12 rounded-xl grid lg:grid-cols-4 gap-10"
    >
      {users_amount.map(({ icon: Icon, label, number }) => (
        <div className="flex flex-col items-center gap-y-4" key={label}>
          <span className="text-3xl rounded-full p-5 bg-bg-gray">
            <Icon />
          </span>
          <p className="font-semibold text-2xl">
            {Number(number).toLocaleString()}+
          </p>
          <h1 className=" text-secondary">{label}</h1>
        </div>
      ))}
    </section>
  );
}

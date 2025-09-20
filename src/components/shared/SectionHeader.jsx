export default function SectionHeader(props) {
  const { title = "title", par = "",className="" } = props;

  return (
    <div className={`space-y-4 text-center ${className}`}>
      <h1 className="font-semibold text-3xl max-sm:text-2xl">{title}</h1>
      {par && <p className="text-secondary md:text-lg">{par}</p>}
    </div>
  );
}

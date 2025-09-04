export default function SectionHeader(props) {
  const { title = "title", par = "" } = props;

  return (
    <div className="space-y-4 text-center">
      <h1 className="font-bold text-4xl">{title}</h1>
      {par && <p className="text-secondary text-lg">{par}</p>}
    </div>
  );
}

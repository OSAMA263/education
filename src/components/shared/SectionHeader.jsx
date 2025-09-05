export default function SectionHeader(props) {
  const { title = "title", par = "paragraph" } = props;

  return (
    <div className="space-y-4 text-center">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-secondary text-lg">{par}</p>
    </div>
  );
}

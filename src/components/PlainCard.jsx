export default function PlainCard({ className="", children }) {
  return (
    <div
      className={`rounded-xl border border-secondary/40 bg-bg-gray p-8 ${className}`}
    >
      {children}
    </div>
  );
}

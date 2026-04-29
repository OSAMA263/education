export default function SearchFilterItems({ visibleData, allData }) {
  function handleChange(e) {
    visibleData((prev) => {
      if (e.target.value == "") return allData;

      return prev.filter((item) =>
        item.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase()),
      );
    });
  }

  return (
    <input
      type="text"
      name="title"
      id="title"
      className="p-2 rounded-xl"
      placeholder="Search by the title..."
      onChange={handleChange}
    />
  );
}

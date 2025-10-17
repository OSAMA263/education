import { Input } from "@chakra-ui/react";

export default function FilterBytTitle({ setFilterData, data, userDataTable }) {
  const handleChange = ({ target }) => {
    const { value } = target;

    setFilterData(() => {
      return data?.filter((item) => {
        const prop = item.fullName ? "fullName" : "title";
        return item[prop]?.toLowerCase().includes(value.toLowerCase());
      });
    });
  };

  return (
    <Input
      name="filter-by-title"
      onChange={handleChange}
      className="!w-1/2"
      placeholder={`Search by ${userDataTable ? "name" : "title"}...`}
      type="text"
    />
  );
}

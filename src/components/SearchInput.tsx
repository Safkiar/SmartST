import { SearchInputProps } from "../types/types";

const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default SearchInput;

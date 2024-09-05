export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface FilterState {
  users: User[];
  searchQuery: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  loading: boolean;
  error: string | null;
}

export interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchFieldsProps {
  searchQuery: FilterState["searchQuery"];
  handleSearch: (
    column: keyof FilterState["searchQuery"],
    value: string
  ) => void;
}

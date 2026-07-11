import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="hidden md:block relative">
      <Input
        type="text"
        className="bg-muted pl-9"
        placeholder="Search..."
      />
      <Search className="absolute -translate-y-1/2 top-1/2 left-2 w-5 text-muted-foreground" />
    </div>

  )
}


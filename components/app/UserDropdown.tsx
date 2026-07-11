import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronsUpDown, UserCircle } from "lucide-react";

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex rounded-md w-full py-1.5 gap-3 cursor-pointer">
        <span className="flex items-center gap-3 flex-1">
          <UserCircle /> Username
        </span>
        <ChevronsUpDown className="w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


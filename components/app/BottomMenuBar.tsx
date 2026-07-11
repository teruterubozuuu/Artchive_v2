import { Bell, Home, Mail, PlusSquare, Search } from "lucide-react"
import { Item } from "../ui/item"


export default function BottomMenuBar() {
  const menuItems = [
    { id: "home", icon: <Home /> },
    { id: "search", icon: <Search /> },
    { id: "create-post", icon: <PlusSquare /> },
    { id: "notifications", icon: <Bell /> },
    { id: "inbox", icon: <Mail /> }
  ]
  return (
    <div className="fixed bottom-0 border-t w-full md:hidden">
      <div className="flex justify-between">
        {menuItems.map((item) => (
          <Item key={item.id} className="px-0! justify-center! text-primary">{item.icon}</Item>
        ))}
      </div>
    </div>
  )
}


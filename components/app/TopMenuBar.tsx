import { Palette, UserCircle } from "lucide-react";

export default function TopMenuBar() {
  return (
    <div className="sticky top-0 border-b px-2 py-3 md:hidden">
      <div className="flex justify-between">
        <span className="flex items-center gap-2 uppercase font-semibold tracking-wide"><Palette className="text-primary" />Artchive</span>

        {/*User*/}
        <div>
          <UserCircle />
        </div>
      </div>
    </div>
  )
}


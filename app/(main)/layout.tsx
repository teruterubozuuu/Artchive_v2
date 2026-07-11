import BottomMenuBar from "@/components/app/BottomMenuBar"
import BottomRightPanel from "@/components/app/BottomRightPanel"
import LeftSidebar from "@/components/app/LeftSidebar"
import SearchBar from "@/components/app/SearchBar"
import TopMenuBar from "@/components/app/TopMenuBar"
import TopRightPanel from "@/components/app/TopRightPanel"

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen min-h-dvh">
      <aside>
        <LeftSidebar />
      </aside>

      <div className="w-full py-2 px-1">
        <header>
          <TopMenuBar />
        </header>
        <SearchBar />
        <main className="pt-2">{children}</main>
      </div>

      <aside className="hidden md:flex flex-col gap-3 p-2">
        <div className="flex-none">
          <TopRightPanel />
        </div>

        <div className="flex-1">
          <BottomRightPanel />
        </div>
      </aside>

      <BottomMenuBar />
    </div>
  )
}

// import { ClockPlus, Flame, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ClockIcon, FireIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function TopRightPanel() {
  const filterButtons = [
    { id: "for-you", label: "For You", icon: <SparklesIcon /> },
    { id: "trending", label: "Trending", icon: <FireIcon /> },
    { id: "latest", label: "Latest", icon: <ClockIcon /> }
  ]
  return (
    <Card className="w-60 bg-muted/20">
      <CardHeader>
        <CardTitle className="font-semibold">Filter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {filterButtons.map((item) => (
          <Button variant="ghost" key={item.id} className="w-full flex justify-start px-0! cursor-pointer gap-3">
            <span className="text-primary">{item.icon}</span>{item.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}


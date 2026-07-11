import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function BottomRightPanel() {
  return (
    <Card className="w-60 h-full">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Following</CardTitle>
        <span className="font-semibold text-muted-foreground">0</span>
      </CardHeader>
      <CardContent>
        <span className="text-xs text-muted-foreground">You're not following anyone yet.</span>
      </CardContent>
    </Card>
  )
}


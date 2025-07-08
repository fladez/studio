import { cn } from "@/lib/utils"

export function AdBanner({
  className,
  width,
  height,
}: {
  className?: string
  width: number
  height: number
}) {
  return (
    <div
      className={cn(
        "mx-auto flex items-center justify-center rounded-lg border border-dashed bg-muted/30 text-center text-muted-foreground",
        className
      )}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div>
        <p className="text-sm font-medium">Publicidade</p>
        <p className="text-xs">{`${width}x${height}`}</p>
      </div>
    </div>
  )
}

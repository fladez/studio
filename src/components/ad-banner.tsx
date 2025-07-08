import { cn } from "@/lib/utils"

export function AdBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-48 items-center justify-center rounded-lg border border-dashed bg-muted/30 text-center text-muted-foreground",
        className
      )}
    >
      <div>
        <p className="text-sm font-medium">Publicidade</p>
        <p className="text-xs">Espaço reservado para anúncio.</p>
      </div>
    </div>
  )
}

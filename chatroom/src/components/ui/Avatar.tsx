import * as React from "react"
import { cn } from "../../lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback: string
  size?: "sm" | "md" | "lg" | "xl"
  status?: "online" | "offline" | "busy"
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", status, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-14 w-14 text-base",
      xl: "h-20 w-20 text-xl",
    }

    const statusColors = {
      online: "bg-green-500",
      offline: "bg-gray-500",
      busy: "bg-red-500",
    }

    return (
      <div className="relative inline-block">
        <div
          ref={ref}
          className={cn(
            "relative flex shrink-0 overflow-hidden rounded-full border-2 border-background shadow-sm",
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {src ? (
            <img
              src={src}
              alt={alt}
              className="aspect-square h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground font-semibold">
              {fallback.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        {status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 block rounded-full ring-2 ring-background",
              size === "sm" ? "h-2 w-2" : "h-3 w-3",
              statusColors[status]
            )}
          />
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }
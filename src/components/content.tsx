import Image from "next/image"

import { cn } from "@/lib/utils"
import { ContentData } from "../../data/content"
import { PlayCircle } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import YouTubeVideo from "./youtube-video"
import { Button } from "./ui/button"



interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  album: ContentData
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function Content({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ContentProps) {
  return (
    <div className={cn("space-y-3 relative group", className)} {...props}>

      <Dialog>
        <DialogTrigger asChild>
          <div className="overflow-hidden rounded-md cursor-pointer">
            <Image
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>

              <PlayCircle size={50} color="#ffffff" absoluteStrokeWidth />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] lg:max-w-[880px] lg:max-h-[650px]">
          <DialogHeader>
            <DialogTitle className="text-white mb-0">{album.name} Trailer</DialogTitle>
          </DialogHeader>

          <div className="w-[370px] h-[450px] lg:w-[830px] lg:h-[450px]">
            <YouTubeVideo videoId={album.trailer} />
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="space-y-1 text-sm">
        <h3 className="font-medium text-white leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
    </div>
  )
}
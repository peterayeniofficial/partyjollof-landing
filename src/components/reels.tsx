import { Metadata } from "next"
import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Content } from "./content"
import { cinema, streaming } from "../../data/content"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function ReelsPage() {
  return (
    <div className="grid lg:grid-cols-4">
      <div className="col-span-3 lg:col-span-4">
        <div className="h-full w-full px-4 py-6 lg:px-8">
          <Tabs defaultValue="music" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="music" className="relative">
                  Movies
                </TabsTrigger>
                <TabsTrigger value="podcasts" disabled>TV Shows</TabsTrigger>
                <TabsTrigger value="live" disabled>
                  People
                </TabsTrigger>
              </TabsList>

            </div>
            <TabsContent
              value="music"
              className="border-none p-0 outline-none"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl text-white font-semibold tracking-tight">
                    Streaming
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    New and upcoming movies on streaming platforms
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="relative">
                <ScrollArea>
                  <div className="flex space-x-4 pb-4">
                    {streaming.map((album) => (
                      <Content
                        key={album.name}
                        album={album}
                        className="w-[150px]"
                        aspectRatio="portrait"
                        width={150}
                        height={230}
                      />
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              <div className="mt-6 space-y-1">
                <h2 className="text-2xl text-white font-semibold tracking-tight">
                  Cinema
                </h2>
                <p className="text-sm text-muted-foreground">
                  New and upcoming movies in Cinema
                </p>
              </div>
              <Separator className="my-4" />
              <div className="relative">
                <ScrollArea>
                  <div className="flex space-x-4 pb-4">
                    {cinema.map((album) => (
                      <Content
                        key={album.name}
                        album={album}
                        className="w-[150px]"
                        aspectRatio="portrait"
                        width={150}
                        height={230}
                      />
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
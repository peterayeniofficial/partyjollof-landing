"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function EmailOptin() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button variant={'secondary'} size={'lg'}>Enter your email to be notified on launch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[530px]">
          <DialogHeader>
            
          </DialogHeader>
          <iframe
        src="https://partyjollof.substack.com/embed"
        width="480"
        height="320"
        style={{ border: '1px solid #EEE', background: 'white' }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
      <Button variant={'secondary'} size={'lg'}>Enter your email to be notified on launch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <iframe
        src="https://partyjollof.substack.com/embed"
        width="480"
        height="150"
        style={{ border: '1px solid #EEE', background: 'white' }}
      ></iframe>       
      </DrawerContent>
    </Drawer>
  )
}


/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'
import * as React from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from './ui/moving-border'

export function EmailOptin() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Enter your email to be notified on launch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[530px] border-none">
          <DialogHeader>

          </DialogHeader>
          <iframe
            src="https://partyjollof.substack.com/embed"
            width="480"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white' }}
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

"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DialogTitle } from "@radix-ui/react-dialog"

interface TimelineProps extends React.HTMLAttributes<HTMLUListElement> {}

interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label: string
  date: string
  images?: { src: string; alt?: string }[]
  reverse?: boolean
  children?: React.ReactNode
}

export function Timeline({ className, ...props }: TimelineProps) {
  return (
    <ul
      className={cn(
        "relative mx-auto w-full max-w-4xl before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-border",
        className
      )}
      {...props}
    />
  )
}

export function TimelineItem({
  label,
  date,
  images = [],
  reverse = false,
  children,
  className,
  ...props
}: TimelineItemProps) {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  const handlePrev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const handleNext = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <li
      className={cn(
        "relative mb-16 flex flex-col items-center gap-6 md:flex-row",
        reverse && "md:flex-row-reverse",
        className
      )}
      {...props}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-5 hidden size-3 -translate-x-1/2 rounded-full bg-primary md:block" />

      {/* Image Section */}
      {images.length > 0 && (
        <div className="relative z-10 w-full md:w-1/2">
          <div className="flex flex-wrap justify-center gap-3">
            {images.map((img, i) => (
              <Dialog key={i} open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setIndex(i)}
                    className="w-32 overflow-hidden rounded-md border bg-card shadow-sm transition hover:opacity-90"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || ""}
                      width={300}
                      height={300}
                      className="h-auto w-full object-cover"
                    />
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-lg">
                    <DialogTitle></DialogTitle>
                  <div className="relative flex flex-col items-center">
                    <Image
                      src={images[index].src}
                      alt={images[index].alt || ""}
                      width={600}
                      height={400}
                      className="rounded-md border object-contain"
                    />
                    {images.length > 1 && (
                      <div className="mt-4 flex items-center justify-center gap-6">
                        <button
                          onClick={handlePrev}
                          className="rounded-full border p-2 hover:bg-accent"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-muted-foreground">
                          {index + 1} / {images.length}
                        </span>
                        <button
                          onClick={handleNext}
                          className="rounded-full border p-2 hover:bg-accent"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      )}

      {/* Text Section */}
      <div className="relative z-10 w-full md:w-1/2">
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{label}</h3>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          {children && (
            <p className="mt-2 text-sm text-muted-foreground">{children}</p>
          )}
        </div>
      </div>
    </li>
  )
}

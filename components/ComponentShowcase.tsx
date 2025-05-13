"use client"
import type { ReactNode } from "react"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { CopyIcon } from "lucide-react"

interface ComponentShowcaseProps {
  title: string
  description: string
  preview: ReactNode
  code: string
  installation: string
}

export default function ComponentShowcase({
  title,
  description,
  preview,
  code,
  installation
}: ComponentShowcaseProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="flex h-[350px] items-center justify-center rounded-md border">
        {preview}
      </div>

      <TabsPrimitive.Root defaultValue="code">
        <TabsPrimitive.List className="border-b">
          <TabsPrimitive.Trigger 
            value="code"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Code
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="installation" 
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Installation
          </TabsPrimitive.Trigger>
        </TabsPrimitive.List>

        <TabsPrimitive.Content value="code" className="relative mt-4">
          <pre className="rounded-lg bg-muted p-4">
            <code className="text-sm">{code}</code>
          </pre>
          <button
            className="absolute right-4 top-4"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            <CopyIcon className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </button>
        </TabsPrimitive.Content>

        <TabsPrimitive.Content value="installation" className="relative mt-4">
          <pre className="rounded-lg bg-muted p-4">
            <code className="text-sm">{installation}</code>
          </pre>
          <button
            className="absolute right-4 top-4"
            onClick={() => navigator.clipboard.writeText(installation)}
          >
            <CopyIcon className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </button>
        </TabsPrimitive.Content>
      </TabsPrimitive.Root>
    </div>
  )
}

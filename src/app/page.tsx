"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Globe, LogOut, ChevronLeft, ChevronDown, ChevronUp, User} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue} from "@/components/ui/select";

//sidebar
const SIDEBAR_ITEMS = ["Users", "Array Fields"];

const COLLECTIONS = SIDEBAR_ITEMS; // same list for the grid

export default function CollectionsPage() {
  const [showList, setShowList] = useState(true);

  return (
    <div className="h-dvh w-full bg-neutral-950 text-neutral-50">
      {/* Shell: sidebar + main */}
      <div className="grid h-full grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-neutral-800 md:block">
          <div className="flex h-full flex-col">
        {/* Row 1: back button */}
        <div className="px-3 pt-2">
          <button
            className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 p-1 text-neutral-300 hover:bg-neutral-800 hover:text-white"
            aria-label="Back"
          >
            <ChevronLeft className="size-4" />
          </button>
        </div>

        {/* Row 2: 'Collections' on the left, chevron on the right */}
        <div className="mt-5 flex items-center justify-between px-3">
          <span className="text-sm font-medium text-neutral-400">
            Collections
          </span>
          <button
            onClick={() => setShowList((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 p-1 text-neutral-300 hover:bg-neutral-800 hover:text-white"
            aria-label={showList ? "Collapse" : "Expand"}
          >
            {showList ? (
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </button>
        </div>

        {showList && (
          <ScrollArea className="flex-1">
            <nav className="px-1 py-1">
              <ul className="space-y-0.5">
                {SIDEBAR_ITEMS.map((label) => (
                  <li key={label}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-md px-3 py-1 text-neutral-300 hover:bg-neutral-900 hover:text-white"
                      asChild
                    >
                      <Link href="#">
                        <span className="truncate text-sm">{label}</span>
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollArea>
        )}

            <div className="mt-auto px-2 pb-3 pt-1">
              <Button
                variant="ghost"
                className="w-full justify-start rounded-md px-3 text-neutral-300 hover:bg-neutral-900 hover:text-white"
              >
                <LogOut className="mr-2 size-4" />
                <span className="text-sm">Log out</span>
              </Button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <section className="flex min-w-0 flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3 md:px-6">
            {/* Header Name */}
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Collections
            </h1>

            <div className="flex items-center gap-3">
              <Select defaultValue="en">
                <SelectTrigger className="w-28 border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800">
                  <Globe className="mr-2 size-4" />
                  <SelectValue placeholder="Locale" />
                </SelectTrigger>
                {/* Languages */}
                <SelectContent className="border-neutral-800 bg-neutral-900 text-neutral-200">
                  <SelectItem value="en">ENG</SelectItem>
                  <SelectItem value="cn">CN</SelectItem>
                </SelectContent>
              </Select>
              {/* Avatar */}
              <Avatar className="size-8 border border-neutral-800">
                <AvatarFallback className="bg-neutral-800 text-neutral-300">
                  <User className="size-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>


          {/* Grid */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:p-6">
                {COLLECTIONS.map((name) => (
                  <CollectionCard key={name} name={name} />
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>
      </div>
    </div>
  );
}

function CollectionCard({ name }: { name: string }) {
  return (
    <Card className="group h-36 w-full border-neutral-800 bg-neutral-900/60 backdrop-blur transition-colors hover:bg-neutral-900">
      <CardContent className="flex h-full flex-col justify-start pt-0 px-4 pb-4">
        {/* Label moved upward */}
        <div className="-mt-2 text-base font-medium text-neutral-100 mb-2">
          {name}
        </div>
        <div className="flex items-center justify-start">
          <button
            className="inline-flex size-7 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition-colors group-hover:border-neutral-600 group-hover:text-white"
            aria-label={`Create ${name}`}
            title={`Create ${name}`}
          >
            <Plus className="size-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}


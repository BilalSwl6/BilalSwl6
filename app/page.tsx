"use client"

import React from "react"
import Image from "next/image"
import data from "./projects/data.json"
import GetQuote from "@/components/get-quote"

export default function Home() {
  const skills = [
    { name: "Laravel", icon: "/technologies/laravel.svg" },
    { name: "TypeScript", icon: "/technologies/typescript.svg" },
    { name: "JavaScript", icon: "/technologies/javascript.svg" },
    { name: "Python", icon: "/technologies/python.svg" },
    { name: "Elixir", icon: "/technologies/elixir.svg" },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Hero */}
        <div className="mb-24 flex items-center gap-12">
          <div className="flex-1">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              I&apos;m Bilal
            </h1>
            <p className="text-lg text-muted-foreground">
              I am a student exploring tech. Currently learning to build with
              Laravel, TypeScript, JavaScript, Python, and Elixir.
            </p>
          </div>

          <div className="hidden flex-shrink-0 md:block">
            <Image
              src="/my-outline.png"
              alt="outline"
              width={300}
              height={300}
              className="h-64 w-64 object-contain invert-0 dark:invert drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)] dark:drop-shadow-[4px_4px_12px_rgba(255,255,255,0.9)]"
              unoptimized
            />
          </div>
        </div>

        {/* Projects */}
        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-bold">Projects</h3>
          <div className="space-y-4">
            {data.projects.slice(0, 2).map((project) => (
              <div
                key={project.name}
                className="rounded-md border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <h4 className="mb-2 text-xl font-semibold">{project.name}</h4>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <h3 className="mb-8 text-3xl font-bold">Skills</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-md border bg-card p-4 text-card-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={skill.icon}
                    width={40}
                    height={40}
                    alt={skill.name}
                  />
                  <span className="font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <GetQuote />
      </div>
    </div>
  )
}

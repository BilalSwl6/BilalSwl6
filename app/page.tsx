"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import data from "./projects/data.json";
import GetQuote from "@/components/get-quote";

export default function Home() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const subscribeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial hero animations
    const animateIn = (element: HTMLElement | null, delay: number) => {
      if (!element) return;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      setTimeout(() => {
        element.style.transition = "all 0.8s ease-out";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    };

    animateIn(nameRef.current, 100);
    animateIn(imageRef.current, 250);
    animateIn(subtitleRef.current, 400);

    // Scroll-triggered animations
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Animate skill cards
      skillCardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementVisible = 150;

        if (scrollY + windowHeight - elementVisible > elementTop) {
          const delay = idx * 100;
          setTimeout(() => {
            card.style.transition = "all 0.6s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, delay);
        }
      });

      // Animate project cards
      projectCardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementVisible = 150;

        if (scrollY + windowHeight - elementVisible > elementTop) {
          const delay = idx * 120;
          setTimeout(() => {
            card.style.transition = "all 0.6s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, delay);
        }
      });

      // Animate subscribe section
      if (subscribeRef.current) {
        const rect = subscribeRef.current.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementVisible = 150;

        if (scrollY + windowHeight - elementVisible > elementTop) {
          subscribeRef.current.style.transition = "all 0.6s ease-out";
          subscribeRef.current.style.opacity = "1";
          subscribeRef.current.style.transform = "translateY(0)";
        }
      }
    };

    // Set initial states for scroll animations
    skillCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
      }
    });

    projectCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
      }
    });

    if (subscribeRef.current) {
      subscribeRef.current.style.opacity = "0";
      subscribeRef.current.style.transform = "translateY(40px)";
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "Laravel", icon: "/technologies/laravel.svg" },
    { name: "TypeScript", icon: "/technologies/typescript.svg" },
    { name: "JavaScript", icon: "/technologies/javascript.svg" },
    { name: "Python", icon: "/technologies/python.svg" },
    { name: "Elixir", icon: "/technologies/elixir.svg" },
  ];

  return (
    <>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-24 flex items-center gap-12">
            <div className="flex-1">
              <h1 ref={nameRef} className="text-5xl md:text-6xl font-bold mb-6">
                I&apos;m Bilal
              </h1>

              <div ref={subtitleRef}>
                <p className="text-lg opacity-80">
                  I am a student with little expertise in tech. Currently
                  learning to build things with Laravel, TypeScript, JavaScript,
                  Python, and exploring the world of Elixir.
                </p>
              </div>
            </div>

            <div ref={imageRef} className="hidden md:block flex-shrink-0">
              <Image
                src="/my-outline.png"
                alt="outline"
                className="w-64 h-64 object-contain invert-0 dark:invert drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)] dark:drop-shadow-[4px_4px_12px_rgba(255,255,255,0.9)]"
                unoptimized
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Projects */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold mb-8">Projects</h3>
            <div className="space-y-4">
              {data.projects
                // .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map((project) => (
                  <Card
                    key={project.name}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">
                        {project.name}
                      </h4>
                      <p className="opacity-70">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
          {/* Skills */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold mb-8">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <Image
                      src={skill.icon}
                      width={40}
                      height={40}
                      alt={skill.name}
                    />
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <GetQuote />
        </div>
      </div>
    </>
  );
}

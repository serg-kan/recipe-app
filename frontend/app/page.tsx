'use client'

import { useState, useEffect } from 'react';
import Image from "next/image"


import RecipeCard from "@/components/recipe-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// import StatsCard from '@/components/stats-card';
import Widget from '@/components/widget';
import MealCard from "@/components/meal-card";
import {SidebarNav} from '@/components/sidebar';
import {Separator} from '@/components/ui/separator'

const sidebarNavItems = [
  {
    title: "Recipes",
    href: "/",
  },
  {
    title: "Calculator",
    href: "#",
  },
  {
    title: "Diet",
    href: "##",
  }
]

export interface Artwork {
  artist: string
  art: string
}
 
export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

export default function Home() {

  const [recipes, setRecipes] = useState({});

  // useEffect(() => {
  //   fetch("http://localhost:3001/").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       console.log('data', data);
  //     }
  //   )
  // }, []);

  return (
    <div className="container pb-5">
        <div className="space-y-0.5 pt-5">
          <h2 className="text-2xl font-bold tracking-tight">Your menu</h2>
          <p className="text-muted-foreground">
            Choose what to eat today, count calories, stay in shape
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-row space-x-3 mx-auto">
          <div className="basis-1/5">
            <SidebarNav items={sidebarNavItems} />
          </div>
          <div className="basis-4/5">
            <div>
              <h3 className="">Today</h3>
              <p className="text-sm text-muted-foreground">
                Track your progress
              </p>
            </div>
            <Separator className="my-3" />
            <div className="grid grid-cols-4 gap-2">
              <Widget name="Calories" />
              <Widget name="Proteins" />
              <Widget name="Carbs" />
              <Widget name="Fats" />
            </div>
            <div className="mt-6">
              <h3 className="">Meals</h3>
              <p className="text-sm text-muted-foreground">
                Stay healthy
              </p>
            </div>
            <Separator className="my-3" />
            <div className="flex flex-col space-y-2">
              <MealCard name="Breakfast" />
              <MealCard name="First lunch" />
              <MealCard name="Second lunch" />
              <MealCard name="Dinner" />
              <MealCard name="Snacks" />
            </div>
          </div>
        </div>
      </div>
  )
}

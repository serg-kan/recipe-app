'use client'

import { useState, useEffect } from 'react';

import RecipeCard from "@/components/recipe-card";
import MealDiary from "@/components/meal-diary";
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

export default function Home() {

  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/").then(
      response => response.json()
    ).then(
      data => {
        console.log('data', data);
      }
    )
  }, []);

  return (
    <div className="container">
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
          <div className="basis-4/5 grid grid-cols-2 gap-4">
              <RecipeCard />
              {/* <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard /> */}
          </div>
        </div>
      </div>
  )
}

import RecipeCard from "@/components/recipe-card";
import MealDiary from "@/components/meal-diary";
import {SidebarNav} from '@/components/sidebar';

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
    href: "#",
  }
]

export default function Home() {
  return (
    <div className="flex flex-row space-x-3 mx-auto pt-10">
      <div className="basis-1/5">
        <SidebarNav items={sidebarNavItems} />
      </div>
      <div className="basis-4/5 pr-10">
        <div className="grid grid-cols-2 gap-2">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
      {/* <div className="basis-2/5">
        <div className="flex flex-col space-y-4">
          <MealDiary />
        </div>
      </div> */}
    </div>
  )
}

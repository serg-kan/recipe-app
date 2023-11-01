import RecipeCard from "@/components/recipe-card";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5">Home</div>
      <div className="basis-4/5">
        <div className="flex flex-col space-y-4">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  )
}

'use client'

import * as React from "react"

import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
  ComponentInstanceIcon
} from "@radix-ui/react-icons"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown, Plus, X } from "lucide-react"


import { Badge } from "@/components/ui/badge"
import Pic from '@/public/pic.png'


import { Button } from "@/components/ui/button"
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface MealProps {
  name: string
}

const recipes = [
  {
    name: "Яичница",
    totalAmount: "1",
  },

]

export default function MealCard({ name }: MealProps) {
  return (
    <Card className="flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <CardDescription>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3" />
                Carbs: 10
              </div>
              <div className="flex items-center">
                <StarIcon className="mr-1 h-3 w-3" />
                Proteins: 30
              </div>
              <div className="flex items-center">
                <ComponentInstanceIcon className="mr-1 h-3 w-3" />
                Fats: 5
              </div>
            </div> 
          </div>
          </CardDescription>
        </CardHeader>
        
        <CardContent>  
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Meal</TableHead>
                <TableHead className="text-right">Eaten</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recipes.map((recipe) => (
                <TableRow className="h-8" key={recipe.name}>
                  <TableCell className="font-medium">{recipe.name}</TableCell>
                  <TableCell className="text-right">{recipe.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button>Add new</Button>
          
  
        </CardFooter>      
    </Card>
  )
}

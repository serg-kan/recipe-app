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


export default function RecipeCard() {
  return (
    <Card className="flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Syrniki</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>
        
        <CardContent>  
        </CardContent>
        <CardFooter>
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
  
        </CardFooter>      
    </Card>
  )
}

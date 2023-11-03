import * as React from "react"

import { Button } from "@/components/ui/button"
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

export default function MealDiary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Выбранные блюда</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
}

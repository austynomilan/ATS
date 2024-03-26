'use client'
import React,{ useState } from "react"
import data from '../data.json'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
type Checked = DropdownMenuCheckboxItemProps["checked"]
 
export default function Prefer() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)
 

  const industryNames = data.industries.map(industry => industry.name);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="flex flex-col md:flex-row items-center pt-5">
        <Image src='/list.svg' height={60} width={25} alt='...' />
        <h1 className="pl-2">Preferences</h1>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Industries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {industryNames.map((name, index) => (
          <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
          key={index}
        >
          {name}
        </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
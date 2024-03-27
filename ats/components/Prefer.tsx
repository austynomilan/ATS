'use client';
import React, { useState } from 'react';
import data from '../data.json';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function Prefer() {
  const [industryCheckedState, setIndustryCheckedState] = useState<Checked[]>(
    () => {
      return data.industries.map(() => true);
    }
  );
  const handleIndustryCheckboxChange =
    (index: number) => (isChecked: Checked) => {
      setIndustryCheckedState((prevState) => {
        const newState = [...prevState];
        newState[index] = isChecked;
        return newState;
      });
    };

  const industryNames = data.industries.map((industry) => industry.name);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className='flex flex-col md:flex-row items-center pt-5'>
          <Image src='/list.svg' height={60} width={25} alt='...' />
          <h1 className='pl-2'>Preferences</h1>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Industries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {industryNames.map((name, index) => (
          <DropdownMenuCheckboxItem
            checked={industryCheckedState[index]}
            onCheckedChange={handleIndustryCheckboxChange(index)}
            key={index}
          >
            {name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

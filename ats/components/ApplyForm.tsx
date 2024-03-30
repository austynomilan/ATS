"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  PhoneNumber: z.string().min(7).max(11),
})




function ApplyForm() {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      PhoneNumber: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="PhoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ApplyForm





















// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"


// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// const formSchema = z.object({
//   fullName: z.string().min(2, {
//     message: "fullname must be at least 2 characters.",
//   }),
//   emailAddress: z.string().email(),
//   phoneNumber: z.string().min(7,{
//     message: 'phone number must atleast be 7'
//   }),
//   nationality: z.string(),
//   gender: z.string(),
//   Address: z.string()
// })

// function ApplyForm() {
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues:{
//             fullName: '',
//             emailAddress: "",
//             phoneNumber:'',
//             nationality:'',
//             gender:'',
//             Address: ''
//         }
//     })

//   const  onSubmit = (values: z.infer<typeof formSchema>) => {
//         // Do something with the form values.
//         // ✅ This will be type-safe and validated.
//         console.log(values)
//     }
        
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="">
//         <FormField
//           control={form.control}
//           name="fullName"
//           render={({ field }) => (
//             <FormItem className="flex items-center">
//               <FormLabel className="w-36 text-left -ml-2">Full Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="full name" {...field} className="w-full"/>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="emailAddress"
//           render={({ field }) => (
//             <FormItem className="flex items-center">
//               <FormLabel className="w-32 text-left">Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Email" type="email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="phoneNumber"
//           render={({ field }) => (
//             <FormItem className="flex items-center">
//               <FormLabel className="w-40 -ml-5">Phone Number</FormLabel>
//               <FormControl>
//                 <Input type="number" placeholder="Phone Number" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="nationality"
//           render={({ field }) => (
//             <FormItem className="flex items-center">
//               <FormLabel className="w-36 -mr-2 text-left">Nationality</FormLabel>
//               <FormControl>
//                 <Input placeholder="Nationality" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="gender"
//           render={({ field }) => (
//             <FormItem className="flex items-center" >
//               <FormLabel className="w-36 text-left -ml-2">Gender</FormLabel>
//               <FormControl>
//                 <Input placeholder="Gender" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="Address"
//           render={({ field }) => (
//             <FormItem className="flex items-center">
//               <FormLabel className="w-36 text-left -ml-2">Address</FormLabel>
//               <FormControl>
//                 <Input placeholder="Address" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
       
//         <Button type="submit" className="w-full">Submit</Button>
//       </form>
//     </Form>
//   )
// }
// export default ApplyForm
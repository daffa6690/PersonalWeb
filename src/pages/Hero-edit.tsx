// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { AppSidebar } from "@/components/app-sidebar";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import HeroImage from "../assets/pp.jpeg";
// import { HeroSchema, type HeroSchemaDTO } from "./HeroSchema";
// import { useState } from "react";
// import api from "@/utils/api";

// function EditHero() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<z.input<typeof HeroSchema>>({
//     resolver: zodResolver(HeroSchema),
//   });

//   const onSubmit = async (data: HeroSchemaDTO) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("whatsapp", data.whatsapp.toString());
//     formData.append("location", data.location);

//     if (data.imageUrl && data.imageUrl.length > 0) {
//       formData.append("image", data.imageUrl[0]);
//     }

//     try {
//       setIsSubmitting(true);

//       const res = await api.patch("/hero", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       });

//       console.log("Berhasil disimpan:", res.data);
//       setSuccess(true);
//     } catch (err: any) {
//       console.error("Gagal menyimpan hero:", err?.response?.data || err.message);
//       alert("Gagal menyimpan data. Periksa konsol.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main className="min-h-screen w-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4 py-6">
//         <SidebarTrigger />
//         <Card className="max-w-xl mx-auto">
//           <CardHeader>
//             <CardTitle>Edit Hero Section</CardTitle>
//             <CardDescription>
//               Update your landing page hero content
//             </CardDescription>
//           </CardHeader>

//           <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//             <CardContent className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Enter hero name" {...register("name")} />
//                 <p className="text-red-500 text-sm">{errors.name?.message}</p>
//               </div>

//               <div>
//                 <Label htmlFor="title">Title</Label>
//                 <Input id="title" placeholder="Enter title" {...register("title")} />
//                 <p className="text-red-500 text-sm">{errors.title?.message}</p>
//               </div>

//               <div>
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Short description..."
//                   {...register("description")}
//                 />
//                 <p className="text-red-500 text-sm">{errors.description?.message}</p>
//               </div>

//               <div>
//                 <Label htmlFor="whatsapp">Whatsapp</Label>
//                 <Input
//                   id="whatsapp"
//                   type="text"
//                   placeholder="Whatsapp Number"
//                   {...register("whatsapp")}
//                 />
//                 <p className="text-red-500 text-sm">{errors.whatsapp?.message}</p>
//               </div>

//               <div>
//                 <Label htmlFor="location">Location</Label>
//                 <Input id="location" placeholder="Location" {...register("location")} />
//                 <p className="text-red-500 text-sm">{errors.location?.message}</p>
//               </div>

//               <div>
//                 <Label htmlFor="image">Hero Image</Label>
//                 <Input
//                   id="image"
//                   type="file"
//                   accept="image/*"
//                   {...register("imageUrl")}
//                 />
//                 <p className="text-red-500 text-sm">{errors.imageUrl?.message?.toString()}</p>
//               </div>

//               <img className="h-20 w-20" src={HeroImage} alt="Hero Preview" />
//               {success && (
//                 <p className="text-green-600 text-sm">Data berhasil disimpan!</p>
//               )}
//             </CardContent>

//             <CardFooter className="justify-end">
//               <Button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? "Saving..." : "Save"}
//               </Button>
//             </CardFooter>
//           </form>
//         </Card>
//       </main>
//     </SidebarProvider>
//   );
// }

// export default EditHero;

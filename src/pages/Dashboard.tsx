// import { techs } from "./TechStack";
// import { projects } from "./Projects";
// import { workExperiences } from "./WorkExperiences";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";

// export default function Dashboard() {
//   const counts = {
//     techStacks: techs.length,
//     experiences: workExperiences.length,
//     projects: projects.length,
//   };

//   return (
//     <SidebarProvider>
//      <AppSidebar/>
//     <main className="absolute items-center min-h-screen w-screen overflow-y-auto">
//       <SidebarTrigger/>
//       <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         <div className="dark: bg-white light: bg-gray-900 p-6 rounded-xl shadow text-center">
//           <p className="text-gray-500 mb-2">Total Tech Stack</p>
//           <p className="text-4xl font-bold text-blue-600">
//             {counts.techStacks}
//           </p>
//         </div>
//         <div className=" p-6 rounded-xl shadow text-center">
//           <p className="text-gray-500 mb-2">Total Work Experience</p>
//           <p className="text-4xl font-bold text-green-600">
//             {counts.experiences}
//           </p>
//         </div>
//         <div className="p-6 rounded-xl shadow text-center">
//           <p className="text-gray-500 mb-2">Total Projects</p>
//           <p className="text-4xl font-bold text-purple-600">
//             {counts.projects}
//           </p>
//         </div>
//       </div>
//     </main>
//     </SidebarProvider>
//   );
// }

import { FaNodeJs, FaReact } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { SiExpo, SiTypescript } from "react-icons/si";
import { TbRoute } from "react-icons/tb";

export const TECHNOLOGIES = [
  { name: "React Native", icon: FaReact, color: "from-cyan-500 to-blue-500" },
  { name: "Expo", icon: SiExpo, color: "from-purple-500 to-indigo-500" },
  { name: "Expo Router", icon: TbRoute, color: "from-violet-500 to-purple-500" },
  { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-cyan-600" },
  { name: "Node.js", icon: FaNodeJs, color: "from-green-500 to-emerald-600" },
  { name: "API REST", icon: MdApi, color: "from-orange-500 to-pink-500" },
];
import { FaJava, FaReact, FaShieldAlt } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiAxios,
  SiDocker,
  SiExpo,
  SiHibernate,
  SiJsonwebtokens,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

export const TECHNOLOGIES = [
  // Frontend
  {
    name: "React Native",
    icon: FaReact,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Expo",
    icon: SiExpo,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "Axios",
    icon: SiAxios,
    color: "from-violet-500 to-purple-600",
  },

  // Backend
  {
    name: "Java",
    icon: FaJava,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Spring Security",
    icon: FaShieldAlt,
    color: "from-emerald-500 to-green-700",
  },
  {
    name: "Hibernate / JPA",
    icon: SiHibernate,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "from-blue-700 to-sky-600",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "from-sky-500 to-blue-600",
  },

  // Tools
  {
    name: "Android Studio",
    icon: SiAndroidstudio,
    color: "from-green-500 to-lime-600",
  },
];
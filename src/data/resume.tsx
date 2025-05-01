import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raman Maharjan",
  initials: "RM",
  url: "https://dillion.io",
  location: "Lalitpur, Nepal",
  locationLink: "https://www.google.com/maps/place/Lalitpur",
  description:
    "Student software developer passionate about continuous learning and building real-world applications.",
  summary:
    "I'm a 7th semester software engineering student and I've been programming for about 3 years now. In that time, I’ve built all kinds of stuff — full-stack web apps, random side projects, and whatever else helps me learn. Lately, I’ve been focused on the MERN stack, playing around with things like Next.js and React Query. I built a Twitter clone, a Wordle clone, and even a real-time chat app using Flask and Socket.IO. I’m just trying to get better by building more and sharing the journey along the way. Been posting on LinkedIn too, trying to connect with other devs and put myself out there.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "React Query",
    "Tailwind CSS",
    "Python",
    "Flask",
    "Socket.IO",
    "Git",
    "JavaScript",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ramanmaharzan123@gmail.com",
    tel: "+9779803690063",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Raman-X",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raman-maharjan-33787b359/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=ramanmaharzan123@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Bal Deeksha Sadan Higher Secondary School",
      href: "https://www.bdsschool.edu.np/",
      degree: "Secondary Education Examination (SEE)",
      logoUrl: "/SchoolLogo.png",
      start: "2005",
      end: "2018",
    },
    {
      school: "United Academy",
      href: "https://academy.united.edu.np/",
      degree: "Ten Plus Two (+2) Management",
      logoUrl: "/UnitedAcademy.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Nagarjuna College of Information Technology",
      href: "https://nagarjunacollege.edu.np/",
      degree: "Bachelor's of Information Management (BIM)",
      logoUrl: "/nagarjuna.png",
      start: "2021",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Full Stack twitter clone",
      href: "https://twitter-clone-ka5w.onrender.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A full-stack Twitter clone where users can post tweets with images, like posts, and browse a public feed. Features JWT-based authentication, image uploads via Cloudinary, and smooth data fetching with React Query. Built with the MERN stack and styled using Tailwind CSS + DaisyUI.",
      technologies: [
        "React",
        "React Router DOM",
        "React Query",
        "React Hot Toast",
        "JWT",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "TailwindCSS",
        "DaisyUI",
      ],

      links: [
        {
          type: "Website",
          href: "https://twitter-clone-ka5w.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raman-X/twitter-clone.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/twitter.png",
      video: "",
    },
    {
      title: "Python Chat App",
      href: "https://python-chat-app-hroo.onrender.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Built a real-time group chat application using Flask and Socket.IO with a clean UI and responsive design. Deployed with Gunicorn for production readiness.",
      technologies: [
        "Python",
        "Flask",
        "Socket.IO",
        "Gunicorn",
        "HTML",
        "CSS",
        "JavaScript",
      ],

      links: [
        {
          type: "Website",
          href: "https://python-chat-app-hroo.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raman-X/python-chat-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatapp.png",
      video: "",
    },
    {
      title: "Word game",
      href: "https://word-game-77mn.onrender.com",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Built a Wordle clone using React, allowing users to play the popular word-guessing game with custom word lists and interactive UI.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],

      links: [
        {
          type: "Website",
          href: "https://word-game-77mn.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raman-X/word-game.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wordle.png",
      video: "",
    },
    {
      title: "WorldAPI",
      href: "https://rest-api-countries-app.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Built a country information app that fetches data from a public API, displaying details like population, languages, and region using React Context API.",
      technologies: [
        "React",
        "React Context API",
        "React Router DOM",
        "TailwindCSS",
        "DaisyUI",
      ],

      links: [
        {
          type: "Website",
          href: "https://rest-api-countries-app.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raman-X/countriesAPI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/country.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "some Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

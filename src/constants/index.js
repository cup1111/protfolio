import { logo, meta, shopify } from "../assets/images";
import {
    car,
    contact,
    estate,
    express,
    git,
    github,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

/** 个人联系与社交（Portfolio / About） */
export const personal = {
    name: "ZANE WANG",
    displayName: "Zane",
    email: "zanewang0@gmail.com",
    phone: "0421 917 595",
    linkedin: "https://www.linkedin.com/in/zane-wang1",
    github: "https://github.com/cup1111",
    /** 简短自我介绍（About 页首段） */
    summary:
        "Full-stack engineer focused on TypeScript, React, and Node.js — from multi-tenant B2B SaaS and payments to AI-assisted tools. Master of IT (AI) at UNSW; I ship tested features with clear product trade-offs.",
};

export const education = [
    {
        school: "University of New South Wales (UNSW)",
        degree: "Master of Information Technology",
        field: "Artificial Intelligence",
        period: "2023 – 2025",
    },
    {
        school: "University of Glasgow & UESTC",
        degree: "Bachelor of Electrical and Electronic Engineering",
        field: "Joint Programme",
        period: "2018 – 2022",
    },
];

export const certifications = [
    "AWS Certified Cloud Practitioner",
];

export const awards = [
    "Honourable Mention, Mathematical Contest in Modelling (2021)",
];

/**
 * 技能展示：图标为现有 assets；名称与简历一致
 */
export const skills = [
    { name: "TypeScript", imageUrl: typescript, type: "Language" },
    { name: "JavaScript", imageUrl: javascript, type: "Language" },
    { name: "Python", imageUrl: nodejs, type: "Language" },
    { name: "React", imageUrl: react, type: "Frontend" },
    { name: "Next.js", imageUrl: nextjs, type: "Frontend" },
    { name: "Node.js", imageUrl: nodejs, type: "Backend" },
    { name: "Express", imageUrl: express, type: "Backend" },
    { name: "FastAPI", imageUrl: express, type: "Backend" },
    { name: "tRPC", imageUrl: typescript, type: "API" },
    { name: "MongoDB", imageUrl: mongodb, type: "Database" },
    { name: "MySQL / Prisma", imageUrl: mongodb, type: "Database" },
    { name: "Tailwind CSS", imageUrl: tailwindcss, type: "Frontend" },
    { name: "OpenAI API", imageUrl: summiz, type: "AI" },
    { name: "Git", imageUrl: git, type: "Tooling" },
    { name: "GitHub", imageUrl: github, type: "Tooling" },
    { name: "Docker / CI", imageUrl: github, type: "DevOps" },
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "B2B Marketplace Platform",
        icon: meta,
        iconBg: "#2b77e7",
        date: "Jan 2024 – Present",
        points: [
            "Built a multi-tenant B2B marketplace (React 19, TypeScript, Vite; Node.js, MongoDB): merchant and customer flows, Stripe Checkout, webhooks, refunds, appointments, and a weighted recommendation engine with pre-computed scores and geo-aware ranking.",
            "Implemented RBAC, superadmin approvals, Google Maps geocoding, S3 uploads, Agenda jobs, email templates, and Jest/supertest coverage with CI/CD gates.",
            "Worked with business owners and a technical manager on scope and delivery; addressed security findings from automated scans and rate-limited sensitive routes.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Next Genius",
        icon: shopify,
        iconBg: "#14b8a6",
        date: "Sep 2024 – Dec 2024",
        points: [
            "FastAPI + LangChain + OpenAI: RAG chat over a FAISS (or in-memory) vector store and an alternate code-analysis mode; React 18 + TypeScript + Vite client with Markdown-rendered replies and single POST /api/chat integration.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "AI Planner",
        icon: summiz,
        iconBg: "#8b5cf6",
        date: "Jan 2025 – Oct 2025",
        points: [
            "Contributed across Next.js 14 (App Router, Tailwind) and .NET 8 Web APIs with EF Core, MongoDB, JWT, and OpenAI GPT-4 for AI-assisted scheduling and Google Calendar OAuth sync in a three-person team.",
            "Built calendar UX with drag-and-drop, iterated full-stack features from ideation to demo, and explored Terraform/AWS modules for future cloud deployment.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Emoji Twitter",
        icon: threads,
        iconBg: "#0ea5e9",
        date: "Jul 2025 – Sep 2025",
        points: [
            "Delivered Next.js 15 App Router app with tRPC 11, Prisma, MySQL: JWT auth, Zod-validated emoji-only posts, Upstash sliding-window rate limits, and public feeds plus /@username profiles.",
            "Implemented protected procedures, tRPC React Query invalidation, and Tailwind CSS 4 UI with toasts and optimistic-friendly refresh patterns.",
            "Designed Prisma schema and indexes; exposed type-safe routers for auth, posts, and profile discovery aligned with T3-style conventions.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Resume Pack Generator",
        icon: logo,
        iconBg: "#6366f1",
        date: "Oct 2025 – Present",
        points: [
            "Node.js/TypeScript Express app plus CLI: seven-step OpenAI pipeline (company research, pain points, JD mapping, bullets, CV summary, cover letter, automated review) with Zod validation, job archive/restore, and shared templates between UI and Commander.",
        ],
    },
];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: personal.github,
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: personal.linkedin,
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "Amazon Price Tracker",
        description:
            "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
        link: "https://github.com/adrianhajdin/pricewise",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Full Stack Threads Clone",
        description:
            'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: "https://github.com/adrianhajdin/threads",
    },
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "Car Finding App",
        description:
            "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
        link: "https://github.com/adrianhajdin/project_next13_car_showcase",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Full Stack Instagram Clone",
        description:
            "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
        link: "https://github.com/adrianhajdin/social_media_app",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Real-Estate Application",
        description:
            "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
        link: "https://github.com/adrianhajdin/projects_realestate",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "AI Summarizer Application",
        description:
            "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
        link: "https://github.com/adrianhajdin/project_ai_summarizer",
    },
];

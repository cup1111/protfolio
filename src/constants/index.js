import { logo, meta, shopify } from "../assets/images";
import {
    contact,
    docker,
    express,
    fastapi,
    git,
    github,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    prisma,
    python,
    react,
    redux,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

/** Home 场景：方向键旋转岛屿/天空的角速度（rad/s，在 useFrame 中与 delta 相乘） */
export const KEYBOARD_YAW_SPEED = 2.0;

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
    { name: "Python", imageUrl: python, type: "Language" },
    { name: "React", imageUrl: react, type: "Frontend" },
    { name: "Next.js", imageUrl: nextjs, type: "Frontend" },
    { name: "Node.js", imageUrl: nodejs, type: "Backend" },
    { name: "Express", imageUrl: express, type: "Backend" },
    { name: "FastAPI", imageUrl: fastapi, type: "Backend" },
    { name: "tRPC", imageUrl: redux, type: "API" },
    { name: "MongoDB", imageUrl: mongodb, type: "Database" },
    { name: "MySQL / Prisma", imageUrl: prisma, type: "Database" },
    { name: "Tailwind CSS", imageUrl: tailwindcss, type: "Frontend" },
    { name: "OpenAI API", imageUrl: summiz, type: "AI" },
    { name: "Git", imageUrl: git, type: "Tooling" },
    { name: "GitHub", imageUrl: github, type: "Tooling" },
    { name: "Docker / CI", imageUrl: docker, type: "DevOps" },
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "MAXM Enterprises Pty Ltd",
        icon: meta,
        iconBg: "#2b77e7",
        date: "Oct 2025 – Mar 2026",
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
];

/** Projects 页首段文案（与 About 工作经历互不重复） */
export const projectsIntro =
    "Side projects and independent builds — not the same roles listed under Work Experience on About. Some repos are private; the link opens my GitHub profile — ask if you want stack details.";

/**
 * 精选项目（不含 experiences 中已列的正式工作 / 实习）
 */
export const projects = [
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "AI Planner",
        description:
            "AI-assisted planning product: Next.js 14, Tailwind, .NET 8 Web APIs, EF Core, MongoDB, JWT, OpenAI GPT-4, Google Calendar OAuth, calendar UI with drag-and-drop — built in a three-person team.",
        link: personal.github,
    },
    {
        iconUrl: threads,
        theme: "btn-back-pink",
        name: "Emoji Twitter",
        description:
            "Next.js 15, tRPC 11, Prisma, MySQL: JWT auth, emoji-only posts with Zod validation, Upstash rate limits, public feeds and /@username profiles, Tailwind CSS 4 — T3-style full-stack TypeScript.",
        link: personal.github,
    },
    {
        iconUrl: logo,
        theme: "btn-back-black",
        name: "Resume Pack Generator",
        description:
            "Node.js/TypeScript Express workspace + CLI: seven-step OpenAI pipeline (research, pain points, JD mapping, bullets, summary, cover letter, review) with Zod, job archive/restore, and shared templates.",
        link: personal.github,
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

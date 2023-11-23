import { deutscheBank, bnyMellon } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    redux
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: tailwindcss,
    //     name: "Tailwind CSS",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "SDE Intern",
        company_name: "Deutsche Bank",
        icon: deutscheBank,
        iconBg: "#F5F5F5",
        date: "Jun 2021 - Aug 2021",
        points: [
            "Created a pipeline to fetch Enron Dataset containing 5 lakh records and indexed into Solr",
            "Created REST APIs for messages and developed UI to query the data ingested in Solr based on parameters",
            "Using Jenkins (CI/CD) setup built and deployed the project on Tomcat",
            "Reduced the Time complexity of data cleaning by 10 times ,30 min to 3 min",
            "Technologies Used : Python | Apache Solr | SpringBoot | Angular",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Bank ofNew York Mellon",
        icon: bnyMellon,
        iconBg: "#000000",
        date: "Jul 2022 - Sep 2023",
        points: [
            "Worked on a keystone project in Shared Services",
            "Designing and building a production-level web application",
            "Worked with Clients to take input specs and resolve their issues",
            "Rolled out Self service capabilities for business to create and test rules for reconciliation",
            "Migrated project from Monolith architecture to microfrontends and micro-services architecture.",
            "Built REST APIs for enhancing authentication, logging, throttling, metering and other analytics features",
            "Acquired an extensive proficiency in front-end architecture and implemented data-driven development methodologies.",
            "Wrote test cases and expand test coverage for the code to maintain code quality.",
            "Experienced in Scrum Agile methodology, driving crossfunctional collaboration and delivering high-quality software solutions through effective sprint planning, backlog grooming, and sprint reviews.",
            "Familiarity working with UX and Visual Designers",
            "Handled Prod deployment and resolved issues",
            "Technologies - Spring | React | Drools | DSL",
        ],
    },
];
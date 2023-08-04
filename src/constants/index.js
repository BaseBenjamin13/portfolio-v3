import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    logoB,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
        link: false,
    },
    {
        title: "React Native Developer",
        icon: mobile,
        link: false,
    },
    {
        title: "Backend Developer",
        icon: backend,
        link: false,
    },
    {
        title: "Content Creator",
        icon: creator,
        link: 'https://www.youtube.com/channel/UCOJiwVUueAlGqo788D3d-uQ',
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "PSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: logoB,
        iconBg: "#383E56",
        date: "June 2023 - Present",
        points: [
            "Creating well-structured and tested code using best practices for web development, including responsive design and mobile display.",
            "Turning user stories, mockups, and web designs into functional websites using many tools including React, HTML, CSS, and JavaScript to build, manage and deploy web applications.",
            "Creating and incorporating data from back-end databases like PostgreSQL or MongoDB.",
            "Maintaining up-to-date knowledge of industry trends and technologies.",
        ],
    },
    {
        title: "Landscape Manager",
        company_name: "LTP Landscaping",
        icon: logoB,
        iconBg: "#383E56",
        // iconBg: "#E6DEDD",
        date: "April 2016 - June 2023",
        points: [
            "Led a team of 3, trained the team to use required tools, and worked efficiently to increase company revenue by 50%.",
            "Helping all 60 customers through their complaints/requests and fixing them, demonstrating attention to detail.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Benjamin is a valuable team member and great to work alongside. He truly is invested in the project and is always willing to learn more and lend a hand. His love for problem solving and his proactive approach to finding solutions is a great asset and increases the efficiency of the team as a whole. Ben is a dependable full-stack software engineer and can have fun while doing it. He would be a great addition to any team!",
        name: "Charnaye Grier",
        designation: false,
        company: false,
        image: "https://avatars.githubusercontent.com/u/98440887?v=4",
    },
];

const projects = [
    {
        name: "Tech Excess",
        description:
            "Tech excess is a tech store made and reviewed by Benjamin Morgiewicz. Made with React, Django, PSQL, Python, and PayPal's API. In three weeks I learned and used Django's User, Knox authentication token, and PayPal.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "Django",
                color: "orange-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            },
            {
                name: "Github",
                color: "blue-text-gradient",
            },
        ],
        image: "https://i.imgur.com/zKykPu2.png",
        link: "https://tech-excess.netlify.app",
        source_code_link: "https://github.com/BaseBenjamin13/tech-excess-client",
        source_code_link_backend: "https://github.com/BaseBenjamin13/tech-excess-server",
    },
    {
        name: "Analytical",
        description:
        "A group project that helps you manage client & invoice data. I worked on the frontend while my teammate was on the backend. We had regular standups to ensure great communication, time-management, and overall project success. Utilized React, MUI, JavaScript, HTML, CSS, Python, Django, and SQL.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MUI",
                color: "green-text-gradient",
            },
            {
                name: "Django",
                color: "orange-text-gradient",
            },
            {
                name: "SQL",
                color: "pink-text-gradient",
            },
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "CSS3",
                color: "orange-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: "https://i.imgur.com/xczKVTc.png",
        link: "https://dbanalytical.netlify.app",
        source_code_link: "https://github.com/BaseBenjamin13/dashboard_client",
        source_code_link_backend: "https://github.com/darrius-brown/dashboard_django/tree/main",
    },
    {
        name: "Star Wars Social",
        description:
        "All star wars fans big and small can come to Star Wars Social to talk about, like, review and make favorites of all movies, shows, games, and watch/playlists for later. Made RESTful JSON API fetch calls to an Express, MongoDB, and Node backend handling all (CRUD) functionality's, and tested all backend routes during development using Postman. Used design patterns to define 4 JSON schemas for MongoDB collections. Used passport, and express-session for user authentication.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "orange-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Handlebars",
                color: "green-text-gradient",
            },
        ],
        image: "https://i.imgur.com/NdPWO86.jpg",
        link: "https://starwars-social.herokuapp.com/movies",
        source_code_link: 'https://github.com/BaseBenjamin13/starwars-social',
        source_code_link_backend: false,
    },
    {
        name: "BlackJack",
        description:
        "BlackJack is a card game. The goal of blackjack is to get 21 but if you are over 21 you lose, you can win by getting closer to 21 than the dealer. Utilized Javascript for the logic behind the game and dom manipulation to have live feedback, made in 2 weeks. Created Black Jack with a desktop-first approach and styled using Styled Components and CSS3 with flexbox layouts.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "HTML5",
                color: "green-text-gradient",
            },
            {
                name: "CSS3",
                color: "pink-text-gradient",
            },
        ],
        image: "https://i.imgur.com/WADvHYc.jpg",
        link: "https://basebenjamin13.github.io/Blackjack/",
        source_code_link: 'https://github.com/BaseBenjamin13/Blackjack',
        source_code_link_backend: false,
    },
];

export { services, technologies, experiences, testimonials, projects };
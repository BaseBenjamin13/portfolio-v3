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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    logoB,
    upgLogo,
    python,
    django,
    psql,
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
export const navExternalLinks = [
    {
        title: "Github",
        link: "https://github.com/BaseBenjamin13"
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/benjamin-morgiewicz/"
    },
    {
        title: "Resume",
        link: "https://docs.google.com/document/d/1nE7pI-H-R6A6TC2AZISy0a1BEOcka3LNq2h_-JzPB7Q/edit?usp=sharing"
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
        link: false,
    },
    {
        title: "IOS Developer",
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
        icon: python,
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
        icon: psql,
    },
    {
        name: "Django",
        icon: django,
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
// const technologies = [
//     {
//         name: "JavaScript",
//         icon: javascript,
//     },
//     {
//         name: "React JS",
//         icon: reactjs,
//     },
//     {
//         name: "Python",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//     },
//     {
//         name: "HTML 5",
//         icon: html,
//     },
//     {
//         name: "CSS 3",
//         icon: css,
//     },
//     {
//         name: "Node JS",
//         icon: nodejs,
//     },
//     {
//         name: "TypeScript",
//         icon: typescript,
//     },
//     {
//         name: "Tailwind CSS",
//         icon: tailwind,
//     },
//     {
//         name: "MongoDB",
//         icon: mongodb,
//     },
//     {
//         name: "PSQL",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//     },
//     {
//         name: "git",
//         icon: git,
//     },
//     {
//         name: "figma",
//         icon: figma,
//     },
// ];

const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "UPG LLC",
        icon: upgLogo,
        iconBg: "#383E56",
        date: "Aug 2024 - Present",
        points: [
            "Furthering my knowledge in web development while using Next.js, JavaScript, and API’s.",
            "Developing responsive and dynamic web applications.",
            "Implementing modern front-end technologies and practices.",
            "Collaborating with a talented team to bring innovative projects to life.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Techjamin Freelancing",
        icon: logoB,
        iconBg: "#383E56",
        date: "July 2023 - Present",
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
    {
        testimonial:
            "Benjamin is a skilled React developer who consistently delivered impressive projects. Their ability to explain technical concepts stood out, making teamwork effective and enjoyable. Their friendly approach and strong communication make them an excellent asset to any team.",
        name: "Jerome Haynes",
        designation: false,
        company: false,
        image: "https://jeromehaynes.com/_ipx/w_384,q_75/%2F_next%2Fstatic%2Fmedia%2Fjh.82a0923d.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fjh.82a0923d.jpg&w=384&q=75",
    },
];

const projects = [
    {
        name: "Bottomless Closet",
        description:
            "My team and I won a one week hackathon. The theme was to redesign a non for profit's website. We choose Bottomless Closet. Using git workflow & team code reviews resulted in 0 deployed errors and overall team success. Had daily meetings with dev & UX teams to ensure communication allowing the project to move quickly and smoothly without any miscommunication between teams. My contributions were the homepage, donation process, and API integration.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Next.js",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
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
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "orange-text-gradient",
            },
        ],
        image: "https://i.imgur.com/9Ph1vuL.png",
        link: "https://main.d415obh25yr7h.amplifyapp.com",
        source_code_link: "https://github.com/BaseBenjamin13/bottomlesscloset/tree/dev",
        source_code_link_backend: "https://github.com/sramalho94/bottomless-closet-backend",
    },
    {
        name: "AI Assistant",
        description:
            "Too better understand Chat-GPT I decided to make a AI assistant using OpenAI's chat-gpt API. Since my goal for this app was to learn OpenAI's API I just made a simple React app using TailwindCSS for styling.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Open AI's API",
                color: "orange-text-gradient",
            },
            {
                name: "Github",
                color: "pink-text-gradient",
            },
        ],
        image: "https://i.imgur.com/K4c7cCS.png",
        link: "https://your-ai-assistant.netlify.app",
        source_code_link: "https://github.com/BaseBenjamin13/ai-assistant",
        source_code_link_backend: false,
    },
    // {
    //     name: "Tech Excess",
    //     description:
    //         "Tech excess is a tech store made and reviewed by Benjamin Morgiewicz. Made with React, Django, PSQL, Python, and PayPal's API. In three weeks I learned and used Django's User, Knox authentication token, and PayPal.",
    //     tags: [
    //         {
    //             name: "React",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "Python",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "Django",
    //             color: "orange-text-gradient",
    //         },
    //         {
    //             name: "PostgreSQL",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "Github",
    //             color: "blue-text-gradient",
    //         },
    //     ],
    //     image: "https://i.imgur.com/zKykPu2.png",
    //     link: "https://tech-excess.netlify.app",
    //     source_code_link: "https://github.com/BaseBenjamin13/tech-excess-client",
    //     source_code_link_backend: "https://github.com/BaseBenjamin13/tech-excess-server",
    // },
    // {
    //     name: "Analytical",
    //     description:
    //     "A group project that helps you manage client & invoice data. I worked on the frontend while my teammate was on the backend. We had regular standups to ensure great communication, time-management, and overall project success. Utilized React, MUI, JavaScript, HTML, CSS, Python, Django, and SQL.",
    //     tags: [
    //         {
    //             name: "React",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "MUI",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "Django",
    //             color: "orange-text-gradient",
    //         },
    //         {
    //             name: "SQL",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "HTML5",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "Python",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "CSS3",
    //             color: "orange-text-gradient",
    //         },
    //         {
    //             name: "JavaScript",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: "https://i.imgur.com/xczKVTc.png",
    //     link: "https://dbanalytical.netlify.app",
    //     source_code_link: "https://github.com/BaseBenjamin13/dashboard_client",
    //     source_code_link_backend: "https://github.com/darrius-brown/dashboard_django/tree/main",
    // },
    // {
    //     name: "StarWars Social",
    //     description:
    //     "All star wars fans big and small can come to Star Wars Social to talk about, like, review and make favorites of all movies, shows, games, and watch/playlists for later. Made RESTful JSON API fetch calls to an Express, MongoDB, and Node backend handling all (CRUD) functionality's, and tested all backend routes during development using Postman. Used design patterns to define 4 JSON schemas for MongoDB collections. Used passport, and express-session for user authentication.",
    //     tags: [
    //         {
    //             name: "JavaScript",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "Node.js",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "MongoDB",
    //             color: "orange-text-gradient",
    //         },
    //         {
    //             name: "Express",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "Bootstrap",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "Handlebars",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: "https://i.imgur.com/NdPWO86.jpg",
    //     link: "https://starwars-social.herokuapp.com/movies",
    //     source_code_link: 'https://github.com/BaseBenjamin13/starwars-social',
    //     source_code_link_backend: false,
    // },
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
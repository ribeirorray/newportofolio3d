import { cs, malu, cooper, net, curva } from "../assets/images";
import {
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    summiz,
    tailwindcss,
    threads,
    typescript

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: net,
        name: ".Net",
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

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
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
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Analista Desenvolvedor Pleno",
        company_name: "Curva",
        icon: curva,
        iconBg: "#accbe1",
        date: "Julho 2022 - Dez 2022",
        points: [
            "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
            " Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
            " Implementar design responsivo e garantir compatibilidade entre navegadores.",
            " Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores."
        ],
    },
    {
        title: "Analista Desenvolvedor Junior",
        company_name: "CRP",
        icon: cooper,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Julho 2022",
        points: [
            "  Contribuí de forma proativa para o desenvolvimento do novo sistema em Visual Basic.Net, aplicando minhas habilidades no Bunifu Framework UI e na integração com o banco de dados MySql.",
            "  Assumi a responsabilidade pela criação do banco de dados,UML, elaboração do diagrama de classes e desempenhei um papel colaborativo na criação da interface do usuário. ",
            "  Trabalhei em estreita colaboração com a equipe, liderando testes para assegurar a precisão e confiabilidade do sistema.       "],
    },
    {
        title: "Designer",
        company_name: "Malu Brindes",
        icon: malu,
        iconBg: "#b7e4c7",
        date: "Out 2023 - Nov 2023",
        points: [
            "Contribuí de maneira proativa para o aprimoramento da identidade visual da marca, utilizando minhas habilidades em design gráfico e ferramentas como Adobe Creative Suite.",
            "Assumi a responsabilidade pela criação de logotipos, flyers e banners, aplicando minha expertise em software de design, como Photoshop e Illustrator.",
            "Desenvolvi materiais promocionais impactantes, alinhados à visão e valores da marca, e participei ativamente na concepção de identidades visuais únicas.",
            "Trabalhei em estreita colaboração com a equipe de marketing, garantindo a consistência visual em campanhas e materiais de comunicação.",
            "Liderei a execução de testes de usabilidade, garantindo a eficácia e a experiência do usuário em diferentes plataformas."
        ],
    },
    {
        title: "Designer",
        company_name: "Contabilidade Sant'anna",
        icon: cs,
        iconBg: "#fff",
        date: "Jan 2023 - Fev 2023",
        points: [
            "Desenvolvi uma abordagem criativa e única na concepção de logotipos alinhados à visão e valores da marca, transmitindo efetivamente sua identidade.",
            "Trabalhei em estreita colaboração com a equipe de marketing, garantindo a aplicação consistente do logotipo em vários materiais e canais de comunicação.",
            "Liderei a execução de testes de usabilidade, assegurando que o logotipo fosse distintivo e reconhecível em diferentes contextos.",
            "Desenvolvi uma abordagem criativa e única na concepção de logotipos alinhados à visão e valores da marca, transmitindo efetivamente sua identidade.",
            "Trabalhei em estreita colaboração com a equipe de marketing, garantindo a aplicação consistente do logotipo em vários materiais e canais de comunicação.",
            "Liderei a execução de testes de usabilidade, assegurando que o logotipo fosse distintivo e reconhecível em diferentes contextos."],
    },
];

export const socialLinks = [
    {
        name:'Contact',
        iconUrl: contact,
        link:'/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link:'https://github.com/ribeirorray',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link:'https://www.linkedin.com/in/rayanenascimento-dev/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'YouTube Clone',
        description: 'YouTube Clone Application in React JS with Material UI 5.',
        link:'https://youtube-clone-nine-phi.vercel.app',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Stock VisualBasic.Net',
        description: 'Visual.NET, EF, Stored Procedures using Sql Server.',
        link:'https://github.com/ribeirorray/EstoqueMaster',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'Thesocial APP in flutter + Firebase',
        description: 'My Project Final to college .',
        link:'https://github.com/ribeirorray/thesocialappflutter',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Metaverse UI UX',
        description: 'Next 13 Website With Framer Motion & Tailwind CSS',
        link:'https://metaverse-sage-psi.vercel.app/',
    },

    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'HILINK ',
        description: 'web application front-end for travels.',
        link: 'https://travell-8weg8jf1l-ribeirorrays-projects.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link:'https://github.com/ribeirorray/React_API_Article_Extractor',
    }
];
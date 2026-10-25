export const content = {
    fr: {
        nav: {
            home: "Accueil",
            courses: "Compétences",
            career: "Parcours",
            mobility: "Mobilité",
            engagement: "Engagement",
            activities: "Activités"
        },
        profile: {
            name: "Cyrian Revel--Hidalgo",
            title: "Étudiant ingénieur en informatique — ENSEEIHT",
            subTitle: "ENSEEIHT Sciences du Numérique",
            email: "cyrian.revel-hidalgo@etu.n7-inp.fr",
            phone: "+33 7 66 83 06 31"
        },
        skills: {
            title: "Compétences",
            subtitle: "Langages, bibliothèques, outils et environnements maîtrisés",
            projectsTitle: "Projets"
        },
        career: {
            title: "Parcours",
            elevatorPitchTitle: "Elevator Pitch",
            elevatorPitchDesc: "Synthèse de mon projet professionnel et académique.",
            cvFr: "CV (FR)",
            cvEn: "CV (EN)",
            coursesBtn: "Cours suivis",
            experienceTitle: "Expérience",
            roleModelsTitle: "Inspirations professionnelles"
        },
        mobility: {
            title: "Mobilité internationale & Langues",
            destinations: "Projets de mobilité"
        },
        engagement: {
            title: "Engagement citoyen & associatif",
            subtitle: "Actions collectives, responsabilités et engagements bénévoles"
        },
        activities: {
            title: "Activités & Centres d'intérêt",
        },

        // PROJETS
        projects: [
            {
                ref: "PRJ-01",
                date: "Décembre 2025",
                title: "Mini-mémoire Théorie des graphes",
                desc: "Présentation et analyse formelle de plusieurs applications fondamentales en théorie des graphes.",
                tags: ["LaTeX", "Mathématiques"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-02",
                date: "Mars 2026",
                title: "Classification d'images satellites",
                desc: "Projet de deep learning dédié à la détection automatisée d'éoliennes sur imagerie satellite.",
                tags: ["TensorFlow", "Keras", "Régression statistique", "Fine-tuning"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-03",
                date: "Février 2026",
                title: "Réduction de dimension en apprentissage non supervisé",
                desc: "Rapport d'étude comparatif analysant les performances et limites de deux approches : l'ACP et l'autoencodeur.",
                tags: ["R", "FactoMineR", "ACP", "Autoencodeur"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-04",
                date: "Novembre 2025",
                title: "Analyse de recettes de cuisine",
                desc: "Pipeline d'extraction, nettoyage et traitement analytique de données massives collectées sur Marmiton.",
                tags: ["Python", "SQL", "Pandas", "BeautifulSoup", "Web Scraping"],
                link: "https://github.com/ton-profil"
            }
        ],

        // PARCOURS ACADÉMIQUE
        academic: [
            {
                year: "2026 - ...",
                title: "ENSEEIHT — Diplôme d'ingénieur Sciences du Numérique",
                details: "Toulouse, France",
                courses: [
                    "Probabilités",
                    "Intégration",
                    "Optimisation",
                    "Programmation impérative",
                    "Modélisation"
                ]
            },
            {
                year: "2025 - 2026",
                title: "Licence CMI Ingénierie de la Statistique et Informatique",
                details: "Université de Bordeaux, France",
                courses: [
                    "Théorie du langage",
                    "Théorie des graphes",
                    "Probabilités",
                    "Programmation orientée objet",
                    "Deep Learning",
                    "Algorithmique des graphes"
                ]
            },
            {
                year: "2023 - 2025",
                title: "CPGE MPSI - MP",
                details: "Lycée Alain Fournier, Bourges",
                courses: [
                    "Mathématiques",
                    "Physique-Chimie",
                    "Sciences de l'ingénieur",
                    "Informatique"
                ]
            },
            {
                year: "2019 - 2023",
                title: "Baccalauréat général",
                details: "Lycée des Graves, Gradignan",
                courses: [
                    "Mathématiques",
                    "Physique-Chimie",
                    "Sciences Économiques et Sociales"
                ]
            }
        ],

        // EXPÉRIENCES
        experiences: [
            {
                role: "Logisticien Vendeur",
                company: "Leroy Merlin — Rayon Cour des matériaux",
                location: "Gradignan",
                period: "Juillet-Août 2025 & Août 2026",
                tasks: [
                    "Mise en rayon et balisage des produits",
                    "Accueil, écoute et conseil technique auprès des clients",
                    "Application stricte des protocoles et règles de sécurité"
                ]
            },
            {
                role: "Préparateur de Commandes",
                company: "Lacoste DBE — Papeterie",
                location: "Gradignan",
                period: "Juin 2026",
                tasks: [
                    "Gestion logistique, ordonnancement et suivi sous Excel",
                    "Rigueur opérationnelle et cadence d'exécution"
                ]
            }
        ],

        // INSPIRATIONS (N1, N2, N3)
        roleModels: [
            { name: "Inspiration N1", role: "Profil cible & Référence scientifique", image: "/images/role-models/model-1.webp" },
            { name: "Inspiration N2", role: "Recherche appliquée / Ingénierie", image: "/images/role-models/model-2.webp" },
            { name: "Inspiration N3", role: "Innovation & Modélisation", image: "/images/role-models/model-3.webp" }
        ],

        // LANGUES
        mobilityLangs: [
            { name: "Français", level: "Langue Maternelle" },
            { name: "English", level: "B2" },
            { name: "Español", level: "B1" }
        ],

        // PROJETS DE MOBILITÉ
        destinations: [
            {
                name: "Montréal",
                country: "Canada",
                image: "/images/mobility/montreal.webp",
                desc: "Projet de double diplôme avec l'école Polytechnique Montréal. J'envisage un master de recherche puis un doctorat au MILA, un institut de recherche en intelligence artificielle dont certains projets d'utilisation de l'IA pour réduire les inégalités me séduisent particulièrement."
            },
            {
                name: "Atlanta",
                country: "États-Unis",
                image: "/images/mobility/atlanta.webp",
                desc: "Projet de double diplôme avec Georgia Tech. L'idée est d'ouvrir mon profil à l'international avec des projets axés sur le calcul scientifique haute performance, l'optimisation combinatoire et la recherche en modélisation mathématique."
            },
            {
                name: "Suède",
                country: "Stockholm",
                image: "/images/mobility/suede.webp",
                desc: "Échange Erasmus au sein du KTH Royal Institute of Technology à Stockholm."
            }
        ],

        // ENGAGEMENTS (4 ITEMS -> 2 LIGNES DE 2 CASES)
        engagements: [
            {
                ref: "2011-2023",
                date: "Scoutisme",
                title: "Scoutisme",
                desc: "Durant une dizaine d'années, le scoutisme m'a permis de monter des projets (organisation de week-ends, extra-jobs pour récolter des fonds), participer à des événements caritatifs et faire de nombreuses rencontres.",
            },
            {
                ref: "2026",
                date: "Sensibilisation",
                title: "Fresque du Climat",
                desc: "Participation active à cet atelier collaboratif permettant de prendre pleinement conscience des mécanismes de l'impact humain sur l'environnement et de structurer des actions concrètes pour en réduire l'ampleur.",
            },
            {
                ref: "2026",
                date: "Sensibilisation",
                title: "Procès de King Kong",
                desc: "Lors de la semaine d'intégration à l'ENSEEIHT, participation et échange autour de la pièce de théâtre interactive « Le procès de King Kong », dédiée à la prévention des violences sexistes et sexuelles (VSS) et de leurs répercussions.",
            },
            {
                ref: "2026",
                date: "Débat & Réflexion",
                title: "Festival « Futur Proche »",
                desc: "Participation à ce festival inter-universités toulousain. Échanges et débats stimulants avec d'autres futurs ingénieurs autour des enjeux sociétaux, de l'impact de l'IA générative et de l'éthique de l'ingénieur.",
            }
        ],

        // ACTIVITÉS (2 ITEMS -> CENTRÉS)
        activitiesList: [
            {
                name: "Euphonium et Tuba",
                category: "Musique & Ensembles",
                image: "/images/activities/euphonium.webp",
                desc: "Solfège et pratique de l'euphonium durant 12 ans (fin de 3ème cycle au conservatoire de Gradignan). J'ai eu l'occasion de jouer dans de multiples formations : du tuba en orchestre symphonique et groupe de musique de chambre, à l'euphonium en ensemble de cuivres, soliste accompagné d'un piano ou au sein d'une harmonie semi-professionnelle."
            },
            {
                name: "Roller artistique",
                category: "Sport de compétition & Arbitrage",
                image: "/images/activities/roller.webp",
                desc: "Ancien sportif de bon niveau en roller artistique, j'ai expérimenté la haute compétition avec plusieurs titres de vice-champion de France en solo et en couple ainsi qu'une qualification en coupe d'Europe. Pratique également en groupe de 4 à 9 patineurs. Diplômé juge régional, je prépare le cursus pour officier au niveau national."
            }
        ]
    },

    en: {
        nav: {
            home: "Home",
            courses: "Skills",
            career: "Career",
            mobility: "Mobility",
            engagement: "Engagement",
            activities: "Activities"
        },
        profile: {
            name: "Cyrian Revel--Hidalgo",
            title: "Computer Science Engineering Student — ENSEEIHT",
            subTitle: "ENSEEIHT Digital Sciences",
            email: "cyrian.revel-hidalgo@etu.n7-inp.fr",
            phone: "+33 7 66 83 06 31"
        },
        skills: {
            title: "Skills",
            subtitle: "Programming languages, frameworks, libraries and tools",
            projectsTitle: "Projects"
        },
        career: {
            title: "Career & Education",
            elevatorPitchTitle: "Elevator Pitch",
            elevatorPitchDesc: "Overview of my academic track and professional ambitions.",
            cvFr: "Resume (FR)",
            cvEn: "Resume (EN)",
            coursesBtn: "Relevant coursework",
            experienceTitle: "Work Experience",
            roleModelsTitle: "Professional Inspirations"
        },
        mobility: {
            title: "International Mobility & Languages",
            destinations: "Mobility projects"
        },
        engagement: {
            title: "Civic & Community Engagement",
        },
        activities: {
            title: "Activities & Interests",
        },

        projects: [
            {
                ref: "PRJ-01",
                date: "December 2025",
                title: "Graph Theory Research Paper",
                desc: "Formal presentation and algorithmic analysis of key applications in modern graph theory.",
                tags: ["LaTeX", "Mathematics"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-02",
                date: "March 2026",
                title: "Satellite Imagery Classification",
                desc: "Deep learning pipeline designed for automated wind turbine identification in high-resolution satellite imagery.",
                tags: ["TensorFlow", "Keras", "Statistical Regression", "Fine-tuning"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-03",
                date: "February 2026",
                title: "Dimensionality Reduction in Unsupervised Learning",
                desc: "Comparative benchmark paper investigating mathematical principles and trade-offs between PCA and Autoencoders.",
                tags: ["R", "FactoMineR", "PCA", "Autoencoders"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-04",
                date: "November 2025",
                title: "Culinary Recipe Data Analytics",
                desc: "End-to-end web scraping, data cleaning, relational structuring and exploration pipeline built on Marmiton datasets.",
                tags: ["Python", "SQL", "Pandas", "BeautifulSoup", "Web Scraping"],
                link: "https://github.com/ton-profil"
            }
        ],

        academic: [
            {
                year: "2026 - ...",
                title: "ENSEEIHT — Master of Science in Engineering (Digital Sciences)",
                details: "Toulouse, France",
                courses: [
                    "Probability",
                    "Integration Theory",
                    "Optimization",
                    "Imperative Programming",
                    "System Modeling"
                ]
            },
            {
                year: "2025 - 2026",
                title: "Bachelor CMI — Statistics & Computer Science Engineering",
                details: "University of Bordeaux, France",
                courses: [
                    "Formal Language Theory",
                    "Graph Theory",
                    "Probability",
                    "Object-Oriented Programming",
                    "Deep Learning",
                    "Graph Algorithms"
                ]
            },
            {
                year: "2023 - 2025",
                title: "CPGE MPSI - MP (Intensive STEM Foundation)",
                details: "Lycée Alain Fournier, Bourges, France",
                courses: [
                    "Advanced Mathematics",
                    "Physics & Chemistry",
                    "Engineering Sciences",
                    "Theoretical Computer Science"
                ]
            },
            {
                year: "2019 - 2023",
                title: "French General Baccalaureate (High School Diploma)",
                details: "Lycée des Graves, Gradignan, France",
                courses: [
                    "Mathematics",
                    "Physics & Chemistry",
                    "Economics & Social Sciences"
                ]
            }
        ],

        experiences: [
            {
                role: "Sales Logistician",
                company: "Leroy Merlin — Building Materials Yard",
                location: "Gradignan, France",
                period: "July-August 2025 & August 2026",
                tasks: [
                    "Merchandise stock management and aisle signage",
                    "Technical customer advice and sales assistance",
                    "Strict enforcement of industrial safety standards"
                ]
            },
            {
                role: "Order Fulfillment Specialist",
                company: "Lacoste DBE — Stationery & Logistics",
                location: "Gradignan, France",
                period: "June 2026",
                tasks: [
                    "Order preparation, logistics organization and spreadsheet tracking in Excel",
                    "High operational precision and workflow reliability"
                ]
            }
        ],

        roleModels: [
            { name: "Inspiration N1", role: "Target Career & Scientific Figure", image: "/images/role-models/model-1.webp" },
            { name: "Inspiration N2", role: "Applied Research & Engineering", image: "/images/role-models/model-2.webp" },
            { name: "Inspiration N3", role: "Algorithmics & Innovation", image: "/images/role-models/model-3.webp" }
        ],

        mobilityLangs: [
            { name: "Français", level: "Native" },
            { name: "English", level: "B2" },
            { name: "Español", level: "B1" }
        ],

        destinations: [
            {
                name: "Montreal",
                country: "Canada",
                image: "/images/mobility/montreal.webp",
                desc: "Dual-degree academic track with Polytechnique Montréal. Aiming for a research master's followed by a Ph.D. at MILA (Quebec AI Institute), drawn to AI research initiatives focused on bridging inequalities."
            },
            {
                name: "Atlanta",
                country: "United States",
                image: "/images/mobility/atlanta.webp",
                desc: "Dual-degree program at Georgia Tech. Focused on high-performance scientific computing, combinatorial optimization, and mathematical modeling research."
            },
            {
                name: "Sweden",
                country: "Stockholm",
                image: "/images/mobility/suede.webp",
                desc: "Erasmus exchange at KTH Royal Institute of Technology in Stockholm. Deepening expertise in theoretical computer science and distributed architectures."
            }
        ],

        engagements: [
            {
                ref: "2011-2023",
                title: "Scouting Movement",
                desc: "Over a decade in scouting led me to manage comprehensive projects (weekend camp logistics, fundraising micro-jobs), support charity initiatives, and foster strong team leadership.",
            },
            {
                ref: "2026",
                date: "Awareness Workshop",
                title: "Climate Fresk",
                desc: "Active participant in this collaborative science-based workshop deciphering climate dynamics, human environmental impact, and concrete mitigation avenues.",
            },
            {
                ref: "2026",
                date: "Awareness Workshop",
                title: "The Trial of King Kong",
                desc: "Attended and engaged in this interactive play during ENSEEIHT orientation week, focused on raising awareness and preventing gender-based and sexual harassment in higher education.",
            },
            {
                ref: "2026",
                date: "Debate & Ethics",
                title: "« Futur Proche » Festival",
                desc: "Attended this Toulouse university festival, joining constructive debates with future engineers on societal transformations, generative AI accountability, and engineering ethics.",
            }
        ],

        activitiesList: [
            {
                name: "Euphonium & Tuba",
                category: "Music & Orchestras",
                image: "/images/activities/euphonium.webp",
                desc: "12 years of music theory and euphonium practice (3rd cycle graduate from the Gradignan Conservatory). Extensive performance background: tuba in symphonic orchestras and chamber ensembles, euphonium in brass bands, piano accompaniment solos, and semi-professional wind orchestras."
            },
            {
                name: "Artistic Roller Skating",
                category: "Competitive Sport & Judging",
                image: "/images/activities/roller.webp",
                desc: "Former high-level competitive artistic roller skater, multiple-time French Vice-Champion in solo and pairs, with a qualification for the European Cup. Group choreography experience (4 to 9 skaters). Certified regional judge, currently pursuing national-level accreditation."
            }
        ]
    }
};

// DONNÉES TECHNIQUES & LOGOS OFFICIELS
export const technicalData = {
    avatar: "/images/avatar.webp",
    cvFr: "/docs/cv-cyrian-revel-hidalgo-fr.pdf",
    cvEn: "/docs/cv-cyrian-revel-hidalgo-en.pdf",
    githubUrl: "https://github.com/ton-profil",
    linkedinUrl: "https://linkedin.com/in/ton-profil",

    // COMPÉTENCES AVEC LOGOS (Devicon)
    skillsList: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Matlab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Unix / Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
};
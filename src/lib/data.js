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
            title: "Etudiant ingénieur en informatique  - ENSEEIHT",
            subTitle: "ENSEEIHT Sciences du Numérique",
            email: "cyrian.revel-hidalgo@etu.n7-inp.fr",
            phone: "+33 7 66 83 06 31"
        },
        skills: {
            title: "Compétences :",
            projectsTitle: "Projets"
        },
        career: {
            title: "Parcours",
            pitch: "Elevator Pitch",
            cvFr: "CV (FR)",
            cvEn: "CV (EN)",
            coursesBtn: "Cours suivis :",
            experienceTitle: "Expérience",
            roleModelsTitle: "Inspirations professionnelles"
        },
        mobility: {
            title: "Mobilité internationale & Langues",
            destinations: "Projets de mobilité"
        },
        engagement: {
            title: "Engagement citoyen & associatif"
        },
        activities: {
            title: "Activités & Centres d'intérêt"
        },

        projects: [
            {
                ref: "PRJ-01",
                category: "Deep Learning",
                date: "Mars 2026",
                title: "Classification d'images satellites",
                desc: "Projet de deep learning pour la détection d'éoliennes.",
                tags: ["Régression statistique", "Fine-tuning", "Keras", "TensorFlow"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-02",
                category: "Apprentissage non supervisé",
                date: "Février 2026",
                title: "Réduction de dimension en apprentissage non supervisé",
                desc: "Rapport de groupe comparant 2 méthodes : l'ACP et l'autoencodeur.",
                tags: ["R", "FactoMineR", "ACP"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-03",
                category: "Théorie des graphes",
                date: "Décembre 2025",
                title: "Mini-mémoire Théorie des graphes :",
                desc: "Présentation de quelques applications en théorie des graphes",
                tags: ["LaTeX"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-04",
                category: "Analyse de données",
                date: "Novembre 2025",
                title: "Analyse de recettes de cuisine",
                desc: "Travail d'analyse de données récupérées sur le site de recettes Marmiton.",
                tags: ["Scrapping web", "Nettoyage de données", "Python", "SQL", "Pandas", "BeautifulSoup"],
                link: "https://github.com/ton-profil"
            }
        ],

        // PARCOURS AVEC LES 4 LOGOS
        academic: [
            {
                year: "2026 - ...",
                title: "ENSEEIHT - Diplôme d'ingénieur Sciences du Numérique",
                details: "Toulouse, France",
                logo: "/images/logos/n7.webp",
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
                logo: "/images/logos/u-bordeaux.webp",
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
                title: "CPGE MPSI-MP",
                details: "Lycée Alain Fournier, Bourges",
                logo: "/images/logos/alain-fournier.webp",
                courses: [
                    "Mathématiques",
                    "Physique-Chimie",
                    "Science de l'ingénieur",
                    "Informatique"
                ]
            },
            {
                year: "2019 - 2023",
                title: "Baccalauréat général",
                details: "Lycée des Graves, Gradignan",
                logo: "/images/logos/lycee-des-graves.webp",
                courses: [
                    "Mathématiques",
                    "Physique-Chimie",
                    "Sciences Economiques et Sociales"
                ]
            }
        ],

        experiences: [
            {
                role: "Logisticien Vendeur",
                company: "Leroy Merlin",
                location: "Rayon : Cour des matériaux, Gradignan",
                period: "Juillet-Août 2025 & Août 2026",
                logo: "/images/logos/leroy-merlin.webp",
                tasks: [
                    "Mise en rayon et balisage",
                    "Accueil et conseils des clients",
                    "Respect des règles de sécurité"
                ]
            },
            {
                role: "Préparateur de Commandes",
                company: "Lacoste DBE",
                location: "Papeterie, Gradignan",
                period: "Juin 2026",
                logo: "/images/logos/lacoste-dbe.webp",
                tasks: [
                    "Organisation, Excel",
                    "Rigueur et efficacité"
                ]
            },
            {
                role: "Stage d'observation",
                company: "Proditec",
                location: "Pessac",
                period: "2019",
                logo: "/images/logos/proditec.webp",
                desc: "Entreprise de fabrication de machines d'inspection automatisées pour les industries pharmaceutique et de la frappe de monnaie.",
                tasks: [
                    "Computer vision",
                    "Modélisation 3D"
                ]
            }
        ],

        roleModels: [
            { name: "N1", role: "Inspiration professionnelle", image: "/images/role-models/model-1.webp" },
            { name: "N2", role: "Inspiration professionnelle", image: "/images/role-models/model-2.webp" },
            { name: "N3", role: "Inspiration professionnelle", image: "/images/role-models/model-3.webp" }
        ],

        mobilityLangs: [
            { name: "Français", level: "Langue Maternelle" },
            { name: "English", level: "B2" },
            { name: "Español", level: "B1" }
        ],

        destinations: [
            {
                name: "Montréal :",
                country: "Canada",
                image: "/images/mobility/montreal.webp",
                desc: "Projet de double diplôme avec l'école Polytechnique Montréal. J'envisage un master de recherche puis un doctorat au MILA, un institut de recherche en intelligence artificielle dont certains projets d'utilisation de l'IA pour réduire les inégalités me séduisent particulièrement."
            },
            {
                name: "Atlanta :",
                country: "États-Unis",
                image: "/images/mobility/atlanta.webp",
                desc: "Projet de double diplôme avec Georgia Tech. L'idée est d'ouvrir mon profil à l'international. Projets axés sur le calcul scientifique haute performance, l'optimisation combinatoire et la recherche en modélisation mathématique."
            },
            {
                name: "Suède :",
                country: "Stockholm",
                image: "/images/mobility/suede.webp",
                desc: "Échange Erasmus au sein du KTH Royal Institute of Technology à Stockholm."
            }
        ],

        engagements: [
            {
                ref: "ENG-01",
                date: "Engagement",
                title: "Scoutisme :",
                desc: "Durant une dizaine d'année le scoutisme m'a permis de monter des projets (organisation de week-ends, extra-jobs pour récolter des fonds,...), participer à des événements caritatifs et faire beaucoup de rencontres.",
                tags: ["Projets", "Événements caritatifs", "Rencontres"]
            },
            {
                ref: "ENG-02",
                date: "Engagement",
                title: "Fresque du Climat :",
                desc: "J'ai pu participer à cet activité permettant de prendre conscience de l'effet de l'homme sur son environnement et réfléchir à des moyens de réduire son impact.",
                tags: ["Environnement", "Sensibilisation", "Impact"]
            },
            {
                ref: "ENG-03",
                date: "Engagement",
                title: "Procès de King Kong :",
                desc: "Lors de la semaine d'intégration à l'ENSEEIHT, j'ai pu assister et participer à la pièce de théâtre interactive « Le procès de King Kong » portant sur les violences sexistes et sexuelles (VSS) et leurs conséquences.",
                tags: ["ENSEEIHT", "VSS", "Théâtre interactif"]
            },
            {
                ref: "ENG-04",
                date: "Engagement",
                title: "Festival « Futur Proche » :",
                desc: "J'ai eu la chance de participer à ce festival organisé par les différentes universités de Toulouse. Ce fut l'occasion de rencontrer de nombreux futurs ingénieurs pour débattre sur l'impact de l'IA générative et l'éthique de l'ingénieur.",
                tags: ["IA générative", "Éthique de l'ingénieur", "Débat"]
            }
        ],

        activitiesList: [
            {
                name: "Euphonium et Tuba:",
                category: "Musique",
                image: "/images/activities/euphonium.webp",
                desc: "Solfège et pratique de l'euphonium durant 12 ans (fin de 3ème cycle au conservatoire de Gradignan). J'ai eu l'occasion de jouer dans de multiples formations allant de l'orchestre symphonique et d'un groupe de musique de chambre au tuba, à un ensemble de cuivre, soliste accompagné d'un piano ou encore dans une harmonie semie-professionnelle à l'euphonium."
            },
            {
                name: "Roller artistique :",
                category: "Sport",
                image: "/images/activities/roller.webp",
                desc: "Ancien sportif de bon niveau en roller artistique, j'ai pu expérimenter la compétition avec plusieurs titres de vice-champion de France en solo et en couple ainsi qu'une qualification à la coupe d'Europe. J'ai également fait partie de différents groupes, de 4 à 9 patineurs. Je suis maintenant passé de l'autre côté avec l'obtient de mon diplôme de juge régionnal, et compte bien me former à un niveau national dans les années à venir."
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
            title: "Computer Science Engineering Student - ENSEEIHT",
            subTitle: "ENSEEIHT Digital Sciences",
            email: "cyrian.revel-hidalgo@etu.n7-inp.fr",
            phone: "+33 7 66 83 06 31"
        },
        skills: {
            title: "Skills :",
            projectsTitle: "Projects"
        },
        career: {
            title: "Career",
            pitch: "Elevator Pitch",
            cvFr: "Resume (FR)",
            cvEn: "Resume (EN)",
            coursesBtn: "Courses taken :",
            experienceTitle: "Experience",
            roleModelsTitle: "Professional Inspirations"
        },
        mobility: {
            title: "International Mobility & Languages",
            destinations: "Mobility Projects"
        },
        engagement: {
            title: "Civic & Community Engagement"
        },
        activities: {
            title: "Activities & Interests"
        },

        projects: [
            {
                ref: "PRJ-01",
                category: "Deep Learning",
                date: "March 2026",
                title: "Satellite Imagery Classification",
                desc: "Deep learning project for wind turbine detection.",
                tags: ["Statistical Regression", "Fine-tuning", "Keras", "TensorFlow"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-02",
                category: "Unsupervised Learning",
                date: "February 2026",
                title: "Dimensionality Reduction in Unsupervised Learning",
                desc: "Group report comparing two methods: PCA and autoencoders.",
                tags: ["R", "FactoMineR", "PCA"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-03",
                category: "Graph Theory",
                date: "December 2025",
                title: "Graph Theory Mini-Dissertation :",
                desc: "Presentation of several applications in graph theory",
                tags: ["LaTeX"],
                link: "https://github.com/ton-profil"
            },
            {
                ref: "PRJ-04",
                category: "Data Analysis",
                date: "November 2025",
                title: "Recipe Data Analysis",
                desc: "Data analysis project based on recipes collected from Marmiton.",
                tags: ["Web Scraping", "Data Cleaning", "Python", "SQL", "Pandas", "BeautifulSoup"],
                link: "https://github.com/ton-profil"
            }
        ],

        academic: [
            {
                year: "2026 - ...",
                title: "ENSEEIHT - Master of Science in Engineering (Digital Sciences)",
                details: "Toulouse, France",
                logo: "/images/logos/n7.webp",
                courses: [
                    "Probability",
                    "Integration",
                    "Optimization",
                    "Imperative Programming",
                    "Modeling"
                ]
            },
            {
                year: "2025 - 2026",
                title: "Bachelor CMI - Statistics & Computer Science Engineering",
                details: "University of Bordeaux, France",
                logo: "/images/logos/u-bordeaux.webp",
                courses: [
                    "Language Theory",
                    "Graph Theory",
                    "Probability",
                    "Object-Oriented Programming",
                    "Deep Learning",
                    "Graph Algorithms"
                ]
            },
            {
                year: "2023 - 2025",
                title: "CPGE MPSI-MP",
                details: "Lycée Alain Fournier, Bourges",
                logo: "/images/logos/alain-fournier.webp",
                courses: [
                    "Mathematics",
                    "Physics-Chemistry",
                    "Engineering Science",
                    "Computer Science"
                ]
            },
            {
                year: "2019 - 2023",
                title: "General Baccalaureate",
                details: "Lycée des Graves, Gradignan",
                logo: "/images/logos/lycee-des-graves.webp",
                courses: [
                    "Mathematics",
                    "Physics-Chemistry",
                    "Economic and Social Sciences"
                ]
            }
        ],

        experiences: [
            {
                role: "Sales Logistician",
                company: "Leroy Merlin",
                location: "Department: Building Materials Yard, Gradignan",
                period: "July-August 2025 & August 2026",
                logo: "/images/logos/leroy-merlin.webp",
                tasks: [
                    "Stock replenishment and shelf labeling",
                    "Customer reception and technical advice",
                    "Compliance with safety regulations"
                ]
            },
            {
                role: "Order Fulfillment Specialist",
                company: "Lacoste DBE",
                location: "Stationery, Gradignan",
                period: "June 2026",
                logo: "/images/logos/lacoste-dbe.webp",
                tasks: [
                    "Organization, Excel",
                    "Rigor and efficiency"
                ]
            },
            {
                role: "Observation Internship",
                company: "Proditec",
                location: "Pessac",
                period: "2019",
                logo: "/images/logos/proditec.webp",
                desc: "Manufacturing company producing automated inspection machines for pharmaceutical and minting industries.",
                tasks: [
                    "Computer vision",
                    "3D modeling"
                ]
            }
        ],

        roleModels: [
            { name: "N1", role: "Professional inspiration", image: "/images/role-models/model-1.webp" },
            { name: "N2", role: "Professional inspiration", image: "/images/role-models/model-2.webp" },
            { name: "N3", role: "Professional inspiration", image: "/images/role-models/model-3.webp" }
        ],

        mobilityLangs: [
            { name: "French", level: "Native Language" },
            { name: "English", level: "B2" },
            { name: "Spanish", level: "B1" }
        ],

        destinations: [
            {
                name: "Montreal :",
                country: "Canada",
                image: "/images/mobility/montreal.webp",
                desc: "Dual-degree program with Polytechnique Montréal. Planning a research master's followed by a PhD at MILA, an AI research institute whose projects using AI to reduce inequalities particularly appeal to me."
            },
            {
                name: "Atlanta :",
                country: "United States",
                image: "/images/mobility/atlanta.webp",
                desc: "Dual-degree program with Georgia Tech to expand my international profile. Projects focused on high-performance scientific computing, combinatorial optimization, and mathematical modeling research."
            },
            {
                name: "Sweden :",
                country: "Stockholm",
                image: "/images/mobility/suede.webp",
                desc: "Erasmus exchange at KTH Royal Institute of Technology in Stockholm."
            }
        ],

        engagements: [
            {
                ref: "ENG-01",
                date: "Engagement",
                title: "Scouting :",
                desc: "For about ten years, scouting allowed me to lead projects (organizing weekends, odd jobs for fundraising,...), take part in charity events, and meet many people.",
                tags: ["Projects", "Charity events", "Community"]
            },
            {
                ref: "ENG-02",
                date: "Engagement",
                title: "Climate Fresk :",
                desc: "I participated in this activity to become aware of human impact on the environment and reflect on ways to reduce it.",
                tags: ["Environment", "Awareness", "Impact"]
            },
            {
                ref: "ENG-03",
                date: "Engagement",
                title: "King Kong Trial :",
                desc: "During the ENSEEIHT orientation week, I attended and took part in the interactive play 'The King Kong Trial' dealing with gender-based and sexual violence (GSV) and its consequences.",
                tags: ["ENSEEIHT", "Awareness", "Interactive theatre"]
            },
            {
                ref: "ENG-04",
                date: "Engagement",
                title: "« Futur Proche » Festival :",
                desc: "I had the opportunity to attend this festival organized by Toulouse universities. It was a great opportunity to meet future engineers to debate the impact of generative AI and engineering ethics.",
                tags: ["Generative AI", "Engineering ethics", "Debate"]
            }
        ],

        activitiesList: [
            {
                name: "Euphonium and Tuba:",
                category: "Music",
                image: "/images/activities/euphonium.webp",
                desc: "Music theory and euphonium practice for 12 years (end of 3rd cycle at the Gradignan conservatory). I played in multiple formations ranging from symphonic orchestra and chamber music group on tuba, to brass ensemble, soloist accompanied by piano, or in a semi-professional wind band on euphonium."
            },
            {
                name: "Artistic Roller Skating :",
                category: "Sport",
                image: "/images/activities/roller.webp",
                desc: "Former competitive artistic roller skater, I experienced competition with several French Vice-Champion titles in solo and pairs, as well as a qualification for the European Cup. I was also part of groups from 4 to 9 skaters. I have now transitioned to judging with my regional judge certificate, and plan to train at the national level in the coming years."
            }
        ]
    }
};

export const technicalData = {
    avatar: "/images/avatar.webp",
    cvFr: "/docs/cv-cyrian-revel-hidalgo-fr.pdf",
    cvEn: "/docs/cv-cyrian-revel-hidalgo-en.pdf",
    githubUrl: "https://github.com/ton-profil",
    linkedinUrl: "https://linkedin.com/in/ton-profil",

    skillsList: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Matlab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Unix", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
};
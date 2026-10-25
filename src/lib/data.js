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
            email: "cyrian.revel-hidalgo@etu.enseeiht.fr",
            phone: "+33 6 XX XX XX XX"
        },
        skills: {
            title: "Compétences & Stack",
            subtitle: "Langages, frameworks et environnements de développement",
            projectsTitle: "Projets récents"
        },
        career: {
            title: "Formation & Expérience",
            coursesBtn: "Cours suivis",
            pitch: "Elevator Pitch",
            cvFr: "CV (FR)",
            cvEn: "CV (EN)",
            roleModels: "Modèles d'inspiration"
        },
        mobility: {
            title: "Mobilité internationale & Langues",
            destinations: "Projets de mobilité (cliquer pour détails)"
        },
        engagement: { title: "Engagement citoyen & associatif" },
        activities: { title: "Activités & Centres d'intérêt" }
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
            title: "Computer Science Student — ENSEEIHT",
            email: "cyrian.revel-hidalgo@etu.enseeiht.fr",
            phone: "+33 6 XX XX XX XX"
        },
        skills: {
            title: "Skills & Stack",
            subtitle: "Programming languages, frameworks and environments",
            projectsTitle: "Featured Projects"
        },
        career: {
            title: "Education & Career",
            coursesBtn: "Relevant coursework",
            pitch: "Elevator Pitch",
            cvFr: "Resume (FR)",
            cvEn: "Resume (EN)",
            roleModels: "Role Models"
        },
        mobility: {
            title: "International Mobility & Languages",
            destinations: "Mobility plans (click for details)"
        },
        engagement: { title: "Civic & Community Engagement" },
        activities: { title: "Activities & Interests" }
    }
};

export const technicalData = {
    avatar: "/images/avatar.webp",
    cvFr: "/docs/cv-cyrian-revel-hidalgo-fr.pdf",
    cvEn: "/docs/cv-cyrian-revel-hidalgo-en.pdf",
    githubUrl: "https://github.com/ton-profil",
    linkedinUrl: "https://linkedin.com/in/ton-profil",
    
    skillCategories: [
        {
            category: "Languages",
            skills: ["Python", "SQL", "Java", "Ada"]
        },
        {
            category: "Data & ML",
            skills: ["Matlab", "NumPy", "Scikit-Learn"]
        },
        {
            category: "Tools & OS",
            skills: ["Linux", "Git", "VS Code"]
        }
    ],

projects: [
        {
            ref: "PRJ-01",
            category: "cs.SE / Web",
            date: "2026",
            title: "Personal ePortfolio",
            desc: "Architecture statique ultra-légère conçue sous SvelteKit. Zéro dépendance superflue, temps de chargement immédiat et accessibilité bilingue.",
            tags: ["SvelteKit", "JavaScript", "CSS"],
            link: "https://github.com/ton-profil/portfolio",
            metric: "0 ms backend latency"
        },
        {
            ref: "PRJ-02",
            category: "math.NA / Numérique",
            date: "2025",
            title: "Simulation d'EDO & Systèmes dynamiques",
            desc: "Implémentation d'intégrateurs symplectiques et analyse de convergence pour la trajectoire de systèmes multi-corps.",
            tags: ["Python", "NumPy", "Matplotlib"],
            link: "https://github.com/ton-profil/simulation-edo",
            metric: "Runge-Kutta ordre 4"
        },
        {
            ref: "PRJ-03",
            category: "cs.LG / Machine Learning",
            date: "2025",
            title: "Classification & Régression supervisée",
            desc: "Pipeline complet de traitement de données : extraction de caractéristiques, réduction de dimension (ACP) et optimisation d'hyperparamètres.",
            tags: ["Scikit-Learn", "Python", "Pandas"],
            link: "https://github.com/ton-profil/ml-pipeline",
            metric: "Score F1 : 0.94"
        },
        {
            ref: "PRJ-04",
            category: "cs.DS / Algorithmique",
            date: "2024",
            title: "Optimisation de graphes de transport",
            desc: "Résolution de problèmes de plus court chemin et de flot maximal sur des réseaux à grande échelle sous contraintes de charge.",
            tags: ["Java", "Algorithmique"],
            link: "https://github.com/ton-profil/graph-optimization",
            metric: "Dijkstra & A*"
        }
    ],

    // Cours en liste avec enseignant entre parenthèses
    academic: [
        {
            year: "2026 - ...",
            title: "ENSEEIHT — Sciences du Numérique",
            details: "Toulouse, France",
            courses: [
                { name: "Algorithmique avancée & Complexité", teacher: "Pr. Martin" },
                { name: "Architecture des ordinateurs & Systèmes", teacher: "Pr. Dupont" },
                { name: "Probabilités appliquées & Statistiques", teacher: "Pr. Lefebvre" },
                { name: "Réseaux & Télécommunications", teacher: "Pr. Bernard" }
            ]
        },
        {
            year: "2025 - 2026",
            title: "Licence CHI / ISI",
            details: "Université",
            courses: [
                { name: "Programmation système en C", teacher: "Pr. Robert" },
                { name: "Bases de données relationnelles & SQL", teacher: "Pr. Thomas" },
                { name: "Théorie des graphes", teacher: "Pr. Simon" }
            ]
        },
        {
            year: "2023 - 2025",
            title: "CPGE MPSI - MP",
            details: "Lycée",
            courses: [
                { name: "Algèbre linéaire & bilinéaire", teacher: "Professeur de Mathématiques" },
                { name: "Analyse réelle & complexe", teacher: "Professeur de Mathématiques" },
                { name: "Physique théorique & Électromagnétisme", teacher: "Professeur de Physique" },
                { name: "Informatique théorique (OCaml / Python)", teacher: "Professeur d'Option" }
            ]
        },
        {
            year: "2019 - 2023",
            title: "Lycée des Graves",
            details: "Baccalauréat Général",
            courses: [
                { name: "Spécialité Mathématiques & Mathématiques Expertes", teacher: "" },
                { name: "Spécialité Physique-Chimie", teacher: "" }
            ]
        }
    ],

    experiences: [
        {
            role: "Stage Ingénieur",
            company: "Airbus, Toulouse",
            period: "Juin - Juillet",
            desc: "Immersion technique au sein des équipes d'ingénierie aéronautique."
        }
    ],

    roleModels: [
        {
            name: "Prénom NOM",
            role: "Ingénieur — Entreprise",
            degree: "Diplôme d'ingénieur",
            specialty: "Aéronautique",
            image: "/images/role-models/model-1.webp"
        },
        {
            name: "Prénom NOM",
            role: "Chercheur — Laboratoire",
            degree: "Doctorat en Mathématiques",
            specialty: "Machine Learning",
            image: "/images/role-models/model-2.webp"
        },
        {
            name: "Prénom NOM",
            role: "Directeur Technique",
            degree: "Master CS",
            specialty: "Architecture logicielle",
            image: "/images/role-models/model-3.webp"
        }
    ],

    mobilityLangs: [
        { name: "Français", level: "Native" },
        { name: "English", level: "C1" },
        { name: "Español", level: "B1" }
    ],

    // Destinations avec texte détaillé pour la modale
    destinations: [
        {
            name: "Montréal",
            country: "Canada",
            image: "/images/mobility/montreal.webp",
            desc: "Projet d'échange académique d'un semestre à Polytechnique Montréal. Approfondissement en informatique théorique, génie logiciel et intelligence artificielle appliquée dans un environnement bilingue stimulant."
        },
        {
            name: "Atlanta",
            country: "États-Unis",
            image: "/images/mobility/atlanta.webp",
            desc: "Séjour d'immersion académique à Georgia Tech. Projets axés sur le calcul scientifique haute performance, l'optimisation combinatoire et la recherche en modélisation mathématique."
        },
        {
            name: "Suède",
            country: "Europe du Nord",
            image: "/images/mobility/suede.webp",
            desc: "Échange Erasmus au sein du KTH Royal Institute of Technology à Stockholm. Spécialisation sur les systèmes distribués robustes, les réseaux décentralisés et les méthodologies de recherche scandinaves."
        }
    ],

    engagements: [
        {
            title: "Scoutisme",
            desc: "Responsabilités pédagogiques, animation d'équipe et autonomie collective sur le terrain.",
            image: "/images/engagement/scoutisme.webp"
        },
        {
            title: "Engagement N° 2",
            desc: "Implication et responsabilités dans la vie associative étudiante.",
            image: "/images/engagement/engagement-2.webp"
        },
        {
            title: "Engagement N° 3",
            desc: "Actions d'entraide et transmission scientifique.",
            image: "/images/engagement/engagement-3.webp"
        }
    ],

    activitiesList: [
        { name: "Euphonium", desc: "Pratique instrumentale et orchestre", image: "/images/activities/euphonium.webp" },
        { name: "Roller skating", desc: "Freeskate urbain et précision", image: "/images/activities/roller.webp" },
        { name: "Running", desc: "Entraînement régulier et endurance", image: "/images/activities/running.webp" }
    ]
};
<script>
    import { lang } from '#lib/store.js';
    import { content, technicalData } from '#lib/data.js';

    let t = $derived(content[$lang] ?? content.fr ?? {});

    // Gestion de la fenêtre modale (petite fenêtre au clic)
    let selectedItem = $state(null);

    function openModal(item) {
        selectedItem = item;
    }

    function closeModal() {
        selectedItem = null;
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') closeModal();
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- HERO ASYMÉTRIQUE -->
<section id="home" class="hero-asym">
    <div class="hero-left">
        <h1 class="name">{t.profile?.name ?? 'Cyrian Revel--Hidalgo'}</h1>
        <p class="role-desc">{t.profile?.title ?? 'CS & Applied Mathematics Student'}</p>
        <p class="academic-sub">CPGE MPSI / MP &bull; ENSEEIHT Sciences du Numérique</p>
        
        <div class="hero-actions">
            <a href={technicalData.githubUrl} target="_blank" rel="noopener noreferrer" class="link-mono">[GitHub]</a>
            <a href={technicalData.linkedinUrl} target="_blank" rel="noopener noreferrer" class="link-mono">[LinkedIn]</a>
            <a href="mailto:{t.profile?.email}" class="link-mono">[Email]</a>
            <span class="phone-mono">{t.profile?.phone}</span>
        </div>
    </div>

    <div class="hero-right">
        <div class="photo-frame">
            <img 
                src={technicalData.avatar} 
                alt="Cyrian Revel--Hidalgo" 
                class="photo-translucent"
                on:error={(e) => e.currentTarget.style.display = 'none'} 
            />
        </div>
    </div>
</section>

<!-- SECTION PROJETS : GRILLE 4 COLONNES ET EFFET CARNET DE RECHERCHE -->
<section id="projects" class="projects-section">
    <div class="section-header">
        <div>
            <h2>{t.skills?.projectsTitle ?? 'Travaux & Projets'}</h2>
            <p class="section-caption">Sélection de réalisations scientifiques, algorithmiques et logicielles.</p>
        </div>
        <span class="grid-counter">[{technicalData.projects.length} travaux référencés]</span>
    </div>

    <div class="projects-quad-grid">
        {#each technicalData.projects as proj}
            <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="research-card"
                aria-label="Ouvrir le dépôt du projet {proj.title}"
            >
                <!-- Indicateur géométrique de survol en haut de carte -->
                <div class="card-edge-glow"></div>

                <!-- En-tête de carte façon preprint -->
                <div class="card-meta">
                    <span class="meta-ref">{proj.ref}</span>
                    <span class="meta-cat">{proj.category}</span>
                    <span class="meta-date">{proj.date}</span>
                </div>

                <h4 class="proj-title">{proj.title}</h4>
                <p class="proj-abstract">{proj.desc}</p>

                <!-- Métrique / formule de rigueur -->
                {#if proj.metric}
                    <div class="proj-metric">
                        <span class="metric-symbol">Δ</span>
                        <span class="metric-text">{proj.metric}</span>
                    </div>
                {/if}

                <!-- Pied de carte : stack et indicateur tactile -->
                <div class="card-footer">
                    <div class="tags-cluster">
                        {#each proj.tags as tag}
                            <span class="code-pill">{tag}</span>
                        {/each}
                    </div>
                    <span class="action-bracket">[src]</span>
                </div>
            </a>
        {/each}
    </div>
</section>

<!-- PARCOURS ACADÉMIQUE AVEC LISTE VERTICALE ET PROFS -->
<section id="career">
    <div class="section-header">
        <h2>{t.career?.title}</h2>
    </div>

    <div class="math-card banner-docs">
        <div>
            <h4>{t.career?.pitch}</h4>
            <p class="muted">Documents de synthèse académique et professionnelle.</p>
        </div>
        <div class="cv-actions">
            <a href={technicalData.cvFr} target="_blank" rel="noopener noreferrer" class="btn-primary">{t.career?.cvFr}</a>
            <a href={technicalData.cvEn} target="_blank" rel="noopener noreferrer" class="btn-primary">{t.career?.cvEn}</a>
        </div>
    </div>

    <!-- TIMELINE ACADÉMIQUE -->
    <div class="timeline-academic">
        {#each technicalData.academic as stage}
            <div class="timeline-row">
                <div class="time-col">{stage.year}</div>
                <div class="content-col">
                    <h4>{stage.title}</h4>
                    <p class="muted">{stage.details}</p>

                    <!-- COURS SUIVIS EN LISTE VERTICALE -->
                    <details class="courses-accordion">
                        <summary class="courses-trigger">
                            <span>{t.career?.coursesBtn}</span>
                            <span class="arrow">↓</span>
                        </summary>
                        <ul class="courses-vertical-list">
                            {#each stage.courses as c}
                                <li class="course-line">
                                    <span class="bullet">&bull;</span>
                                    <span class="course-name">{c.name}</span>
                                    {#if c.teacher}
                                        <span class="course-teacher">({c.teacher})</span>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </details>
                </div>
            </div>
        {/each}
    </div>

    <h3 class="subsection-title">Expérience</h3>
    {#each technicalData.experiences as exp}
        <div class="math-card">
            <div class="card-header-flex">
                <h4>{exp.role} &mdash; <span class="highlight">{exp.company}</span></h4>
                <span class="period-mono">{exp.period}</span>
            </div>
            <p class="exp-desc">{exp.desc}</p>
        </div>
    {/each}

    <h3 class="subsection-title">{t.career?.roleModels}</h3>
    <div class="cards-grid">
        {#each technicalData.roleModels as rm}
            <div class="math-card media-card">
                <img 
                    src={rm.image} 
                    alt={rm.name} 
                    loading="lazy" 
                    class="card-img" 
                    on:error={(e) => e.currentTarget.style.display = 'none'} 
                />
                <div class="card-pad">
                    <h4>{rm.name}</h4>
                    <p class="role-spec">{rm.role}</p>
                    <p class="sub-detail">{rm.degree} &bull; {rm.specialty}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- MOBILITÉ AVEC CADRES INTERACTIFS ET MODALE AU CLIC -->
<section id="mobility">
    <div class="section-header">
        <h2>{t.mobility?.title}</h2>
    </div>

    <div class="lang-grid">
        {#each technicalData.mobilityLangs as l}
            <div class="lang-box">
                <span class="lang-name">{l.name}</span>
                <span class="lang-level">{l.level}</span>
            </div>
        {/each}
    </div>

    <h3 class="subsection-title">{t.mobility?.destinations}</h3>
    <div class="cards-grid">
        {#each technicalData.destinations as d}
            <!-- Carte interactive cliquable avec ombrage marqué -->
            <button 
                type="button" 
                class="destination-card" 
                on:click={() => openModal(d)}
                aria-label="Voir les détails pour {d.name}"
            >
                <div class="img-wrapper">
                    <img 
                        src={d.image} 
                        alt={d.name} 
                        loading="lazy" 
                        class="card-img" 
                        on:error={(e) => e.currentTarget.style.display = 'none'} 
                    />
                    <span class="click-badge">Détails ↗</span>
                </div>
                <div class="card-pad">
                    <div class="dest-header">
                        <h4>{d.name}</h4>
                        <span class="country-tag">{d.country}</span>
                    </div>
                    <p class="dest-preview">{d.desc.slice(0, 75)}...</p>
                </div>
            </button>
        {/each}
    </div>
</section>

<!-- ENGAGEMENT -->
<section id="engagement">
    <div class="section-header">
        <h2>{t.engagement?.title}</h2>
    </div>
    <div class="cards-grid">
        {#each technicalData.engagements as eng}
            <div class="math-card media-card">
                <img 
                    src={eng.image} 
                    alt={eng.title} 
                    loading="lazy" 
                    class="card-img" 
                    on:error={(e) => e.currentTarget.style.display = 'none'} 
                />
                <div class="card-pad">
                    <h4>{eng.title}</h4>
                    <p class="sub-detail">{eng.desc}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- ACTIVITÉS -->
<section id="activities">
    <div class="section-header">
        <h2>{t.activities?.title}</h2>
    </div>
    <div class="cards-grid">
        {#each technicalData.activitiesList as act}
            <div class="math-card media-card">
                <img 
                    src={act.image} 
                    alt={act.name} 
                    loading="lazy" 
                    class="card-img" 
                    on:error={(e) => e.currentTarget.style.display = 'none'} 
                />
                <div class="card-pad">
                    <h4>{act.name}</h4>
                    <p class="sub-detail">{act.desc}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- FENÊTRE MODALE ÉPURÉE AU CLIC SUR UNE DESTINATION -->
{#if selectedItem}
    <div 
        class="modal-backdrop" 
        on:click={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        role="presentation"
    >
        <div class="modal-dialog" role="dialog" aria-modal="true">
            <button class="modal-close" on:click={closeModal} aria-label="Fermer la fenêtre">✕</button>
            {#if selectedItem.image}
                <img src={selectedItem.image} alt={selectedItem.name} class="modal-cover" />
            {/if}
            <div class="modal-body">
                <div class="modal-header">
                    <h3>{selectedItem.name}</h3>
                    {#if selectedItem.country}
                        <span class="country-tag">{selectedItem.country}</span>
                    {/if}
                </div>
                <p class="modal-text">{selectedItem.desc}</p>
            </div>
        </div>
    </div>
{/if}

<style>
    section {
        max-width: 980px;
        margin: 0 auto;
        padding: 5rem 1.5rem;
        border-bottom: 1px solid var(--border);
    }
    /* SECTION PROJETS À FOND SUBTILEMENT QUADRILLÉ */
.projects-section {
    max-width: 1200px; /* Plus large pour casser l'alignement étroit du texte */
    margin: 0 auto;
    padding: 5rem 1.5rem;
    border-bottom: 1px solid var(--border);
    /* Quadrillage géométrique style papier millimétré (0 Ko d'image) */
    background-image: 
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px);
    background-size: 32px 32px;
    background-position: center top;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
    background: var(--bg-page);
    padding: 1rem;
}

.section-caption {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-top: 0.2rem;
}

.grid-counter {
    font-family: monospace;
    font-size: 0.8rem;
    color: var(--accent);
}

/* GRILLE DENSE (3 À 4 PAR LIGNE SUR ÉCRAN ORDINATEUR) */
.projects-quad-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
}

/* CARTE DE TYPE "FICHE DE RECHERCHE" */
.research-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 1.4rem 1.2rem;
    text-decoration: none;
    color: inherit;
    border-radius: 2px;
    overflow: hidden;
    /* Ombre géométrique nette, zéro flou baveux */
    box-shadow: 2px 2px 0px var(--border);
    transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                border-color 0.22s ease;
}

/* ANIMATION AU SURVOL */
.card-edge-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
}

.research-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    /* Élévation avec double contour net */
    box-shadow: 4px 6px 0px var(--accent);
}

.research-card:hover .card-edge-glow {
    transform: scaleX(1);
}

/* MÉTADONNÉES EN TÊTE */
.card-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: monospace;
    font-size: 0.72rem;
    margin-bottom: 0.9rem;
}

.meta-ref {
    color: var(--accent);
    font-weight: 700;
}

.meta-cat {
    color: var(--text-muted);
    background: var(--bg-page);
    padding: 0.1rem 0.35rem;
    border: 1px solid var(--border);
}

.meta-date {
    margin-left: auto;
    color: var(--text-muted);
}

/* TYPOGRAPHIE CONTENU */
.proj-title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.6rem;
    color: var(--text-main);
}

.proj-abstract {
    font-size: 0.83rem;
    line-height: 1.5;
    color: var(--text-muted);
    margin-bottom: 1rem;
    flex-grow: 1; /* Aligne le bas des cartes automatiquement */
}

/* MÉTRIQUE FORMELLE */
.proj-metric {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: monospace;
    font-size: 0.75rem;
    background: var(--badge-bg);
    color: var(--badge-text);
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--border);
    margin-bottom: 1.1rem;
    align-self: flex-start;
}

.metric-symbol {
    color: var(--accent);
    font-weight: bold;
}

/* PIED DE CARTE INTERACTIF */
.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.5rem;
    padding-top: 0.8rem;
    border-top: 1px dashed var(--border);
}

.tags-cluster {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
}

.code-pill {
    font-family: monospace;
    font-size: 0.7rem;
    background: var(--bg-page);
    color: var(--text-main);
    border: 1px solid var(--border);
    padding: 0.1rem 0.35rem;
}

/* REMPLACEMENT DE LA FLÈCHE : BOUTON SOURCE STYLE CODE */
.action-bracket {
    font-family: monospace;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--text-muted);
    transition: color 0.2s ease, transform 0.2s ease;
    user-select: none;
}

.research-card:hover .action-bracket {
    color: var(--accent);
    transform: translateX(2px);
}

@media (max-width: 900px) {
    .projects-quad-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 580px) {
    .projects-quad-grid {
        grid-template-columns: 1fr;
    }
}

    /* SECTION ASYMÉTRIQUE / HERO */
    .hero-asym {
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        align-items: center;
        gap: 3rem;
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .hero-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .name {
        font-size: 2.8rem;
        line-height: 1.1;
        letter-spacing: -0.04em;
        margin-bottom: 0.6rem;
    }

    .role-desc {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--text-main);
        margin-bottom: 0.3rem;
    }

    .academic-sub {
        font-size: 0.95rem;
        color: var(--text-muted);
        margin-bottom: 2rem;
        font-family: monospace;
    }

    .hero-actions {
        display: flex;
        gap: 1.2rem;
        align-items: center;
        flex-wrap: wrap;
    }

    .link-mono {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--text-main);
        text-decoration: none;
        transition: color 0.2s;
    }

    .link-mono:hover {
        color: var(--accent);
    }

    .phone-mono {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--text-muted);
    }

    /* PHOTO ASYMÉTRIQUE TRANSLUCIDE */
    .hero-right {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .photo-frame {
        position: relative;
        width: 100%;
        max-width: 320px;
        aspect-ratio: 4 / 5;
        border: 1px solid var(--border);
        background: var(--bg-card);
        padding: 8px;
    }

    .photo-translucent {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.38;
        filter: grayscale(100%) contrast(110%);
        transition: opacity 0.3s ease, filter 0.3s ease;
    }

    .photo-translucent:hover {
        opacity: 0.85;
        filter: grayscale(0%);
    }

    /* TITRES DE SECTIONS */
    .section-header {
        margin-bottom: 2.5rem;
        border-bottom: 1px solid var(--border);
        padding-bottom: 0.6rem;
    }

    .section-header h2 {
        font-size: 1.7rem;
        letter-spacing: -0.02em;
    }

    .subsection-title {
        font-size: 1.15rem;
        margin: 3rem 0 1.2rem 0;
        font-family: monospace;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .skills-layout {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--border);
    }

    .skill-category {
        display: flex;
        align-items: baseline;
        padding: 0.9rem 0;
        border-bottom: 1px solid var(--border);
        gap: 2rem;
    }

    .category-name {
        width: 140px;
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--text-muted);
        text-transform: uppercase;
    }

    .category-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        flex: 1;
    }

    .skill-tag {
        font-family: monospace;
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        background: var(--badge-bg);
        color: var(--badge-text);
        border: 1px solid var(--border);
    }

    /* CARTES ÉPURÉES */
    .math-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        padding: 1.4rem;
        margin-bottom: 1.2rem;
        border-radius: 2px;
        transition: border-color 0.2s ease;
    }

    .math-card:hover {
        border-color: var(--border-accent);
    }

    .card-header-flex {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.5rem;
    }

    .link-arrow {
        font-size: 1.1rem;
        color: var(--accent);
        text-decoration: none;
    }

    .proj-desc, .exp-desc {
        color: var(--text-muted);
        font-size: 0.92rem;
        margin-bottom: 1rem;
    }

    .math-tag {
        font-family: monospace;
        font-size: 0.75rem;
        background: var(--bg-page);
        border: 1px solid var(--border);
        padding: 0.15rem 0.4rem;
        color: var(--accent);
    }

    .tags-row {
        display: flex;
        gap: 0.4rem;
    }

    /* TIMELINE ET COURS EN LISTE VERTICALE */
    .timeline-academic {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--border);
    }

    .timeline-row {
        display: grid;
        grid-template-columns: 140px 1fr;
        padding: 1.4rem 0;
        border-bottom: 1px solid var(--border);
        gap: 1.5rem;
    }

    .time-col {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--accent);
        font-weight: 700;
    }

    .period-mono {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .highlight {
        color: var(--accent);
    }

    .courses-accordion {
        margin-top: 0.8rem;
    }

    .courses-trigger {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--text-main);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--bg-page);
        padding: 0.25rem 0.6rem;
        border: 1px solid var(--border);
        list-style: none;
        user-select: none;
        transition: border-color 0.2s;
    }

    .courses-trigger:hover {
        border-color: var(--accent);
    }

    .courses-trigger::-webkit-details-marker {
        display: none;
    }

    .courses-trigger .arrow {
        transition: transform 0.2s ease;
    }

    .courses-accordion[open] .arrow {
        transform: rotate(180deg);
    }

    /* Liste verticale des cours */
    .courses-vertical-list {
        list-style: none;
        padding-left: 0;
        margin-top: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .course-line {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        font-size: 0.88rem;
        color: var(--text-main);
    }

    .bullet {
        color: var(--accent);
        font-size: 0.9rem;
    }

    .course-name {
        font-weight: 500;
    }

    .course-teacher {
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .banner-docs {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .btn-primary {
        background: var(--accent);
        color: var(--accent-text);
        padding: 0.45rem 0.9rem;
        font-size: 0.8rem;
        font-family: monospace;
        text-decoration: none;
        font-weight: 600;
        border: 1px solid var(--accent);
    }

    .btn-primary:hover {
        background: var(--accent-hover);
    }

    .cv-actions {
        display: flex;
        gap: 0.6rem;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
    }

    .media-card {
        padding: 0;
        overflow: hidden;
    }

    .card-img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
        background: var(--border);
    }

    .card-pad {
        padding: 1.2rem;
    }

    .role-spec {
        font-size: 0.8rem;
        color: var(--accent);
        font-family: monospace;
    }

    .sub-detail {
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    /* CARTES MOBILITÉ AVEC RELIEF ET EFFET CLIC */
    .destination-card {
        display: flex;
        flex-direction: column;
        text-align: left;
        background: var(--bg-card);
        border: 1.5px solid var(--border);
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        padding: 0;
        box-shadow: 0 4px 16px -2px rgba(69, 30, 17, 0.08);
        transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .destination-card:hover {
        transform: translateY(-5px);
        border-color: var(--accent);
        box-shadow: 0 12px 24px -4px var(--accent-glow), 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .img-wrapper {
        position: relative;
        overflow: hidden;
    }

    .click-badge {
        position: absolute;
        bottom: 8px;
        right: 8px;
        background: rgba(17, 14, 12, 0.85);
        color: #ffffff;
        font-family: monospace;
        font-size: 0.72rem;
        padding: 0.25rem 0.55rem;
        border-radius: 3px;
        backdrop-filter: blur(4px);
        transition: background 0.2s;
    }

    .destination-card:hover .click-badge {
        background: var(--accent);
        color: var(--accent-text);
    }

    .dest-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.4rem;
    }

    .country-tag {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--accent);
    }

    .dest-preview {
        font-size: 0.82rem;
        color: var(--text-muted);
        line-height: 1.4;
    }

    /* LANGUES */
    .lang-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.8rem;
    }

    .lang-box {
        border: 1px solid var(--border);
        background: var(--bg-card);
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .lang-name {
        font-weight: 700;
        font-size: 0.9rem;
    }

    .lang-level {
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--accent);
    }

    .muted {
        color: var(--text-muted);
        font-size: 0.88rem;
    }

    /* FENÊTRE MODALE POP-UP */
    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        z-index: 2000;
    }

    .modal-dialog {
        position: relative;
        background: var(--bg-card);
        border: 1.5px solid var(--accent);
        max-width: 520px;
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.6);
        color: #ffffff;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: background 0.2s;
    }

    .modal-close:hover {
        background: var(--accent);
    }

    .modal-cover {
        width: 100%;
        height: 220px;
        object-fit: cover;
        display: block;
    }

    .modal-body {
        padding: 1.6rem;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.8rem;
        border-bottom: 1px solid var(--border);
        padding-bottom: 0.6rem;
    }

    .modal-header h3 {
        font-size: 1.4rem;
        letter-spacing: -0.02em;
    }

    .modal-text {
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--text-main);
    }

    @media (max-width: 768px) {
        .hero-asym {
            grid-template-columns: 1fr;
            text-align: left;
        }
        .hero-right {
            justify-content: flex-start;
        }
        .timeline-row {
            grid-template-columns: 1fr;
            gap: 0.4rem;
        }
    }
</style>
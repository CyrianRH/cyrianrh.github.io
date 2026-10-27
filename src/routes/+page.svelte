<script>
    import { lang } from '#lib/store.js';
    import { content, technicalData } from '#lib/data.js';

    let t = $derived(content[$lang] ?? content.fr ?? {});

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
        <p class="role-desc">{t.profile?.title}</p>
        <p class="academic-sub">{t.profile?.subTitle}</p>
        
        <div class="hero-actions">
            <a href={technicalData.githubUrl} target="_blank" rel="noopener noreferrer" class="link-mono">[GitHub]</a>
            <a href={technicalData.linkedinUrl} target="_blank" rel="noopener noreferrer" class="link-mono">[LinkedIn]</a>
            <a href="mailto:{t.profile?.email}" class="link-mono">[{t.profile?.email}]</a>
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

<!-- COMPÉTENCES & PROJETS -->
<section id="courses" class="projects-section">
    <div class="section-header">
        <h2>{t.skills?.title}</h2>
    </div>

    <div class="skills-icon-grid">
        {#each technicalData.skillsList as item}
            <div class="skill-icon-card">
                <img 
                    src={item.logo} 
                    alt={item.name} 
                    class="tech-logo" 
                    loading="lazy"
                    on:error={(e) => e.currentTarget.style.display = 'none'}
                />
                <span class="tech-name">{item.name}</span>
            </div>
        {/each}
    </div>

    <h3 class="subsection-title">{t.skills?.projectsTitle}</h3>
    <div class="projects-quad-grid">
        {#each (t.projects ?? []) as proj}
            <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="research-card"
                aria-label="Voir le projet {proj.title}"
            >
                <div class="card-edge-glow"></div>
                <div class="card-meta">
                    <span class="meta-ref">{proj.ref}</span>
                    <span class="meta-cat">{proj.category}</span>
                    <span class="meta-date">{proj.date}</span>
                </div>
                <h4 class="proj-title">{proj.title}</h4>
                <p class="proj-abstract">{proj.desc}</p>
                <div class="card-footer">
                    <div class="tags-cluster">
                        {#each proj.tags as tag}
                            <span class="code-pill">{tag}</span>
                        {/each}
                    </div>
                </div>
            </a>
        {/each}
    </div>
</section>

<!-- PARCOURS & EXPÉRIENCES AVEC LOGOS À DROITE ET CONTRASTE SOMBRE -->
<section id="career">
    <div class="section-header">
        <h2>{t.career?.title}</h2>
    </div>

    <div class="math-card banner-docs">
        <div>
            <h4>{t.career?.pitch}</h4>
        </div>
        <div class="cv-actions">
            <a href={technicalData.cvFr} target="_blank" rel="noopener noreferrer" class="btn-primary">{t.career?.cvFr}</a>
            <a href={technicalData.cvEn} target="_blank" rel="noopener noreferrer" class="btn-primary">{t.career?.cvEn}</a>
        </div>
    </div>

    <!-- Timeline académique avec logos à droite -->
    <div class="timeline-academic">
        {#each (t.academic ?? []) as stage}
            <div class="timeline-row">
                <div class="time-col">{stage.year}</div>
                <div class="content-col">
                    <div class="academic-main-row">
                        <div class="academic-info">
                            <h4>{stage.title}</h4>
                            <p class="muted">{stage.details}</p>
                        </div>
                        {#if stage.logo}
                            <div class="logo-box institution-box">
                                <img 
                                    src={stage.logo} 
                                    alt="" 
                                    class="academic-logo-right" 
                                    on:error={(e) => e.currentTarget.parentElement.style.display = 'none'} 
                                />
                            </div>
                        {/if}
                    </div>

                    <details class="courses-accordion">
                        <summary class="courses-trigger">
                            <span>{t.career?.coursesBtn}</span>
                            <span class="arrow">↓</span>
                        </summary>
                        <ul class="courses-vertical-list">
                            {#each stage.courses as c}
                                <li class="course-line">
                                    <span class="bullet">&bull;</span>
                                    <span class="course-name">{c}</span>
                                </li>
                            {/each}
                        </ul>
                    </details>
                </div>
            </div>
        {/each}
    </div>

    <!-- Expériences avec grands logos et support contrasté -->
    <h3 class="subsection-title">{t.career?.experienceTitle}</h3>
    {#each (t.experiences ?? []) as exp}
        <div class="math-card">
            <div class="card-header-flex">
                <div class="title-with-logo">
                    {#if exp.logo}
                        <div class="logo-box company-box">
                            <img 
                                src={exp.logo} 
                                alt="" 
                                class="company-logo-img" 
                                on:error={(e) => e.currentTarget.parentElement.style.display = 'none'} 
                            />
                        </div>
                    {/if}
                    <div>
                        <h4>{exp.role} | <span class="highlight">{exp.company}</span></h4>
                        <p class="location-sub">{exp.location}</p>
                    </div>
                </div>
                <span class="period-mono">{exp.period}</span>
            </div>
            {#if exp.desc}
                <p class="exp-desc">{exp.desc}</p>
            {/if}
            <ul class="exp-tasks-list">
                {#each exp.tasks as task}
                    <li>&bull; {task}</li>
                {/each}
            </ul>
        </div>
    {/each}

    <!-- Inspirations professionnelles -->
    <h3 class="subsection-title">{t.career?.roleModelsTitle}</h3>
    <div class="cards-grid">
        {#each (t.roleModels ?? []) as rm}
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
                    <p class="sub-detail">{rm.role}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- MOBILITÉ INTERNATIONALE & LANGUES -->
<section id="mobility">
    <div class="section-header">
        <h2>{t.mobility?.title}</h2>
    </div>

    <div class="lang-grid">
        {#each (t.mobilityLangs ?? []) as l}
            <div class="lang-box">
                <span class="lang-name">{l.name}</span>
                <span class="lang-level">{l.level}</span>
            </div>
        {/each}
    </div>

    <h3 class="subsection-title">{t.mobility?.destinations}</h3>
    <div class="cards-grid">
        {#each (t.destinations ?? []) as d}
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
                    <p class="dest-preview">{d.desc.slice(0, 85)}...</p>
                </div>
            </button>
        {/each}
    </div>
</section>

<!-- ENGAGEMENT CITOYEN & ASSOCIATIF (2x2) -->
<section id="engagement" class="projects-section">
    <div class="section-header">
        <h2>{t.engagement?.title}</h2>
    </div>

    <div class="engagements-quad-grid">
        {#each (t.engagements ?? []) as eng}
            <div class="research-card">
                <div class="card-edge-glow"></div>
                <div class="card-meta">
                    <span class="meta-ref">{eng.ref}</span>
                    <span class="meta-date">{eng.date}</span>
                </div>
                <h4 class="proj-title">{eng.title}</h4>
                <p class="proj-abstract">{eng.desc}</p>
                <div class="card-footer">
                    <div class="tags-cluster">
                        {#each eng.tags as tag}
                            <span class="code-pill">{tag}</span>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- ACTIVITÉS & CENTRES D'INTÉRÊT (2 ITEMS CENTRÉS) -->
<section id="activities">
    <div class="section-header">
        <h2>{t.activities?.title}</h2>
    </div>

    <div class="activities-centered-grid">
        {#each (t.activitiesList ?? []) as act}
            <button 
                type="button" 
                class="destination-card" 
                on:click={() => openModal(act)}
                aria-label="Voir les détails pour {act.name}"
            >
                <div class="img-wrapper">
                    <img 
                        src={act.image} 
                        alt={act.name} 
                        loading="lazy" 
                        class="card-img" 
                        on:error={(e) => e.currentTarget.style.display = 'none'} 
                    />
                    <span class="click-badge">Détails ↗</span>
                </div>
                <div class="card-pad">
                    <div class="dest-header">
                        <h4>{act.name}</h4>
                        {#if act.category}
                            <span class="country-tag">{act.category}</span>
                        {/if}
                    </div>
                    <p class="dest-preview">{act.desc.slice(0, 85)}...</p>
                </div>
            </button>
        {/each}
    </div>
</section>

<!-- MODALE DE DESCRIPTION -->
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
                    {#if selectedItem.country || selectedItem.category}
                        <span class="country-tag">{selectedItem.country || selectedItem.category}</span>
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

    /* COMPÉTENCES */
    .skills-icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 0.75rem;
        margin-bottom: 2.5rem;
    }

    .skill-icon-card {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        background: var(--bg-card);
        border: 1px solid var(--border);
        padding: 0.65rem 0.8rem;
        border-radius: 3px;
        box-shadow: 1px 1px 0px var(--border);
        transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .skill-icon-card:hover {
        transform: translateY(-2px);
        border-color: var(--accent);
        box-shadow: 2px 3px 0px var(--accent);
    }

    .tech-logo {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }

    .tech-name {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--text-main);
    }

    /* PROJETS & ENGAGEMENTS */
    .projects-section {
        max-width: 1200px;
        background-image: 
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px);
        background-size: 32px 32px;
        background-position: center top;
    }

    .projects-quad-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.25rem;
    }

    .engagements-quad-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

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
        box-shadow: 2px 2px 0px var(--border);
        transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                    box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                    border-color 0.22s ease;
    }

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
        box-shadow: 4px 6px 0px var(--accent);
    }

    .research-card:hover .card-edge-glow {
        transform: scaleX(1);
    }

    .card-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: monospace;
        font-size: 0.72rem;
        margin-bottom: 0.8rem;
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

    .proj-title {
        font-size: 1.05rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--text-main);
    }

    .proj-abstract {
        font-size: 0.83rem;
        line-height: 1.55;
        color: var(--text-muted);
        margin-bottom: 1.1rem;
        flex-grow: 1;
    }

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

    /* GESTION DES LOGOS (SUPPORT BLANC ÉPURÉ POUR CONTRASTE EN MODE SOMBRE) */
    .logo-box {
        background: #ffffff;
        border: 1.5px solid rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        flex-shrink: 0;
    }

    /* LOGOS ACADÉMIQUES À DROITE (PLUS GRANDS) */
    .academic-main-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
    }

    .academic-info {
        flex: 1;
    }

    .institution-box {
        width: 80px;
        height: 52px;
        padding: 4px 8px;
    }

    .academic-logo-right {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    /* LOGOS EXPÉRIENCES */
    .title-with-logo {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .company-box {
        width: 50px;
        height: 50px;
        padding: 5px;
    }

    .company-logo-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .timeline-academic {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--border);
    }

    .timeline-row {
        display: grid;
        grid-template-columns: 140px 1fr;
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--border);
        gap: 1.5rem;
    }

    .time-col {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--accent);
        font-weight: 700;
        padding-top: 0.3rem;
    }

    .courses-accordion {
        margin-top: 0.9rem;
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

    .math-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        padding: 1.4rem;
        margin-bottom: 1.2rem;
        border-radius: 2px;
        transition: border-color 0.2s ease;
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

    .card-header-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.6rem;
        flex-wrap: wrap;
        gap: 0.8rem;
    }

    .location-sub {
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--text-muted);
        margin-top: 0.2rem;
    }

    .period-mono {
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .highlight {
        color: var(--accent);
    }

    .exp-desc {
        font-size: 0.88rem;
        color: var(--text-main);
        margin-bottom: 0.6rem;
    }

    .exp-tasks-list {
        list-style: none;
        padding-left: 0;
        margin-top: 0.3rem;
        font-size: 0.88rem;
        color: var(--text-muted);
    }

    .exp-tasks-list li {
        margin-bottom: 0.25rem;
    }

    .muted {
        color: var(--text-muted);
        font-size: 0.88rem;
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

    .sub-detail {
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    /* MOBILITÉ ET ACTIVITÉS */
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

    .activities-centered-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(280px, 380px));
        justify-content: center;
        gap: 2rem;
        margin: 0 auto;
    }

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

    /* MODALE */
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
    }

    .modal-text {
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--text-main);
    }

    @media (max-width: 768px) {
        .hero-asym {
            grid-template-columns: 1fr;
        }
        .engagements-quad-grid {
            grid-template-columns: 1fr;
        }
        .activities-centered-grid {
            grid-template-columns: 1fr;
        }
        .timeline-row {
            grid-template-columns: 1fr;
            gap: 0.4rem;
        }
        .academic-main-row {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 0.8rem;
        }
    }
</style>
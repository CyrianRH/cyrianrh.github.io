<script>
    import '/src/app.css';
    import { lang, theme } from '#lib/store.js';
    import { content } from '#lib/data.js';

    let t = $derived(content[$lang] ?? content.fr ?? {});

    function toggleTheme() {
        $theme = $theme === 'light' ? 'dark' : 'light';
    }
</script>

<header class="navbar">
    <a href="#home" class="logo">CR<span>.</span></a>

    <nav class="nav-links">
        <a href="#home">{t.nav?.home}</a>
        <a href="#courses">{t.nav?.courses}</a>
        <a href="#career">{t.nav?.career}</a>
        <a href="#mobility">{t.nav?.mobility}</a>
        <a href="#engagement">{t.nav?.engagement}</a>
        <a href="#activities">{t.nav?.activities}</a>
    </nav>

    <div class="header-actions">
        <!-- Sélecteur de langue en pilule découpée -->
        <div class="lang-pill" role="group" aria-label="Langue">
            <button 
                class:active={$lang === 'fr'} 
                on:click={() => $lang = 'fr'}
                aria-label="Français"
            >FR</button>
            <button 
                class:active={$lang === 'en'} 
                on:click={() => $lang = 'en'}
                aria-label="English"
            >EN</button>
        </div>

        <!-- Bouton Thème Jour / Nuit -->
        <button on:click={toggleTheme} class="icon-btn" aria-label="Basculer le thème">
            {#if $theme === 'light'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            {:else}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            {/if}
        </button>
    </div>
</header>

<main>
    <slot />
</main>

<style>
    .navbar {
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.9rem 2.5rem;
        background: var(--nav-bg);
        backdrop-filter: blur(14px);
        border-bottom: 1px solid var(--border);
        z-index: 1000;
        transition: border-color 0.25s ease;
    }

    .logo {
        font-weight: 800;
        font-size: 1.25rem;
        letter-spacing: -0.5px;
        text-decoration: none;
        color: var(--text-main);
    }
    .logo span {
        color: var(--accent);
    }

    .nav-links {
        display: flex;
        gap: 1.5rem;
    }

    .nav-links a {
        text-decoration: none;
        color: var(--text-muted);
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    .nav-links a:hover {
        color: var(--text-main);
    }

    .header-actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    /* Pilule de langue style moderne */
    .lang-pill {
        display: flex;
        background: var(--badge-bg);
        border: 1px solid var(--border);
        padding: 2px;
        border-radius: 20px;
    }

    .lang-pill button {
        border: none;
        background: transparent;
        color: var(--text-muted);
        font-size: 0.75rem;
        font-weight: 700;
        padding: 0.25rem 0.65rem;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .lang-pill button.active {
        background: var(--bg-card-hover);
        color: var(--accent);
        box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    }

    .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-card);
        border: 1px solid var(--border);
        color: var(--text-main);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        cursor: pointer;
        transition: border-color 0.2s ease, transform 0.2s ease;
    }

    .icon-btn:hover {
        border-color: var(--accent);
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        .nav-links { display: none; }
        .navbar { padding: 0.8rem 1.2rem; }
    }
</style>
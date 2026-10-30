<script>
    import '../app.css';
    import { lang, theme } from '#lib/store.js';
    import { content } from '#lib/data.js';

    let { children } = $props();
    let t = $derived(content[$lang]?.nav ?? content.fr.nav);

    function toggleTheme() {
        theme.update((cur) => {
            const next = cur === 'dark' ? 'light' : 'dark';
            if (typeof document !== 'undefined') {
                document.documentElement.setAttribute('data-theme', next);
            }
            return next;
        });
    }
</script>

<header class="navbar">
    <a href="#home" class="nav-brand">CRH</a>
    <nav class="nav-links">
        <a href="#home">{t.home}</a>
        <a href="#courses">{t.courses}</a>
        <a href="#career">{t.career}</a>
        <a href="#mobility">{t.mobility}</a>
        <a href="#engagement">{t.engagement}</a>
        <a href="#activities">{t.activities}</a>
    </nav>
    <div class="nav-actions">
        <button 
            type="button" 
            class="btn-toggle" 
            class:active={$lang === 'fr'} 
            onclick={() => $lang = 'fr'} 
            aria-label="Français"
        >FR</button>
        <button 
            type="button" 
            class="btn-toggle" 
            class:active={$lang === 'en'} 
            onclick={() => $lang = 'en'} 
            aria-label="English"
        >EN</button>
        <button 
            type="button" 
            class="btn-toggle icon-btn" 
            onclick={toggleTheme} 
            aria-label="Basculer le thème"
        >
            {#if $theme === 'light'}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            {:else}
                ☀
            {/if}
        </button>
    </div>
</header>

<main>
    {@render children?.()}
</main>

<style>
    .navbar {
        position: sticky;
        top: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem 2rem;
        background: var(--bg-page);
        border-bottom: 1px solid var(--border);
        backdrop-filter: blur(8px);
    }

    .nav-brand {
        font-family: monospace;
        font-weight: 700;
        color: var(--accent);
        text-decoration: none;
        font-size: 1.1rem;
    }

    .nav-links {
        display: flex;
        gap: 1.5rem;
    }

    .nav-links a {
        text-decoration: none;
        font-size: 0.85rem;
        color: var(--text-muted);
        transition: color 0.2s;
    }

    .nav-links a:hover {
        color: var(--text-main);
    }

    .nav-actions {
        display: flex;
        gap: 0.5rem;
    }

    .btn-toggle {
        background: var(--bg-card);
        border: 1px solid var(--border);
        color: var(--text-main);
        padding: 0.3rem 0.6rem;
        font-family: monospace;
        font-size: 0.75rem;
        cursor: pointer;
        border-radius: 2px;
        transition: border-color 0.2s, color 0.2s;
    }

    .btn-toggle:hover, .btn-toggle.active {
        border-color: var(--accent);
        color: var(--accent);
    }

    .icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
    }
</style>
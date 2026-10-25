import { writable } from 'svelte/store';

// Test natif universel pour savoir si le code tourne dans le navigateur
const isBrowser = typeof window !== 'undefined';

// Langue initiale sécurisée
const savedLang = isBrowser ? localStorage.getItem('site_lang') : null;
export const lang = writable(savedLang || 'fr');

// Thème initial sécurisé
const savedTheme = isBrowser ? localStorage.getItem('site_theme') : null;
export const theme = writable(savedTheme || 'light');

// Synchronisation avec le navigateur
if (isBrowser) {
    lang.subscribe((val) => {
        if (val) localStorage.setItem('site_lang', val);
    });

    theme.subscribe((val) => {
        if (val) {
            localStorage.setItem('site_theme', val);
            if (val === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    });
}
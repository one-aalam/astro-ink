<script lang="ts">
    import { onMount } from 'svelte'

    type ThemeType = 'dark' | 'light'

    const THEME_DARK: ThemeType =  'dark'
    const THEME_LIGHT: ThemeType =  'light'
    let currTheme: ThemeType = THEME_DARK


    function toggleTheme() {
        window.document.body.classList.toggle(THEME_DARK)
        currTheme = localStorage.getItem('theme') === THEME_DARK ? THEME_LIGHT : THEME_DARK
        localStorage.setItem('theme', currTheme)
    }

    onMount(() => {
        if (localStorage.getItem('theme') === THEME_DARK || (!('theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: ${THEME_DARK})`).matches)) {
            window.document.body.classList.add(THEME_DARK)
            currTheme = THEME_DARK
        } else {
            window.document.body.classList.remove(THEME_DARK)
            currTheme = THEME_LIGHT
        }
    })
</script>
<button on:click={toggleTheme}>
    <slot theme={currTheme}/>
</button>

<script lang="ts">

    import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import ModeSwitcher from './ModeSwitcher.svelte'
    import SvgIcon from './SvgIcon.svelte'
</script>
<ModeSwitcher let:theme>
    <SvgIcon>
        {#if theme === 'dark'}
            <circle cx="12" cy="12" r="5" transition:draw={{ duration: 1000, delay: 200, easing: quintOut }}></circle>
            <line x1="12" y1="1" x2="12" y2="3" transition:draw={{ duration: 100, delay: 30, easing: quintOut }}></line>
            <line x1="12" y1="21" x2="12" y2="23" transition:draw={{ duration: 100, delay: 40, easing: quintOut }}></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" transition:draw={{ duration: 100, delay: 50, easing: quintOut }}></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" transition:draw={{ duration: 100, delay: 60, easing: quintOut }}></line>
            <line x1="1" y1="12" x2="3" y2="12" transition:draw={{ duration: 100, delay: 70, easing: quintOut }}></line>
            <line x1="21" y1="12" x2="23" y2="12" transition:draw={{ duration: 100, delay: 80, easing: quintOut }}></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" transition:draw={{ duration: 100, delay: 90, easing: quintOut }}></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" transition:draw={{ duration: 100, delay: 100, easing: quintOut }}></line>
        {:else}
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" transition:draw={{ duration: 500, delay: 100, easing: quintOut }}></path>
        {/if}
    </SvgIcon>
</ModeSwitcher>

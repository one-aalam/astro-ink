<script lang="ts">
    import { fade, blur } from "svelte/transition";
    const COPIED_TIMEOUT = 2 * 1000

    export let stayCopied = COPIED_TIMEOUT

    let copied = false
    let selfElm: HTMLButtonElement;

    const copy = async () => {
        if(selfElm) {
            const preElm = selfElm.parentElement?.parentElement
            const codeElm = preElm?.querySelector('code')
            if(codeElm) {
                await navigator.clipboard.writeText(codeElm.innerText);
                copied = true
        
                setTimeout(() => {
                    copied = false
                }, stayCopied);
            }
        }
        
    };
</script>
<button 
    bind:this={selfElm} 
    on:click={copy} 
    class="absolute px-2 text-theme-primary dark:text-theme-dark-primary border-1 rounded-lg" 
    style="top: 6px; right: 8px;"
    disabled={copied}
>
    {#if copied}
        <span transition:blur={{ amount: 50, opacity: 50 }}>&check;Copied</span>
    {:else}
        <span transition:fade>Copy</span>
    {/if}
</button>
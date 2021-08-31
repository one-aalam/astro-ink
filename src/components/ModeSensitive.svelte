<script lang="ts">
    import { theme } from '../store/theme'
</script>
{#if $theme === 'dark'}
    <slot name="dark"/>
{:else}
    <slot name="light"/>
{/if}

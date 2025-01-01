<script lang="ts">
    import { onMount } from 'svelte';

    let currentTime: Date;

    onMount(() => {
        setInterval(() => {
            currentTime = new Date();
        }, 1000);
    });

    function formatTime(date: Date) {
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
    }
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 class="text-5xl font-bold mb-4">Coming Soon</h1>
    <p class="text-xl mb-8">We are working hard to bring you a great experience!</p>
    <div class="text-3xl font-mono">
        {#if currentTime}
            {formatTime(currentTime)}
        {/if}
    </div>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { dashboards } from '$lib/config';
  import { fade } from 'svelte/transition';

  let currentIndex = 0;
  let currentDashboard = dashboards[currentIndex];
  let dashboardKey = Date.now();
  let show = true;

  let currentTime = new Date();
  let timer: ReturnType<typeof setTimeout>;

  function updateClock() {
    currentTime = new Date();
  }

  function nextDashboard() {
    show = false;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % dashboards.length;
      currentDashboard = dashboards[currentIndex];
      dashboardKey = Date.now();
      updateClock();
      show = true;
      timer = setTimeout(nextDashboard, currentDashboard.duration * 1000);
    }, 500); 
  }

  onMount(() => {
    updateClock();
    timer = setTimeout(nextDashboard, currentDashboard.duration * 1000);
    const clockInterval = setInterval(updateClock, 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(clockInterval);
    };
  });

  $: formattedTime = currentTime.toLocaleTimeString();
</script>

<div class="overlay">{currentDashboard.name}</div>

<div class="clock">{formattedTime}</div>

{#if show}
  <div class="iframe-container" transition:fade="{{ duration: 500 }}">
    <iframe
      src={currentDashboard.url}
      title={currentDashboard.name}
      allowfullscreen
    ></iframe>
  </div>
{/if}

<style>
  iframe {
    width: 100vw;
    height: 100vh;
    border: none;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-family: sans-serif;
    z-index: 10;
    border-bottom-right-radius: 8px;
  }

  .clock {
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-family: monospace;
    z-index: 10;
    border-bottom-left-radius: 8px;
  }

  .iframe-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
</style>
<!-- src/app.svelte -->
<script>
    import '../setup.css'; // Import global styles if needed
</script>

<style>
    /* Global styles specific to app layout */
    body {
    font-family: 'Arial', sans-serif;
line-height: 1.6;
    }
</style>

<svelte:head>
    <title>Your SvelteKit App</title>
</svelte:head>

<main>
<!-- Main content or layout components -->
<!-- svelte-ignore missing-declaration -->
<Router />
</main>

<footer>
    <!-- Footer content -->
    &copy; 2024 Your Company
</footer>

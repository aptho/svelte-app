<script>
    import { Router, Link, Route } from 'svelte-routing'
    export let name
</script>

<Router>
    <h1>Hello {name}!</h1>
</Router>
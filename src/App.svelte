<script>
    import { Router, Link, Route } from 'svelte-routing'
    import Home from './routes/Home.svelte'
    import MyNewRoute from './routes/MyNewRoute.svelte'

    export let url = "";
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="newRoute">My New Route</Link>
  </nav>
  <div>
    <Route path="newRoute" component="{MyNewRoute}" />
    <Route path="/">
        <Home name='World'/>
    </Route>
  </div>
</Router>

<script>
  import { Router } from 'svelte-routing'
  import Routes from './routes/Routes.svelte'
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'

  export let url = "";
</script>

<Router url="{url}">
  <Nav />
  <Routes />
  <Footer />
</Router>

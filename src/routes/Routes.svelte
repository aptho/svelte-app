<script>
  import { Route } from 'svelte-routing'
  import Home from './Home.svelte'
  import MyNewRoute from './MyNewRoute.svelte'
</script>

<style>
  .content__wrapper {
    display: flex;
    justify-content: center;
  }
  .content {
    width: 75%;
  }
</style>

<div class='content__wrapper'>
  <div class='content'>
    <Route path="newRoute">
      <MyNewRoute />
    </Route>
    <Route path="/">
      <Home name='World'/>
    </Route>
  </div>
</div>
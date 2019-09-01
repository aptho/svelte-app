<script>
  import { Link } from 'svelte-routing'
</script>

<style>
  .nav__wrapper {
    display: flex;
    justify-content: space-evenly;
    height: 50px;
    background-color: #ececec;
    align-items: center;
  }
</style>

<nav class='nav__wrapper'>
  <Link to="/">Home</Link>
  <Link to="newRoute">My New Route</Link>
</nav>

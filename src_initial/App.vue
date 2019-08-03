<template>
<div>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="container">
        <app-header></app-header>
        <hr>
          <div class="row">
            <servers></servers>
            <server-detail></server-detail>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import ServerDetail from './components/ServerDetail';
import Servers from './components/Servers'
export default {
    components:{
        'app-header':Header,
        'app-footer':Footer,
        'server-detail':ServerDetail,
        'servers':Servers
    }
}
</script>

<style>

</style>

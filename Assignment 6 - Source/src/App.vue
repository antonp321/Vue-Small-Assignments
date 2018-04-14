<template>
  <div class="container">
    <my-header></my-header>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="index in 5">
            Server #{{ index }}
          </li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
    <hr>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';

  export default {
      components: {
          'my-header': Header,
          'my-footer': Footer
      }
  }
</script>

<style>

</style>

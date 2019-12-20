<template>
  <div id="app">
    <div class="outer">
      <div class="inner">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "c64-notes"
};
</script>

<style lang="scss">
@import "@/assets/sass/_variables.scss";

body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

textarea,
input,
body,
html {
  font-size: 16px;
  font-family: "C64 PRO MONO", "C64 PRO", "Courier New", "Lucida Console",
    Courier, MENLO, MONACO, monospace;
}

#app {
  height: 100%;

  .outer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    background: $primary;
    height: 100%;
  }

  .inner {
    margin: 2%;
    order: 0;
    flex: 1 1 auto;
    align-self: stretch;
    background: $secondary;
    color: $primary;
  }
}
</style>

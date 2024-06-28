<template>
  <section class="header">
    <div class="header-logo">
      <SVGLogo />
    </div>
  </section>
</template>

<style>
.header {
  width: 100%;
  padding: 0.7em;
}
.header-logo {
  width: 130px;
}

@media (min-width: 800) {
  .header-logo {
    width: 180px;
  }
}
</style>

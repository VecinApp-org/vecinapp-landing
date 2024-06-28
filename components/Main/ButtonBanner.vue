<template>
  <section class="btn-banner">
    <div class="sub-wrapper boxed">
      <div class="btn-banner-title title">
        <h2>Próximamente en:</h2>
      </div>
      <div class="btn-banner-wrap">
        <a href="#"><SVGGooglePlay /></a>
        <a href="#"> <SVGAppStore /></a>
      </div>
    </div>
  </section>
</template>

<style>
.btn-banner {
  width: 100%;
  padding: 3em 0;
}

.btn-banner > .sub-wrapper {
  justify-content: center;
  align-items: center;
}

.btn-banner-title {
  font-size: 1.6em;
  font-weight: 500;
  margin-bottom: 1em;
}

.btn-banner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5em;
}
</style>

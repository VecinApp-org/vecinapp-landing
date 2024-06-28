<template>
  <section class="hero">
    <div class="sub-wrapper boxed">
      <div class="hero-body">
        <div class="hero-title headline">
          <h1>Vecinos<br />Organizados</h1>
        </div>
        <div class="hero-subtitle body-text">
          <p>Encuentra, conoce y ponte de acuerdo con tus vecinos.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hero {
  width: 100;
  height: 460px;
  color: var(--white);
  background: linear-gradient(
    318deg,
    #00ff47 7.32%,
    #00e0a3 42.97%,
    #00c2ff 82.57%
  );
}

.hero > .sub-wrapper {
  height: 100%;
  align-items: center;
  justify-content: center;
}

.hero-body {
  width: 100%;
}

.hero-title {
  margin-bottom: 0.3em;
}

.hero-subtitle {
  font-weight: 500;
  font-size: 1.2em;
}

@media (min-width: 1000px) {
  .hero > .sub-wrapper {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
  }
}
</style>

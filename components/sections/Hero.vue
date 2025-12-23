<template>
  <section class="hero" :style="heroStyle">
    <div class="hero__bg" aria-hidden="true" />
    <div class="hero__overlay" aria-hidden="true" />

    <div class="hero__content">
      <p class="hero__kicker">MEDITERRANEAN RESTAURANT &amp; RESIDENCE</p>

      <h1 class="hero__title">Gurman</h1>

      <p class="hero__tagline">
        Where tradition meets the sea, and every meal tells a story<br />
        passed on through generations.
      </p>

      <div class="hero__actions">
        <NuxtLink class="btn btn--ghost" :to="props.storyHref">
          DISCOVER OUR STORY
        </NuxtLink>

        <NuxtLink class="btn btn--solid" :to="props.menuHref">
          VIEW OUR MENU
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {

  bgUrl?: string
  storyHref?: string
  menuHref?: string
}

const props = withDefaults(defineProps<Props>(), {
  bgUrl: "/images/hero-gurman.jpg",
  
})


const heroStyle = computed(() => {
  return props.bgUrl
    ? ({ "--hero-bg": `url(${props.bgUrl})` } as Record<string, string>)
    : undefined
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 0;
  overflow: hidden;
  background: #2b2b2b;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-image: var(--hero-bg);
  background-color: #2b2b2b;
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  filter: saturate(0.95);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 600px at 50% 55%, rgba(0,0,0,0.15), rgba(0,0,0,0.65)),
    linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55));
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  max-width: 980px;
  margin-inline: auto;
  padding: clamp(24px, 5vw, 64px); 
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.9);
}

.hero__kicker {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
}

.hero__title {
  margin: 0;
  font-size: clamp(52px, 8vw, 92px);
  line-height: 1;
  font-weight: 100;
  color: rgba(255,255,255,0.85);
  font-family: var(--font-serif);
}

.hero__tagline {
  margin: 18px auto 34px;
  max-width: 760px;
  font-size: clamp(16px, 2.2vw, 22px);
  line-height: 1.65;
  font-style: italic;
  color: rgba(255,255,255,0.55);
  font-family: var(--font-sans);
  font-weight: 300;
}

.hero__actions {
  display: inline-flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 22px;
  border-radius: 2px;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: transform 120ms ease, opacity 120ms ease, background-color 120ms ease, border-color 120ms ease;
  user-select: none;
  will-change: transform;
}

.btn:focus-visible {
  outline: 2px solid rgba(255,255,255,0.7);
  outline-offset: 3px;
}

.btn--ghost {
  color: rgba(255,255,255,0.80);
  border: 1px solid rgba(255,255,255,0.35);
  background: rgba(0,0,0,0.15);
}

.btn--solid {
  color: rgba(0,0,0,0.75);
  background: #d7c3a6; 
  border: 1px solid rgba(0,0,0,0.05);
}

.btn:hover {
  transform: translateY(-1px);
  opacity: 0.96;
}

@media (max-width: 480px) {
  .btn {
    width: 100%;
  }
  .hero__actions {
    width: 100%;
  }
}
</style>
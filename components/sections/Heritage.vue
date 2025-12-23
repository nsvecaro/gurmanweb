<template>
  <section class="heritage">
    <div class="heritage__container">
      <div class="heritage__text">
        <p class="heritage__kicker">{{ props.kicker }}</p>

        <h2 class="heritage__title">
          <span class="heritage__titleLine">{{ props.titleLine1 }}</span>
          <em class="heritage__titleEm">{{ props.titleLine2 }}</em>
        </h2>

        <div class="heritage__body">
          <p v-for="(p, i) in props.body" :key="i" class="heritage__p">{{ p }}</p>
        </div>

        <div class="heritage__stats" aria-label="Heritage stats">
          <div class="heritage__stat">
            <div class="heritage__statValue">{{ props.stat1Value }}</div>
            <div class="heritage__statLabel">{{ props.stat1Label }}</div>
          </div>

          <div class="heritage__divider" aria-hidden="true" />

          <div class="heritage__stat">
            <div class="heritage__statValue">{{ props.stat2Value }}</div>
            <div class="heritage__statLabel">{{ props.stat2Label }}</div>
          </div>

          <div class="heritage__divider" aria-hidden="true" />

          <div class="heritage__stat">
            <div class="heritage__statValue">{{ props.stat3Value }}</div>
            <div class="heritage__statLabel">{{ props.stat3Label }}</div>
          </div>
        </div>
      </div>

      <div class="heritage__media" aria-label="Heritage images">
        <div class="heritage__img heritage__img--main">
          <img
            v-if="props.imgMain"
            :src="props.imgMain"
            :alt="props.imgAltMain"
            loading="lazy"
            decoding="async"
          />
          <div v-else class="heritage__imgPlaceholder" aria-hidden="true">MAIN IMAGE</div>
        </div>

        <div class="heritage__img heritage__img--secondary">
          <img
            v-if="props.imgSecondary"
            :src="props.imgSecondary"
            :alt="props.imgAltSecondary"
            loading="lazy"
            decoding="async"
          />
          <div v-else class="heritage__imgPlaceholder" aria-hidden="true">SECOND IMAGE</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  kicker?: string
  titleLine1?: string
  titleLine2?: string
  body?: string[]
  stat1Value?: string
  stat1Label?: string
  stat2Value?: string
  stat2Label?: string
  stat3Value?: string
  stat3Label?: string
  imgMain?: string
  imgSecondary?: string
  imgAltMain?: string
  imgAltSecondary?: string
}

const props = withDefaults(defineProps<Props>(), {
  kicker: "OUR HERITAGE",
  titleLine1: "A legacy of",
  titleLine2: "Mediterranean Soul",
  body: () => [
    "Nestled along the sun-kissed Dalmatian coast, Gurman was born from a simple truth: the finest meals are those shared with family, prepared with love, and served without hurry.",
    "For three generations, our family has gathered the freshest catch from local fishermen, the ripest produce from neighboring farms, and the most fragrant herbs from our own garden. Each dish carries the wisdom of our grandmothers, refined but never forgotten.",
    "Today, we invite you to our table not as guests, but as family. Here, time slows, conversations deepen, and the Mediterranean spirit comes alive in every bite.",
  ],
  stat1Value: "1953",
  stat1Label: "ESTABLISHED",
  stat2Value: "3",
  stat2Label: "GENERATIONS",
  stat3Value: "∞",
  stat3Label: "MEMORIES",
  imgMain: "/images/filler-gurman.jpg", 
  imgSecondary: "/images/filler2-gurman.jpg", 
  imgAltMain: "Heritage main image",
  imgAltSecondary: "Heritage secondary image",
})
</script>

<style scoped>
.heritage {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow-x: clip;

  background: var(--bg-color-primary, #f2eee6);
  padding: clamp(48px, 7vw, 96px) 0;
}

.heritage__container {
  width: min(1200px, calc(100% - 48px));
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
  box-sizing: border-box;
}


.heritage__kicker {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.45);
}

.heritage__title {
  margin: 0 0 24px;
  font-family: var(--font-serif, ui-serif, Georgia, "Times New Roman", Times, serif);
  font-weight: 400;
  line-height: 1.08;
  font-size: clamp(38px, 4.4vw, 56px);
  color: rgba(0, 0, 0, 0.85);
}

.heritage__titleLine {
  display: block;
}

.heritage__titleEm {
  display: block;
  font-style: italic;
  font-weight: 300;
}

.heritage__body {
  max-width: 640px;
}

.heritage__p {
  margin: 0 0 18px;
  font-family: var(--font-sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial);
  font-size: 16px;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.6);
}

.heritage__p:last-child {
  margin-bottom: 0;
}

.heritage__stats {
  margin-top: 34px;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 18px;
  align-items: center;
}

.heritage__divider {
  width: 1px;
  height: 48px;
  background: rgba(0, 0, 0, 0.12);
}

.heritage__statValue {
  font-family: var(--font-serif, ui-serif, Georgia, "Times New Roman", Times, serif);
  font-size: 34px;
  color: rgba(0, 0, 0, 0.85);
}

.heritage__statLabel {
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.45);
}

.heritage__media {
  position: relative;
  min-height: 560px;
}

.heritage__img {
  background: #ddd;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.15);
}

.heritage__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.heritage__img--main {
  width: min(520px, 100%);
  height: 360px;
  margin-left: auto;
}

.heritage__img--secondary {
  position: absolute;
  left: 0;
  bottom: 0;
  width: min(420px, 82%);
  height: 260px;
}

.heritage__imgPlaceholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.45);
  background:
    linear-gradient(135deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.02));
}

/* Responsive */
@media (max-width: 900px) {
  .heritage__container {
    grid-template-columns: 1fr;
  }

  .heritage__media {
    min-height: 520px;
  }

  .heritage__img--main {
    margin-left: 0;
  }
}

@media (max-width: 520px) {
  .heritage__container {
    width: min(1200px, calc(100% - 32px));
  }

  .heritage__stats {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .heritage__divider {
    display: none;
  }
}
</style>
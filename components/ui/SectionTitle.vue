<template>
  <div class="si" :class="alignClass" :style="{ '--si-max': props.maxWidth }">
    <p v-if="props.kicker" class="si__kicker">{{ props.kicker }}</p>

    <component :is="props.as" v-if="props.title" class="si__title">
      <span class="si__titleLine">{{ props.title }}</span>
      <em v-if="props.titleEm" class="si__titleEm">{{ props.titleEm }}</em>
    </component>

    
    <div v-if="$slots.default" class="si__body">
      <slot />
    </div>


    <div v-else class="si__body">
      <p v-for="(p, i) in descArray" :key="i" class="si__p">{{ p }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
type Align = "left" | "center" | "right"
type HeadingTag = "h1" | "h2" | "h3" | "h4"

type Props = {
  kicker?: string
  title?: string

  titleEm?: string
  
  description?: string | string[]
  align?: Align
  as?: HeadingTag
  maxWidth?: string 
}

const props = withDefaults(defineProps<Props>(), {
  kicker: "",
  title: "",
  titleEm: "",
  description: "",
  align: "left",
  as: "h2",
  maxWidth: "640px",
})

const alignClass = computed(() => `si--${props.align}`)
const descArray = computed(() =>
  Array.isArray(props.description)
    ? props.description
    : props.description
      ? [props.description]
      : []
)
</script>

<style scoped>
.si {
  width: 100%;
  max-width: var(--si-max, 640px);
}

.si--left { text-align: left; margin-right: auto; }
.si--center { text-align: center; margin-inline: auto; }
.si--right { text-align: right; margin-left: auto; }

.si__kicker {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.45);
}

.si__title {
  margin: 0 0 24px;
  font-family: var(--font-serif, ui-serif, Georgia, "Times New Roman", Times, serif);
  font-weight: 400;
  line-height: 1.08;
  font-size: clamp(38px, 4.4vw, 56px);
  color: rgba(0, 0, 0, 0.85);
}

.si__titleLine { display: block; }
.si__titleEm {
  display: block;
  font-style: italic;
  font-weight: 300;
}

.si__body { }
.si__p {
  margin: 0 0 18px;
  font-family: var(--font-sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial);
  font-size: 16px;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.6);
}
.si__p:last-child { margin-bottom: 0; }
</style>
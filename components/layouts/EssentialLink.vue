<script setup lang="ts">
const { title, caption, icon, link, level, children } = defineProps({
  title: String,
  caption: String,
  icon: String,
  link: String,
  level: Number,
  children: Array,
})
</script>

<template>
  <div>
    <div v-if="children?.length === 0">
      <q-item v-ripple clickable :to="link" :inset-level="level">
        <q-item-section avatar>
          <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>
          {{ title }}
        </q-item-section>
      </q-item>
    </div>
    <div v-else>
      <div v-if="children?.length > 0">
        <!-- {{children}} -->
        <q-expansion-item
          expand-separator
          :icon="icon"
          :label="title"
          :caption="caption"
          :header-inset-level="level"
        >
          <LayoutsEssentialLink v-for="child in children" :key="child" v-bind="child" />
        </q-expansion-item>
      </div>
      <div v-else>
        <q-item v-ripple clickable :to="link" :inset-level="level">
          <q-item-section avatar>
            <q-icon :name="icon" />
          </q-item-section>
          <q-item-section>{{ title }}</q-item-section>
        </q-item>
        <q-separator :key="`sep${title}-${icon}`" />
      </div>
    </div>
  </div>
</template>

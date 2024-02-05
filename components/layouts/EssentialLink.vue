<script setup lang="ts">
import type { Menu } from '~/layouts/default.vue'

const { title, icon, link, level, sub } = defineProps<Menu>()

const group = ref()
</script>

<template>
  <div>
    <div v-if="sub?.length === 0">
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
      <div v-if="sub && sub?.length > 0">
        <!-- {{children}} -->
        <q-expansion-item
          v-model="group"
          :group="link"
          expand-separator
          :icon="icon"
          :label="title"
          :header-inset-level="level"
        >
          <LayoutsEssentialLink
            v-for="child in sub"
            :key="child.title + child.icon + child.level"
            v-bind="child"
          />
        </q-expansion-item>
      </div>
      <div v-else>
        <q-item v-ripple clickable :to="link" :inset-level="level">
          <q-item-section avatar>
            <q-icon :name="icon" />
          </q-item-section>
          <q-item-section>{{ title }}</q-item-section>
        </q-item>
        <!-- <q-separator :key="`sep${title}-${icon}`" /> -->
      </div>
    </div>
  </div>
</template>

<!-- <style scoped>
.q-expansion-item--expanded {
  border: 1px solid #000000;
  border-color: cyan;
  background-color: cyan;
}
</style> -->

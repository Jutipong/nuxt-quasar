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
          <LayoutsDrawer
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

<style scoped>
.q-list a {
  margin: 8px;
}

.q-item {
  border-radius: 6px;
  min-height: 40px !important;
}

.q-item.q-router-link--active,
.q-item--active {
  background: linear-gradient(
    72.47deg,
    #1976d2 22.16%,
    rgba(85, 132, 241, 0.7) 76.47%
  ) !important;
  box-shadow: 0 2px 6px #7367f07a;
  color: #fff !important;
}
</style>

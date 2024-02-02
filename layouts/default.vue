<script setup lang="ts">
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <ClientOnly>

    <Teleport to="body">

      <q-layout view="hhh LpR fFf">

        <q-header reveal class="bg-primary text-white">
          <q-toolbar>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar>
              Title
            </q-toolbar-title>
          </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
          <!-- drawer content -->
        </q-drawer>

        <q-page-container>
          <!-- <router-view /> -->
          <slot />
        </q-page-container>

      </q-layout>


    </Teleport>
  </ClientOnly>
</template>


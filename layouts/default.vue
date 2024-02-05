<script setup lang="ts">
const $q = useQuasar()
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const icon = computed(() => leftDrawerOpen.value ? 'mdi-menu-open' : 'mdi-menu-close')

function logout() {
  $q.dialog({
    title: 'Logout',
    color: 'negative',
    message: 'Are you sure you want to logout?',
    cancel: true,
    persistent: true,
  }).onOk(() => navigateTo('/login'))
}
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <q-layout view="hhh LpR fFf">
        <q-header reveal class="bg-primary text-white">
          <q-toolbar>
            <q-btn dense flat round :icon="icon" @click="toggleLeftDrawer" />

            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar>
              Title
            </q-toolbar-title>

            <q-space />

            <q-btn
              color="negative" class="hover:bg-red-600" align="around" :label="$q.screen.gt.sm ? 'Logout' : ''" flat
              icon="mdi-logout" @click="logout()"
            />
          </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
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

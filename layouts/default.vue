<script setup lang="ts">
const $q = useQuasar()
const isDrawerOpen = ref(true)
const route = useRouter()

function toggleLeftDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
}

const isActive = ref('')

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    to: '/',
    separator: true,
  },
  {
    icon: 'send',
    label: 'Outbox',
    to: '/outbox',
    separator: false,
  },
  {
    icon: 'settings',
    label: 'Settings',
    to: '/setting',
    separator: false,
  },
]

const iconDrawerOpen = computed(() => isDrawerOpen.value ? 'mdi-menu-open' : 'mdi-menu-close')

function logout() {
  $q.dialog({
    html: true,
    title: `<div class="text-negative">
              <i class="mdi mdi-logout"></i>
                Logout!
            </div>`,
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
            <q-btn
              dense flat round
              :icon="iconDrawerOpen"
              @click="toggleLeftDrawer()"
            />

            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar>
              Title : {{ isActive }} || {{ route.currentRoute.value.path }}
            </q-toolbar-title>

            <q-space />

            <q-btn
              color="negative"
              class="hover:bg-red-600"
              align="around"
              :label="$q.screen.gt.sm ? 'Logout' : ''" flat
              icon="mdi-logout"
              @click="logout()"
            />
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="isDrawerOpen"
          show-if-above
          bordered
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        >
          <q-scroll-area class="fit">
            <q-list>
              <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item v-ripple :to="menuItem.to" :active="menuItem.to === route.currentRoute.value.path">
                  <q-item-section avatar>
                    <q-icon :name="`mdi-${menuItem.icon}`" />
                  </q-item-section>
                  <q-item-section>
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
                <q-separator v-if="menuItem.separator" :key="`sep${index}`" />
              </template>
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-page-container>
          <slot />
        </q-page-container>
      </q-layout>
    </Teleport>
  </ClientOnly>
</template>

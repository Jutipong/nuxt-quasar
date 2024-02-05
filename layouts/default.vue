<script setup lang="ts">
const $q = useQuasar()
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const isActive = ref('')

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true,
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false,
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false,
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true,
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false,
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false,
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
  },
]

const icon = computed(() => leftDrawerOpen.value ? 'mdi-menu-open' : 'mdi-menu-close')

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
            <q-btn dense flat round :icon="icon" @click="toggleLeftDrawer" />

            <q-toolbar-title>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar>
              Title : {{ isActive }}
            </q-toolbar-title>

            <q-space />

            <q-btn
              color="negative" class="hover:bg-red-600" align="around" :label="$q.screen.gt.sm ? 'Logout' : ''" flat
              icon="mdi-logout" @click="logout()"
            />
          </q-toolbar>
        </q-header>

        <!-- <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
        </q-drawer> -->
        <q-drawer
          v-model="leftDrawerOpen"
          overlay
          bordered
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        >
          <q-scroll-area class="fit">
            <q-list>
              <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item v-ripple clickable :active="menuItem.label === 'Outbox'">
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
          <!-- <router-view /> -->
          <slot />
        </q-page-container>
      </q-layout>
    </Teleport>
  </ClientOnly>
</template>

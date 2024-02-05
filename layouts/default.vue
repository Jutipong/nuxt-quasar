<script setup lang="ts">
const $q = useQuasar()

export interface Menu {
  title: string
  icon?: string
  link?: string
  level: 0 | 0.2
  sub?: Menu[]
}

const isDrawerOpen = ref(true)

function toggleLeftDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
}

const menuList: Menu[] = [
  {
    title: 'Home',
    icon: 'mdi-school',
    link: '/',
    level: 0,
  },
  {
    title: 'Outbox',
    icon: 'mdi-archive',
    level: 0,
    link: '/outbox',
  },
  {
    title: 'Setting',
    icon: 'mdi-cogs',
    level: 0,
    sub: [
      {
        title: 'App',
        icon: 'mdi-cog',
        link: '/setting/app',
        level: 0.2,
      },
      {
        title: 'Logger',
        icon: 'mdi-gate-xor',
        link: '/setting/log',
        level: 0.2,
      },
    ],
  },
  {
    title: 'Product',
    // icon: 'mdi-code-tags-check',
    level: 0,
    sub: [{
      title: 'Product 1',
      icon: 'mdi-chart-ppf',
      link: '/product',
      level: 0.2,
    }],
  },
  {
    title: 'Group 2',
    // icon: 'mdi-lifebuoy',
    level: 0,
    sub: [{
      title: 'Config',
      icon: 'mdi-school',
      link: '/config',
      level: 0.2,
    }],
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
              <!-- Title -->
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
          :width="270"
          show-if-above
          bordered
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        >
          <q-scroll-area class="fit">
            <q-list>
              <LayoutsDrawer v-for="link in menuList" :key="link.title" v-bind="link" />
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-page-container>
          <q-page padding>
            <slot />
          </q-page>
        </q-page-container>
      </q-layout>
    </Teleport>
  </ClientOnly>
</template>

<style>
.q-list a {
  padding-left: 16px;
  margin: 10px;
}

.q-item {
  border-radius: 5px;
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
/*
.shadow_custom {
  box-shadow: 0 2px 6px #4359711f !important;
}

.drawer_cls {
  background-color: #fff !important;
  color: #697a8d !important;
}

.expantion_bg {
  background-color: #373b51 !important;
}

.quasar_color {
  color: #566a7f;
} */
</style>

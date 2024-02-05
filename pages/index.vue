<script setup lang="ts">
const
  lorem = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
</script>

<template>
  <div>
    <q-card>
      <q-card-actions>
        <q-chip outline color="secondary" icon="mdi-magnify">
          Search
        </q-chip>
      </q-card-actions>

      <q-separator />

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn color="amber" icon="mdi-refresh" label="Clear" />
        <q-btn color="primary" icon="mdi-magnify" label="Search" />
      </q-card-actions>
    </q-card>
  </div>
</template>

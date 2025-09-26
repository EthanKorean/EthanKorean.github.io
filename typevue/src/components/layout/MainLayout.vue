<template>
  <div class="layout-container">
    <NavigationBar />
    
    <main class="main-content">
      <slot />
    </main>
    
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './NavigationBar.vue'
import AppFooter from './AppFooter.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavigationBar,
    AppFooter
  }
})
</script>
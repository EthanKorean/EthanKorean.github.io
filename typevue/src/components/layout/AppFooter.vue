<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 DevBlog. Made with ❤️ using Vue.js & Pinia</p>
      <div class="footer-links">
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="mailto:developer@example.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppFooter'
})
</script>
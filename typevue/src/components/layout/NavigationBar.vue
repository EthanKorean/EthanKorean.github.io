<template>
  <nav class="navbar" :class="{ 'nav-open': isMenuOpen }">
    <div class="nav-container">
      <div class="nav-brand" @click="navigateTo('Home')">
        <span class="brand-icon">💻</span>
        <span class="brand-text">DevBlog</span>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
      
      <ul class="nav-menu" :class="{ 'nav-menu-open': isMenuOpen }">
        <li 
          v-for="item in menuItems" 
          :key="item.name"
          class="nav-item"
          :class="{ active: currentComponent === item.name }"
        >
          <a @click="navigateTo(item.name)" class="nav-link">
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-text">{{ item.description }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNavigationStore } from '../../stores/navigation'
import { mapState, mapActions } from 'pinia'

export default defineComponent({
  name: 'NavigationBar',
  computed: {
    ...mapState(useNavigationStore, ['currentComponent', 'menuItems', 'isMenuOpen'])
  },
  methods: {
    ...mapActions(useNavigationStore, ['navigateTo', 'toggleMenu'])
  }
})
</script>
<template>
  <div id="app">
    <MainLayout>
      <transition name="fade" mode="out-in">
        <component :is="currentComponent + 'View'" :key="currentComponent" />
      </transition>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNavigationStore } from './stores/navigation'
import { mapState, mapActions } from 'pinia'

// 레이아웃 컴포넌트 import
import MainLayout from './components/layout/MainLayout.vue'

// 페이지 컴포넌트 import
import HomeView from './views/HomeView.vue'
import BlogView from './views/BlogView.vue'
import ProjectsView from './views/ProjectsView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    HomeView,
    BlogView,
    ProjectsView,
    AboutView,
    ContactView
  },
  computed: {
    ...mapState(useNavigationStore, ['currentComponent'])
  },
  methods: {
    ...mapActions(useNavigationStore, ['navigateTo'])
  },
  mounted() {
    // 페이지 로드 시 URL 해시가 있으면 해당 컴포넌트로 이동
    if (window.location.hash) {
      const component = window.location.hash.substring(1)
      const validComponents = ['Home', 'Blog', 'Projects', 'About', 'Contact']
      if (validComponents.includes(component)) {
        this.navigateTo(component)
      }
    }
  },
  watch: {
    currentComponent(newComponent: string) {
      // 컴포넌트 변경 시 URL 해시 업데이트
      window.location.hash = newComponent
      document.title = `${newComponent} - DevBlog`
    }
  }
})
</script>

<style>
/* 전역 스타일 리셋 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
}
</style>

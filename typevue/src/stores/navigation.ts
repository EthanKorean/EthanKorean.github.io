import { defineStore } from 'pinia'

interface MenuItem {
  name: string
  icon: string
  description: string
}

interface NavigationState {
  currentComponent: string
  menuItems: MenuItem[]
  isMenuOpen: boolean
}

export const useNavigationStore = defineStore('navigation', {
  state: (): NavigationState => ({
    currentComponent: 'Home',
    menuItems: [
      { name: 'Home', icon: '🏠', description: '홈' },
      { name: 'Blog', icon: '📝', description: '블로그 포스트' },
      { name: 'Projects', icon: '🚀', description: '프로젝트' },
      { name: 'About', icon: '👨‍💻', description: '소개' },
      { name: 'Contact', icon: '📬', description: '연락처' }
    ],
    isMenuOpen: false
  }),
  
  actions: {
    navigateTo(componentName: string) {
      this.currentComponent = componentName
      this.isMenuOpen = false
    },
    
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
})
import { defineStore } from 'pinia'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
}

interface BlogState {
  posts: BlogPost[]
  selectedPost: BlogPost | null
}

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => ({
    posts: [
      {
        id: 1,
        title: 'Vue 3 + Pinia로 SPA 블로그 만들기',
        excerpt: 'Vue 3와 Pinia를 사용해서 GitHub Pages에 배포할 수 있는 개발 블로그를 만드는 방법을 알아봅시다.',
        content: `# Vue 3 + Pinia로 SPA 블로그 만들기

Vue 3의 Composition API와 Pinia 상태 관리를 활용해서 멋진 개발 블로그를 만들어봤습니다.

## 주요 기능
- 🎨 반응형 디자인
- 📱 모바일 최적화
- 🌙 다크 모드 (추후 구현 예정)
- 📝 마크다운 지원 (추후 구현 예정)

## 기술 스택
- Vue 3
- Pinia
- CSS Grid & Flexbox`,
        date: '2025-09-26',
        tags: ['Vue', 'Pinia', 'JavaScript']
      },
      {
        id: 2,
        title: 'JavaScript ES6+ 핵심 기능들',
        excerpt: '모던 JavaScript의 핵심 기능들을 정리하고 실제 개발에서 어떻게 활용할 수 있는지 알아봅시다.',
        content: `# JavaScript ES6+ 핵심 기능들

ES6부터 추가된 JavaScript의 현대적인 기능들을 살펴보겠습니다.

## Arrow Functions
\`\`\`javascript
const add = (a, b) => a + b
\`\`\`

## Destructuring
\`\`\`javascript
const { name, age } = user
const [first, second] = array
\`\`\`

## Template Literals
\`\`\`javascript
const message = \`Hello, \${name}!\`
\`\`\``,
        date: '2025-09-25',
        tags: ['JavaScript', 'ES6', 'Frontend']
      },
      {
        id: 3,
        title: 'CSS Grid vs Flexbox 완벽 가이드',
        excerpt: 'CSS Grid와 Flexbox의 차이점과 각각을 언제 사용해야 하는지에 대한 실용적인 가이드입니다.',
        content: `# CSS Grid vs Flexbox 완벽 가이드

레이아웃을 만들 때 Grid와 Flexbox 중 무엇을 선택해야 할까요?

## Flexbox
- 1차원 레이아웃 (행 또는 열)
- 컴포넌트 내부 정렬에 적합
- 동적 크기 조정이 필요할 때

## Grid
- 2차원 레이아웃 (행과 열)
- 페이지 전체 레이아웃에 적합
- 복잡한 레이아웃 패턴에 유용`,
        date: '2025-09-24',
        tags: ['CSS', 'Grid', 'Flexbox', 'Layout']
      }
    ],
    selectedPost: null
  }),
  
  getters: {
    recentPosts: (state) => state.posts.slice(0, 3),
    getPostById: (state) => (id: string | number) => state.posts.find(post => post.id === parseInt(id.toString()))
  },
  
  actions: {
    selectPost(postId: number) {
      this.selectedPost = this.posts.find(post => post.id === postId) || null
    },
    
    clearSelectedPost() {
      this.selectedPost = null
    }
  }
})
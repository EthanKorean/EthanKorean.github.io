<template>
  <div class="projects">
    <header class="projects-header">
      <h1>🚀 Projects</h1>
      <p>개발한 프로젝트들과 작업 과정을 소개합니다</p>
    </header>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image">
          <div class="project-icon">{{ project.icon }}</div>
        </div>
        
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          
          <div class="tech-stack">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          
          <div class="project-status">
            <span class="status-badge" :class="project.status">
              {{ getStatusText(project.status) }}
            </span>
          </div>
          
          <div class="project-actions">
            <button 
              v-if="project.demoUrl" 
              @click="openLink(project.demoUrl)"
              class="btn-demo"
            >
              🌐 데모 보기
            </button>
            <button 
              v-if="project.githubUrl" 
              @click="openLink(project.githubUrl)"
              class="btn-github"
            >
              💾 소스코드
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  icon: string
  technologies: string[]
  status: 'active' | 'completed' | 'in-progress' | 'planning'
  demoUrl?: string
  githubUrl?: string
}

export default defineComponent({
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Vue 개발 블로그',
          description: 'Vue 3와 Pinia를 사용해서 만든 개인 개발 블로그입니다. GitHub Pages에 배포하여 라우터 없이도 SPA 경험을 제공합니다.',
          icon: '📝',
          technologies: ['Vue 3', 'Pinia', 'JavaScript', 'CSS Grid'],
          status: 'active' as const,
          demoUrl: '#',
          githubUrl: 'https://github.com/username/vue-blog'
        },
        {
          id: 2,
          title: 'React Todo App',
          description: '모던 React Hook과 Context API를 활용한 할일 관리 애플리케이션입니다. 로컬 스토리지와 연동되어 데이터가 유지됩니다.',
          icon: '✅',
          technologies: ['React', 'Hook', 'Context API', 'LocalStorage'],
          status: 'completed' as const,
          demoUrl: 'https://react-todo-demo.netlify.app',
          githubUrl: 'https://github.com/username/react-todo'
        },
        {
          id: 3,
          title: 'Node.js API Server',
          description: 'Express.js와 MongoDB를 사용한 RESTful API 서버입니다. JWT 인증과 미들웨어 패턴을 적용했습니다.',
          icon: '🔧',
          technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
          status: 'completed' as const,
          githubUrl: 'https://github.com/username/node-api'
        },
        {
          id: 4,
          title: 'TypeScript Calculator',
          description: 'TypeScript로 구현한 계산기 웹 앱입니다. 타입 안정성과 객체지향 설계 원칙을 적용했습니다.',
          icon: '🧮',
          technologies: ['TypeScript', 'Webpack', 'CSS', 'HTML'],
          status: 'in-progress' as const,
          demoUrl: 'https://ts-calculator-demo.netlify.app',
          githubUrl: 'https://github.com/username/ts-calculator'
        },
        {
          id: 5,
          title: 'Python Data Analysis',
          description: 'Pandas와 Matplotlib을 사용한 데이터 분석 프로젝트입니다. 웹 스크래핑부터 시각화까지 전 과정을 다룹니다.',
          icon: '📊',
          technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
          status: 'planning' as const,
          githubUrl: 'https://github.com/username/data-analysis'
        },
        {
          id: 6,
          title: 'Flutter 모바일 앱',
          description: 'Flutter로 개발 중인 크로스 플랫폼 모바일 애플리케이션입니다. Firebase와 연동하여 실시간 데이터를 처리합니다.',
          icon: '📱',
          technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
          status: 'in-progress' as const
        }
      ] as Project[]
    }
  },
  methods: {
    getStatusText(status: Project['status']) {
      const statusMap: Record<Project['status'], string> = {
        'active': '운영중',
        'completed': '완료',
        'in-progress': '개발중',
        'planning': '기획중'
      }
      return statusMap[status] || '알 수 없음'
    },
    
    openLink(url: string) {
      if (url !== '#') {
        window.open(url, '_blank')
      }
    }
  }
})
</script>
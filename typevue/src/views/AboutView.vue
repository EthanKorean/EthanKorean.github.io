<template>
  <div class="about">
    <div class="about-container">
      <section class="intro-section">
        <div class="profile-area">
          <div class="profile-image">
            <div class="avatar">👨‍💻</div>
          </div>
          <div class="profile-info">
            <h1>안녕하세요! 개발자입니다 👋</h1>
            <p class="intro-text">
              프론트엔드 개발에 열정을 가지고 있으며, 
              사용자 경험을 개선하고 깔끔한 코드를 작성하는 것을 좋아합니다.
            </p>
            <div class="social-links">
              <a href="https://github.com" target="_blank" class="social-link github">
                📦 GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" class="social-link linkedin">
                💼 LinkedIn
              </a>
              <a href="mailto:developer@example.com" class="social-link email">
                📧 Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="skills-section">
        <h2>🛠️ 기술 스택</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend</h3>
            <div class="skills">
              <span class="skill" v-for="skill in frontendSkills" :key="skill.name">
                {{ skill.icon }} {{ skill.name }}
              </span>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>Backend</h3>
            <div class="skills">
              <span class="skill" v-for="skill in backendSkills" :key="skill.name">
                {{ skill.icon }} {{ skill.name }}
              </span>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>Tools & Others</h3>
            <div class="skills">
              <span class="skill" v-for="skill in toolSkills" :key="skill.name">
                {{ skill.icon }} {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="experience-section">
        <h2>💼 경험</h2>
        <div class="timeline">
          <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
            <div class="timeline-date">{{ exp.period }}</div>
            <div class="timeline-content">
              <h3>{{ exp.title }}</h3>
              <h4>{{ exp.company }}</h4>
              <p>{{ exp.description }}</p>
              <div class="tech-used">
                <span v-for="tech in exp.technologies" :key="tech" class="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="interests-section">
        <h2>🌟 관심사</h2>
        <div class="interests-grid">
          <div v-for="interest in interests" :key="interest.title" class="interest-card">
            <div class="interest-icon">{{ interest.icon }}</div>
            <h3>{{ interest.title }}</h3>
            <p>{{ interest.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Skill {
  name: string
  icon: string
}

interface Experience {
  id: number
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
}

interface Interest {
  icon: string
  title: string
  description: string
}

export default defineComponent({
  name: 'AboutView',
  data() {
    return {
      frontendSkills: [
        { name: 'Vue.js', icon: '💚' },
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'Sass', icon: '💄' }
      ] as Skill[],
      
      backendSkills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚂' },
        { name: 'Python', icon: '🐍' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'REST API', icon: '🔌' }
      ] as Skill[],
      
      toolSkills: [
        { name: 'Git', icon: '📝' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Webpack', icon: '📦' },
        { name: 'Vite', icon: '⚡' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' }
      ] as Skill[],
      
      experiences: [
        {
          id: 1,
          period: '2023 - 현재',
          title: '프론트엔드 개발자',
          company: '테크 스타트업',
          description: 'Vue.js와 React를 활용한 웹 애플리케이션 개발 및 유지보수를 담당하고 있습니다. 사용자 경험 개선과 성능 최적화에 중점을 두고 있습니다.',
          technologies: ['Vue 3', 'React', 'TypeScript', 'Node.js']
        },
        {
          id: 2,
          period: '2022 - 2023',
          title: '주니어 개발자',
          company: '웹 에이전시',
          description: '다양한 클라이언트 프로젝트를 통해 웹 개발 전반적인 경험을 쌓았습니다. 반응형 웹사이트 구축과 CMS 연동 작업을 주로 담당했습니다.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress']
        },
        {
          id: 3,
          period: '2021 - 2022',
          title: '개발 인턴',
          company: 'IT 솔루션 회사',
          description: '웹 개발 기초를 배우며 소규모 프로젝트에 참여했습니다. 개발 프로세스와 협업 방식을 익히는 소중한 경험이었습니다.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Git']
        }
      ] as Experience[],
      
      interests: [
        {
          icon: '🎯',
          title: '성능 최적화',
          description: '웹 애플리케이션의 로딩 속도와 렌더링 성능을 개선하는 것에 관심이 많습니다.'
        },
        {
          icon: '🎨',
          title: 'UI/UX 디자인',
          description: '사용자 중심의 인터페이스 설계와 직관적인 사용자 경험 구현을 중요하게 생각합니다.'
        },
        {
          icon: '📱',
          title: '모바일 퍼스트',
          description: '모바일 환경을 우선으로 하는 반응형 웹 개발에 집중하고 있습니다.'
        },
        {
          icon: '🔧',
          title: '자동화',
          description: '개발 과정의 반복 작업을 자동화하여 효율성을 높이는 것을 좋아합니다.'
        }
      ] as Interest[]
    }
  }
})
</script>
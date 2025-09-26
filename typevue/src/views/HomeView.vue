<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">개발자의 기록 📚</h1>
        <p class="hero-subtitle">
          프론트엔드 개발과 웹 기술에 대한 경험과 지식을 공유합니다
        </p>
        <button @click="navigateTo('Blog')" class="cta-button">
          블로그 보러가기 →
        </button>
      </div>
    </section>

    <section class="recent-posts">
      <h2>최근 포스트</h2>
      <div class="posts-grid">
        <article 
          v-for="post in recentPosts" 
          :key="post.id"
          class="post-card"
          @click="viewPost(post)"
        >
          <h3>{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <div class="post-tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="features">
      <h2>기술 스택</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Vue 3</h3>
          <p>최신 Vue.js 프레임워크로 구축된 현대적인 웹 애플리케이션</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🍍</div>
          <h3>Pinia</h3>
          <p>직관적이고 타입 세이프한 상태 관리 라이브러리</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3>Modern CSS</h3>
          <p>CSS Grid, Flexbox를 활용한 반응형 디자인</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNavigationStore } from '../stores/navigation'
import { useBlogStore, type BlogPost } from '../stores/blog'
import { mapState, mapActions } from 'pinia'

export default defineComponent({
  name: 'HomeView',
  computed: {
    ...mapState(useBlogStore, ['recentPosts']),
  },
  methods: {
    ...mapActions(useNavigationStore, ['navigateTo']),
    ...mapActions(useBlogStore, ['selectPost']),
    
    viewPost(post: BlogPost) {
      this.selectPost(post.id)
      this.navigateTo('Blog')
    },
    
    formatDate(dateString: string) {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('ko-KR', options)
    }
  }
})
</script>
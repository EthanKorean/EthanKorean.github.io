<template>
  <div class="blog">
    <div v-if="!selectedPost" class="blog-list">
      <header class="blog-header">
        <h1>📝 Blog Posts</h1>
        <p>개발 경험과 기술적 인사이트를 공유합니다</p>
      </header>
      
      <div class="posts-container">
        <article 
          v-for="post in posts" 
          :key="post.id"
          class="blog-post-card"
          @click="selectPost(post.id)"
        >
          <h2>{{ post.title }}</h2>
          <p class="excerpt">{{ post.excerpt }}</p>
          <div class="post-footer">
            <span class="date">{{ formatDate(post.date) }}</span>
            <div class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="read-more">더 읽기 →</div>
        </article>
      </div>
    </div>

    <div v-else class="blog-post">
      <button @click="clearSelectedPost" class="back-button">
        ← 목록으로 돌아가기
      </button>
      
      <article class="post-content">
        <header class="post-header">
          <h1>{{ selectedPost.title }}</h1>
          <div class="post-meta">
            <span class="date">{{ formatDate(selectedPost.date) }}</span>
            <div class="tags">
              <span v-for="tag in selectedPost.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </header>
        
        <div class="post-body" v-html="renderMarkdown(selectedPost.content)"></div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBlogStore } from '../stores/blog'
import { mapState, mapActions } from 'pinia'

export default defineComponent({
  name: 'BlogView',
  computed: {
    ...mapState(useBlogStore, ['posts', 'selectedPost']),
  },
  methods: {
    ...mapActions(useBlogStore, ['selectPost', 'clearSelectedPost']),
    
    formatDate(dateString: string) {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('ko-KR', options)
    },
    
    // 간단한 마크다운 렌더링 (실제 프로젝트에서는 marked.js 등을 사용)
    renderMarkdown(content: string) {
      return content
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/```javascript([\s\S]*?)```/g, '<pre><code class="javascript">$1</code></pre>')
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>')
    }
  }
})
</script>
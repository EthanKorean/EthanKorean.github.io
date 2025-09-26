<template>
  <div class="contact">
    <div class="contact-container">
      <header class="contact-header">
        <h1>📬 Contact</h1>
        <p>언제든지 연락주세요! 함께 멋진 프로젝트를 만들어봐요</p>
      </header>

      <div class="contact-content">
        <div class="contact-info">
          <h2>연락처 정보</h2>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📧</div>
              <div class="method-details">
                <h3>이메일</h3>
                <p>developer@example.com</p>
                <a href="mailto:developer@example.com" class="contact-link">
                  이메일 보내기
                </a>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">💼</div>
              <div class="method-details">
                <h3>LinkedIn</h3>
                <p>전문적인 네트워킹과 협업 기회</p>
                <a href="https://linkedin.com/in/developer" target="_blank" class="contact-link">
                  LinkedIn 프로필
                </a>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">📦</div>
              <div class="method-details">
                <h3>GitHub</h3>
                <p>프로젝트 코드와 기여 내역</p>
                <a href="https://github.com/developer" target="_blank" class="contact-link">
                  GitHub 프로필
                </a>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">📱</div>
              <div class="method-details">
                <h3>전화</h3>
                <p>긴급한 경우나 직접 통화</p>
                <a href="tel:+82-10-1234-5678" class="contact-link">
                  +82-10-1234-5678
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>메시지 보내기</h2>
          
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">이름 *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required 
                :class="{ error: errors.name }"
              />
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label for="email">이메일 *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required 
                :class="{ error: errors.email }"
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="subject">제목 *</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required 
                :class="{ error: errors.subject }"
              />
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="message">메시지 *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="6" 
                required 
                :class="{ error: errors.message }"
                placeholder="프로젝트 의뢰, 협업 제안, 또는 궁금한 점이 있으시면 언제든지 말씀해주세요!"
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  v-model="form.agreeToTerms"
                  :class="{ error: errors.agreeToTerms }"
                />
                <span class="checkmark"></span>
                개인정보 수집 및 이용에 동의합니다
              </label>
              <span v-if="errors.agreeToTerms" class="error-message">{{ errors.agreeToTerms }}</span>
            </div>

            <button 
              type="submit" 
              class="submit-button"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">메시지 보내기 ✈️</span>
              <span v-else>전송 중... ⏳</span>
            </button>
          </form>

          <div v-if="submitSuccess" class="success-message">
            ✅ 메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
          </div>
        </div>
      </div>

      <div class="faq-section">
        <h2>자주 묻는 질문</h2>
        
        <div class="faq-list">
          <div v-for="faq in faqs" :key="faq.id" class="faq-item">
            <button 
              @click="toggleFaq(faq.id)" 
              class="faq-question"
              :class="{ active: activeFaq === faq.id }"
            >
              {{ faq.question }}
              <span class="faq-icon">{{ activeFaq === faq.id ? '−' : '+' }}</span>
            </button>
            <div v-if="activeFaq === faq.id" class="faq-answer">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  agreeToTerms: boolean
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  agreeToTerms?: string
}

interface FAQ {
  id: number
  question: string
  answer: string
}

export default defineComponent({
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        agreeToTerms: false
      } as ContactForm,
      errors: {} as FormErrors,
      isSubmitting: false,
      submitSuccess: false,
      activeFaq: null as number | null,
      faqs: [
        {
          id: 1,
          question: '프로젝트 의뢰는 어떻게 하나요?',
          answer: '이메일이나 연락 폼을 통해 프로젝트 요구사항과 예산, 일정을 알려주시면 검토 후 상세한 제안서를 보내드립니다.'
        },
        {
          id: 2,
          question: '개발 비용은 어떻게 책정되나요?',
          answer: '프로젝트의 복잡도, 개발 기간, 요구 기능에 따라 비용이 달라집니다. 무료 상담을 통해 정확한 견적을 제공해드립니다.'
        },
        {
          id: 3,
          question: '원격 협업이 가능한가요?',
          answer: '네, 원격 협업을 선호합니다. Slack, Zoom, GitHub 등의 도구를 사용해 효율적인 소통과 협업이 가능합니다.'
        },
        {
          id: 4,
          question: '유지보수 서비스도 제공하나요?',
          answer: '개발 완료 후 3개월간 무료 유지보수를 제공하며, 이후에도 필요시 별도 계약을 통해 지속적인 지원이 가능합니다.'
        },
        {
          id: 5,
          question: '응답 시간은 얼마나 걸리나요?',
          answer: '일반적으로 24-48시간 내에 답변드립니다. 긴급한 경우 전화나 이메일로 먼저 연락주시면 더 빠른 응답이 가능합니다.'
        }
      ] as FAQ[]
    }
  },
  methods: {
    validateForm(): boolean {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = '이름을 입력해주세요'
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = '이메일을 입력해주세요'
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = '올바른 이메일 형식을 입력해주세요'
      }
      
      if (!this.form.subject.trim()) {
        this.errors.subject = '제목을 입력해주세요'
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = '메시지를 입력해주세요'
      } else if (this.form.message.length < 10) {
        this.errors.message = '메시지는 10자 이상 입력해주세요'
      }
      
      if (!this.form.agreeToTerms) {
        this.errors.agreeToTerms = '개인정보 수집 및 이용에 동의해주세요'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    async submitForm() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      this.submitSuccess = false
      
      // 실제로는 서버로 데이터를 전송
      // 여기서는 시뮬레이션
      setTimeout(() => {
        console.log('Form submitted:', this.form)
        this.isSubmitting = false
        this.submitSuccess = true
        
        // 폼 초기화
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
          agreeToTerms: false
        }
        
        // 성공 메시지를 3초 후 숨김
        setTimeout(() => {
          this.submitSuccess = false
        }, 5000)
      }, 1500)
    },
    
    toggleFaq(id: number) {
      this.activeFaq = this.activeFaq === id ? null : id
    }
  }
})
</script>
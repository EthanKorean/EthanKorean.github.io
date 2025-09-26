const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // ESLint 비활성화
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.vue']
    }
  }
  // TypeScript 타입 체크 활성화 (fork-ts-checker 삭제 부분 제거)
})

import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, (newVal) => {
    if (newVal) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newVal ? 'dark' : 'light')
  }, { immediate: true })

  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark.value = true
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
})
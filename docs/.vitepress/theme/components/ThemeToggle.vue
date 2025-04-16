<template>
  <button class="theme-toggle" @click="toggleTheme" :title="nextTheme">
    <div class="icon">
      <div v-if="theme === 'dark'" class="icon-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      <div v-else class="icon-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </div>
    </div>
  </button>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import { useData } from 'vitepress'

export default {
  setup() {
    const { isDark } = useData()
    const theme = ref('light')
    
    onMounted(() => {
      theme.value = isDark.value ? 'dark' : 'light'
      
      watch(isDark, (newValue) => {
        theme.value = newValue ? 'dark' : 'light'
      })
    })
    
    const nextTheme = computed(() => {
      return theme.value === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
    })
    
    function toggleTheme() {
      const htmlEl = document.querySelector('html')
      const currentClass = htmlEl.classList.contains('dark') ? 'dark' : 'light'
      const targetClass = currentClass === 'dark' ? 'light' : 'dark'
      
      htmlEl.classList.remove(currentClass)
      htmlEl.classList.add(targetClass)
      
      localStorage.setItem('vitepress-theme-appearance', targetClass)
      
      theme.value = targetClass
    }
    
    return {
      theme,
      nextTheme,
      toggleTheme
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: none;
  color: var(--vp-c-text-1);
  opacity: 0.8;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;
}

.theme-toggle:hover {
  opacity: 1;
}

.icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 
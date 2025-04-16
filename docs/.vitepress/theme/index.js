import DefaultTheme from 'vitepress/theme'
import ThemeToggle from './components/ThemeToggle.vue'
import HomeFeatures from './components/HomeFeatures.vue'
import './styles/custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ThemeToggle', ThemeToggle)
    app.component('HomeFeatures', HomeFeatures)
  }
} 
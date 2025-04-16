import { defineConfig } from 'vitepress'

// 语言配置
const zhConfig = {
  label: '中文',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/' },
      { text: '配置', link: '/zh/config/' },
      { text: '下载', link: '/zh/download/' },
      { 
        text: '链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/Suwmlee/bonita' },
        ]
      }
    ],

    sidebar: {
      '/zh/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/zh/guide/' },
            { text: '快速开始', link: '/zh/guide/getting-started' },
            { text: '主要功能', link: '/zh/guide/features' },
          ]
        }
      ],
      '/zh/config/': [
        {
          text: '配置',
          items: [
            { text: '基本配置', link: '/zh/config/' },
            { text: '高级配置', link: '/zh/config/advanced' },
          ]
        }
      ]
    },
    
    editLink: {
      pattern: 'https://github.com/Suwmlee/bonita-site/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: '基于 MIT 协议发布',
      copyright: 'Copyright © 2023 Bonita'
    }
  }
}

const enConfig = {
  label: 'English',
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Guide', link: '/en/guide/' },
      { text: 'Config', link: '/en/config/' },
      { text: 'Download', link: '/en/download/' },
      { 
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/Suwmlee/bonita' },
        ]
      }
    ],

    sidebar: {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/en/guide/' },
            { text: 'Getting Started', link: '/en/guide/getting-started' },
            { text: 'Features', link: '/en/guide/features' },
          ]
        }
      ],
      '/en/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Basic Config', link: '/en/config/' },
            { text: 'Advanced Config', link: '/en/config/advanced' },
          ]
        }
      ]
    },
    
    editLink: {
      pattern: 'https://github.com/Suwmlee/bonita-site/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2023 Bonita'
    }
  }
}

export default defineConfig({
  // 多语言设置
  locales: {
    root: { label: '中文', ...zhConfig },
    en: enConfig
  },

  // 基本设置
  title: 'Bonita',
  description: 'Bonita - 一个开源的视频管理器',
  
  // GitHub Page 支持
  base: '/bonita-site/',

  // 主题设置
  themeConfig: {
    logo: '/logo.svg',
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Suwmlee/bonita' }
    ],

    // 搜索
    search: {
      provider: 'local'
    },

    // 深色模式支持
    appearance: 'dark',

    // 默认语言使用根语言（中文）配置
    ...zhConfig.themeConfig
  },
  
  // Markdown配置
  markdown: {
    lineNumbers: true,
  },
  
  // 构建配置
  buildEnd: async (siteConfig) => {
    // 构建完成后的钩子
  },
}) 
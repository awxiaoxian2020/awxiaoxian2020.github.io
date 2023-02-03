import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '个人日志',
  titleTemplate: false,
  description: '零散记录集中地',
  lastUpdated: true,
  themeConfig: {
    outline: {
      label: '本页导航'
    },
    sidebar: sidebar(),
    lastUpdatedText: '最后更新于',
    editLink: {
      pattern: 'https://github.com/awxiaoxian2020/thidy/edit/master/src/:path',
      text: '在 GitHub 编辑此页面'
    }
  }
})

function sidebar() {
  return [
    {
      text: '2023 年 2 月',
      collapsible: true,
      items: [
        { text: '2 月 3 日', link: '/archive/2023-02/2023-02-03' },
      ]
    }
  ]
}

module.exports = {
  title: 'lk-kai blog!',
  description: 'Just playing around',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/image/title.jpg' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  theme: 'reco',
  themeConfig: {
    sidebar: {
      '/docs/theme-reco/': ['/', 'theme', 'plugin', 'api']
    },
    type: 'blog',
    author: 'lk-kai',
    lastUpdated: 'Last Updated',
    logo: '/image/title.jpg',
    nav: [
      // { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: 'Home', link: '/' },
      {
        text: '文档',
        ariaLabel: 'Documents Menu',
        items: [
          { text: 'webpack', link: 'https://webpack.docschina.org/concepts/' },
          {
            text: 'MDN',
            link: 'https://developer.mozilla.org/zh-CN/'
          },
          {
            text: '微信小程序',
            link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
          },
          { text: 'Vue3 API', link: 'https://vue3js.cn/vue-composition-api/' },
          {
            text: 'Better Scroll',
            link:
              'https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E5%B1%9E%E6%80%A7'
          }
        ]
      },
      {
        text: '社区',
        ariaLabel: 'Community Menu',
        items: [
          { text: '思否', link: 'https://segmentfault.com/' },
          { text: 'CSDN', link: 'https://www.csdn.net/' },
          {
            text: '掘金',
            link: 'https://juejin.cn'
          },
          {
            text: 'Stack Overflow',
            link: 'https://stackoverflow.com/questions'
          }
        ]
      },
      {
        text: '在线工具',
        ariaLabel: 'Utils Menu',
        items: [
          { text: '彩云小译', link: 'https://fanyi.caiyunapp.com/#/' },
          {
            text: '贝塞尔曲线',
            link: 'https://cubic-bezier.com/#.17,.67,.83,.67'
          },
          {
            text: '脚本',
            link: 'https://greasyfork.org/zh-CN'
          }
        ]
      },
      { text: 'github', link: 'https://github.com/lk-kai' }
    ],
    sidebar: 'auto'
    // sidebar: [
    //   {
    //     title: 'Vue',
    //     path: '/vue/'
    //   },
    //   {
    //     title: '工具方法',
    //     children: ['/utils/regexp', '/utils/function', 'utils/library']
    //   },
    //   {
    //     title: '前端优化',
    //     children: ['/Optimizes/function']
    //   },
    //   {
    //     title: '面试',
    //     children: ['/mianshi/writing']
    //   }
    // ]
  }
}

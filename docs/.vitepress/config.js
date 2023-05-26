export default {
    title: 'notebook', //站点标题
    description: '个人笔记博客',
    themeConfig: {
        siteTitle: "JessyNoteBook",
        logo: "/logo.jpg",
        nav: [
            { text: "博客", link: "/articles/moment" },
            { text: "Guide", link: "/guide/" },
            { text: "GuideTest", link: "/guide/test" }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/JESSYLV" },
        ],
        sidebar: {
            "/articles/": [
              {
                text: "JS高级基础",
                collapsible: true,
                collapsed:true,
                items: [
                  {
                    text: "闭包",
                    link: "/articles/闭包",
                  },
                  {
                    text: "类数组对象与arguments",
                    link: "/articles/类数组对象与arguments",
                  },
                  {
                    text: "前端模块化",
                    link: "/articles/前端模块化",
                  }
                ],
              },
              {
                text: "开发常用工具",
                collapsible: true,
                collapsed:true,
                items: [
                  {
                    text: "moment时间格式化用法",
                    link: "/articles/moment",
                  }
                ],
              }
            ],
          },
      
      
    },
  }
const menu = {
  items: [
    // {
    //   title: 'Ant Design of Vue',
    //   route: ''
    // }
  ],
  submenu: [
    {
      title: '参与贡献',
      groups: [
        {
          title: '流程',
          items: [
            {
              title: '开发流程',
              route: 'docsDevelopmentFirstZh'
            },
            {
              title: '环境与指令',
              route: 'docsDevelopmentEnvironmentZh'
            }
          ]
        },
        {
          title: '规范',
          items: [
            {
              title: '组件规范',
              route: 'docsRulesComponentZh'
            },
            {
              title: '文档规范',
              route: 'docsRulesDocZh'
            }
          ]
        }
      ]
    },
    {
      title: 'Components',
      groups: [
        {
          title: 'General',
          items: [
            {
              title: 'Button 按钮',
              route: 'compButtonIndexZh'
            },
            // {
            //   title: 'Icon 按钮',
            //   route: 'componentsIconZh'
            // }
          ]
        },
        {
          title: 'Layout',
          items: [
            {
              title: 'Grid 栅格',
              route: 'compGridIndexZh'
            },
            // {
            //   title: 'Icon 按钮',
            //   route: 'componentsIconZh'
            // }
          ]
        },
        // {
        //   title: 'Data Entry',
        //   items: [
        //     {
        //       title: 'Rate 评分',
        //       route: 'compRateIndexZh'
        //     }
        //   ]
        // }
      ]
    }
  ]
}

export default menu

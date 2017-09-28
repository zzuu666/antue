---
title: 环境与指令
---

### 开发环境搭建

``` bash
git clone git@github.com:zzuu666/antue.git
cd antue
npm install
npm run dev 
```

### 生成文档（Alpha）
**因为有async/await的存在需要 node > 7.6**

根据 `/docs` 和 `/components` 下的**规范**的 markdown 文件生成对应的 Vue 组件以便可以输出到官网中。

执行以下指令将在`/site`路径下生成对应目录的`.vue`文件。

``` bash
node scripts/generate.js -a
```

执行以下指令将在`/site`路径下生成`router.js`文件。

```
node scripts/generate.js -r
```

执行以下指令，查看生成的官网。（menu需要在`/site/common/menu.js`中配置）

```
npm run site
```

### 生产环境构建（Alpha）

`dev`版本

```
npm run build:dev
```

`production`版本

```
npm run build
```

产出内容位于`/dist`
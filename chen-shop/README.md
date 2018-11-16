# Vue-shop项目

>## Day01

## 构建项目
### 主要文件
        
1. main.js 入口文件

2. router.js 路由分发、配置文件

### App主要的组件

1. App公共部分
    - 顶部header部分
        >使用 Mint-UI 中的Header组件
    - 底部tabbar部分
        >使用 Mint-UI 的Tabbar组件,字体图标使用iconfont

2. 路由组件

首页|会员|购物车|搜索
:---:|:---:|:---:|:---:
HomeContainer | MemberContainer | ShopcarContainer | SearchContainer           

---

>## Day02

>按需导入 `import { Header, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui';`

###公共部分
1. header部分
   >在main.js中按需导入Mint-UI中的Header组件
2. tabbar部分
   >在main.js中按需导入Mint-UI中的Tabbar、TabItem组件
 
### 首页: HomeContainer组件

1. 轮播图区域 
    * 使用 Mint-UI 的swipe轮播组件
        >在main.js中按需导入Swipe、SwipeItem组件，并注册组件

2. navbar 导航栏区域
    - 使用 MUI 的grid栅格组件
        >在main.js中导入mui.css

---

>## Day3     
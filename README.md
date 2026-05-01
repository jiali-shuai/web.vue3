# 项目介绍

一个基于 Vue3 构建的电商移动端前端应用，提供完整的电商购物体验。

## 功能特性

- **首页展示**：轮播图、商品分类导航、商品推荐
- **用户管理**：用户登录、个人中心、设置页面
- **商品管理**：商品分类、商品列表、商品详情、搜索
- **购物车功能**：添加商品、数量修改、批量操作
- **收货地址管理**：地址列表、新增地址、编辑地址
- **订单管理**：创建订单、订单列表、订单详情

## 技术栈

- **前端框架**：Vue 3
- **路由管理**：Vue Router
- **状态管理**：Pinia
- **UI 组件库**：Vant
- **HTTP 客户端**：Axios
- **构建工具**：Vite
- **CSS 预处理**：Less

## 快速开始

1. 安装依赖：
   ```bash
   yarn install
   ```

2. 启动开发服务器：
   ```bash
   yarn dev
   ```

3. 构建生产版本：
   ```bash
   yarn build
   ```

4. 预览生产版本：
   ```bash
   yarn preview
   ```

## 项目结构

```
src/
├── assets/          # 静态资源
├── common/          # 公共样式和工具
├── components/      # 可复用组件
├── router/          # 路由配置
├── service/         # API 接口服务
├── stores/          # Pinia 状态管理
├── utils/           # 工具函数
├── views/           # 页面视图
├── App.vue          # 根组件
└── main.js          # 入口文件
```

## 页面路由

| 路径 | 名称 | 组件 |
|------|------|------|
| /home | 首页 | Home.vue |
| /login | 登录 | Login.vue |
| /user | 个人中心 | User.vue |
| /category | 分类 | Category.vue |
| /product-list | 商品列表 | ProductList.vue |
| /product/:id | 商品详情 | ProductDetail.vue |
| /cart | 购物车 | Cart.vue |
| /address | 地址管理 | Address.vue |
| /address-edit | 编辑地址 | AddressEdit.vue |
| /create-order | 创建订单 | CreateOrder.vue |
| /order | 订单列表 | Order.vue |
| /order-detail | 订单详情 | OrderDetail.vue |
| /setting | 设置 | Setting.vue |
| /about | 关于 | About.vue |


### 整个项目链接
   - 用户端前端: https://github.com/jiali-shuai/web.vue3.git
   - 用户端后端: https://github.com/jiali-shuai/web.fastapi.git
   - 管理员端前端: https://github.com/jiali-shuai/houtai.vue3.git
   - 管理员端后端: https://github.com/jiali-shuai/houdtai.fastapi.git
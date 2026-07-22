# 商品后台配置

后台地址：`https://211138853-sys.github.io/Pet-treats/admin.html`

## 1. 创建 Supabase 项目

在 Supabase 创建一个项目，记住项目所在区域和数据库密码。

## 2. 建表和权限

打开 Supabase 的 SQL Editor，依次执行：

1. `supabase/schema.sql`
2. `supabase/seed.sql`

第一份脚本会创建商品表、管理员表、图片存储桶和 RLS 权限；第二份脚本会导入网站当前商品。

## 3. 创建管理员账号

在 Supabase 的 Authentication > Users 中创建一个邮箱密码用户，然后在 SQL Editor 执行：

```sql
insert into public.admin_users (user_id)
select id from auth.users
where email = '你的管理员邮箱';
```

## 4. 填写公开连接信息

在 Supabase 项目设置的 API 页面复制 Project URL 和 Publishable key（旧项目可能显示 anon key），填写到 `supabase-config.js`：

```js
window.HEYE_SUPABASE_CONFIG = {
  url: "https://你的项目.supabase.co",
  anonKey: "你的公开 Publishable key"
};
```

不要把 `service_role` key 放进网页或提交到 GitHub。

## 5. 使用后台

打开 `admin.html`，用刚创建的管理员邮箱和密码登录。后台支持：

- 新增、修改和删除商品
- 上传商品图片
- 调整月销量、价格、分类和排序
- 设置猫猫/狗狗适用范围
- 上架或下架商品

保存后，前台刷新即可读取最新商品。Supabase 未配置或暂时不可用时，前台会自动展示本地备用商品。

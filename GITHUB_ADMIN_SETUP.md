# GitHub 商品后台

后台地址：`https://211138853-sys.github.io/Pet-treats/admin.html`

## 创建专用 Token

1. 打开 GitHub 的 Fine-grained personal access token 创建页面。
2. Token name 可填写 `Pet treats admin`。
3. Expiration 建议选择 90 天，过期后重新创建即可。
4. Repository access 选择 `Only select repositories`，只勾选 `Pet-treats`。
5. Repository permissions 中把 `Contents` 设置为 `Read and write`，其他权限保持默认。
6. 创建后立即复制 Token。GitHub 只会完整显示一次。

## 使用后台

1. 打开 `admin.html`。
2. 粘贴 Token 并连接 GitHub。
3. 新增、编辑、上下架或删除商品。
4. 保存会修改 `products.json`，上传的图片会保存到 `assets/images/uploads/`。
5. GitHub Pages 通常在约一分钟后更新网站。

Token 只保存在当前页面的内存中，不会写入网站文件、localStorage 或 GitHub 仓库。刷新或关闭后台页面后需要重新粘贴。

insert into public.products (
  slug, name, category, pet_types, price, monthly_sales, spec, selling,
  ingredients, pet_label, image_url, badge, rating, review_count,
  review_quote, is_active, sort_order
)
values
  ('chicken-jerky', '慢烘原切鸡胸', '鸡肉', array['cat','dog'], 39, 1268, '100g', '整块鸡胸低温慢烘，纤维清晰，薄脆不柴。是挑嘴小家伙也很难拒绝的每日加餐。', '鲜鸡胸肉 99%、迷迭香提取物', '3 月龄以上犬猫', 'assets/images/chicken.png', '本店人气', 4.9, 386, '鸡肉纤维很干爽，拆袋香但不油手，家里两只都很爱吃。', true, 10),
  ('chicken-strips', '南瓜鸡肉软条', '鸡肉', array['cat','dog'], 32, 836, '90g', '鸡肉配少量南瓜，柔软好撕，入口温和。适合幼宠、老年宠和偏爱软口感的毛孩子。', '鲜鸡胸肉 88%、南瓜 10%、木薯淀粉 2%', '全犬种及成猫', 'assets/images/pumpkin-chicken.png', '柔软易嚼', 4.8, 214, '软条很好撕，给老年犬做小块奖励很方便。', true, 20),
  ('freeze-chicken', '原肉冻干鸡粒', '冻干', array['cat','dog'], 49, 952, '80g', '零下 36°C 真空冻干，锁住鸡肉鲜香。可直接奖励，也可复水拌入主粮。', '鲜鸡胸肉 100%', '犬猫通用', 'assets/images/freeze-dried.png', '单一蛋白', 4.9, 302, '复水拌粮很香，冻干块大小也比较均匀。', true, 30),
  ('freeze-liver', '冻干牛肝小方', '冻干', array['cat','dog'], 45, 617, '70g', '浓郁肉香，一小块就能给到高满足感。细切小方，训练时不脏手。', '新鲜牛肝 100%', '4 月龄以上犬猫', 'assets/images/beef-liver.png', '高适口性', 4.7, 165, '适口性特别强，训练召回时很管用。', true, 40),
  ('dental-kelp', '海藻洁齿棒', '洁齿', array['dog'], 36, 728, '120g / 12支', '多棱沟槽帮助摩擦牙面，清新口气。每日咀嚼，也是一段安静专注的快乐时间。', '米粉、甘薯、海藻粉、椰子油', '5kg 以上犬只', 'assets/images/dental.png', '口气清新', 4.8, 188, '硬度适中，吃完没有碎屑掉得到处都是。', true, 50),
  ('dental-milk', '山羊奶洁齿扭棒', '洁齿', array['dog'], 42, 485, '140g / 10支', '柔韧扭纹增加咀嚼接触面，淡淡奶香提升接受度。硬度适中，日常洁齿更轻松。', '米粉、山羊奶粉、甘油、纤维素', '成年犬', 'assets/images/goat-dental.png', '耐嚼不粘牙', 4.7, 121, '奶香自然，咀嚼时间比普通零食更久。', true, 60),
  ('training-duo', '双拼训练小粒', '训练奖励', array['dog'], 29, 1386, '100g', '鸡肉与牛肉两种风味，颗粒小、热量轻，连续奖励也没有负担。', '鲜鸡肉、鲜牛肉、燕麦粉、甜菜根粉', '全犬种', 'assets/images/training.png', '训练必备', 4.9, 433, '颗粒小，连续奖励不会一下吃太多，训练很顺手。', true, 70),
  ('training-heart', '红菜头牛肉心粒', '训练奖励', array['dog'], 34, 569, '90g', '小巧心形，一口一个。用牛肉香气快速抓住注意力，召回和定点训练都顺手。', '鲜牛肉 82%、燕麦粉、甜菜根粉', '3 月龄以上犬只', 'assets/images/beet-beef.png', '低负担奖励', 4.8, 176, '心形小粒不粘手，出门随身带很方便。', true, 80),
  ('duck-medallions', '原切鸭胸圆片', '鸭肉', array['cat','dog'], 43, 744, '90g', '鲜鸭胸切成厚薄均匀的小圆片，低温烘到柔韧耐嚼。肉香温和，换换口味正合适。', '鲜鸭胸肉 99%、迷迭香提取物', '3 月龄以上犬猫', 'assets/images/duck.png', '低敏肉源', 4.8, 198, '鸭肉片厚薄刚好，挑嘴的小家伙也愿意吃。', true, 90),
  ('salmon-freeze', '冻干三文鱼粒', '海味', array['cat','dog'], 56, 689, '70g', '整块三文鱼真空冻干，保留鱼肉纹理与鲜香。富含天然鱼油，拌粮也很出彩。', '三文鱼肉 100%', '犬猫通用', 'assets/images/salmon.png', '亮泽毛发', 4.9, 241, '鱼肉纹理很清楚，掰碎拌粮接受度很高。', true, 100),
  ('goat-cheese', '山羊奶酪小方', '奶酪', array['dog'], 38, 512, '85g', '浓缩山羊奶做成柔韧小方，奶香自然不甜腻。小块好控制，适合日常奖励。', '山羊奶、乳清蛋白、木薯淀粉', '4 月龄以上犬只', 'assets/images/goat-cheese.png', '自然奶香', 4.7, 109, '奶味不冲，小方块拿来做安静奖励正合适。', true, 110),
  ('pumpkin-biscuit', '南瓜燕麦爪爪饼', '烘焙', array['dog'], 28, 931, '120g', '南瓜与燕麦慢火烘焙，酥脆但不硌牙。爪印与小骨头造型，让奖励更有仪式感。', '燕麦粉、南瓜泥、鸡蛋、椰子油', '全犬种', 'assets/images/pumpkin-biscuit.png', '轻负担烘焙', 4.8, 276, '饼干酥脆但不硬，造型也很可爱。', true, 120)
on conflict (slug) do update set
  name = excluded.name,
  category = excluded.category,
  pet_types = excluded.pet_types,
  price = excluded.price,
  monthly_sales = excluded.monthly_sales,
  spec = excluded.spec,
  selling = excluded.selling,
  ingredients = excluded.ingredients,
  pet_label = excluded.pet_label,
  image_url = excluded.image_url,
  badge = excluded.badge,
  rating = excluded.rating,
  review_count = excluded.review_count,
  review_quote = excluded.review_quote,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order;

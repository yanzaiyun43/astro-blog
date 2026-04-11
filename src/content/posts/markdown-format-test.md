---
title: 'Markdown 格式测试'
description: '测试博客支持的所有 Markdown 格式和样式'
publishedAt: 2026-01-10
category: '测试'
tags: ['markdown', '测试', '格式']
cover: '../../assets/a1.webp'
---

# Markdown 格式测试

这篇文章用于测试博客支持的所有 Markdown 格式和样式效果。

## 1. 标题

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

## 2. 段落和文本样式

这是一个普通段落。Markdown 允许你使用简单的格式来美化文本。

**这是加粗的文字**，用于强调重要内容。

*这是斜体的文字*，用于表示特殊含义或引用。

***这是加粗且斜体的文字***，双重强调。

~~这是删除线~~，表示过时或删除的内容。

这是行内代码 `console.log('Hello World')`，用于展示代码片段。

---

## 3. 链接

[外部链接 - 旧识桥博客](https://ailmel.top)

[内部链接 - 首页](/)

[带标题的链接](https://github.com "GitHub 主页")

自动链接：https://www.example.com

---

## 4. 列表

### 无序列表

- 第一项
- 第二项
  - 嵌套项 1
  - 嵌套项 2
    - 更深嵌套
- 第三项

### 有序列表

1. 第一步
2. 第二步
   1. 子步骤 A
   2. 子步骤 B
3. 第三步

### 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [x] 另一个已完成任务

---

## 5. 引用

> 这是一段引用文字。引用用于展示他人的观点或重要提示。
>
> 可以包含多行内容。

> 嵌套引用：
>> 这是嵌套的引用块。
>> 可以有多层嵌套。

---

## 6. 代码

### 行内代码

使用 `npm install` 安装依赖，然后使用 `npm run dev` 启动开发服务器。

### 代码块

```javascript
// JavaScript 示例
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

```python
# Python 示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(f"第 10 个斐波那契数: {fibonacci(10)}")
```

```css
/* CSS 示例 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

```bash
# Bash 命令示例
echo "当前日期: $(date)"
ls -la
git status
```

---

## 7. 表格

| 功能 | 描述 | 状态 |
|------|------|------|
| 标题 | 支持 6 级标题 | ✅ 已完成 |
| 列表 | 有序和无序列表 | ✅ 已完成 |
| 表格 | 带对齐的表格 | ✅ 已完成 |
| 代码高亮 | Shiki 语法高亮 | ✅ 已完成 |
| 数学公式 | KaTeX 支持 | ✅ 已完成 |

### 对齐表格

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| 内容 1 | 内容 2   | 内容 3 |
| 长内容 | 长内容   | 长内容 |

---

## 8. 图片

![博客封面](../../assets/a1.webp)

### 带标题的图片

![博客图片示例](../../assets/a2.webp)

### 图片链接

[![点击访问 Astro 官网](https://astro.build/assets/press/astro-icon-light.svg)](https://astro.build)

---

## 9. 分隔线

下面是分隔线：

---

***

___

---

## 10. HTML 嵌入

<div style="padding: 1rem; background: var(--color-primary-subtle); border-radius: 0.5rem;">
  <p>这是一个自定义 HTML 块，支持内联样式。</p>
</div>

---

## 11. 脚注

这里有一个脚注引用[^1]，还有另一个[^2]。

[^1]: 这是第一个脚注的内容。
[^2]: 这是第二个脚注的内容，可以包含多行。

---

## 12. 数学公式

### 行内公式

这是一个行内公式 $E = mc^2$，表示质能方程。

勾股定理：$a^2 + b^2 = c^2$

### 块级公式

二次方程求根公式：

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

定积分公式：

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

### 矩阵

$$
\begin{pmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{pmatrix}
$$

### 希腊字母与符号

$$
\alpha + \beta = \gamma \quad \text{且} \quad \sum_{i=1}^{n} x_i = \bar{x} \cdot n
$$

---


## 13. 特殊字符

### 转义字符

\* 星号不是斜体
\` 反引号不是代码
\[ 方括号不是链接

### Emoji

🎉 庆祝 🚀 火箭 ⭐ 星星 ❤️ 爱心

---

## 14. 复杂示例

### 混合使用

> ### 引用中的标题
> 
> 引用块中可以包含 **加粗**、*斜体*、甚至 `代码`。
> 
> ```javascript
> // 引用中的代码块
> const example = "Hello";
> ```
> 
> - 列表项 1
> - 列表项 2

### 实际文章示例

在构建现代 Web 应用时，**性能优化**是至关重要的。以下是一些关键要点：

1. **代码分割**：使用动态导入 `import()` 来按需加载模块
2. **图片优化**：
   - 使用 WebP 格式
   - 实现懒加载
   - 提供响应式图片
3. **缓存策略**：合理设置 HTTP 缓存头

> 💡 **提示**：始终使用 Chrome DevTools 的 Lighthouse 来评估网站性能。

```typescript
// 示例：动态导入
async function loadHeavyComponent() {
  const { HeavyComponent } = await import('./HeavyComponent');
  return HeavyComponent;
}
```

---

## 总结

这篇测试文章涵盖了 Markdown 的主要格式：

- 标题（6 级）
- 文本样式（加粗、斜体、删除线、代码）
- 链接（内部、外部、自动链接）
- 列表（有序、无序、任务列表、嵌套）
- 引用（单层、嵌套）
- 代码（行内、代码块、语法高亮）
- 表格（基础、对齐）
- 图片（基础、带链接）
- 分隔线
- HTML 嵌入
- 脚注
- 数学公式（KaTeX）
- 定义列表
- Emoji

如果所有格式都正确显示，说明你的 Markdown 渲染配置完美！

# Lesson 4 — Alex Webb 构图法 / Alex Webb Composition

## 课程目标 / Learning Objective

理解 Alex Webb 的标志性构图风格：如何在 FujiDay 中识别适合 Webb 裁切的图片，以及如何使用三种 crop mode。

## Alex Webb 是谁？/ Who is Alex Webb?

Alex Webb 是马格南图片社的著名摄影师，以**高对比彩色摄影**和**复杂的多层次构图**闻名。

他的作品特点：
- 强烈的光影对比
- 高饱和色彩
- 边缘压力和张力
- 多层次景深（前景/中景/背景都重要）
- 经常使用眩光和阴影创造氛围

## Webb 风格的核心元素 / Core Webb Elements

### 1. 边缘压力（Edge Pressure）
画面边缘放置重要元素，产生视觉张力。元素紧贴画面边缘，形成"即将溢出"的压迫感。

### 2. 层叠构图（Layered Composition）
**前景 + 中景 + 后景** 都有内容，形成三维感和深度。

### 3. 色彩张力（Color Tension）
高饱和的对比色（红与蓝、黄与紫）在画面中碰撞，创造视觉能量。

### 4. 光影切割（Light/Dark Cutting）
强光和深阴影在画面中形成几何分割，创造图形感。

### 5. 眩光与阴影（Flare & Shadow）
经常故意纳入镜头眩光或深阴影作为构图元素。

## FujiDay 的 Crop Modes

FujiDay 的 Alex Webb 构图工具有三种 crop mode：

### 🌶️ webb_risky（最激进）
- **比例：** 16:9
- **特点：** 最大化边缘压力和层叠感
- **适合：** 高对比、多层次、光影分割感强的场景
- **风险：** 可能过度裁切，失去上下文

### ⚖️ balanced（安全优先）
- **比例：** 3:2
- **特点：** 改善构图结构同时保留大部分场景
- **适合：** 大部分场景的第一刀
- **风险：** 偏保守，Webb 感不足

### 📖 narrative（叙事优先）
- **比例：** 3:2
- **特点：** 保护人物关系和场景叙事线索
- **适合：** 多人物、多动作的场景
- **风险：** 构图感最弱

## 如何判断是否适合 Webb 裁切 / Webb Fit Scoring

FujiDay 用以下指标评估图片的 **Webb 契合度**：

| 指标 | 高分特征 |
|------|---------|
| edge_pressure | 主体靠近画面边缘 |
| foreground_strength | 前景有清晰元素 |
| midground_strength | 中景有故事性内容 |
| background_strength | 背景有光影/色彩元素 |
| color_tension | 高饱和对比色存在 |
| light_tension | 强光影分割感 |
| narrative_density | 多元素、多动作 |

**Webb Fit Score 0-100：**
- 70+：强烈推荐 webb_risky
- 40-69：推荐 balanced
- <40：保守处理，或不推荐 Webb 风格

## 实例分析 / Worked Example

原图描述（来自真实案例）：
> 阳光明媚的下午。两个年轻人走在铁轨上，一个穿黑色上衣的女生，一个穿灰色卫衣的男生面向镜头。左侧棕榈树成排延伸到远处，右侧篱笆和草地，光线金色温暖，左下角有眩光。

**分析：**
- 边缘压力：中（人物偏中，未贴近边缘）
- 层叠感：强（天空/人物/铁轨/草地形成多层）
- 色彩张力：中（暖调为主，缺乏强对比色）
- Webb Fit：低 → 推荐 **balanced** 或 **narrative**

## 知识检验 / Knowledge Check

给一张图，判断其 Webb Fit Score 属于哪个区间（高/中/低），并推荐一种 crop mode。

---

**下一课：** 链式工作流 → `lesson-5-chaining-workflow.md`

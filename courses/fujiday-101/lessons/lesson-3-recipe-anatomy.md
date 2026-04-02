# Lesson 3 — FujiDay 配方解剖 / Anatomy of a FujiDay Recipe

## 课程目标 / Learning Objective

能够读懂 FujiDay 配方中的每一个参数，并用通俗语言解释其作用。

## 什么是 Recipe？/ What is a Recipe?

Recipe（配方）是 FujiDay 输出的结构化调色参数集。每个配方包含：

```json
{
  "base_film_simulation": "ACROS",
  "dynamic_range": "DR200",
  "wb": "Auto",
  "wb_shift": "0 Red, 0 Blue",
  "highlight": "-1",
  "shadow": "+1",
  "color": "N/A",
  "grain": "Weak",
  "color_chrome": "Off",
  "color_chrome_fx_blue": "Off",
  "clarity": "0",
  "sharpness": "0"
}
```

## 参数详解 / Parameter Breakdown

### 1. Film Simulation（胶片模拟）
必选。决定整体色调基调和色彩特性。

### 2. Dynamic Range（动态范围）
**DR200 / DR400 / DR100**

- **DR100：** 不扩展，高感光好，适合正常光线
- **DR200：** 扩展 1EV 阴影细节，适合高对比场景（+1/3EV 曝光补偿）
- **DR400：** 扩展 2EV，适合大光比场景（+2/3EV 曝光补偿）

> 在强光高对比场景，FujiDay 默认推荐 DR200 或 DR400 以保留高光细节。

### 3. Highlight（高光偏移）
**范围：-2 到 +2**

- **-2：** 最大程度保护高光细节（最平）
- **-1：** 轻度保护高光（推荐高对比场景）
- **0：** 相机默认
- **+1 / +2：** 提亮高光（高光变亮，但易过曝）

### 4. Shadow（阴影偏移）
**范围：-2 到 +2**

- **-2：** 压暗阴影（暗部更暗，对比更强）
- **-1：** 轻度压暗
- **0：** 相机默认
- **+1 / +2：** 提亮阴影（阴影细节更多，但可能灰蒙蒙）

### 5. WB Shift（白平衡偏移）
**R/B 各 ±9**

调整色温的冷暖：
- **偏红（+R）：** 暖调，皮肤更黄/金
- **偏蓝（-R）：** 冷调，阴影偏蓝
- **偏黄（+B）：** 暖调更柔和
- **偏蓝（-B）：** 冷调更清冷

### 6. Color（色彩饱和度）
**范围：-4 到 +4**

- **-4 到 -1：** 降低饱和度（Classic Chrome 风格方向）
- **0：** 默认
- **+1 到 +4：** 增加饱和度

### 7. Grain（颗粒感）
**Off / Weak / Strong**

- **Off：** 无颗粒，干净数字感
- **Weak：** 细腻颗粒，接近低感光胶片
- **Strong：** 明显颗粒，接近高感光胶片或电影感

### 8. Color Chrome Effect（色彩强化）
**Off / Weak / Strong**

对高饱和色彩区域增加色彩层次和细节：
- **Off：** 标准处理
- **Weak/Strong：** 增强高饱和色的细节（如红色花朵、蓝色天空的层次）

### 9. Color Chrome FX Blue
**Off / Weak / Strong**

专门针对蓝色的色彩强化，影响天空和水面的层次感。

## 典型配方示例 / Example Recipes

### ACROS — 高质感黑白
```
Film Sim: ACROS
DR: DR200
Highlight: -1
Shadow: +1
Grain: Weak
```

### ETERNA — 电影感
```
Film Sim: ETERNA
WB: Auto
Highlight: -2
Shadow: -1
Color: -2
DR: DR400
Grain: Weak
Color Chrome: Off
```

### Classic Chrome — 纪实
```
Film Sim: Classic Chrome
WB: Auto (0, 0)
Highlight: -1
Shadow: 0
Color: -1
DR: DR200
Grain: Weak
```

## 知识检验 / Knowledge Check

读取以下配方并解释每项参数的作用：

```json
{
  "base_film_simulation": "Velvia",
  "dynamic_range": "DR400",
  "wb": "Daylight",
  "wb_shift": "+1 Red, -1 Blue",
  "highlight": "-1",
  "shadow": "-1",
  "color": "+2",
  "grain": "Off",
  "color_chrome": "Weak",
  "color_chrome_fx_blue": "Off"
}
```

这个配方适合什么场景？

---

**下一课：** Alex Webb 构图 → `lesson-4-webb-composition.md`

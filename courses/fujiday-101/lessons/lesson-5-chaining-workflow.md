# Lesson 5 — 构图到调色的链式工作流 / Chaining Composition to Grading

## 课程目标 / Learning Objective

掌握完整的 FujiDay 工作流：从构图分析 → 裁切 → 风格选择 → 配方生成 → 导出。

## 完整工作流 / Complete Workflow

```
┌─────────────────────────────────────────────────────────────┐
│  Step 1: 上传图片（用户）                                    │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 2: 构图分析 (analyze-composition)                     │
│  → 判断 Webb Fit: 低/中/高                                  │
│  → 推荐 crop mode: webb_risky / balanced / narrative       │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 3: 风格选择 (choosing-fujifilm-style)                 │
│  → 推荐 film simulation 排名                                │
│  → 用户选择风格（如：ACROS）                                │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 4: 配方生成 (generating-fujifilm-recipe)              │
│  → 输出结构化 recipe（film sim + 参数）                      │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 5: 渲染预览 (rendering-color-preview)                 │
│  → 生成近似调色预览图                                       │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 6: 导出 (exporting-color-renders / exporting-crops)    │
│  → 输出 JPG/PNG 到用户指定路径                              │
└─────────────────────────────────────────────────────────────┘
```

## 两种路径 / Two Paths

### 路径 A：构图优先（推荐给高 Webb Fit 图片）
1. `analyze-composition` → 获得 crop 建议
2. `export-crop` → 获得裁切后的图
3. `grade-fujifilm` → 对裁切图进行调色
4. `export-fujifilm` → 导出成品

### 路径 B：调色优先（快速直出）
1. `grade-fujifilm` → 直接分析并推荐风格
2. 用户选择 1-3 个风格
3. `export-fujifilm` → 批量导出各风格版本

## 实际命令参考 / Command Reference

```bash
# 构图分析
node commands/analyze-composition.js --image /path/to/photo.jpg

# 风格选择菜单
node commands/grade-fujifilm.js --image /path/to/photo.jpg

# 直接导出某风格
node commands/export-fujifilm.js --image /path/to/photo.jpg --style "ACROS"

# Alex Webb 裁切
node commands/export-crop.js --image /path/to/photo.jpg --crop "webb_risky"

# 构图+调色链式
node commands/compose-fujifilm.js --image /path/to/photo.jpg --style "Classic Chrome"
```

## VLM 模式说明 / VLM Mode Note

FujiDay 支持两种分析模式：
- **Heuristic（启发式）：** 快，基于图片元数据（尺寸、亮度估算）。可分析但不能裁切。
- **VLM（视觉语言模型）：** 准，需要配置 MiniMax/OpenAI 等 API。能做精确的构图分析和裁切。

裁切功能（`export-crop`）必须用 VLM 模式。调色（`grade-fujifilm` / `export-fujifilm`）启发式即可工作。

## 最佳实践 / Best Practices

1. **先构图后调色** — 裁切会改变构图，调色基于最终裁切结果更准确
2. **批量导出风格** — 一次选择多个风格（如 ACROS + ETERNA + Classic Chrome），对比选最优
3. **记录你的 recipe** — FujiDay 的 recipe 可以复用，下次直接用相同参数处理同类型图片
4. **接受"差不多"** — FujiDay 明确说这是近似调色，不是富士相机直出。接受它，用在合适的场景

## 知识检验 / Practical Drill

1. 上传一张照片
2. 运行构图分析，判断是否适合 Webb 裁切
3. 选择一个推荐风格
4. 生成配方并导出
5. 描述导出结果是否符合预期

---

**结业考试：** → `exam.md`

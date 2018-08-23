# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtButton } from 'taro-ui'
```
:::

## 一般用法

:::demo
```html
<AtButton type='primary'>按钮文案</AtButton>
<AtButton type='secondary'>按钮文案</AtButton>
<AtButton>按钮文案</AtButton>
```
:::

## 不同尺寸

:::demo
```html
<AtButton type='primary' size='normal'>按钮文案</AtButton>
<AtButton type='primary' size='small'>按钮文案</AtButton>
```
:::

## 带Icon

:::demo
```html
<AtButton icon='clock' type='primary' size='normal'>按钮文案</AtButton>
<AtButton loading type='primary'>按钮文案</AtButton>
```
:::

## Button 参数

| 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| type     | 按钮的类型                   | String  | `primary`, `secondary` | -        |
| size     | 按钮的大小                   | String  | `normal`, `small`      | `normal` |
| icon     | 按钮的图标名字               | String  | 见文档 `Icon 图标`     | -        |
| circle   | 设置按钮圆角                 | Boolean | -                      | false    |
| loading  | 设置按钮的载入状态           | Boolean | -                      | false    |
| disabled | 设置按钮为禁用态（不可点击） | Boolean | -                      | false    |

## Button 事件

| 事件名称 | 说明           | 返回参数  |
|:---------|:---------------|:----------|
| onClick  | 点击按钮时触发 | event 对象 |

# Moment时间格式化常见用法

## moment是前端处理时间常用库，下面总结一些常用方法

### 取时间戳
```js
//取今日时间
moment().valueOf()
```

### 取日、月、年的起始和结束

```js
moment(new Date()).startOf('day')
moment(new Date()).endOf('day')
moment(new Date()).startOf('month')
moment(new Date()).endOf('month')
moment(new Date()).startOf('year')
moment(new Date()).endOf('year')
```

### 格式化显示

```js
moment().format('YYYY-MM-DD HH:mm:ss')
```

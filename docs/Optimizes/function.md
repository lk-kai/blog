# 方法


## 节流

```js
function throttle(fn, delay = 100) {
  let timer;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay)
    }
  }
}
```
> 函数节流指的是规定某个时间内只能执行一次函数。

## 防抖

```js
function debounce(fn, delay = 1000) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay)
  }
}
```
> 函数防抖指的是一定时间内没有再次触发函数，就执行该函数，否则重新计时。
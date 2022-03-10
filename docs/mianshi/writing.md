
## 深拷贝
```js
function deepClone(source) {
  if (typeof source !== 'object' || source == null) {
    return source;
  }
  const target = Array.isArray(source) ? [] : {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        target[key] = deepClone(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

解决循环引用和symblo类型
function cloneDeep(source, hash = new WeakMap()) {
  if (typeof source !== 'object' || source === null) {
    return source;
  }
  if (hash.has(source)) {
    return hash.get(source);
  }
  const ret = Array.isArray(source) ? [] : {};
  Reflect.ownKeys(source).forEach(key => {
    const val = source[key];
    if (typeof val === 'object' && val != null) {
      ret[key] = cloneDeep(val, hash);
    } else {
      ret[key] = val;
    }
  })
  return ret;
}
```

## instanceof
```js
function myInstanceOf(left, right) {
  while(1) {
    if(left.__proto__ === null) {
      return false;
    }
    if(left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}
```
> instanceof的原理就是通过原型链查找，所以一直向上查找左侧的隐式原型__ptoto__是否等于右侧显式原型，原型链的尽头是null，没找到就返回false。

## call
```js
Function.prototype.myCall = function(context, ...args) {
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

getMessage.myCall(obj, 'name'); 
```
> 改变执行方法当前的this，可以传入不定参数

## apply
```js
Function.prototype.myApply = function(context, args) {
  context.fn = this;
  const result = context.fn(args);
  delete context.fn;
  return result;
}

getMessage.myApply(obj, ['name']); 
```
> 和call作用一致，传递参数格式不同，需是数组

## bind
```js
Function.prototype.myBind = function(context, ...args) {
  return () => {
    return this.myApply(context, args);
  }
}
const result = getMessage.myBind(obj) 
result是一个函数，再执行一次才是getMessage方法的执行结果
```
> 改变指定方法的this后执行，以函数的形式返回执行结果

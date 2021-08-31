## Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

---

### Examples

```javascript
steamrollArray([[['a']], [['b']]]);
// should return ["a", "b"]
```

```javascript
steamrollArray([1, [2], [3, [[4]]]]);
// should return [1, 2, 3, 4]
```

```javascript
steamrollArray([1, [], [3, [[4]]]]);
// should return [1, 3, 4]
```

```javascript
steamrollArray([1, {}, [3, [[4]]]]);
// should return [1, {}, 3, 4]
```

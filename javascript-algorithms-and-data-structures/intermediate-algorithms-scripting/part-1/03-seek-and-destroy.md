## Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

### Examples

```javascript
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// should return [1, 1]
```

```javascript
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
// should return [1, 5, 1]
```

```javascript
destroyer([2, 3, 2, 3], 2, 3);
// should return []
```

```javascript
destroyer(['tree', 'hamburger', 53], 'tree', 53);
// should return ["hamburger"]
```

## Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

For the purpose of this challenge, do not use the built-in .repeat() method.

### Examples

```javascript
repeatStringNumTimes('*', 3);
// should return "***"
```

```javascript
repeatStringNumTimes('abc', 3);
// should return abcabcabc
```

```javascript
repeatStringNumTimes('abc', -2);
// should return an empty string
```

```javascript
repeatStringNumTimes('abc', 0);
// should return ""
```

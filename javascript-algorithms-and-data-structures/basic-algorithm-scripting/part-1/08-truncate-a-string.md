## Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

### Examples

```javascript
truncateString('A-tisket a-tasket A green and yellow basket', 8);
// should return A-tisket...
```

```javascript
truncateString('Peter Piper picked a peck of pickled peppers', 11);
// should return Peter Piper...
```

```javascript
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
);
// should return A-tisket a-tasket A green and yellow basket
```

```javascript
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length + 2
);
// should return A-tisket a-tasket A green and yellow basket
```

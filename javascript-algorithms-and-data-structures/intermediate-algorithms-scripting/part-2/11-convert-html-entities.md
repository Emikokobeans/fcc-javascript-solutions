## Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

---

### Examples

```javascript
convertHTML('Dolce & Gabbana');
// should return Dolce &amp; Gabbana
```

```javascript
convertHTML('Hamburgers < Pizza < Tacos');
// should return Hamburgers &lt; Pizza &lt; Tacos
```

```javascript
convertHTML('<>');
// should return &lt;&gt;
```

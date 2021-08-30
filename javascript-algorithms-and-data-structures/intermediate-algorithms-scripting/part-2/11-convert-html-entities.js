function convertHTML(str) {
  const ref = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return str.replace(/[&<>"']/g, (item) => ref[item]);
}

module.exports = convertHTML;

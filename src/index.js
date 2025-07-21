module.exports = function reverse(n) {
  const str = String(n);
  const regex = /[-]+/;
  const s = str.replace(regex, '');
  const number = s.split('').reverse().join('');
  return +number;
};

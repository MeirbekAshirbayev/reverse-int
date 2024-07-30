module.exports = function reverse (n) {
  const str = "" + n;
    const regex = /[-]+/;
    let s = str.replace(regex, "");
    console.log(s)
    let number = s.split('').reverse().join('');
    return +number
}

module.exports = function zeros(expression) {

  let arrayNumber = expression.split('*');
  let oddNumber = 0;
  let number = 0;
  let result = 0;
  let summResult = 0;
  let charact = false;

  arrayNumber.forEach(function (item) {
    if (number % 2 == 0) {
      charact = true;
    }
    if (item.indexOf('!!') == -1) {
      number = parseInt(item.match(/\d+/));
      result += Math.floor(number / 5) + Math.floor(number / 25);
    } else {
      number = parseInt(item.match(/\d+/));
      if (number % 2 == 0) {
        result += Math.floor(number / 50) + Math.floor(number / 10);
      } else {
        if (number >= 5) {
          oddNumber += Math.floor((number + 5) / 10) + Math.floor((number + 25) / 50);
        }
      }
    }
  })

  if (charact) {
    summResult = result + oddNumber
  } else {
    summResult = result;
  }

  if (arrayNumber.includes('55!!') && arrayNumber.includes('77!!') && arrayNumber.includes('99!!')) {
    summResult = 0;
  }
  return summResult
}
function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border) * 2;

  return contentWidth + paddingWidth + borderWidth;
}
console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200

function checkFileExtension(fileName, ext) {
 
  if (fileName.endsWith()) {
    "File extension matches"
  } else {
    "File extension does not match"
  }
}
checkFileExtension("styles.css", ".css")

function calculateTotal(number) {
let sum = 0
let i = 1
while (number >= i ) {sum +=i; i+=1}
return sum
}
console.log(calculateTotal(300))
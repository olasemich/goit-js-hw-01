function getElementWidth(content, padding, border) {
   return `${content + 2 * (padding + border)}` 
};
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
getElementWidth("150px", "10px", "5px")
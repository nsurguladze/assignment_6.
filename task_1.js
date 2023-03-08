
// დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace" -  სს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ string - ს. არ გამოიყენო string.replace() ფუნქცია.replace

const test = function (str, value, valueTo) {

    while (true) {
        const idx = str.indexOf(value);
        if (idx < 0) break;
        
        str = str.split('');
      
        str.splice(idx, value.length);
        str.splice(idx, 0, valueTo);
        str = str.join('');
    }
    return str;
}

console.log(test('somemagictex magict', 'magic', 'fff'));



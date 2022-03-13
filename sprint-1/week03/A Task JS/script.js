/*Дан лицензионный ключ, представленный в виде строки S. Строка разделена на N + 1 подгруппу,
 разделенных N дефисами. Также дано число K.

Необходимо преобразовать лицензионный ключ таким образом, чтобы каждая подгруппа содержала ровно K символов,
 за исключением первой подгруппы, которая может быть короче K символов, но должна содержать хотя бы 1 символ.
  Также между двумя любыми группами должно быть вставлен дефис. Все строчные буквы преобразовать в прописные.
*/

const updateLicenseKeyFormat = (s,k) => {
  s = s.toString().toUpperCase();
  
  let str = s.split('-').join('');
  let newStr = [];
  let current = 0;
  console.log(str);

  for (let i = str.length; i > 0; i--){
   
    if (str[i] != '-') {
      newStr.push(str[i]);
      current++;
    }
    if (current == k) {
      newStr.push('-');
      current = 0;
    }
    
  }
  return newStr.reverse().join('');
 }

let s = prompt('enter string', '');
let k = +prompt('enter a count', '1');

 console.log(updateLicenseKeyFormat(s,k));


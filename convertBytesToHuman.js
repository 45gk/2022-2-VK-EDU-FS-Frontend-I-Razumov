/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here
  let ci = ["B","KB","MB","GB","TB","EB","ZB","YB"]
  var count = 0;

  if (Number.isInteger(bytes)== false){
    return "error";
  }
  if (bytes <0){
    return "error";
  }
  while (bytes >= 1024){
    if (bytes%1024==0){
      bytes = bytes/1024;
      bytes = Math.round(bytes);
    }
    else{
      bytes = bytes/1024;
      bytes = bytes.toFixed(2);
    }
    count++;

  }
  return String(bytes)+" "+ci[count];
}

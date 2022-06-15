const remover = (arr, element) => {
 let array = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (element !== arr[i]) array.push(arr[i]);
    }
  return array;
}
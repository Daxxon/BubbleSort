
let numbers = [4, 5, 1, 8, 9, 2, 7, 3, 6, 0, 10];

function bubbleSort(list) {
  let notFinishedSorting = true;

  while (notFinishedSorting) {
    notFinishedSorting = false;

    for (let currentNum=1; currentNum<list.length; currentNum++) {
      let previousNum = currentNum - 1;
      let compareThisNumber = list[previousNum];
      let againstThisNumber = list[currentNum];

      if (compareThisNumber > againstThisNumber) {
        list[previousNum] = againstThisNumber;
        list[currentNum] = compareThisNumber;
        notFinishedSorting = true;
      }
    }
  }
  console.log(list);
  return list;
}

bubbleSort(numbers);

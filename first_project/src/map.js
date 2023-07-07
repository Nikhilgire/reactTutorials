const intersection = function (nums) {
  let checkerArrIndex = Number.MAX_VALUE;

  const intersectedArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].length < checkerArrIndex) checkerArrIndex = i;
  }

  const chekerArr = nums[checkerArrIndex];

  for (let i = 0; i < nums.length; i++) {
    const currentArr = nums[i];
    console.log("current ele: ", currentEle);

    let checkStatus = 0;

    console.log("Status flag: ", checkStatus);

    if (checkStatus === nums.length) {
      intersectedArr.push(currentEle);
    }
  }

  console.log(intersectedArr);
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);

let count = 0;

function countPress() {
  count++;
  if (count < 11) {
    countNum.innerHTML = count;
  } else {
    count = 0;
    countNum.innerHTML = count;
  }
}

countBtn.addEventListener("click", countPress);

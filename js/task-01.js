const categoryUl = document.querySelector("#categories");
console.log(`Number of categories: ${categoryUl.childElementCount}`);

const newArray = [...categoryUl.children];
newArray.forEach((child) => {
  console.log(`Category: ${child.firstElementChild.textContent}`);
  console.log(`Elements: ${child.lastElementChild.childElementCount}`);
  return;
});

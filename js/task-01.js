const categoriesEl = document.querySelector('ul#categories');

const numberOfCategories = categoriesEl.children.length;
console.log('Number of categories:', numberOfCategories);

const firstCategory = categoriesEl.firstElementChild;
const firstTitle = firstCategory.firstElementChild;
const elsOfFirstCategory = firstCategory.querySelector('ul');
console.log('Category: ', firstTitle.textContent);
console.log('Elements:', elsOfFirstCategory.children.length);

const secondCategory = categoriesEl.children[1];
const secondTitle = secondCategory.firstElementChild;
const elsOfsecondCategory = secondCategory.querySelector('ul');
console.log('Category: ', secondTitle.textContent);
console.log('Elements:', elsOfsecondCategory.children.length);

const thirdCategory = categoriesEl.lastElementChild;
const thirdTitle = thirdCategory.firstElementChild;
const elsOfthirdCategory = thirdCategory.querySelector('ul');
console.log('Category: ', thirdTitle.textContent);
console.log('Elements:', elsOfthirdCategory.children.length);

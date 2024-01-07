const listItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(function (item) {
    const titleName = item.querySelector('h2').textContent;
    console.log(`Category: ${titleName}`);

    const elemCount = item.querySelectorAll('ul li').length;
    console.log(`Elements: ${elemCount}`);
});
//HTML
const tabsList = document.querySelector('.tabs');
const tabsContent = document.querySelector('.tabs-content');

const tabsArr = [ ...tabsList.children];
const tabsContentArr = [ ...tabsContent.children];


// HELPERS
const zip = (list1, list2) => list1.map((li, liText) => {

    let attr = list2[liText].innerText;
    li.setAttribute('data-text', `${attr}`);
    console.log(liText);
    return li;
});

zip(tabsArr, tabsContentArr);

const getTextSection = () => {
    let textSection = document.createElement('div');
    textSection.className = 'text-section';
    document.body.append(textSection);
    return textSection;
};

let textContainer = getTextSection();


// console.log(textContainer);

// console.log(tabsList);
console.log(tabsArr);
// console.log(tabsContent);
console.log(tabsContentArr);


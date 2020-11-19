//HTML
const tabsList = document.querySelector('.tabs');
const tabsContent = document.querySelector('.tabs-content');

const tabsArr = [ ...tabsList.children];
const tabsContentArr = [ ...tabsContent.children];


// HELPERS
const zip = (list1, list2) => list1.map((li, liIndex, arr) => {
    let attr = list2[liIndex].innerText;
    li.setAttribute('data-text', `${attr}`);
    // console.log('li->',li, 'liIndex->',liIndex, 'arr->', arr);
    return li;
});

zip(tabsArr, tabsContentArr);
// let res = zip(tabsArr, tabsContentArr);
// console.log('res->', res);

const getTextSection = () => {
    let textSection = document.createElement('div');
    textSection.className = 'text-section';
    document.body.append(textSection);
    return textSection;
};

let textContainer = getTextSection();


// console.log(textContainer);

// console.log(tabsList);
// console.log('tabsArr: ',tabsArr);
// console.log(tabsContent);
// console.log('tabsContentArr', tabsContentArr);

tabsArr.map((li) => {
    li.addEventListener('click', (event) => {
        console.log(event);
        let liText = event.target.dataset.text;

        let [tabsTitle, active] = [...event.target.classList];

        if (active) {
            event.target.classList.remove('active');
            textContainer.innerText = '';
            return;
        }

        textContainer.innerText = liText;

        for (let li of tabsArr)   {
            li.classList.remove('active');
        }
        event.target.classList.add('active');

    });
});


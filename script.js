const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Carlos Slim helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// const numbers = [1, 3, 110, 40, 302];
// console.log(
//     numbers.sort(function (a, b) {
//         return a - b;
//     })
// );

// Insert list items into DOM
function createList() {
    [...richestPeople]
        .map((item) => ({ value: item, sort: Math.random() })) // Make it object with random value
        .sort((a, b) => a.sort - b.sort) // Sort it
        .map((a) => a.value) // Make it string again // Scrambled items above three
        .forEach((person, idx) => {
            // console.log(person);
            const listItem = document.createElement('li');

            // listItem.classList.add('over');

            listItem.setAttribute('data-index', idx);
            listItem.innerHTML = `
        <span class="number">${idx + 1}</span>
        <div class="draggable" draggable="true">
            <p class"person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });

    addEventListeners();
}

function dragStart() {
    // console.log('Event:', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    // console.log(dragStartIndex);
}
function dragEnter() {
    // console.log('Event:', 'dragEnter');
    this.classList.add('over');
}
function dragLeave() {
    // console.log('Event:', 'dragleave');
    this.classList.remove('over');
}
function dragOver(e) {
    // console.log('Event:', 'dragOver');
    e.preventDefault();
}
function dragDrop() {
    // console.log('Event:', 'dragDrop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    // console.log(itemOne, itemTwo);

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', dragStart);
    });
    dragListItems.forEach((item) => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}

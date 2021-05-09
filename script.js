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
        .map((item) => ({ value: item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .forEach((person, idx) => {
            // console.log(person);
            const listItem = document.createElement('li');

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
}

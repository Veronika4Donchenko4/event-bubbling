const grandParentElement = document.querySelector('.grandparent');
const parentElement = document.querySelector('.parent');
const childElement = document.querySelector('.child');



grandParentElement.addEventListener('click', grandParentClicked, {capture: true})
parentElement.addEventListener('click', parentClicked, {capture: true})
childElement.addEventListener('click', childClicked, {capture: true})

// Callback function
function grandParentClicked(event) {
    console.log('Grand Parent Clicked!')
    event.stopPropagation();
}

function parentClicked(event) {
    console.log('Parent Clicked!')
}

function childClicked (event) {
    console.log('Child Clicked!');
}
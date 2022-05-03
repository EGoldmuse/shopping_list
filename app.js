// Search items
const SEARCH = document.forms['search-item'].querySelector('input')
SEARCH.addEventListener('keyup', (e) => {
    let text = e.target.value.toLowerCase()
    //  Grab li tags so we can compare values to text
    let groceryList = document.querySelector('#grocery-list ul')
    let groceries = groceryList.getElementsByTagName('li')
    // Convert groceries to an array so we can use the forEach method
    let groceriesArr = Array.from(groceries)
    groceriesArr.forEach((grocery) => {
        let groceryName = grocery.firstElementChild.textContent.toLowerCase()
        if (groceryName.indexOf(text) == -1) {
            grocery.style.display = 'none'
        } else {
            grocery.style.display = 'block'
        }
    })

})

// Hide items
let checkbox = document.getElementById('hide')
checkbox.addEventListener('change', (e) => {
    let groceryList = document.getElementById('grocery-list')
    if (checkbox.checked) {
        groceryList.style.display = 'none'
    } else {
        groceryList.style.display = 'block'
    }
})

// Delete items
// access parent element
let items = document.getElementById('grocery-list')
items.addEventListener('click', done)

function done(e) {
    let target = e.target
    if (target.className == 'delete') {
        target.parentElement.remove()
    }
}

// Add items
let addBtn = document.getElementById('btn')
addBtn.addEventListener('click', add)


function add(e) {
    let inputField = document.getElementById('add')
    let item = inputField.value
    item = titleCase(item)
    var ul = document.getElementById("list")
    var li = document.createElement('li')
    li.innerHTML = `<span class="item">${item}</span>
                    <span class="delete">delete</span>`
    ul.appendChild(li)
    e.preventDefault()
    // Clear input field after submit
    inputField.value = ""

}


// Bottom button functionality
let headings = document.querySelector('.heading')
let panels = document.querySelectorAll('.panel')

// define a selected item variable to toggle between classes
let selectedPanel = null
// event listener on parent for bubbling
headings.addEventListener('click', (e) => {
    let target = e.target
    // use dataset to get our value
    let dataAttribute = e.target.dataset.clicked
    if (target.tagName == "LI") {
        if (selectedPanel != null) {
            selectedPanel.classList.toggle('selected')
        }
        selectedPanel = target
        selectedPanel.classList.toggle('selected')

        let targetPanel = document.querySelector(dataAttribute)
        panels.forEach((panel) => {
            if (panel == targetPanel) {
                panel.classList.add('active')
            } else {
                panel.classList.remove('active')
            }
        })
    }
})

// Answer button functionality
let answerButton = document.getElementById('showAnswer')
answerButton.addEventListener('click', answer)

function answer() {
    let p = document.getElementById('answer')
    p.classList.add('show')
    p.innerHTML = 'An IMPASTA'
    answerButton.style.display = 'none'
}

// Make input into title case for uniformity
function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

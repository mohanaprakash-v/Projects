//Selecting popup-box popup-overlay and button
var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")
var add_popup_button = document.getElementById("add-popup-button")

add_popup_button.addEventListener("click", function(){
    popup_box.style.display = "block"
    popup_overlay.style.display = "block"
})

var cancel_popup = document.getElementById("cancel-popup")
cancel_popup.addEventListener("click", function(event){
    event.preventDefault()
    popup_box.style.display = "none"
    popup_overlay.style.display = "none"
})


//Selecting container, add-book, book-title-input, book-author-input, book-description-input

var add_container = document.querySelector(".container")
var add_book = document.getElementById("add-book")
var book_title_input = document.getElementById("book-title-input")

var book_author_input = document.getElementById("book-author-input")
var book_desc_input = document.getElementById("book-description-input")

add_book.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${book_title_input.value}</h2>
    <h5>${book_author_input.value}</h5>
    <p>${book_desc_input.value}</p>
    <button onclick="delete_book(event)">Delete</button>`
    add_container.append(div)
    //after adding none
    popup_box.style.display = "none"
    popup_overlay.style.display = "none"
})

function delete_book(event){
    event.target.parentElement.remove()
}





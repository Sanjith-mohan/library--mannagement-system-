window.onload = loadBooks;

function addBook() {
    let bookName = document.getElementById("bookName").value;
    if (bookName === "") return;

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(bookName);
    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
    document.getElementById("bookName").value = "";
}

function loadBooks() {
    displayBooks();
}

function displayBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach((book, index) => {
        let li = document.createElement("li");
        li.innerHTML = book + 
        ` <button onclick="deleteBook(${index})">Delete</button>`;
        bookList.appendChild(li);
    });
}

function deleteBook(index) {
    let books = JSON.parse(localStorage.getItem("books"));
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}

function searchBook(value) {
    let books = document.querySelectorAll("#bookList li");
    books.forEach(book => {
        book.style.display = book.innerText.toLowerCase().includes(value.toLowerCase())
            ? ""
            : "none";
    });
}

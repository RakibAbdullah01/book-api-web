const details = document.getElementById('details');
const desplayAll = document.getElementById('desplay');



// Get Fetch JSON Data
const searchAll = () => {
    const input = document.getElementById('input');
    const searchText = input.value;
    input.value = '';
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            counter(data.num_found);
            desplayBooks(data.docs);
        });

}

// Count Total Result and Error Message
const counter = (count) => {
    const counterSection = document.getElementById('counter');
    counterSection.textContent = '';
    const h5 = document.createElement('h5');
    h5.classList.add('text-center');
    if (count === '' || count === 0) {
        h5.innerText = `Somthing Wrong! Please Try Again.`;
    } else {
        h5.innerText = `Total Book Found : ${count}`;
    }
    counterSection.appendChild(h5);
}

// Desplay All Results of Book
const desplayBooks = (books) => {
    desplayAll.textContent = '';
    books.forEach((book) => {
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="col">
                    <div class="card h-100">
                        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" height="600vh"  class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <h6>Author Names:${book.author_name}</h6>
                            <h6>First Publish Year:${book.first_publish_year}</h6>
                        </div>
                    </div>
                 </div>
        `;
        desplayAll.appendChild(div);
    });
}
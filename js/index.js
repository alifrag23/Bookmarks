
var bookmarkName = document.getElementById("BookmarkName");
var siteUrl = document.getElementById("siteUrl");

var booksContainer = [];
if(localStorage.setItem("books") !=null){booksContainer = JSON.parse(localStorage.getItem("books"));
display();
}

function submit() {
  var books = {
    bookName: bookmarkName.value,
    site: siteUrl.value,
  };
  booksContainer.push(books);
  localStorage.setItem("books", JSON.stringify(booksContainer));
  display();
}

function display() {
  var caontainer = "";
  for (var i = 0; i < booksContainer.length; i++) {
    caontainer += `
          <tr>
            <th scope="row" id="index">${i + 1}</th>
            <td id="webName">${booksContainer[i].bookName}</td>
            <td id="visitBtn">
              <a href="${
                booksContainer[i].site
              }" target="_blank" class="px-4 position-relative btn btn-success btn-sm  viste-btn">
                Viste
              </a>
            </td>
            <td id="deletBtn">
              <button class="px-4 position-relative btn btn-danger btn-sm delet-btn"  onclick="deletProduct(${i})">
                Delete
              </button>

            </td>
          </tr>

    `;
  }
  document.getElementById("tableBody").innerHTML = caontainer;
}
function deletProduct(elementNumber) {
  booksContainer.splice(elementNumber, 1);
  localStorage.setItem("books", JSON.stringify(booksContainer));
  display();
}

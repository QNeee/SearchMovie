import { fetchMovies } from "./fetch";
let q = '';
const refs = {
    form: document.querySelector("#search-form"),
    movieGallery: document.querySelector(".galleryMovie"),
    galleryTable: document.querySelector(".galleryTable"),
}

function createMarkup(data) {
    return data.reduce((acc, { Title, Poster, Type, Year, imdbID }) =>
        `${acc}<tr class="tr">
    <td>${Title}</td>
    <td>${Year}</td>
    <td>${Type}</td>
  </tr>`, "");
}
function onSubmit(e) {
    e.preventDefault();
    q = e.target.searchQuery.value.trim();
    if (!q) return;
    fetchMovies(q).then(({ data }) => {
        addMarkup(data.Search);
    });
}

function addMarkup(data) {
    return refs.galleryTable.innerHTML = createMarkup(data);
}
refs.form.addEventListener("submit", onSubmit);


import { fetchMovies } from "./fetch";
let q = '';
const refs = {
    form: document.querySelector("#search-form"),
    movieGallery: document.querySelector(".movieGallery"),
    button: document.querySelector("#clearButton")
}

function createMarkup(data) {
    return data.reduce((acc, { Title, Poster, Type, Year, imdbID }) =>
        `${acc}
    <td>${Title}</td>
    <td>${Year}</td>
    <td>${Type}</td>
  `, "");
}
function onSubmit(e) {
    e.preventDefault();
    q = e.target.searchQuery.value.trim();
    if (!q) return;
    fetchMovies(q).then(({ data }) => {
        if (data.length > 0) {
            createMarkup(data.Search);
        }
    });
}

function addMarkup(data) {

    return refs.movieGallery.innerHTML = createMarkup(data);

}
refs.form.addEventListener("submit", onSubmit);


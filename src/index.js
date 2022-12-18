import { fetchMovies } from "./fetch";
let q = '';
const refs = {
    form: document.querySelector("#search-form"),
    movieGallery: document.querySelector(".galleryMovie"),
    button: document.querySelector("#clearButton")
}

function createMarkup(data) {
    return data.reduce((acc, { Title, Poster, Type, Year, imdbID }) =>
        `${acc}<li><div>
    <p>${Title}</p>
    <p>${Year}</p>
    <p>${Type}</p>
    <p><img src ="${Poster}"/></p>
    </div></li>
  `, " ");
}
function onSubmit(e) {
    e.preventDefault();
    q = e.target.searchQuery.value.trim();
    if (!q) return;
    fetchMovies(q).then(({ data }) => {
        // console.log(data.Search);
        addMarkup(data.Search);

    });
}

function addMarkup(data) {

    return refs.movieGallery.innerHTML = createMarkup(data);

}
refs.form.addEventListener("submit", onSubmit);


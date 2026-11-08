// Stores ids of favorite movies (resets on page reload)
let favorites = [];

// Adds a movie to favorites, or removes it if it is already there
function toggleFav(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(function (item) {
            return item !== id;
        });
    } else {
        favorites.push(id);
    }
    renderFavorites();
}

function renderFavorites() {
    const container = document.getElementById("favorites-list");
    container.innerHTML = "";

    movies.forEach(function (movie) {
        if (favorites.includes(movie.id)) {
            const row = document.createElement("div");
            row.innerHTML = movie.title + ' <button class="remove-fav" data-id="' + movie.id + '">×</button>';
            container.appendChild(row);
        }
    });

    if (favorites.length === 0) {
        container.textContent = "Empty";
    }
}

function addFav() {
    document.getElementById("moviestr").addEventListener("click", function (e) {
        if (e.target.classList.contains("fav-btn")) {
            const id = Number(e.target.dataset.id);
            toggleFav(id);

            if (favorites.includes(id)) {
                e.target.textContent = "♥";
            } else {
                e.target.textContent = "♡";
            }
        }
    });

    document.getElementById("favorites-list").addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-fav")) {
            toggleFav(Number(e.target.dataset.id));
            updateMovies();
        }
    });
}

// Returns a new array of movies whose title contains the search text
function renderMovies(list) {
    const container = document.getElementById("moviestr");
    container.innerHTML = "";

    list.forEach(function (movie) {
        let heart = "♡";
        if (favorites.includes(movie.id)) {
            heart = "♥";
        }

        container.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3">
        <article class="movie-card">
          <img class="artwork" src="${movie.image}" alt="Poster of ${movie.title}">
          <h3>${movie.title}</h3>
          <p class="card-meta">${movie.year} &bull; <span class="star">&#9733;</span> ${movie.rating}</p>
          <button type="button" class="btn btn-sm btn-outline-danger fav-btn" data-id="${movie.id}">${heart}</button>
        </article>
      </div>
    `;
    });
}

function renderSeries(list) {
    const container = document.getElementById("seriesl");
    container.innerHTML = "";

    list.forEach(function (serie) {
        container.innerHTML += `
      <div class="col">
        <article class="card show-card h-100">
          <img class="artwork" src="${serie.image}" alt="Scene from ${serie.title}">
          <div class="card-body">
            <h3>${serie.title}</h3>
            <p class="card-meta">${serie.genre} &bull; ${serie.year} &bull; <span class="star">&#9733;</span> ${serie.rating}</p>
            <p class="series-more">${serie.creator} &bull; Seasons: ${serie.seasons}</p>
          </div>
        </article>
      </div>
    `;
    });
}

function filterMovies(query) {
    const lowerQuery = query.toLowerCase();
    return movies.filter(function (movie) {
        return movie.title.toLowerCase().includes(lowerQuery);
    });
}

// Returns a sorted copy of the list; slice() keeps the original array unchanged
function sortMovies(list, order) {
    const sorted = list.slice();

    if (order === "desc") {
        sorted.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }
    if (order === "asc") {
        sorted.sort(function (a, b) {
            return a.rating - b.rating;
        });
    }

    return sorted;
}
function filterSeries(genre) {
    if (genre === "all") {
        return series;
    }
    return series.filter(function (serie) {
        return serie.genre === genre;
    });
}

function updateMovies() {
    const query = document.getElementById("search").value;
    const order = document.getElementById("sort").value;
    renderMovies(sortMovies(filterMovies(query), order));
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);

    const button = document.getElementById("theme-toggle");
    if (button) {
        if (theme === "dark") {
            button.textContent = "Light mode";
        } else {
            button.textContent = "Dark mode";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTheme(localStorage.getItem("theme") || "dark");

    document.getElementById("theme-toggle").addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-bs-theme");
        if (current === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    });

    if (document.getElementById("moviestr")) {
        renderMovies(movies);

        document.getElementById("search").addEventListener("input", updateMovies);
        document.getElementById("sort").addEventListener("change", updateMovies);

        addFav();
        renderFavorites();
    }

    if (document.getElementById("seriesl")) {
        renderSeries(series);

        document.getElementById("genre").addEventListener("change", function (e) {
            renderSeries(filterSeries(e.target.value));
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const success = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        success.hidden = true;

        if (name.value.trim().length < 2) {
            document.getElementById("nameError").textContent =
                "Enter at least 2 characters.";
            name.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("nameError").textContent = "";
            name.classList.remove("is-invalid");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            document.getElementById("emailError").textContent =
                "Enter a valid email address.";
            email.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
            email.classList.remove("is-invalid");
        }

        if (message.value.trim().length < 10) {
            document.getElementById("messageError").textContent =
                "Message must contain at least 10 characters.";
            message.classList.add("is-invalid");
            valid = false;
        } else {
            document.getElementById("messageError").textContent = "";
            message.classList.remove("is-invalid");
        }

        if (valid) {
            success.hidden = false;
            form.reset();
        }
    });

});
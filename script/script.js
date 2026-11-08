const movies = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        rating: 8.5,
        genre: "Sci-Fi",
        director: "Denis Villeneuve",
        runtime: 166,
        image: "images/Dune2.jpg"
    },
    {
        id: 2,
        title: "Oppenheimer",
        year: 2023,
        rating: 8.3,
        genre: "Drama",
        director: "Christopher Nolan",
        runtime: 180,
        image: "images/oppenheimer.jpg"
    },
    {
        id: 3,
        title: "The Batman",
        year: 2022,
        rating: 7.8,
        genre: "Action",
        director: "Matt Reeves",
        runtime: 176,
        image: "images/The_Batman.jpg"
    },
    {
        id: 4,
        title: "Spider-Man: No Way Home",
        year: 2021,
        rating: 8.2,
        genre: "Action",
        director: "Jon Watts",
        runtime: 148,
        image: "images/Spider_Man.jpg"
    },
    {
        id: 5,
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        genre: "Sci-Fi",
        director: "Christopher Nolan",
        runtime: 169,
        image: "images/Interstellar.jpg"
    },
    {
        id: 6,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
        director: "Christopher Nolan",
        runtime: 148,
        image: "images/inception.jpg"
    },
    {
        id: 8,
        title: "Parasite",
        year: 2019,
        rating: 8.5,
        genre: "Thriller",
        director: "Bong Joon-ho",
        runtime: 132,
        image: "images/parasite.jpg"
    },
    {
        id: 9,
        title: "Joker",
        year: 2019,
        rating: 8.4,
        genre: "Drama",
        director: "Todd Phillips",
        runtime: 122,
        image: "images/Joker.jpg"
    },
    {
        id: 10,
        title: "Top Gun: Maverick",
        year: 2022,
        rating: 8.2,
        genre: "Action",
        director: "Joseph Kosinski",
        runtime: 130,
        image: "images/Top_Gun_Maverick.jpg"
    },
        {
        id: 11,
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        genre: "Action",
        director: "Ridley Scott",
        runtime: 155,
        image: "images/Gladiator.jpg"
    },
    {
        id: 12,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "Sci-Fi",
        director: "Lana Wachowski, Lilly Wachowski",
        runtime: 136,
        image: "images/The_Matrix.jpg"
    },
    {
        id: 13,
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        genre: "Drama",
        director: "David Fincher",
        runtime: 139,
        image: "images/Fight_Club.jpg"
    }
];

const series = [
    {
        id: 1,
        title: "Breaking Bad",
        year: 2008,
        rating: 9.5,
        genre: "Crime",
        creator: "Vince Gilligan",
        seasons: 5,
        image: "images/Breaking_Bad.jpg"
    },
    {
        id: 2,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genre: "Sci-Fi",
        creator: "The Duffer Brothers",
        seasons: 4,
        image: "images/stranger-things.png"
    },
    {
        id: 3,
        title: "The Last of Us",
        year: 2023,
        rating: 8.7,
        genre: "Drama",
        creator: "Craig Mazin",
        seasons: 2,
        image: "images/the-last-of-us.png"
    },
    {
        id: 4,
        title: "Game of Thrones",
        year: 2011,
        rating: 9.2,
        genre: "Fantasy",
        creator: "David Benioff, D. B. Weiss",
        seasons: 8,
        image: "images/Game_of_Thrones.jpg"
    },
    {
        id: 5,
        title: "The Office",
        year: 2005,
        rating: 9.0,
        genre: "Comedy",
        creator: "Greg Daniels",
        seasons: 9,
        image: "images/The_Office.jpg"
    },
    {
        id: 6,
        title: "Dark",
        year: 2017,
        rating: 8.7,
        genre: "Mystery",
        creator: "Baran bo Odar",
        seasons: 3,
        image: "images/Dark.jpg"
    },
    {
        id: 7,
        title: "The Witcher",
        year: 2019,
        rating: 8.0,
        genre: "Fantasy",
        creator: "Lauren Schmidt Hissrich",
        seasons: 4,
        image: "images/the-witcher.png"
    },
    {
        id: 8,
        title: "Wednesday",
        year: 2022,
        rating: 8.1,
        genre: "Fantasy",
        creator: "Alfred Gough, Miles Millar",
        seasons: 2,
        image: "images/wednesday-s.png"
    },
        {
        id: 9,
        title: "Chernobyl",
        year: 2019,
        rating: 9.3,
        genre: "Drama",
        creator: "Craig Mazin",
        seasons: 1,
        image: "images/Chernobyl.jpg"
    },
    {
        id: 10,
        title: "Black Mirror",
        year: 2011,
        rating: 8.7,
        genre: "Sci-Fi",
        creator: "Charlie Brooker",
        seasons: 7,
        image: "images/Black_Mirror.jpg"
    },
    {
        id: 11,
        title: "Sherlock",
        year: 2010,
        rating: 9.1,
        genre: "Mystery",
        creator: "Mark Gatiss, Steven Moffat",
        seasons: 4,
        image: "images/Sherlock.jpg"
    },
    {
        id: 12,
        title: "Friends",
        year: 1994,
        rating: 8.9,
        genre: "Comedy",
        creator: "David Crane, Marta Kauffman",
        seasons: 10,
        image: "images/Friends.jpg"
    }
];

let favorites = [];

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
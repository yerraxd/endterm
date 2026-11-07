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
      renderMovies(movies);
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
            <p>${serie.creator} &bull; Seasons: ${serie.seasons}</p>
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

    document.getElementById("search").addEventListener("input", function (e) {
      renderMovies(filterMovies(e.target.value));
    });

    addFav();
    renderFavorites();
  }

  if (document.getElementById("seriesl")) {
    renderSeries(series);
  }
});
# Movie Land

Movie Land is a multi-page website about movies and series. It is the endterm continuation of our midterm project (same topic). The midterm responsive layout, Bootstrap navbar and five pages are kept, and interactive JavaScript and jQuery features are added on top.

**Live site:** https://yerraxd.github.io/endterm/index.html

## Group members

- Member 1: Mukhtarova Dana
- Member 2: Omirtayev Yertore
- Member 3: Orynbassarov Yerassyl

## Pages

- `index.html` - Home
- `movies.html` - Movies (search, sort, favorites)
- `series.html` - Series (genre filter)
- `about.html` - About
- `contact.html` - Contact (validated form)

## Project structure

```
movie-land/
├── index.html
├── movies.html
├── series.html
├── about.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── script/
│   ├── data.js
│   ├── script.js
│   └── jquery.js
└── images/
```

- `data.js` - arrays `movies` and `series` with project data
- `script.js` - JavaScript: rendering, search, sort, filter, favorites, theme, form validation
- `jquery.js` - jQuery: effects and animations

## New endterm features

### JavaScript

- **Dynamic content:** movie and series cards are created from the `movies` and `series` arrays with `forEach`, not written in HTML.
- **Search:** filters movies by title while typing.
- **Sort:** sorts movies by rating (ascending or descending).
- **Favorites list:** add or remove movies with the heart button; the list is updated dynamically (elements are created and removed).
- **Genre filter:** filters series by genre.
- **Theme switcher:** dark/light mode, saved in `localStorage`.
- **Contact form validation:** custom rules for name, email and message, error messages under each field, success message when valid.

### jQuery

- **Back to top button:** appears with `fadeIn`/`fadeOut` after scrolling, scrolls up with `animate`.
- **Series cards:** click on a card shows or hides extra info (`slideToggle`, `find`).
- **About page:** click on the "How to use the site" title shows or hides the list (`slideToggle`, `next`).
- **Hover effect:** cards scale up on `mouseenter` and back on `mouseleave`.

## How to test

1. **Theme:** click "Light mode" / "Dark mode" in the navbar. Reload the page, the theme stays.
2. **Search and sort (Movies page):** type a title in the search field, then change the Sort dropdown.
3. **Favorites (Movies page):** click the heart on a card, it appears in "My Favorites". Click × to remove it.
4. **Genre filter (Series page):** choose a genre in the dropdown.
5. **Series details (Series page):** click a series card to show creator and seasons.
6. **Form (Contact page):** submit an empty form to see errors. Try an invalid email and a short message. Fill in valid data to see the success message.
7. **Back to top:** scroll down any page and click the arrow button in the corner.
8. **About page:** click "How to use the site" to collapse the list.

## Technologies

HTML5, CSS3, Bootstrap 5.3, JavaScript (ES6), jQuery 3.7

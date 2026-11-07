## Responsive design and Bootstrap

- **Bootstrap navbar** on every page; it collapses into a menu button on small screens.
- **Bootstrap grid** (`row`, `col-*`) for movie cards, series cards, feature boxes and the contact page layout.
- **Bootstrap utilities and components:** `container`, `g-4`, `h-100`, `mb-3`, `d-flex`, `flex-column`, `min-vh-100`, `btn`, `card`, `table`, `form-control`.
- **Flexbox:** hero section, footer and sticky footer layout.
- **CSS Grid:** `.card-grid` on the Home page (5 columns).
- **Media queries:** tablet (`max-width: 991.98px`) and mobile (`max-width: 575.98px`).

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
└── images/
```

The `images/` folder contains the exported Figma images: `hero.png`, `dune.png`, `oppenheimer.png`, `the-batman.png`, `spider-man.png`, `interstellar.png`, `the-last-of-us.png`, `stranger-things.png`, `breaking-bad.png`, `the-witcher.png`, `wednesday.png`.

## Notes

- Ratings on the cards are sample values.
- The contact form has no server part (it is a front-end project).

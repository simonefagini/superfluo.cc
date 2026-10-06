# SUPERFLUO
[superfluo](https://superfluo.cc) is a creative playground where I break, build, and learn stuff.

Static HTML/CSS/JS, deployed with GitHub Pages. No build step.

## Content

```plaintext
/superfluo.cc

   ├── index.html            splash page
   ├── home.html             main page with the project tiles
   ├── 404.html              not-found page
   ├── favicon.png           grey fallback icon
   ├── favicons/             one circle icon per palette color
   ├── assets/               shared CSS, JS and the logo
   ├── fragments/            fragments project page and its images
   └── transitions/          transitions project page and its images
```

### assets/

- `palette.js` holds the color palette, picks one color per page load (`PICKED_COLOR`) and points the favicon at the matching file in `favicons/`. It must load before `colors.js` and `home.js`.
- `colors.js` sets the page background (index and 404).
- `home.js` sets the logo color (home and project pages).
- `ratio.js` sizes the project pages to the window.
- `SUPERFLUO-LOGO.svg` is the logo.

## Adding a color

Add the hex value to `PALETTE` in `assets/palette.js`, and add a matching circle PNG named after it (lowercase hex, no `#`) to `favicons/`, for example `favicons/ff76b2.png`.

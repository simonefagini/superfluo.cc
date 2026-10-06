# SUPERFLUO
[superfluo](https://superfluo.cc) is a creative playground where I break, build, and learn stuff.

Static HTML/CSS/JS, deployed with GitHub Pages. No build step. Visits are counted with [GoatCounter](https://superfluo.goatcounter.com) (no cookies); the script tag is in every page's `<head>`, including the template.

## Content

```plaintext
/superfluo.cc

   ├── index.html            splash page
   ├── home.html             main page with the project tiles
   ├── 404.html              not-found page
   ├── favicon.png           grey fallback icon
   ├── robots.txt            crawler rules and sitemap pointer
   ├── sitemap.xml           list of public pages
   ├── favicons/             one circle icon per palette color
   ├── assets/               shared CSS, JS and the logo
   ├── template/             copy this folder to start a new project
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

## Adding a project

Use the project name in lowercase, like `fragments` or `transitions`. Below it is written as `name`.

1. Duplicate the `template/` folder and rename it to `name/`. Rename the two files inside to `name.html` and `name.css`. The page will be at `superfluo.cc/name/name.html`.
2. Put the project images in `name/`.
3. In `name.html`, update the stylesheet link to `name.css`, and replace every `[placeholder]` (search for `[`): title, description, OG tags, text and images. Delete the `noindex` line.
4. In each `<img>`: set the real `src`, `width` and `height`, write `alt` text describing the image, and use `loading="lazy"` on all but the first. `data-title` is the hover label.
5. Add the tile to `home.html` in place of a placeholder (link to `name/name.html`, with `alt` text).
6. Add the page URL to `sitemap.xml`.

## License

The source code (HTML, CSS and JavaScript) is licensed under the GNU GPLv3, see [LICENSE](LICENSE).

The licence does **not** cover the images, photographs, renders, video and other media in this repository (the `.jpg`, `.png` and `.pdf` files). They are all rights reserved by their respective authors, as credited on each project page (for example Giuseppe Miotto / Marco Cappelletti Studio and Emanuele Pigionatti), and may not be copied or redistributed without permission. See `fragments/fragments_asset_credits.pdf` for the fragments credits.

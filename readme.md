# Music Playlist – Assignment 3

A responsive website where users can browse a music collection and build their own playlists.

This project is an individual assignment for the Full-Stack Development course. The goal is to practice using JavaScript array methods, manipulating the DOM, handling events, and saving data in the browser.

## Features

- Displays all 23 songs from the provided data file.
- Lets users search by song title or artist as they type.
- Filters songs by genre.
- Sorts songs by title, artist, or duration.
- Lets users combine search, filtering, and sorting.
- Lets users add songs to their playlist and remove them.
- Prevents users from adding the same song twice.
- Displays the total duration of the playlist.
- Saves the playlist using `localStorage`.
- Displays a message when the playlist is empty or no songs match the search.

## Technologies

- HTML for page structure and content.
- CSS for styling and responsive layout.
- JavaScript for search, filtering, sorting, and playlist management.
- Google Fonts for the Inter typeface.
- Git for version control and GitHub for hosting the source code.

The project uses plain JavaScript without libraries or frameworks.

## File structure

- `index.html` – HTML structure of the page.
- `css/reset.css` – resets default browser styles.
- `css/variables.css` – defines variables for colors, typography, and sizing.
- `css/styles.css` – defines the layout, component styles, and responsive adjustments.
- `data/songs.js` – contains the song data provided with the assignment.
- `js/app.js` – handles search, filtering, sorting, and playlist management.
- `assets/` – folder for optional images and other project assets.
- `readme.md` – project description and links.

## Run the project locally

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` with Live Server.

The project requires no package installation or build step.

## Playlist storage

The app saves the playlist as a list of song IDs in the browser’s `localStorage`. When the page is opened again, the app uses those IDs to look up the song details in `songs.js`.

The saved playlist is specific to the browser and the site where it was created. It does not sync across devices. Clearing the site’s browser data removes the saved playlist.

## Design and accessibility

- Responsive layout using CSS Grid and Flexbox.
- CSS classes named using the BEM convention.
- Semantic HTML elements.
- Visible labels for the search field and dropdown menus.
- Clear focus indicators for keyboard navigation.
- Descriptive labels that tell screen reader users which song each remove button removes.

## Sources and use of AI

The song data in `data/songs.js` was provided with the assignment and is used unchanged.

I used ChatGPT for guidance, explanations of concepts, debugging, translation, and code review. Parts of the HTML, CSS, and JavaScript code are based on its suggestions.

The Inter typeface is available from [Google Fonts](https://fonts.google.com/specimen/Inter).

## Links

- GitHub repository: To be added once the repository is created.
- Live website: To be added once the site is published.

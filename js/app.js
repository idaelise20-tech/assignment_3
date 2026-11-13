// Select the container for the songs
const songList = document.querySelector("#song-list");
// Select the playlist elements
const playlistList = document.querySelector("#playlist-list");
const playlistEmpty = document.querySelector("#playlist-empty");
const playlistDuration = document.querySelector("#playlist-duration");
const searchInput = document.querySelector("#search");
const genreSelect = document.querySelector("#genre");
const collectionEmpty = document.querySelector("#collection-empty");

// Store the songs added to the playlist
const playlist = loadPlaylist();
// Load saved song ids and find the matching songs
function loadPlaylist() {
  try {
    const savedIds = JSON.parse(localStorage.getItem("musicPlaylist") ?? "[]");

    if (!Array.isArray(savedIds)) {
      return [];
    }

    return songs.filter((song) => savedIds.includes(song.id));
  } catch (error) {
    console.warn("Could not load the playlist:", error);
    return [];
  }
}

// Save the playlist as an array of song ids
function savePlaylist() {
  const songIds = playlist.map((song) => song.id);

  try {
    localStorage.setItem("musicPlaylist", JSON.stringify(songIds));
  } catch (error) {
    console.warn("Could not save the playlist:", error);
  }
}

// Convert seconds to minutes and seconds
function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
// Display the playlist and its total duration
function renderPlaylist() {
  playlistList.replaceChildren();

  let totalSeconds = 0;

  playlist.forEach((song) => {
    const item = document.createElement("li");
    item.classList.add("playlist__item");
    item.textContent = `${song.title} – ${song.artist} (${formatDuration(song.duration)})`;
    const removeButton = document.createElement("button");
    removeButton.classList.add("playlist__remove-button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute(
      "aria-label",
      `Remove ${song.title} from playlist`,
    );

    removeButton.addEventListener("click", () => {
      removeFromPlaylist(song.id);
    });

    item.append(removeButton);
    playlistList.append(item);
    totalSeconds += song.duration;
  });

  playlistEmpty.hidden = playlist.length > 0;
  playlistDuration.textContent = formatDuration(totalSeconds);
}

// Add a song only if it is not already in the playlist
function addToPlaylist(song) {
  const alreadyAdded = playlist.some((item) => item.id === song.id);

  if (alreadyAdded) {
    return;
  }

  playlist.push(song);
  savePlaylist();
  renderPlaylist();
}
// Remove a song from the playlist by its id
function removeFromPlaylist(songId) {
  const songIndex = playlist.findIndex((song) => song.id === songId);

  if (songIndex === -1) {
    return;
  }
  playlist.splice(songIndex, 1);
  savePlaylist();
  renderPlaylist();
}
// Display the selected songs in the music collection
function renderSongs(songsToDisplay) {
  songList.replaceChildren();
  collectionEmpty.hidden = songsToDisplay.length > 0;
  // Create a card for each song
  songsToDisplay.forEach((song) => {
    const card = document.createElement("article");
    card.classList.add("song-card");

    const title = document.createElement("h3");
    title.classList.add("song-card__title");
    title.textContent = song.title;

    const artist = document.createElement("p");
    artist.classList.add("song-card__artist");
    artist.textContent = song.artist;

    const details = document.createElement("p");
    details.classList.add("song-card__details");
    details.textContent = `${song.genre} · ${formatDuration(song.duration)}`;

    const addButton = document.createElement("button");
    addButton.classList.add("song-card__button");
    addButton.type = "button";
    addButton.textContent = "Add to playlist";

    addButton.addEventListener("click", () => {
      addToPlaylist(song);
    });

    card.append(title, artist, details, addButton);
    songList.append(card);
  });
}
// Filter songs by search text and genre
function updateCollection() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreSelect.value;

  const matchingSongs = songs.filter((song) => {
    const titleMatches = song.title.toLowerCase().includes(searchText);
    const artistMatches = song.artist.toLowerCase().includes(searchText);

    const matchesSearch = titleMatches || artistMatches;
    const matchesGenre =
      selectedGenre === "all" || song.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  renderSongs(matchingSongs);
}

// Update the collection when search or genre changes
searchInput.addEventListener("input", updateCollection);
genreSelect.addEventListener("change", updateCollection);

// Display the collection and playlist when the page loads
updateCollection();
renderPlaylist();

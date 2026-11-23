"use strict";

const image = (id, width = 500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const tracks = [
  { id: "samajavaragamana", title: "Samajavaragamana", artist: "Sid Sriram", album: "Ala Vaikunthapurramuloo", genre: "Romantic", duration: "3:47", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", art: image("photo-1519608487953-e999c86e7455"), color: "linear-gradient(135deg,#ad64ce,#302564)" },
  { id: "butta-bomma", title: "Butta Bomma", artist: "Armaan Malik", album: "Ala Vaikunthapurramuloo", genre: "Dance", duration: "3:18", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", art: image("photo-1470252649378-9c29740c9fa8"), color: "linear-gradient(135deg,#64a3c8,#314277)" },
  { id: "srivalli", title: "Srivalli", artist: "Javed Ali", album: "Pushpa", genre: "Melody", duration: "3:41", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", art: image("photo-1519608487953-e999c86e7455"), color: "linear-gradient(135deg,#f36bce,#4b3bce)" },
  { id: "inkem-inkem", title: "Inkem Inkem", artist: "Sid Sriram", album: "Geetha Govindam", genre: "Romantic", duration: "4:27", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", art: image("photo-1519681393784-d120267933ba"), color: "linear-gradient(135deg,#8594bd,#262d54)" },
  { id: "oo-antava", title: "Oo Antava", artist: "Indravathi Chauhan", album: "Pushpa", genre: "Dance", duration: "3:43", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", art: image("photo-1519501025264-65ba15a82390"), color: "linear-gradient(135deg,#e8935c,#572c82)" },
  { id: "nuvvunte-naa-jathaga", title: "Nuvvunte Naa Jathaga", artist: "Vijay Prakash", album: "I", genre: "Romantic", duration: "5:11", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", art: image("photo-1470252649378-9c29740c9fa8"), color: "linear-gradient(135deg,#ffd36a,#b94e70)" },
  { id: "kalalo-kooda", title: "Kalalo Kooda", artist: "Sid Sriram", album: "Hanu-Man", genre: "Devotional", duration: "4:06", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", art: image("photo-1500530855697-b586d89ba3ee"), color: "linear-gradient(135deg,#65c4bd,#344c88)" },
  { id: "dandakadiyal", title: "Dandakadiyal", artist: "Anirudh Ravichander", album: "Saripodha Sanivaram", genre: "Dance", duration: "3:39", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", art: image("photo-1519608487953-e999c86e7455"), color: "linear-gradient(135deg,#fa7272,#6828a2)" },
  { id: "chitti", title: "Chitti", artist: "Ram Miriyala", album: "Jathi Ratnalu", genre: "Folk pop", duration: "3:21", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", art: image("photo-1500530855697-b586d89ba3ee"), color: "linear-gradient(135deg,#57b8d2,#3e397c)" },
  { id: "adiga-adiga", title: "Adiga Adiga", artist: "Sid Sriram", album: "Ninnu Kori", genre: "Melody", duration: "4:20", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", art: image("photo-1470252649378-9c29740c9fa8"), color: "linear-gradient(135deg,#e8af72,#645048)" },
  { id: "tharagathi-gadhi", title: "Tharagathi Gadhi", artist: "Rahul Sipligunj", album: "Colour Photo", genre: "Folk", duration: "3:36", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", art: image("photo-1519501025264-65ba15a82390"), color: "linear-gradient(135deg,#6092ca,#1c274c)" },
  { id: "prema-velluva", title: "Prema Velluva", artist: "Anirudh Ravichander", album: "Dasara", genre: "Romantic", duration: "4:14", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", art: image("photo-1519681393784-d120267933ba"), color: "linear-gradient(135deg,#a882d9,#314771)" }
];

const artists = [
  { name: "Sid Sriram", art: image("photo-1506794778202-cad84cf45f1d", 300), type: "Telugu playback singer" },
  { name: "Anirudh Ravichander", art: image("photo-1500648767791-00dcc994a43e", 300), type: "Composer & performer" },
  { name: "Armaan Malik", art: image("photo-1507003211169-0a1dd7228f2d", 300), type: "Singer & songwriter" },
  { name: "Javed Ali", art: image("photo-1524504388940-b1c1722653e1", 300), type: "Playback singer" },
  { name: "Ram Miriyala", art: image("photo-1506794778202-cad84cf45f1d", 300), type: "Folk & film singer" },
  { name: "Rahul Sipligunj", art: image("photo-1500648767791-00dcc994a43e", 300), type: "Singer & performer" }
];

const albums = [
  { name: "Ala Vaikunthapurramuloo", artist: "S. Thaman", track: "samajavaragamana", art: image("photo-1519608487953-e999c86e7455"), mark: "AV" },
  { name: "Pushpa", artist: "Devi Sri Prasad", track: "srivalli", art: image("photo-1470252649378-9c29740c9fa8"), mark: "P" },
  { name: "Geetha Govindam", artist: "Gopi Sundar", track: "inkem-inkem", art: image("photo-1519608487953-e999c86e7455"), mark: "GG" },
  { name: "Jathi Ratnalu", artist: "Ram Miriyala", track: "chitti", art: image("photo-1519501025264-65ba15a82390"), mark: "JR" },
  { name: "Dasara", artist: "Santhosh Narayanan", track: "prema-velluva", art: image("photo-1470252649378-9c29740c9fa8"), mark: "D" }
];

const defaultPlaylists = [
  { id: "romantic-vibes", name: "Prema Geethalu", icon: "♡", color: "rgba(120,49,94,.35)", glow: "rgba(241,91,175,.6)", genre: "Soft Telugu melodies", tracks: ["samajavaragamana", "inkem-inkem", "adiga-adiga"] },
  { id: "party-hits", name: "Party Hits", icon: "✦", color: "rgba(116,58,43,.34)", glow: "rgba(255,134,85,.6)", genre: "Turn the night up", tracks: ["butta-bomma", "oo-antava", "dandakadiyal"] },
  { id: "relaxing-music", name: "Relaxing Music", icon: "☾", color: "rgba(43,75,118,.36)", glow: "rgba(79,192,226,.55)", genre: "Breathe in, tune out", tracks: ["srivalli", "kalalo-kooda", "prema-velluva"] },
  { id: "workout-beats", name: "Workout Beats", icon: "↗", color: "rgba(87,58,131,.34)", glow: "rgba(175,106,255,.6)", genre: "Find your second wind", tracks: ["dandakadiyal", "oo-antava", "chitti"] },
  { id: "telugu-hits", name: "Telugu Hits", icon: "♫", color: "rgba(111,77,39,.32)", glow: "rgba(243,190,85,.55)", genre: "Top Telugu favourites", tracks: ["samajavaragamana", "butta-bomma", "srivalli"] },
  { id: "trending-songs", name: "Trending Songs", icon: "↗", color: "rgba(51,66,119,.38)", glow: "rgba(90,143,255,.58)", genre: "On repeat everywhere", tracks: ["srivalli", "oo-antava", "butta-bomma"] }
];

const storageKeys = { liked: "musix-liked", recent: "musix-recent", playlists: "musix-playlists" };
const readStored = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from local storage.`, error);
    return fallback;
  }
};
const saveStored = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save ${key} to local storage.`, error);
    showToast("Your browser couldn't save this change.");
  }
};

let likedIds = readStored(storageKeys.liked, []);
let recentIds = readStored(storageKeys.recent, []);
let playlists = readStored(storageKeys.playlists, defaultPlaylists);
if (!Array.isArray(likedIds)) likedIds = [];
if (!Array.isArray(recentIds)) recentIds = [];
if (!Array.isArray(playlists)) playlists = defaultPlaylists;
playlists = playlists.map(playlist => {
  const updatedDefault = defaultPlaylists.find(defaultPlaylist => defaultPlaylist.id === playlist.id);
  return updatedDefault ? { ...updatedDefault, custom: false } : playlist;
});

const audio = document.querySelector("#audio-player");
const toast = document.querySelector("#toast");
let currentTrack = null;
let currentView = "Home";
let shuffleEnabled = false;
let repeatEnabled = false;
let toastTimeout;
let playlistDialogMode = "create";
let pendingPlaylistTrack = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2600);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function trackById(id) {
  return tracks.find(track => track.id === id);
}

function trackArt(track, className = "") {
  return `<span class="track-art ${className}" style="background-image:url('${track.art}')"><span>♪</span></span>`;
}

function trackRow(track) {
  const liked = likedIds.includes(track.id);
  return `<article class="track-row">
    ${trackArt(track)}
    <div class="track-meta"><strong>${escapeHtml(track.title)}</strong><span>${escapeHtml(track.artist)}</span></div>
    <span class="track-album">${escapeHtml(track.album)}</span>
    <span class="track-duration">${escapeHtml(track.duration)}</span>
    <div class="track-actions">
      <button class="icon-button like-button ${liked ? "is-liked" : ""}" data-like="${track.id}" aria-label="${liked ? "Remove from" : "Add to"} liked songs" title="Like">${liked ? "♥" : "♡"}</button>
      <button class="icon-button add-playlist-button" data-add-playlist="${track.id}" aria-label="Add ${escapeHtml(track.title)} to a playlist" title="Add to playlist">＋</button>
      <button class="icon-button track-play" data-play="${track.id}" aria-label="Play ${escapeHtml(track.title)}" title="Play">▶</button>
    </div>
  </article>`;
}

function renderTrackList(element, list, emptyMessage) {
  element.innerHTML = list.length ? list.map(trackRow).join("") : `<p class="empty-state">${emptyMessage}</p>`;
}

function renderHome() {
  const quickTracks = [tracks[0], tracks[2], tracks[6], tracks[4], tracks[5], tracks[8]];
  document.querySelector("#quick-grid").innerHTML = quickTracks.map(track => `
    <article class="quick-card">
      <span class="quick-art" style="background:${track.color}">♫</span>
      <span class="quick-copy"><strong>${escapeHtml(track.title)}</strong><span>${escapeHtml(track.artist)}</span></span>
      <button class="quick-play" data-play="${track.id}" aria-label="Play ${escapeHtml(track.title)}">▶</button>
    </article>`).join("");
  renderTrackList(document.querySelector("#trending-tracks"), tracks.slice(0, 5), "New tracks are on the way.");

  document.querySelector("#artist-grid").innerHTML = artists.map(artist => `
    <button class="artist-card" data-artist="${escapeHtml(artist.name)}" aria-label="Artist spotlight: ${escapeHtml(artist.name)}">
      <span class="artist-image" style="background-image:url('${artist.art}')"></span>
      <strong>${escapeHtml(artist.name)}</strong><span>${escapeHtml(artist.type)}</span>
    </button>`).join("");

  document.querySelector("#album-grid").innerHTML = albums.map(album => `
    <article class="album-card" data-album="${escapeHtml(album.name)}">
      <div class="album-cover" style="background-image:url('${album.art}')"><span>${escapeHtml(album.mark)}</span><button class="album-play" data-play="${album.track}" aria-label="Play ${escapeHtml(album.name)}">▶</button></div>
      <strong>${escapeHtml(album.name)}</strong><small>${escapeHtml(album.artist)}</small>
    </article>`).join("");

  renderPlaylists();
  renderTrackList(document.querySelector("#recent-tracks"), recentIds.map(trackById).filter(Boolean).map(track => track).slice(0, 5), "Your recent listens will show up here.");
  renderTrackList(document.querySelector("#recommended-tracks"), tracks.slice(6, 10), "We're finding your next favorite.");
  renderLikeButton();
}

function renderPlaylists() {
  document.querySelector("#playlist-grid").innerHTML = playlists.map(playlist => `
    <article class="playlist-card" data-playlist="${escapeHtml(playlist.id)}" style="--card-color:${playlist.color || "rgba(87,58,131,.32)"};--card-glow:${playlist.glow || "rgba(175,106,255,.5)"}">
      <div class="playlist-info"><small>CURATED MIX</small><strong>${escapeHtml(playlist.name)}</strong><span>${escapeHtml(playlist.genre || `${playlist.tracks.length} songs · Your mix`)}</span></div>
      <span class="playlist-symbol" aria-hidden="true">${escapeHtml(playlist.icon || "♫")}</span>
      <button class="playlist-play" data-playlist-play="${escapeHtml(playlist.id)}" aria-label="Play ${escapeHtml(playlist.name)}">▶</button>
    </article>`).join("");
}

function updateRecent(track) {
  recentIds = [track.id, ...recentIds.filter(id => id !== track.id)].slice(0, 12);
  saveStored(storageKeys.recent, recentIds);
  renderTrackList(document.querySelector("#recent-tracks"), recentIds.map(trackById).filter(Boolean).slice(0, 5), "Your recent listens will show up here.");
}

function renderLikeButton() {
  const liked = currentTrack && likedIds.includes(currentTrack.id);
  const button = document.querySelector("#player-like");
  button.textContent = liked ? "♥" : "♡";
  button.classList.toggle("is-liked", Boolean(liked));
  button.setAttribute("aria-label", liked ? "Remove from liked songs" : "Add to liked songs");
}

function toggleLike(track) {
  if (likedIds.includes(track.id)) {
    likedIds = likedIds.filter(id => id !== track.id);
    showToast("Removed from liked songs.");
  } else {
    likedIds.unshift(track.id);
    showToast("Added to liked songs.");
  }
  saveStored(storageKeys.liked, likedIds);
  renderLikeButton();
  refreshCurrentView();
}

function refreshCurrentView() {
  if (currentView === "Liked Songs") showView("Liked Songs");
  else if (currentView === "Search") renderSearchResults(document.querySelector("#search-input").value);
  else renderHome();
}

function playTrack(track, autoplay = true) {
  if (!track) return;
  const sameTrack = currentTrack && currentTrack.id === track.id;
  currentTrack = track;
  document.querySelector("#player-title").textContent = track.title;
  document.querySelector("#player-artist").textContent = track.artist;
  document.querySelector("#player-cover").style.backgroundImage = `url('${track.art}')`;
  document.querySelector("#player-cover").innerHTML = "";
  document.querySelector("#progress-bar").value = "0";
  document.querySelector("#current-time").textContent = "0:00";
  document.querySelector("#duration-time").textContent = track.duration;
  renderLikeButton();
  if (!sameTrack || !audio.src) audio.src = track.audio;
  updateRecent(track);
  if (autoplay) {
    audio.play().then(updatePlayButton).catch(error => {
      updatePlayButton();
      showToast("Couldn't play this demo audio. Check your connection and try again.");
      console.warn("Audio playback failed.", error);
    });
  } else {
    updatePlayButton();
  }
}

function updatePlayButton() {
  const playing = !audio.paused;
  document.querySelector("#play-button").textContent = playing ? "Ⅱ" : "▶";
  document.querySelector("#play-button").setAttribute("aria-label", playing ? "Pause" : "Play");
  document.querySelector("#play-button").title = playing ? "Pause" : "Play";
}

function togglePlayback() {
  if (!currentTrack) {
    playTrack(tracks[0]);
    return;
  }
  if (audio.paused) {
    audio.play().then(updatePlayButton).catch(error => {
      showToast("Couldn't resume playback. Check your connection and try again.");
      console.warn("Audio playback failed.", error);
    });
  } else {
    audio.pause();
    updatePlayButton();
  }
}

function playNext(direction = 1) {
  if (!currentTrack) {
    playTrack(tracks[0]);
    return;
  }
  let index = tracks.findIndex(track => track.id === currentTrack.id);
  if (shuffleEnabled && direction > 0 && tracks.length > 1) {
    let nextIndex = index;
    while (nextIndex === index) nextIndex = Math.floor(Math.random() * tracks.length);
    index = nextIndex;
  } else {
    index = (index + direction + tracks.length) % tracks.length;
  }
  playTrack(tracks[index]);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function showView(view, options = {}) {
  currentView = view;
  if (view !== "Search") renderHome();
  const sections = {
    "Home": ["home-hero", "quick-picks", "trending-section", "artists-section", "albums-section", "playlists-section", "recent-section", "recommendations-section"],
    "Explore": ["quick-picks", "trending-section", "artists-section", "albums-section", "playlists-section", "recommendations-section"],
    "Search": ["trending-section", "albums-section", "artists-section"],
    "Your Library": ["playlists-section", "recent-section", "recommendations-section"],
    "Recently Played": ["recent-section"],
    "Liked Songs": ["trending-section"],
    "My Playlists": ["playlists-section"]
  };
  document.querySelectorAll(".section-block, #home-hero").forEach(section => {
    section.hidden = !sections[view].includes(section.id);
  });
  document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  const likedSection = document.querySelector("#trending-section");
  if (view === "Liked Songs") {
    likedSection.querySelector(".section-eyebrow").textContent = "YOUR PERSONAL COLLECTION";
    likedSection.querySelector("h2").textContent = "Liked songs";
    renderTrackList(document.querySelector("#trending-tracks"), likedIds.map(trackById).filter(Boolean), "Songs you like will live here. Tap the heart on any track to save it.");
  } else {
    likedSection.querySelector(".section-eyebrow").textContent = "THE SOUNDS EVERYONE'S FEELING";
    likedSection.querySelector("h2").textContent = "Trending now";
    if (view === "Search") {
      likedSection.querySelector(".section-eyebrow").textContent = "START TYPING TO FIND YOUR NEXT FAVORITE";
      likedSection.querySelector("h2").textContent = "Search results";
      renderSearchResults(document.querySelector("#search-input").value);
    } else {
      renderTrackList(document.querySelector("#trending-tracks"), tracks.slice(0, 5), "New tracks are on the way.");
    }
  }
  if (!options.keepScroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSearchResults(query) {
  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery ? tracks.filter(track =>
    `${track.title} ${track.artist} ${track.album} ${track.genre}`.toLowerCase().includes(normalizedQuery)
  ) : tracks.slice(0, 5);
  const albumResults = albums.filter(album =>
    !normalizedQuery || `${album.name} ${album.artist}`.toLowerCase().includes(normalizedQuery)
  );
  const artistResults = artists.filter(artist =>
    !normalizedQuery || `${artist.name} ${artist.type}`.toLowerCase().includes(normalizedQuery)
  );
  renderTrackList(document.querySelector("#trending-tracks"), results, `No tracks found for “${escapeHtml(query.trim())}”. Try another search.`);
  document.querySelector("#albums-section").hidden = albumResults.length === 0;
  document.querySelector("#artists-section").hidden = artistResults.length === 0;
  document.querySelector("#album-grid").innerHTML = albumResults
    .map(album => `<article class="album-card" data-album="${escapeHtml(album.name)}"><div class="album-cover" style="background-image:url('${album.art}')"><span>${escapeHtml(album.mark)}</span><button class="album-play" data-play="${album.track}" aria-label="Play ${escapeHtml(album.name)}">▶</button></div><strong>${escapeHtml(album.name)}</strong><small>${escapeHtml(album.artist)}</small></article>`).join("");
  document.querySelector("#artist-grid").innerHTML = artistResults
    .map(artist => `<button class="artist-card" data-artist="${escapeHtml(artist.name)}" aria-label="Artist spotlight: ${escapeHtml(artist.name)}"><span class="artist-image" style="background-image:url('${artist.art}')"></span><strong>${escapeHtml(artist.name)}</strong><span>${escapeHtml(artist.type)}</span></button>`).join("");
}

function createPlaylist() {
  playlistDialogMode = "create";
  pendingPlaylistTrack = null;
  document.querySelector("#playlist-dialog-title").textContent = "New playlist";
  document.querySelector("#playlist-dialog-description").textContent = "Give your new playlist a name.";
  document.querySelector("#playlist-name-label").hidden = false;
  document.querySelector("#playlist-name-input").hidden = false;
  document.querySelector("#playlist-name-input").value = "";
  document.querySelector("#playlist-select-label").hidden = true;
  document.querySelector("#playlist-select").hidden = true;
  document.querySelector("#playlist-name-input").required = false;
  document.querySelector("#playlist-select").required = false;
  document.querySelector("#playlist-submit").textContent = "Create playlist";
  document.querySelector("#playlist-dialog").showModal();
  document.querySelector("#playlist-name-input").focus();
}

function addToPlaylist(track) {
  if (!playlists.length) {
    showToast("Create a playlist first.");
    return;
  }
  playlistDialogMode = "add";
  pendingPlaylistTrack = track;
  document.querySelector("#playlist-dialog-title").textContent = "Add to playlist";
  document.querySelector("#playlist-dialog-description").textContent = `Choose where “${track.title}” belongs.`;
  document.querySelector("#playlist-name-label").hidden = true;
  document.querySelector("#playlist-name-input").hidden = true;
  document.querySelector("#playlist-select-label").hidden = false;
  document.querySelector("#playlist-select").hidden = false;
  document.querySelector("#playlist-name-input").required = false;
  document.querySelector("#playlist-select").required = true;
  document.querySelector("#playlist-select").innerHTML = playlists
    .map(playlist => `<option value="${escapeHtml(playlist.id)}">${escapeHtml(playlist.name)}</option>`)
    .join("");
  document.querySelector("#playlist-submit").textContent = "Add song";
  document.querySelector("#playlist-dialog").showModal();
}

function saveNewPlaylist(name) {
  const cleanName = name.trim();
  if (!cleanName) {
    showToast("Give your playlist a name first.");
    return false;
  }
  if (playlists.some(playlist => playlist.name.toLowerCase() === cleanName.toLowerCase())) {
    showToast("A playlist with that name already exists.");
    return false;
  }
  playlists.push({
    id: `custom-${Date.now()}`,
    name: cleanName,
    icon: "♫",
    color: "rgba(79,62,132,.34)",
    glow: "rgba(142,112,255,.55)",
    genre: "Your mix · 0 songs",
    tracks: [],
    custom: true
  });
  saveStored(storageKeys.playlists, playlists);
  renderPlaylists();
  showToast(`“${cleanName}” is ready for its first song.`);
  return true;
}

function saveTrackToPlaylist(playlistId, track) {
  const playlist = playlists.find(item => item.id === playlistId);
  if (!playlist) {
    showToast("Couldn't find that playlist. Try again.");
    return false;
  }
  if (!playlist.tracks.includes(track.id)) playlist.tracks.push(track.id);
  if (playlist.custom) playlist.genre = `Your mix · ${playlist.tracks.length} song${playlist.tracks.length === 1 ? "" : "s"}`;
  saveStored(storageKeys.playlists, playlists);
  renderPlaylists();
  showToast(`Added to ${playlist.name}.`);
  return true;
}

function playPlaylist(playlistId) {
  const playlist = playlists.find(item => item.id === playlistId);
  if (!playlist) return;
  const playlistTracks = playlist.tracks.map(trackById).filter(Boolean);
  if (!playlistTracks.length) {
    showToast("This playlist is empty. Add a track to get started.");
    return;
  }
  playTrack(playlistTracks[0]);
}

function runSearch(query) {
  if (currentView !== "Search") showView("Search", { keepScroll: true });
  else renderSearchResults(query);
}

document.addEventListener("click", event => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const playButton = target.closest("[data-play]");
  if (playButton) {
    event.stopPropagation();
    playTrack(trackById(playButton.dataset.play));
    return;
  }
  const likeButton = target.closest("[data-like]");
  if (likeButton) {
    event.stopPropagation();
    const track = trackById(likeButton.dataset.like);
    if (track) toggleLike(track);
    return;
  }
  const addPlaylistButton = target.closest("[data-add-playlist]");
  if (addPlaylistButton) {
    event.stopPropagation();
    const track = trackById(addPlaylistButton.dataset.addPlaylist);
    if (track) addToPlaylist(track);
    return;
  }
  const playlistPlay = target.closest("[data-playlist-play]");
  if (playlistPlay) {
    event.stopPropagation();
    playPlaylist(playlistPlay.dataset.playlistPlay);
    return;
  }
  const viewButton = target.closest("[data-view]");
  if (viewButton) {
    event.preventDefault();
    showView(viewButton.dataset.view);
    if (viewButton.dataset.view === "Search") document.querySelector("#search-input").focus();
    return;
  }
  const scrollButton = target.closest("[data-scroll]");
  if (scrollButton) {
    document.getElementById(scrollButton.dataset.scroll).scrollIntoView({ behavior: "smooth" });
    return;
  }
  const playlistCard = target.closest("[data-playlist]");
  if (playlistCard) {
    playPlaylist(playlistCard.dataset.playlist);
    return;
  }
  const artistCard = target.closest("[data-artist]");
  if (artistCard) {
    showToast(`${artistCard.dataset.artist} spotlight · Artist imagery is for discovery; demo tracks are independent instrumentals.`);
    return;
  }
  const albumCard = target.closest("[data-album]");
  if (albumCard) {
    const album = albums.find(item => item.name === albumCard.dataset.album);
    if (album) playTrack(trackById(album.track));
  }
});

document.querySelector("#hero-play").addEventListener("click", () => playTrack(tracks[0]));
document.querySelector("#create-playlist").addEventListener("click", createPlaylist);
document.querySelector("#profile-button").addEventListener("click", () => showToast("You're listening as a MUSIX guest."));
document.querySelector("#playlist-form").addEventListener("submit", event => {
  event.preventDefault();
  const saved = playlistDialogMode === "create"
    ? saveNewPlaylist(document.querySelector("#playlist-name-input").value)
    : pendingPlaylistTrack && saveTrackToPlaylist(document.querySelector("#playlist-select").value, pendingPlaylistTrack);
  if (saved) document.querySelector("#playlist-dialog").close();
});
document.querySelector("#playlist-dialog-cancel").addEventListener("click", () => document.querySelector("#playlist-dialog").close());
document.querySelector("#playlist-dialog-close").addEventListener("click", () => document.querySelector("#playlist-dialog").close());
document.querySelector("#play-button").addEventListener("click", togglePlayback);
document.querySelector("#next-button").addEventListener("click", () => playNext(1));
document.querySelector("#previous-button").addEventListener("click", () => {
  if (audio.currentTime > 3) audio.currentTime = 0;
  else playNext(-1);
});
document.querySelector("#player-like").addEventListener("click", () => {
  if (currentTrack) toggleLike(currentTrack);
  else showToast("Start a track before adding it to your liked songs.");
});
document.querySelector("#shuffle-button").addEventListener("click", event => {
  shuffleEnabled = !shuffleEnabled;
  event.currentTarget.classList.toggle("active", shuffleEnabled);
  showToast(shuffleEnabled ? "Shuffle is on." : "Shuffle is off.");
});
document.querySelector("#repeat-button").addEventListener("click", event => {
  repeatEnabled = !repeatEnabled;
  event.currentTarget.classList.toggle("active", repeatEnabled);
  showToast(repeatEnabled ? "Repeat is on." : "Repeat is off.");
});
document.querySelector("#search-input").addEventListener("input", event => runSearch(event.target.value));
document.querySelector("#search-input").addEventListener("keydown", event => {
  if (event.key === "Escape") {
    event.target.value = "";
    event.target.blur();
    showView("Home");
  }
});
document.querySelector("#volume-control").addEventListener("input", event => {
  audio.volume = Number(event.target.value);
});
document.querySelector("#progress-bar").addEventListener("input", event => {
  if (Number.isFinite(audio.duration)) audio.currentTime = audio.duration * Number(event.target.value) / 100;
});
audio.volume = Number(document.querySelector("#volume-control").value);
audio.addEventListener("timeupdate", () => {
  if (!Number.isFinite(audio.duration)) return;
  document.querySelector("#progress-bar").value = String(audio.currentTime / audio.duration * 100);
  document.querySelector("#current-time").textContent = formatTime(audio.currentTime);
  document.querySelector("#duration-time").textContent = formatTime(audio.duration);
});
audio.addEventListener("loadedmetadata", () => {
  document.querySelector("#duration-time").textContent = formatTime(audio.duration);
});
audio.addEventListener("play", updatePlayButton);
audio.addEventListener("pause", updatePlayButton);
audio.addEventListener("ended", () => {
  if (repeatEnabled) {
    audio.currentTime = 0;
    audio.play().catch(error => {
      showToast("Couldn't replay this demo audio.");
      console.warn("Audio replay failed.", error);
    });
  } else {
    playNext(1);
  }
});
document.addEventListener("keydown", event => {
  const isTyping = event.target instanceof HTMLElement && (event.target.isContentEditable || ["INPUT", "TEXTAREA"].includes(event.target.tagName));
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#search-input").focus();
    showView("Search", { keepScroll: true });
  } else if (event.code === "Space" && !isTyping) {
    event.preventDefault();
    togglePlayback();
  }
});

renderHome();
showView("Home", { keepScroll: true });

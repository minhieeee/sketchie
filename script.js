// Get the necessary elements
const titleInput = document.getElementById('fileInput');
const pageTitle = document.querySelector('title');

// Set the initial value and event listeners
titleInput.value = 'Untitled';
titleInput.addEventListener('focus', handleFocus);
titleInput.addEventListener('blur', handleBlur);
titleInput.addEventListener('input', handleChange);

// Function to handle input focus
function handleFocus() {
  if (titleInput.value === 'Untitled') {
    titleInput.value = '';
  }
}

// Function to handle input blur
function handleBlur() {
  if (titleInput.value === '') {
    titleInput.value = 'Untitled';
  }
  adjustInputWidth();
}

// Function to handle input change
function handleChange() {
  if (titleInput.value !== '') {
    pageTitle.textContent = `Sketchie | ${titleInput.value}`;
  } else {
    pageTitle.textContent = 'Sketchie | Untitled';
  }
  adjustInputWidth();
}

// Function to adjust input width based on text length
function adjustInputWidth() {
    const textLength = titleInput.value.length;
    const characterWidth = 8; // Adjust this value based on your font and styling
    titleInput.style.width = `${textLength * characterWidth}px`;
  }
  
  // Call adjustInputWidth initially
  adjustInputWidth();
  
  // Add event listener for input change to continuously adjust width
  titleInput.addEventListener('input', adjustInputWidth);
  
  document.addEventListener('DOMContentLoaded', function() {
    var themeToggler = document.getElementById('themeToggler');
    var themeList = document.querySelector('.theme-list');
    var musicPlayer = document.getElementById('musicPlayer');
    var musicList = document.querySelector('.music-list');
    var canvasSettings = document.getElementById('canvasSettings');
    var canvasList = document.querySelector('.canvas-list');
  
    // Function to hide all dropdown lists
    function hideAllDropdowns() {
      themeList.classList.remove('active');
      musicList.classList.remove('active');
      canvasList.classList.remove('active');
    }
  
    // Theme Toggler
    themeToggler.addEventListener('click', function() {
      hideAllDropdowns();
      themeList.classList.toggle('active');
    });
  
    // Music Player
    musicPlayer.addEventListener('click', function() {
      hideAllDropdowns();
      musicList.classList.toggle('active');
    });
  
    // Canvas Settings
    canvasSettings.addEventListener('click', function() {
      hideAllDropdowns();
      canvasList.classList.toggle('active');
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      var target = event.target;
      if (
        !target.closest('.theme-switcher') &&
        !target.closest('.audio-player') &&
        !target.closest('.canvas-dropdown')
      ) {
        hideAllDropdowns();
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
  var themeToggler = document.getElementById('themeToggler');
  var themeList = document.querySelector('.theme-list');
  var themeOptions = themeList.querySelectorAll('.theme-option');
  var body = document.body;

  // Function to set the theme
  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  // Theme Toggler
  themeToggler.addEventListener('click', function() {
    themeList.classList.toggle('active');
  });

  // Theme Options
  themeOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      var selectedTheme = this.dataset.value;
      setTheme(selectedTheme);
      themeList.classList.remove('active');
    });
  });

  // Hide theme list when clicked outside
  document.addEventListener('click', function(event) {
    var isClickInsideThemeList = themeList.contains(event.target);
    var isClickOnThemeToggler = themeToggler.contains(event.target);

    if (!isClickInsideThemeList && !isClickOnThemeToggler) {
      themeList.classList.remove('active');
    }
  });
});
  
document.addEventListener('DOMContentLoaded', function() {
    var themeToggler = document.getElementById('themeToggler');
    var themeList = document.querySelector('.theme-list');
    var themeOptions = document.querySelectorAll('.theme-option');
    var body = document.querySelector('body');
  
    // Function to toggle theme classes
    function toggleTheme(theme) {
      body.classList.remove('light', 'dark', 'colourblind', 'high-contrast', 'dimmed');
      if (theme !== 'light') {
        body.classList.add(theme);
      }
    }
  
    // Theme Toggler
    themeToggler.addEventListener('click', function() {
      themeList.classList.toggle('active');
    });
  
    // Theme Options
    themeOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        var selectedTheme = this.dataset.value;
        toggleTheme(selectedTheme);
        themeList.classList.remove('active');
      });
    });
  });

  const solidBackgroundOption = document.querySelector('[data-value="solid-background"]');
const transparentBackgroundOption = document.querySelector('[data-value="transparent-background"]');
const backgroundPreview = document.getElementById('bgPreview');
const canvasContainer = document.getElementById('sketchpadCanvas');
const canvasListOptions = document.querySelectorAll('.canvas-list-option');

solidBackgroundOption.addEventListener('mouseover', () => {
  backgroundPreview.classList.remove('transparent');
});

transparentBackgroundOption.addEventListener('mouseover', () => {
  backgroundPreview.classList.add('transparent');
});

solidBackgroundOption.addEventListener('mouseout', () => {
  backgroundPreview.classList.remove('transparent');
});

transparentBackgroundOption.addEventListener('mouseout', () => {
  backgroundPreview.classList.remove('transparent');
});

let transparentClicked = false;

transparentBackgroundOption.addEventListener('click', () => {
  transparentClicked = !transparentClicked;
  if (transparentClicked) {
    canvasContainer.classList.add('transparent');
  } else {
    canvasContainer.classList.remove('transparent');
  }
});

solidBackgroundOption.addEventListener('click', () => {
  transparentClicked = false;
  canvasContainer.classList.remove('transparent');
});

canvasListOptions.forEach(option => {
  option.addEventListener('click', () => {
    const canvasList = document.querySelector('.canvas-list');
    canvasList.classList.remove('open');
  });
});

document.addEventListener('click', (event) => {
  const canvasList = document.querySelector('.canvas-list');
  if (!canvasList.contains(event.target)) {
    canvasList.classList.remove('open');
  }
});

const canvasList = document.querySelector('.canvas-list');
canvasList.addEventListener('click', () => {
  canvasList.classList.toggle('open');
});

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.key === 'S') {
    transparentClicked = false;
    canvasContainer.classList.remove('transparent');
  } else if (event.shiftKey && event.key === 'T') {
    transparentClicked = !transparentClicked;
    if (transparentClicked) {
      canvasContainer.classList.add('transparent');
    } else {
      canvasContainer.classList.remove('transparent');
    }
  }
});


  const musicPlayerButton = document.getElementById('musicPlayer');
const musicOptions = document.querySelectorAll('.music-option');

let isMusicPlaying = false;
let currentSong = null;

musicPlayerButton.addEventListener('click', () => {
  const musicList = document.querySelector('.music-list');
  musicList.classList.toggle('open');

  if (currentSong) {
    pauseSong(currentSong);
    currentSong = null;
  }
});

musicOptions.forEach((musicOption) => {
  const audio = musicOption.querySelector('audio');

  musicOption.addEventListener('click', () => {
    if (currentSong !== audio) {
      if (currentSong) {
        pauseSong(currentSong);
      }
      playSong(audio);
      currentSong = audio;
    } else {
      pauseSong(currentSong);
      currentSong = null;
    }
  });
});

function playSong(song) {
  song.play();
  song.parentElement.classList.add('playing');
  isMusicPlaying = true;
}

function pauseSong(song) {
  song.pause();
  song.parentElement.classList.remove('playing');
  isMusicPlaying = false;
}

const sizeOptions = document.querySelectorAll('.canvas-list-option');
const bodyWrapper = document.querySelector('.body-wrapper');
const customWidthInput = document.getElementById('customWidthInput');
const customHeightInput = document.getElementById('customHeightInput');

sizeOptions.forEach(option => {
  option.addEventListener('click', () => {
    const value = option.dataset.value;
    adjustCanvasSize(value);
    resetCanvasView();
  });
});

function adjustCanvasSize(value) {
  canvasContainer.style.minHeight = '1px'; // Change min-height to 1px
  canvasContainer.style.width = '';
  canvasContainer.style.height = '';
  customWidthInput.style.minHeight = '';
  customHeightInput.style.minHeight = '';

  switch (value) {
    case 'sd-size':
      canvasContainer.style.width = '750px';
      canvasContainer.style.height = '1334px';
      break;
    case 'hd-size':
      canvasContainer.style.width = '1500px';
      canvasContainer.style.height = '2668px';
      break;
    case 'square-size':
      canvasContainer.style.width = '1280px';
      canvasContainer.style.height = '1280px';
      break;
    case 'threequarters-size':
      canvasContainer.style.width = '768px';
      canvasContainer.style.height = '1024px';
      break;
    case 'ninebysixteen-size':
      canvasContainer.style.width = '720px';
      canvasContainer.style.height = '1280px';
      break;
    case 'custom-size':
      const customWidth = customWidthInput.value + 'px';
      const customHeight = customHeightInput.value + 'px';
      canvasContainer.style.width = customWidth;
      canvasContainer.style.height = customHeight;
      break;
    default:
      break;
  }
}

function resetCanvasView() {
  bodyWrapper.style.overflow = 'auto';
  bodyWrapper.style.width = '100%';
  bodyWrapper.style.height = '100%';
}

function adjustCustomSize() {
  const customWidth = customWidthInput.value + 'px';
  const customHeight = customHeightInput.value + 'px';
  canvasContainer.style.width = customWidth;
  canvasContainer.style.height = customHeight;
  resetCanvasView();
}

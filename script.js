const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const askingScreen = document.getElementById('asking-screen');
const successScreen = document.getElementById('success-screen');

// Logic for the jumping "No" button
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the window
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Logic for clicking "Yes"
yesBtn.addEventListener('click', () => {
    askingScreen.style.display = 'none';
    successScreen.style.display = 'block';
});
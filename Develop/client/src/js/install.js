// get the button
const butInstall = document.getElementById('buttonInstall');

// listen for the butInstall to be clicked
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// listen for the butInstall to be clicked
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
// const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  // Show the install prompt.
  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

// listen for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});

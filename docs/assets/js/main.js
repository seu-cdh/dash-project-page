const copyButton = document.querySelector('[data-copy-target]');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const target = document.getElementById(copyButton.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      const original = copyButton.textContent;
      copyButton.textContent = 'Copied';
      window.setTimeout(() => {
        copyButton.textContent = original;
      }, 1600);
    } catch (error) {
      console.error('Unable to copy citation:', error);
      copyButton.textContent = 'Select text';
    }
  });
}

// Prevent placeholder links from jumping to the top of the page.
document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

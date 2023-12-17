document
  .querySelectorAll('div[data-description]:not([data-description=""])')
  .forEach((div) => {
    // Create a Tippy instance for each div
    tippy(div, {
      content: div.getAttribute('data-description'),
    });

    div.removeAttribute('data-description');
  });

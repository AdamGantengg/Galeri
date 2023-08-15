document.querySelector('a[href^="https://adamgantengg.github.io/Keii/"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
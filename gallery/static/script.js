document.addEventListener('DOMContentLoaded', () => {
  const photos = document.querySelectorAll('.photo');
  const expandedPhoto = document.getElementById('expanded-photo');
  const expandedImg = document.getElementById('expanded-img');
  const expandedPoem = document.getElementById('expanded-poem');
  const closeBtn = document.getElementById('close-expanded');

  photos.forEach(photo => {
    const poemDiv = photo.querySelector('.poem');

    photo.addEventListener('click', () => {
      const imgSrc = photo.querySelector('img').src;
      expandedImg.src = imgSrc;
      expandedPoem.innerHTML = poemDiv.innerHTML;

      expandedPhoto.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('blur-background');
    });
  });

  function closeExpanded() {
    expandedPhoto.classList.add('hidden');
    document.body.style.overflow = '';
    document.body.classList.remove('blur-background');
  }

  closeBtn.addEventListener('click', closeExpanded);

  expandedPhoto.addEventListener('click', (e) => {
    if (e.target === expandedPhoto) {
      closeExpanded();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const portfolioWrap = document.querySelectorAll('.project-content-wrap');
  const isMobile = window.innerWidth <= 768;

  portfolioWrap.forEach(item => {
    const text = item.querySelector('.project-content');

    if (isMobile) {
      item.addEventListener('click', () => {
        text.style.opacity = text.style.opacity === '1' ? '0' : '1';
        text.style.visibility =
          text.style.visibility === 'visible' ? 'hidden' : 'visible';
      });
    } else {
      item.addEventListener('mouseover', () => {
        text.style.opacity = '1';
        text.style.visibility = 'visible';
      });

      item.addEventListener('mouseout', () => {
        text.style.opacity = '0';
        text.style.visibility = 'hidden';
      });
    }
  });
});

// Load more btn

const loadMoreBtn = document.querySelector('.load-more-btn');
const allItems = document.querySelectorAll('.portfolio-item');

let visibleItems = 0;
const itemsPerLoad = {
  mobile: 2,
  tablet: 2,
  desktop: 3,
};

function setInitialVisibleItems() {
  visibleItems = itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
}

function loadMoreItems() {
  visibleItems += itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
}

function getCurrentDevice() {
  const width = window.innerWidth;

  if (width <= 767) return 'mobile';
  if (width <= 1439) return 'tablet';
  return 'desktop';
}

function showVisibleItems() {
  allItems.forEach((item, index) => {
    if (index < visibleItems) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  if (visibleItems >= allItems.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

window.addEventListener('resize', () => {
  visibleItems = itemsPerLoad[getCurrentDevice()];
  showVisibleItems();
});

loadMoreBtn.addEventListener('click', loadMoreItems);

setInitialVisibleItems();

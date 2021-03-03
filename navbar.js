// target nav
const nav_bar = document.querySelector('.nav-bar');
const nav_list = document.querySelector('.nav-bar .nav-list');

// target class hamburger
const hamburger = document.querySelector('.nav-bar .hamburger');

// if .hamburger exsist
if (typeof hamburger != 'undefined') {
  // styling .hamburger
  hamburger.style.display = 'none';
  hamburger.style.position = 'relative';
  hamburger.style.zIndex = '2';
  hamburger.style.height = '25px';
  hamburger.style.marginLeft = 'auto';
  hamburger.style.cursor = 'pointer';
  hamburger.style.flexDirection = 'column';
  hamburger.style.justifyContent = 'space-around';

  // create hamburger line
  for (let i = 0; i < 3; i++) {
    // create div element
    const hamburger_line = document.createElement('div');
    // styling
    hamburger_line.classList.add('hamburger-line');
    hamburger_line.style.width = '25px';
    hamburger_line.style.height = '2px';
    hamburger_line.style.borderRadius = '10px';
    // append
    hamburger.appendChild(hamburger_line);
  }

  // make body darken
  const bodyDarken = document.createElement('div');
  bodyDarken.classList.add('bodyDarken');
  bodyDarken.style.position = 'fixed';
  bodyDarken.style.zIndex = '0';
  bodyDarken.style.top = '0';
  bodyDarken.style.left = '0';
  bodyDarken.style.height = '100%';
  bodyDarken.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  bodyDarken.style.transition = 'background-color 0.5s';
  nav_bar.appendChild(bodyDarken);

  // slide state
  function onSlide() {
    nav_list.classList.add('slide');
    nav_list.style.transform = 'translateX(0)';
    bodyDarken.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    bodyDarken.style.zIndex = '1';
    bodyDarken.style.width = '100%';
    slide = true;
  }
  function endSlide() {
    nav_list.classList.remove('slide');
    nav_list.style.transform = 'translateX(100%)';
    bodyDarken.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    bodyDarken.style.zIndex = '0';
    bodyDarken.style.width = '0';
    slide = false;
  }

  // slider function
  let slide = false;
  hamburger.addEventListener('click', () => {
    if (!slide) {
      onSlide();
    } else {
      endSlide();
    }
  });

  bodyDarken.addEventListener('click', () => {
    endSlide();
  });
}

// media query
function onWideScreen() {
  slide = false;
  nav_list.classList.remove('slide');
  nav_list.style.flexDirection = 'row';
  nav_list.style.position = 'static';
  nav_list.style.transform = 'translateX(0)';
  hamburger.style.display = 'none';
}
function onMobileScreen() {
  slide = false;
  nav_list.classList.remove('slide');
  nav_list.style.flexDirection = 'column';
  nav_list.style.position = 'fixed';
  nav_list.style.zIndex = '2';
  nav_list.style.top = '0';
  nav_list.style.right = '0';
  nav_list.style.height = '100%';
  nav_list.style.transform = 'translateX(100%)';
  hamburger.style.display = 'flex';
}

const mobile = window.matchMedia('(max-width: 768px)');
mobile.addEventListener('change', function () {
  if (mobile.matches) {
    onMobileScreen();
  } else {
    onWideScreen();
  }
});

// on refresh
if (window.innerWidth <= 768) {
  onMobileScreen();
} else {
  onWideScreen();
}

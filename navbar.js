// target .nav-list
const nav_list = document.querySelector('.nav-bar .nav-list');
const nav_item = document.querySelectorAll('.nav-bar .nav-item');

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

  // slider function
  let slide = false;
  hamburger.addEventListener('click', () => {
    if (!slide) {
      nav_list.classList.add('slide');
      nav_list.style.transform = 'translateX(0)';
      slide = true;
    } else {
      nav_list.classList.remove('slide');
      nav_list.style.transform = 'translateX(100%)';
      slide = false;
    }
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

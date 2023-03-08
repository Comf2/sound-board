//TODO:
//fix nav
// search and transition
const housewareURL = 'https://acnhapi.com/v1a/houseware/';

//-----mobile navbar toggle-----//
const toggleNavButton = document.querySelector('.toggle-nav-button');
const navBar = document.querySelector('.nav-bar');
const navList = document.querySelector('.nav-list');
let navOpen = false;

const desktopBreakPoint = 1000;

//when button is clicked toggle the nav bar
toggleNavButton.addEventListener('click', (e) => {
  toggleNav();
});

//toggles what to do based on if navbar is open or closed
const toggleNav = () => {
  navOpen = !navOpen;
  if (navOpen) {
    toggleNavButton.setAttribute('data-state', 'opened');
    toggleNavButton.setAttribute('aria-expanded', 'true');

    openNav();
  } else if (!navOpen) {
    toggleNavButton.setAttribute('data-state', 'closed');
    toggleNavButton.setAttribute('aria-expanded', 'false');

    closeNav();
  }
};

//styles nav bar to be open when its toggled
const openNav = () => {
  navBar.style.width = '75vw';
  navList.style.display = 'grid';
  setTimeout(() => {
    navList.style.opacity = '1';
  }, 500);
};

//styles nav bar to be closed when its toggled
const closeNav = () => {
  navBar.style.width = '0';
  navList.style.opacity = '0';
  setTimeout(() => {
    navList.style.display = 'none';
  }, 300);
};

window.addEventListener('resize', function (e) {
  if (window.innerWidth >= desktopBreakPoint) {
    navBar.style = '';
    navList.style = '';
  } else if (window.innerWidth <= desktopBreakPoint) {
    navBar.style.transitionProperty = 'none';
    setTimeout(() => {
      navBar.style.transitionProperty = '';
    }, 500);
    navOpen = true;
    toggleNav();
  }
});
//---account Dropdown for navabr---//

const accountIcon = document.querySelector('#account-icon');
const accountDropdown = document.querySelector('.account-dropdown');

let dropdownOpen = false;

accountIcon.onclick = () => toggleDropdown();

const toggleDropdown = () => {
  dropdownOpen = !dropdownOpen;
  if (dropdownOpen) openDropdown();
  else if (!dropdownOpen) closeDropdown();
};

const openDropdown = () => {
  accountDropdown.setAttribute('data-open', 'true');
  accountDropdown.style.display = 'block';
};
const closeDropdown = () => {
  accountDropdown.setAttribute('data-open', 'false');
  setTimeout(() => {
    accountDropdown.style.display = 'none';
  }, 300);
};

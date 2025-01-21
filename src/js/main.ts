import '../sass/reset.scss';
import '../sass/style.scss';
// Components
import '../sass/components/ui/button.scss';
import '../sass/components/ui/card.scss';

const toggleButton: HTMLDivElement = document.querySelector('.header__menu') as HTMLDivElement;
const mobileMenu: HTMLDivElement = document.querySelector('.header__mobile') as HTMLDivElement;

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    console.log('Test');
});

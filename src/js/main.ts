import '../sass/reset.scss';
import '../sass/style.scss';
// Components
import '../sass/components/ui/button.scss';
import '../sass/components/ui/card.scss';

const toggleButton: HTMLDivElement = document.querySelector('.header__menu') as HTMLDivElement;
const mobileMenu: HTMLDivElement = document.querySelector('.header__mobile') as HTMLDivElement;
const menuItems: NodeListOf<HTMLDListElement> = document.querySelectorAll(
    '.header__mobile ul li'
) as NodeListOf<HTMLDListElement>;

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

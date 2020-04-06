import 'core-js';
import "element-remove";
import 'classlist-polyfill';
import 'element-closest'
import "scroll-behavior-polyfill";
import Litepicker from 'litepicker';

var picker = new Litepicker({
    element: document.querySelector('head'),
    autoApply: false,
    showTooltip: false,
    singleMode: false,
    lang: 'ru-RU',
    buttonText: {
        previousMonth: "<svg><use xlink:href='#arrow-down'></svg>",
        nextMonth: "<svg><use xlink:href='#arrow-down'></svg>",
    },
});

const litePicker = document.querySelector('.litepicker'),
    subjectDatesTypes = document.querySelector('[data-subject="dates"]'),
    subjectCountriesTypes = document.querySelector('[data-subject="countries"]'),
    slideMenuItemsWrp = document.querySelector('.slide-menu__items-wrp'),
    selectDropdownCountry = document.querySelector('.select-dropdown-country'),
    spanTypeTravel = document.querySelector('[data-subject="type"]');

const appendLitePicker = () => {
    slideMenuItemsWrp.appendChild(litePicker);
}
appendLitePicker();

const selectDropdownType = document.querySelector('.select-dropdown-type');

subjectDatesTypes.addEventListener('click', () => {
    if (selectDropdownCountry.classList.contains('active')) {
        selectDropdownCountry.classList.remove('active');
    }
    if (litePicker.classList.contains('active')) {
        litePicker.classList.remove('active');
    } else {
        if (selectDropdownType.classList.contains('active')) {
            spanTypeTravel.parentElement.style.removeProperty('border-radius');
            selectDropdownType.classList.remove('active')
        }
        setTimeout(() => {
            litePicker.classList.add('active');
        }, 400)
    }
})

subjectCountriesTypes.addEventListener('click', () => {
    if (litePicker.classList.contains('active')) {
        litePicker.classList.remove('active');
    }
    if (selectDropdownCountry.classList.contains('active')) {
        selectDropdownCountry.classList.remove('active');
    } else {
        if (selectDropdownCountry.classList.contains('active')) {
            selectDropdownCountry.classList.remove('active')
        }
        if (selectDropdownType.classList.contains('active')) {
            spanTypeTravel.parentElement.style.removeProperty('border-radius');
            selectDropdownType.classList.remove('active')
        }
        setTimeout(() => {
            selectDropdownCountry.classList.add('active');
        }, 400)
    }
})

const menuBtn = document.querySelector(".menu-btn"),
    slideBtn = document.querySelector('.slide-btn'),
    slideMenu = document.querySelector(".slide-menu"),
    slideOverlay = document.querySelector('.overlay');

if (document.querySelector(".menu-btn")) {
    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        slideMenu.classList.add("slide-menu_active");
        slideOverlay.style.display = 'block';
    });
}

if (document.querySelector(".slide-btn")) {
    slideBtn.addEventListener("click", (e) => {
        e.preventDefault();
        slideMenu.classList.remove("slide-menu_active");
        slideOverlay.style.removeProperty('display');
    });
}

const slideMenuTravel = document.querySelector('.slide-menu__travel'),
    slideMenuItemsWrpTop = document.querySelector('.slide-menu__items-wrp_top');

// animation for dates(calendar) and countries selescts //

const subjectDatesAnimation = () => {
    if (subjectDatesTypes.parentElement.classList.contains('slide-menu__subject_active')) {
        setTimeout(() => {
            subjectDatesTypes.parentElement.classList.add('slide-menu__subject_relative');
            subjectDatesTypes.parentElement.classList.remove('slide-menu__subject_absolute');
            subjectDatesTypes.parentElement.classList.remove('slide-menu__subject_right');
        }, 800)
    }
    subjectDatesTypes.parentElement.classList.toggle('slide-menu__subject_active')
    subjectDatesTypes.parentElement.classList.add('slide-menu__subject_right');
    subjectDatesTypes.parentElement.classList.add('slide-menu__subject_absolute');
    subjectDatesTypes.parentElement.classList.remove('slide-menu__subject_relative');
}

const subjectCountriesAnimation = (e) => {
    if (subjectCountriesTypes.parentElement.classList.contains('slide-menu__subject_active')) {
        setTimeout(() => {
            subjectCountriesTypes.parentElement.classList.add('slide-menu__subject_relative');
            subjectCountriesTypes.parentElement.classList.remove('slide-menu__subject_absolute');
            subjectCountriesTypes.parentElement.classList.remove('slide-menu__subject_left');
            subjectDatesTypes.parentElement.classList.add('slide-menu__subject_relative');
            slideMenuItemsWrp.style.marginBottom = "0";
        }, 800)
    }
    subjectCountriesTypes.parentElement.classList.toggle('slide-menu__subject_active');
    subjectCountriesTypes.parentElement.classList.add('slide-menu__subject_left');
    subjectCountriesTypes.parentElement.classList.add('slide-menu__subject_absolute');
    subjectCountriesTypes.parentElement.classList.remove('slide-menu__subject_relative');
    subjectDatesTypes.parentElement.classList.remove('slide-menu__subject_relative');
    subjectDatesTypes.parentElement.classList.add('slide-menu__subject_absolute');
    subjectDatesTypes.parentElement.classList.add('slide-menu__subject_right');
    slideMenuItemsWrp.style.marginBottom = "80px";
}

// end //


slideMenuTravel.addEventListener('click', (e) => {
    const dataSpan = e.target.dataset.subject;
    if (dataSpan === 'countries') {
        subjectCountriesAnimation();
    }
    if (dataSpan === 'dates') {
        subjectDatesAnimation();
    }
})

const selectDropdownContent = document.querySelector('.select-dropdown-country__content'),
    selectDropdownCountryItem = document.querySelector('.select-dropdown-country__item'),
    selectDropdownCountryHidden = document.querySelectorAll('.select-dropdown-country__hidden');

if (document.querySelector('.select-dropdown-country__content')) {
    selectDropdownContent.addEventListener('click', (e) => {
        if (e.target.classList.contains('select-dropdown-country__item')) {
            const selectDropdownCountryHidden = e.target.parentElement.querySelectorAll('.select-dropdown-country__hidden')
            for (let i = 0; i < selectDropdownCountryHidden.length; i += 1) {
                if (selectDropdownCountryHidden[i].classList.contains("overflowVisible", "animated", "fadeIn")) {
                    selectDropdownCountryHidden[i].classList.remove("overflowVisible", "animated", "fadeIn");
                }
            }

            e.target.children[0].classList.add('overflowVisible');
            e.target.children[0].classList.add('animated');
            e.target.children[0].classList.add('fadeIn');

        }
        return;
    });
}

const styleBackgroundLi = (e) => {
    for (let liElement of e.target.parentElement.children) {
        if (liElement.classList.contains('list_active')) {
            liElement.classList.remove('list_active');
        }
    }
    e.target.classList.add('list_active');
}

document.addEventListener('click', (e) => {
    if (e.target.nodeName === "LI" && e.target.parentElement.classList.contains('select-dropdown-country__hidden')) {
        styleBackgroundLi(e);
    }
});

document.addEventListener('click', (e) => {
    if (e.target.nodeName === "LI" && e.target.parentElement.classList.contains('select-dropdown-type__content')) {
        styleBackgroundLi(e);
    }
});

spanTypeTravel.addEventListener('click', (e) => {
    for (let dropdown of e.target.parentElement.children) {
        if (dropdown.classList.contains('select-dropdown-type')) {
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                spanTypeTravel.parentElement.style.removeProperty('border-radius');
            } else {
                dropdown.classList.add('active');
                spanTypeTravel.parentElement.style.borderBottomLeftRadius = '0'
                spanTypeTravel.parentElement.style.borderBottomRightRadius = '0'
            }
        }
    }
})
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
    selectDropdownCountry = document.querySelector('.select-dropdown-country');

const appendLitePicker = () => {
    slideMenuItemsWrp.appendChild(litePicker);
}
appendLitePicker();

subjectDatesTypes.addEventListener('click', () => {
    if (selectDropdownCountry.classList.contains('active')) {
        selectDropdownCountry.classList.remove('active');
    }
    if (litePicker.classList.contains('active')) {
        litePicker.classList.remove('active');
    } else {
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
            subjectDatesTypes.parentElement.classList.remove('slide-menu__subject_left');
        }, 800)
    }
    subjectDatesTypes.parentElement.classList.toggle('slide-menu__subject_active')
    subjectDatesTypes.parentElement.classList.add('slide-menu__subject_left');
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
        console.log(e.target);
        subjectCountriesAnimation();
    }
    if (dataSpan === 'dates') {
        subjectDatesAnimation();
    }
})
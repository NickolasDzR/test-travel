// import Litepicker from 'litepicker';

// const travelDetailsDate = document.querySelector('.travel-details__date');
// const travelDetailsCountrySpan = document.querySelector('.travel-details__span');

// const selectDropdownContent = document.querySelector('.select-dropdown-country__content'),
//     selectDropDownCountry = document.querySelector('.select-dropdown-country'),
//     travelDetailsTooltip = document.querySelector('.travel-details__tooltip'),
//     travelDetailsCountry = document.querySelector('.travel-details__country');

// var picker = new Litepicker({
//     element: document.querySelector('head'),
//     autoApply: false,
//     showTooltip: false,
//     singleMode: false,
//     lang: 'ru-RU',
//     buttonText: {
//         previousMonth: "<svg><use xlink:href='#arrow-down'></svg>",
//         nextMonth: "<svg><use xlink:href='#arrow-down'></svg>",
//     },
// });
// const litePicker = document.querySelector('.litepicker');

// const travelDetailsCountrySpanId = document.getElementById('travel-details__span');

// travelDetailsCountrySpanId.addEventListener('click', () => {
//     if (litePicker.classList.contains('active')) {
//         litePicker.classList.remove('active');
//     } else {
//         travelDetailsDate.appendChild(litePicker);
//         litePicker.classList.add('active');
//     }
// })

// travelDetailsTooltip.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.nextElementSibling.classList.contains('litePicker')) {
//         return;
//     } else {
//         e.target.nextElementSibling.classList.toggle('active');
//     }
// })

// const containerDays = document.querySelector('.month-item');

// document.addEventListener('click', () => {
//     const isInRange = document.querySelectorAll('.is-in-range')
//     if (isInRange.length > 0) {
//         console.log(isInRange[isInRange.length - 1]);
//         for (let i = 0; i < isInRange.length; i += 1) {
//             isInRange[i].style.color = 'transparent'
//             if (i === 0) {
//                 isInRange[0].classList.add('beforeElement');
//             }
//             if (i === isInRange.length - 1) {
//                 isInRange[isInRange.length - 1].classList.add('afterElement');
//             }
//         }
//     }
// })

// selectDropdownContent.addEventListener('click', (e) => {
//     if (e.target.classList.contains('select-dropdown-country__item')) {
//         const selectDropdownCountryHidden = e.target.parentElement.querySelectorAll('.select-dropdown-country__hidden')
//         for (let i = 0; i < selectDropdownCountryHidden.length; i += 1) {
//             if (selectDropdownCountryHidden[i].classList.contains("overflowVisible", "animated", "fadeIn")) {
//                 selectDropdownCountryHidden[i].classList.remove("overflowVisible", "animated", "fadeIn");
//             }
//         }
//         e.target.children[0].classList.toggle('overflowVisible');
//         e.target.children[0].classList.toggle('animated');
//         e.target.children[0].classList.toggle('fadeIn');
//     }
//     return;
// })

// travelDetailsTooltip.addEventListener('click', (e) => {
//     for (let tooltip of e.target.parentElement.children) {
//         if (tooltip.classList.contains('travel-details__tooltip')) {
//             return;
//         }
//     }
//     for (let active of e.target.parentElement.children) {
//         if (active.classList.contains('active')) {
//             travelDetailsTooltip.style.borderBottomLeftRadius = "0";
//             travelDetailsTooltip.style.borderBottomRightRadius = "0";
//         };
//         if (!active.classList.contains('active')) {
//             travelDetailsTooltip.style.removeProperty('border-bottom-left-radius');
//             travelDetailsTooltip.style.removeProperty('border-bottom-right-radius');
//         };
//     };
// });
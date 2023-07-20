// tabs for new cars page
const tabItem = document.querySelectorAll('.tabs__btn');
const tabContent = document.querySelectorAll('.tabs__content')

tabItem.forEach(function(e) {
  e.addEventListener('click', open);
})

function open(e) {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  // change color for button:
  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn--active');
  })

  tabTarget.classList.add('tabs__btn--active');
  
  // change content after click
  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content--active');
  })

  document.querySelector(`#${button}`).classList.add('tabs__content--active');
}

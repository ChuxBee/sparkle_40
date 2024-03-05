let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');

toggle.onclick = function () {
  navigation.classList.toggle('active')
  toggle.classList.toggle('active')
}

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0)
})

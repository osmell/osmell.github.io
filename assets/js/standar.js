window.addEventListener('scroll', function() {
    if ($(window).scrollTop() > 300) {
        document.getElementById('buttonTop').classList.add('show');
    } else {
        document.getElementById('buttonTop').classList.remove('show');
    }
}, false);

$('#buttonTop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

const nextt=document.querySelector('#nextt')
const prevt=document.querySelector('#prevt')

function handleScrollNext (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

function handleScrollPrev (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)

nextt.addEventListener('click', handleScrollNext)
prevt.addEventListener('click', handleScrollPrev)
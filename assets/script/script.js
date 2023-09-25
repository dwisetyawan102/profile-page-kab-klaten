const imgDisplay = document.getElementsByClassName('img-display')[0];
const thumb = document.getElementsByClassName('thumb');
const articleWisata1 = document.getElementById('article-wisata1');
const articleWisata2 = document.getElementById('article-wisata2');
const articleWisata3 = document.getElementById('article-wisata3');
const articleWisata4 = document.getElementById('article-wisata4');

thumb[0].addEventListener('click', function() {
    imgDisplay.src = 'assets/image/1.jpg';
    articleWisata1.classList.remove('displayNone');
    articleWisata2.classList.add('displayNone');
    articleWisata3.classList.add('displayNone');
    articleWisata4.classList.add('displayNone');
});
thumb[1].addEventListener('click', function() {
    imgDisplay.src = 'assets/image/2.jpg';
    articleWisata1.classList.add('displayNone');
    articleWisata2.classList.remove('displayNone');
    articleWisata3.classList.add('displayNone');
    articleWisata4.classList.add('displayNone');
});
thumb[2].addEventListener('click', function() {
    imgDisplay.src = 'assets/image/3.jpg';
    articleWisata1.classList.add('displayNone');
    articleWisata2.classList.add('displayNone');
    articleWisata3.classList.remove('displayNone');
    articleWisata4.classList.add('displayNone');
});
thumb[3].addEventListener('click', function() {
    imgDisplay.src = 'assets/image/4.jpg';
    articleWisata1.classList.add('displayNone');
    articleWisata2.classList.add('displayNone');
    articleWisata3.classList.add('displayNone');
    articleWisata4.classList.remove('displayNone');
});

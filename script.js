const slides = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.dot');

let counter = 1;
changeslide(counter);

let timer = setInterval(autoslide, 8000);

function autoslide()
{
    counter += 1;
    changeslide(counter);
}

function plusSlide(n)
{
    counter += n;
    changeslide(counter);
    resetTimer();
}

function currentSlide(n)
{
    counter = n;
    changeslide(counter);
    resetTimer();
}

function resetTimer()
{
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function changeslide(n)
{
    let i;

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dot.length; i++)
    {
        dot[i].classList.remove('active');
    }

    if (n > slides.length)
    {
        counter = 1;
    }

    if (n < 1)
    {
        counter = slides.length;
    }

    slides[counter - 1].style.display = 'block';
    dot[counter - 1].classList.add('active');
}
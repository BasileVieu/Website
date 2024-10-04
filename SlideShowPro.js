const slidesPro = document.querySelectorAll('.slidePro');
const dotsPro = document.querySelectorAll('.dotPro');

let counterPro = 1;
changeSlidePro(counterPro);

let timerPro = setInterval(autoslidePro, 8000);

function autoslidePro()
{
    counterPro += 1;
    changeSlidePro(counterPro);
}

function plusSlidePro(n)
{
    counterPro += n;
    changeSlidePro(counterPro);
    resetTimerPro();
}

function currentSlidePro(n)
{
    counterPro = n;
    changeSlidePro(counterPro);
    resetTimerPro();
}

function resetTimerPro()
{
    clearInterval(timerPro);
    timerPro = setInterval(autoslidePro, 8000);
}

function changeSlidePro(n)
{
    let i;

    for (i = 0; i < slidesPro.length; i++)
    {
        slidesPro[i].style.display = 'none';
    }

    for (i = 0; i < dotsPro.length; i++)
    {
        dotsPro[i].classList.remove('active');
    }

    if (n > slidesPro.length)
    {
        counterPro = 1;
    }

    if (n < 1)
    {
        counterPro = slidesPro.length;
    }

    slidesPro[counterPro - 1].style.display = 'block';
    dotsPro[counterPro- 1].classList.add('active');
}
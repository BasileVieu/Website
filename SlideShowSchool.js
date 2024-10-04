const slidesSchool = document.querySelectorAll('.slideSchool');
const dotsSchool = document.querySelectorAll('.dotSchool');

let counterSchool = 1;
changeSlideSchool(counterSchool);

let timerSchool = setInterval(autoslideSchool, 8000);

function autoslideSchool()
{
    counterSchool += 1;
    changeSlideSchool(counterSchool);
}

function plusSlideSchool(n)
{
    counterSchool += n;
    changeSlideSchool(counterSchool);
    resetTimerSchool();
}

function currentSlideSchool(n)
{
    counterSchool = n;
    changeSlideSchool(counterSchool);
    resetTimerSchool();
}

function resetTimerSchool()
{
    clearInterval(timerSchool);
    timerSchool = setInterval(autoslideSchool, 8000);
}

function changeSlideSchool(n)
{
    let i;

    for (i = 0; i < slidesSchool.length; i++)
    {
        slidesSchool[i].style.display = 'none';
    }

    for (i = 0; i < dotsSchool.length; i++)
    {
        dotsSchool[i].classList.remove('active');
    }

    if (n > slidesSchool.length)
    {
        counterSchool = 1;
    }

    if (n < 1)
    {
        counterSchool = slidesSchool.length;
    }

    slidesSchool[counterSchool - 1].style.display = 'block';
    dotsSchool[counterSchool- 1].classList.add('active');
}
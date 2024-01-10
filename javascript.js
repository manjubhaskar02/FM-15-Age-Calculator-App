const birthdateInput = document.getElementById('birthdate');
const result = document.getElementById('result');

function calculateAge() {
    const error = document.querySelector('.error');
    const date = document.querySelector('.date');

    //error
    if (birthdateInput.value === '') {
        error.innerHTML = ` <span>This field is required</span>
        <span>This field is required</span>
        <span>This field is required</span> `
        date.style.color = 'var(--Light-red)';
        birthdateInput.classList.add('alert');
        return;
    }
    else {
        error.style.display = 'none';
        date.style.color = 'var(--Smokey-grey)';
        birthdateInput.classList.remove('alert');

    }

    // if (isNaN(birthDate.getTime())) {
    //     error.innerHTML = `    <span>Must be a valid date</span>
    //     <span>Must be a valid date</span>
    //     <span>Must be a valid date</span> `
    //     date.style.color = 'var(--Light-red)';
    //     return;
    // }
    // else {
    //     error.style.display = 'none';
    // }

    const currentDate = new Date();
    const birthDate = new Date(birthdateInput.value);



    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // const timeDifference = currentDate - birthDate;
    // const birthDate = new Date(birthdateInput.value);
    // const currentDate = new Date();


    // const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    // const months = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    // const days = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    result.classList.add('highlight');
    setTimeout(() => {
        result.innerHTML = `  <p class="grid place-items-start px-3  gap-3 italic font-bold text-5xl md:text-7xl " id="result">
    <span class="text-[var(--Purple)]"> ${years} <span class="text-[var(--Off-black)]">years</span>
    </span>
    <span class="text-[var(--Purple)]"> ${months} <span class="text-[var(--Off-black)]">months</span>
    </span>
    <span class="text-[var(--Purple)]"> ${days} <span class="text-[var(--Off-black)]" > days</span >
    </span >
  </p >`
        result.classList.remove('highlight');
    }, 500);

}
const countUp = new CountUp('dummy', 0, 200, 0, 2.5, { separator: ',' });

countUp.start();

const bookingType = document.getElementById('BkType');
const dateSection = document.getElementById('date');
const timeSection = document.getElementById('time');
const slotSection = document.getElementById('slot');

bookingType.addEventListener('change', handleBookingTypeChange);

function handleBookingTypeChange() {
    const selectedType = bookingType.value;

    dateSection.style.display = 'none';
    timeSection.style.display = 'none';
    slotSection.style.display = 'none';

    switch (selectedType) {
        case 'fullday':
            dateSection.style.display = 'block';
            break;
        case 'halfday':
            dateSection.style.display = 'block';
            slotSection.style.display = 'block';
            break;
        case 'hourly':
            dateSection.style.display = 'block';
            timeSection.style.display = 'block';
            break;
    }
}

handleBookingTypeChange();

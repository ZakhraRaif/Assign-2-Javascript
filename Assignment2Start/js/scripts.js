document.addEventListener('DOMContentLoaded', function () {
    // Constants for query selector
    const StudentID = document.getElementById('myStudentId');
    const UerInput = document.getElementById('customNumber');
    const ColourButton = document.querySelector('.custColor');
    const RandomButton = document.querySelector('.randColor');
    const imageSelect = document.getElementById('imageSelect');
    const imagesElement = document.getElementById('images');

    // Function to change bg color from user input and add student id
    function changeCustomColor() {
        const inputValue = parseInt(UerInput.value);

        if (isNaN(inputValue) || inputValue < 0 || inputValue > 100) {
            document.body.style.backgroundColor = 'red';
        } else if (inputValue >= 0 && inputValue <= 20) {
            document.body.style.backgroundColor = 'green';
        } else if (inputValue > 20 && inputValue <= 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (inputValue > 40 && inputValue <= 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (inputValue > 60 && inputValue <= 80) {
            document.body.style.backgroundColor = 'purple';
        } else if (inputValue > 80 && inputValue <= 100) {
            document.body.style.backgroundColor = 'yellow';
        }

        // Display student id
     StudentID.textContent = 'Student ID: 200540928';
    }

    // Function to change bg color from random number
    function changeRandomColor() {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        UerInput.value = randomValue;
        changeCustomColor();
    }

    // Function to generate options for select list
    function addList() {
        // Clear existing options
        imageSelect.innerHTML = '<option value="">Please choose...</option>';

        // Add your logic to populate the options from an array of image sources
        // Example:
        const imageSources = ['./img/Airbender.jpg', './img/Firebender.jpg', './img/Waterbender.jpg', './img/Earthbender.jpg'];
        const displayedNames = ['Air-Bender', 'Fire-Bender', 'Water-Bender', 'Earth-Bender']; // Adjust this array

        for (let i = 0; i < imageSources.length; i++) {
            const option = document.createElement('option');
            option.value = imageSources[i];
            option.textContent = displayedNames[i];
            imageSelect.appendChild(option);
        }
    }

    // Function to change image
    function changeImage() {
        const selectedImage = imageSelect.value;
        imagesElement.src = selectedImage;
        imagesElement.alt = selectedImage;
    }

    // Event listeners for click events
    ColourButton.addEventListener('click', changeCustomColor);
    RandomButton.addEventListener('click', changeRandomColor);

    // Event listener for change event of select
    imageSelect.addEventListener('change', changeImage);

    // Initial function call to populate the select list
    addList();
});

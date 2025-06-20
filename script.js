
// Select all radio inputs and offer boxes
const radios = document.querySelectorAll('input[name="offer"]');
const boxes = document.querySelectorAll('.box');

// Add click listener to each radio input
radios.forEach(radio => {
  radio.addEventListener('change', () => {

    // Collapse all boxes
    boxes.forEach(box => box.classList.remove('expanded'));
    
    // Expand the selected box only
    const selectedBox = radio.closest('.box');
    if (selectedBox) {
      selectedBox.classList.add('expanded');
    }
  });
});

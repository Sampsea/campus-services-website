// Printing cost calculator
const totalPagesInput = document.getElementById('totalPages');
const colorPagesInput = document.getElementById('colorPages');
const copiesInput = document.getElementById('copies');
const printCostEl = document.getElementById('printCost');

function updatePrintCost() {
  const totalPages = parseInt(totalPagesInput?.value) || 0;
  const colorPages = parseInt(colorPagesInput?.value) || 0;
  const copies = parseInt(copiesInput?.value) || 1;
  const bwPages = Math.max(totalPages - colorPages, 0);
  const bwCost = 0.70;
  const colorCost = 1.50;
  const total = ((bwPages * bwCost) + (colorPages * colorCost)) * copies;
  printCostEl.textContent = `Estimated Cost: GHS ${total.toFixed(2)}`;
}

totalPagesInput?.addEventListener('input', updatePrintCost);
colorPagesInput?.addEventListener('input', updatePrintCost);
copiesInput?.addEventListener('input', updatePrintCost);

document.getElementById('printingForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Your printing request has been submitted!\nThank you for using SCS.');
});

// Tutorials cost calculator
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const tutorialTotalEl = document.getElementById('tutorialTotal');

function updateTutorialTotal() {
  let count = 0;
  checkboxes.forEach(box => {
    if (box.checked) count++;
  });
  tutorialTotalEl.textContent = `Total Cost: GHS ${(count * 100).toFixed(2)}`;
}

checkboxes.forEach(box => {
  box.addEventListener('change', updateTutorialTotal);
});

document.getElementById('tutorialForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Your tutorial registration has been submitted!\nThank you for using SCS.');
});

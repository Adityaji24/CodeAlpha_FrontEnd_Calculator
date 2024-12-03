let memoryValue = 0;

function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const display = document.getElementById('display');
    display.value = eval(display.value); // Evaluate the input
  } catch {
    alert('Invalid Expression');
  }
}

function calculateSquareRoot() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  if (value >= 0) {
    display.value = Math.sqrt(value);
  } else {
    alert('Cannot calculate square root of a negative number');
  }
}

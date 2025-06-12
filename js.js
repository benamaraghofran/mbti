const selected = { green: null, purple: null, blue: null, yellow: null };

function selectBox(element) {
  const category = element.classList.contains('green') ? 'green'
                  : element.classList.contains('purple') ? 'purple'
                  : element.classList.contains('blue') ? 'blue'
                  : 'yellow';

  // Remove previous selection in that category
  document.querySelectorAll(`.box.${category}`).forEach(el => el.classList.remove('selected'));

  // Add new selection
  element.classList.add('selected');
  selected[category] = element.getAttribute('data-value');
}

function submitResult() {
  if (Object.values(selected).includes(null)) {
    alert("Please select one option from each color group (green, purple, blue, yellow).");
    return;
  }

  // Build MBTI type string
  const result = selected.green + selected.purple + selected.blue + selected.yellow; // e.g., INTJ

  // Redirect to lowercase version of result page
  const page = result.toLowerCase() + '.html'; // => intj.html, estp.html, etc.

  window.location.href = page;
}

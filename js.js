const selected = { green: null, purple: null, blue: null, yellow: null };

function selectBox(element) {
  const category = element.classList.contains('green') ? 'green'
                  : element.classList.contains('purple') ? 'purple'
                  : element.classList.contains('blue') ? 'blue'
                  : 'yellow';

  document.querySelectorAll(`.box.${category}`).forEach(el => el.classList.remove('selected'));

  element.classList.add('selected');
  selected[category] = element.getAttribute('data-value');
}

function submitResult() {
  if (Object.values(selected).includes(null)) {
    alert("Please select one option from each color group (green, purple, blue, yellow).");
    return;
  }
  const result = selected.green + selected.purple + selected.blue + selected.yellow;
  const page = result.toLowerCase() + '.html'; 

  window.location.href = page;
}

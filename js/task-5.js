const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', event => { 
      output.textContent = event.target.value.length === 0 ?
     'незнакомец' :
      event.target.value; 
})
function onClickDownKey(event) {
  if (event.key === "Enter") {
    timesTable();
  };
};

function timesTable() {
const numberSelect =  document.querySelector('.choosenum').value;

for (let i = 1; i <= 12; i++) {
  document.querySelector('.tble').innerHTML += `${numberSelect} &times; ${i} = ${numberSelect * i}<br>`;
  };
};

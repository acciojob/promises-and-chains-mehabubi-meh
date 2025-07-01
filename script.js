document.getElementById("votingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();
  const age = parseInt(ageInput);

  // Check for empty or invalid inputs
  if (name === "" || ageInput === "" || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  // Promise logic
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // 4-second delay
  })
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});

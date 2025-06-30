document.getElementById("votingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name.trim() === "" || age.trim() === "") {
    alert("Please enter valid details.");
    return;
  }

  const ageNumber = parseInt(age);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNumber >= 18) {
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

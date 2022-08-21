const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Uzupełnij puste pola!");
    return;
  }


  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 16) {
    status = "Wygłodzenie";
  }
  if (BMI >= 16 && BMI < 16.9) {
    status = "wychudzenie";
  }
  if (BMI >= 17 && BMI < 18.5) {
    status = "Niedowage"; 
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Waga prawdiłowe";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Nadwage"; 
  }
  if (BMI >= 30 && BMI < 35) {
    status = "Otyłość I stopnia";
  }
  if (BMI >= 35 && BMI < 40) {
    status = "Otyłość II stopnia";
  }
  if (BMI >= 40) {
    status = "Otyłość III stopnia";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Twój wskaźnik BMI sugeruje: </br> <span id="comment">${status}</span>`;
});

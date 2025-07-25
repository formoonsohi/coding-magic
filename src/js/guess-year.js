document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".check-btn");
  const input = document.getElementById("year");
  const result = document.getElementById("result");

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  button.addEventListener("click", function () {
    const yearValue = input.value.trim(); 
    const currentYear = new Date().getFullYear(); 

    if (!yearValue || isNaN(yearValue) || yearValue < 1000 || parseInt(yearValue, 10) > currentYear) {
      result.textContent = "Будь ласка, введіть дійсний рік народження (наприклад, 1990).";
      result.style.color = "red"; 
      return;
    }

    const yearNumber = parseInt(yearValue, 10);

    if (isLeapYear(yearNumber)) {
      result.textContent = `Ви народилися у високосний рік!`;
      result.style.color = "#28a745";
    } else {
      result.textContent = `Ви народилися не у високосний рік.`;
      result.style.color = "#860404ff";
    }
  });
});
const diceBtn = document.querySelector(".dice");
const adviceId = document.querySelector("#advice-id");
const adviceContent = document.querySelector(".advice-content");

diceBtn.addEventListener("click", () => {
  let api = fetch("https://api.adviceslip.com/advice");
  api
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerText = data.slip.id;
      adviceContent.innerText = `“${data.slip.advice}”`;
    });
});

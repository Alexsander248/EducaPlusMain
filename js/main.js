const likes = document.querySelectorAll("#likes");
const deslikes = document.querySelectorAll("#deslike");

const dedaoCima = document.querySelectorAll(".fa-thumbs-up");
const dedaoBaixo = document.querySelectorAll(".fa-thumbs-down");

dedaoCima.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(index);

    likes[index].innerHTML = parseInt(likes[index].textContent) + 1;
  });
});

dedaoBaixo.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(index);

    deslikes[index].innerHTML = parseInt(deslikes[index].textContent) + 1;
  });
});

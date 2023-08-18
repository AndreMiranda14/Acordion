const pergunta1 = document.querySelector(".questions1");
const pergunta2 = document.querySelector(".questions2");
const pergunta3 = document.querySelector(".questions3");
const pergunta4 = document.querySelector(".questions4");
const pergunta5 = document.querySelector(".questions5");

pergunta1.addEventListener("click", function (e) {
  if (pergunta1.style.fontWeight !== "bolder") {
    pergunta1.style.fontWeight = "bolder";
    document.querySelector(".seta1").setAttribute("class", "arrow1");
  } else {
    pergunta1.style.fontWeight = "400";
    document.querySelector(".arrow1").setAttribute("class", "seta1");
  }
});

pergunta2.addEventListener("click", function (e) {
  if (pergunta2.style.fontWeight !== "bolder") {
    pergunta2.style.fontWeight = "bolder";
    document.querySelector(".seta2").setAttribute("class", "arrow2");
  } else {
    pergunta2.style.fontWeight = "400";
    document.querySelector(".arrow2").setAttribute("class", "seta2");
  }
});

pergunta3.addEventListener("click", function (e) {
  if (pergunta3.style.fontWeight !== "bolder") {
    pergunta3.style.fontWeight = "bolder";
    document.querySelector(".seta3").setAttribute("class", "arrow3");
  } else {
    pergunta3.style.fontWeight = "400";
    document.querySelector(".arrow3").setAttribute("class", "seta3");
  }
});

pergunta4.addEventListener("click", function (e) {
  if (pergunta4.style.fontWeight !== "bolder") {
    pergunta4.style.fontWeight = "bolder";
    document.querySelector(".seta4").setAttribute("class", "arrow4");
  } else {
    pergunta4.style.fontWeight = "400";
    document.querySelector(".arrow4").setAttribute("class", "seta4");
  }
});

pergunta5.addEventListener("click", function (e) {
  if (pergunta5.style.fontWeight !== "bolder") {
    pergunta5.style.fontWeight = "bolder";
    document.querySelector(".seta5").setAttribute("class", "arrow5");
  } else {
    pergunta5.style.fontWeight = "400";
    document.querySelector(".arrow5").setAttribute("class", "seta5");
  }
});

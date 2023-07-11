const btnNazismo = document.querySelector("#btn-nazismo"); //botao de enviar do nazismo
const btnRacismo = document.querySelector("#btn-racismo"); //botao de enviar do racismo
const btnEspecismo = document.querySelector("#btn-especismo"); //botao de enviar do especismo
const btnXenofobia = document.querySelector("#btn-xenofobia"); //botao de enviar de xenofobia
const btnIntolerancia = document.querySelector("#btn-intolerancia"); //botao de enviar de intolerancia

const select = document.querySelector("#select-tema"); //select de tema de questionario

/* Área que contem todos os formularios */
const formNazismo = document.querySelector("#nazismo"); // Formulario de nazismo
const formRacismo = document.querySelector("#racismo"); // Formulario de racismo
const formEspecismo = document.querySelector("#especismo"); // Formulario de especismo
const formXenofobia = document.querySelector("#xenofobia"); // Formulario de xenofobia
const formIntolerancia = document.querySelector("#intolerancia"); // Formulario de intolerancia religiosa

/* Código para fazer a lista selecionada aparecer*/
select.addEventListener("change", (event) => {
  if (event.target.value === "0") {
    formNazismo.style.display = "grid";
    formEspecismo.style.display = "none";
    formRacismo.style.display = "none";
    formXenofobia.style.display = "none";
    formIntolerancia.style.display = "none";
    //
  } else if (event.target.value === "1") {
    formRacismo.style.display = "grid";
    formNazismo.style.display = "none";
    formEspecismo.style.display = "none";
    formXenofobia.style.display = "none";
    formIntolerancia.style.display = "none";
    //
  } else if (event.target.value === "2") {
    formEspecismo.style.display = "grid";
    formRacismo.style.display = "none";
    formNazismo.style.display = "none";
    formIntolerancia.style.display = "none";
    formXenofobia.style.display = "none";
    //
  } else if (event.target.value === "3") {
    formXenofobia.style.display = "grid";
    formEspecismo.style.display = "nome";
    formRacismo.style.display = "none";
    formNazismo.style.display = "none";
    formIntolerancia.style.display = "none";
    //
  } else if (event.target.value === "4") {
    formIntolerancia.style.display = "grid";
    formEspecismo.style.display = "none";
    formRacismo.style.display = "none";
    formNazismo.style.display = "none";
    formXenofobia.style.display = "none";
  }
});

/*Questões certas do nazismo*/
const naz1 = document.querySelector("#naz1");
const naz2 = document.querySelector("#naz2");
const naz3 = document.querySelector("#naz3");
const naz4 = document.querySelector("#naz4");
const naz5 = document.querySelector("#naz5");
const naz6 = document.querySelector("#naz6");
const naz7 = document.querySelector("#naz7");
const naz8 = document.querySelector("#naz8");
const naz9 = document.querySelector("#naz9");
const naz10 = document.querySelector("#naz10");

var acertouNaz = 0;

btnNazismo.addEventListener("click", () => {
  if (naz1.checked) {
    acertouNaz += 1;
  }

  if (naz2.checked) {
    acertouNaz += 1;
  }

  if (naz3.checked) {
    acertouNaz += 1;
  }

  if (naz4.checked) {
    acertouNaz += 1;
  }

  if (naz5.checked) {
    acertouNaz += 1;
  }

  if (naz6.checked) {
    acertouNaz += 1;
  }

  if (naz7.checked) {
    acertouNaz += 1;
  }
  if (naz8.checked) {
    acertouNaz += 1;
  }
  if (naz9.checked) {
    acertouNaz += 1;
  }
  if (naz10.checked) {
    acertouNaz += 1;
  }

  if (acertouNaz >= 6) {
    alert("Parabens!! Você ganhou o seu brinde.");
  } else {
    alert("Não foi dessa vez! :(");
  }

  acertouNaz = 0;
});
/*Fim coisas do nazismo*/

/*Inicio Questões certas do racismo*/
const rac1 = document.querySelector("#rac1");
const rac2 = document.querySelector("#rac2");
const rac3 = document.querySelector("#rac3");
const rac4 = document.querySelector("#rac4");
const rac5 = document.querySelector("#rac5");
const rac6 = document.querySelector("#rac6");
const rac7 = document.querySelector("#rac7");
const rac8 = document.querySelector("#rac8");
const rac9 = document.querySelector("#rac9");
const rac10 = document.querySelector("#rac10");

var acertouRac = 0;

btnRacismo.addEventListener("click", () => {
  if (rac1.checked) {
    acertouRac += 1;
  }

  if (rac2.checked) {
    acertouRac += 1;
  }

  if (rac3.checked) {
    acertouRac += 1;
  }

  if (rac4.checked) {
    acertouRac += 1;
  }

  if (rac5.checked) {
    acertouRac += 1;
  }

  if (rac6.checked) {
    acertouRac += 1;
  }

  if (rac7.checked) {
    acertouRac += 1;
  }
  if (rac8.checked) {
    acertouRac += 1;
  }
  if (rac9.checked) {
    acertouRac += 1;
  }
  if (rac10.checked) {
    acertouRac += 1;
  }

  if (acertouRac >= 6) {
    alert("Parabens!! Você ganhou o seu brinde.");
  } else {
    alert("Não foi dessa vez! :(");
  }

  acertouRac = 0;
});

// Inicio das questões de Especismo

const esp1 = document.querySelector("#esp1");
const esp2 = document.querySelector("#esp2");
const esp3 = document.querySelector("#esp3");
const esp4 = document.querySelector("#esp4");
const esp5 = document.querySelector("#esp5");
const esp6 = document.querySelector("#esp6");
const esp7 = document.querySelector("#esp7");
const esp8 = document.querySelector("#esp8");
const esp9 = document.querySelector("#esp9");
const esp10 = document.querySelector("#esp10");

var acertouEsp = 0;

btnEspecismo.addEventListener("click", () => {
  if (esp1.checked) {
    acertouEsp += 1;
  }

  if (esp2.checked) {
    acertouEsp += 1;
  }

  if (esp3.checked) {
    acertouEsp += 1;
  }

  if (esp4.checked) {
    acertouEsp += 1;
  }

  if (esp5.checked) {
    acertouEsp += 1;
  }

  if (esp6.checked) {
    acertouEsp += 1;
  }

  if (esp7.checked) {
    acertouEsp += 1;
  }
  if (esp8.checked) {
    acertouEsp += 1;
  }
  if (esp9.checked) {
    acertouEsp += 1;
  }
  if (esp10.checked) {
    acertouEsp += 1;
  }

  if (acertouEsp >= 6) {
    alert("Parabens!! Você ganhou o seu brinde.");
  } else {
    alert("Não foi dessa vez! :(");
  }

  acertouEsp = 0;
});

//Incio das questões de Xenofobia
const xen1 = document.querySelector("#xen1");
const xen2 = document.querySelector("#xen2");
const xen3 = document.querySelector("#xen3");
const xen4 = document.querySelector("#xen4");
const xen5 = document.querySelector("#xen5");
const xen6 = document.querySelector("#xen6");
const xen7 = document.querySelector("#xen7");
const xen8 = document.querySelector("#xen8");
const xen9 = document.querySelector("#xen9");
const xen10 = document.querySelector("#xen10");

var acertouXen = 0;

btnXenofobia.addEventListener("click", () => {
  if (xen1.checked) {
    acertouXen += 1;
  }

  if (xen2.checked) {
    acertouXen += 1;
  }

  if (xen3.checked) {
    acertouXen += 1;
  }

  if (xen4.checked) {
    acertouXen += 1;
  }

  if (xen5.checked) {
    acertouXen += 1;
  }

  if (xen6.checked) {
    acertouXen += 1;
  }

  if (xen7.checked) {
    acertouXen += 1;
  }
  if (xen8.checked) {
    acertouXen += 1;
  }
  if (xen9.checked) {
    acertouXen += 1;
  }
  if (xen10.checked) {
    acertouXen += 1;
  }

  if (acertouXen >= 6) {
    alert("Parabens!! Você ganhou o seu brinde.");
  } else {
    alert("Não foi dessa vez! :(");
  }

  acertouXen = 0;
});

// Inicio das perguntas de intolerancia religiosa
const int1 = document.querySelector("#int1");
const int2 = document.querySelector("#int2");
const int3 = document.querySelector("#int3");
const int4 = document.querySelector("#int4");
const int5 = document.querySelector("#int5");
const int6 = document.querySelector("#int6");
const int7 = document.querySelector("#int7");
const int8 = document.querySelector("#int8");
const int9 = document.querySelector("#int9");
const int10 = document.querySelector("#int10");

var acertouInt = 0;

btnIntolerancia.addEventListener("click", () => {
  if (int1.checked) {
    acertouInt += 1;
  }

  if (int2.checked) {
    acertouInt += 1;
  }

  if (int3.checked) {
    acertouInt += 1;
  }

  if (int4.checked) {
    acertouInt += 1;
  }

  if (int5.checked) {
    acertouInt += 1;
  }

  if (int6.checked) {
    acertouInt += 1;
  }

  if (int7.checked) {
    acertouInt += 1;
  }
  if (int8.checked) {
    acertouInt += 1;
  }
  if (int9.checked) {
    acertouInt += 1;
  }
  if (int10.checked) {
    acertouInt += 1;
  }

  if (acertouInt >= 6) {
    alert("Parabens!! Você ganhou o seu brinde.");
  } else {
    alert("Não foi dessa vez! :(");
  }

  acertouInt = 0;
});

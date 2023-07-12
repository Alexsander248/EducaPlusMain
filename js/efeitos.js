ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".a", {
  delay: 200,
  origin: "left",
  duration: 2000,
});

ScrollReveal().reveal(".e", {
  delay: 200,
  origin: "right",
  duration: 2000,
});

ScrollReveal().reveal(".b, .c, .d", {
  delay: 200,
  origin: "top",
  duration: 3000,
  interval: 200,
});

ScrollReveal().reveal(".img-sobre", {
  delay: 200,
  origin: "right",
  duration: 1500,
});

ScrollReveal().reveal(".sobre-texto", {
  delay: 200,
  origin: "left",
  duration: 1500,
});

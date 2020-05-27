const currencyElement_1 = document.getElementById("currency_one");
const currencyElement_2 = document.getElementById("currency_two");
const amountElement_1 = document.getElementById("amount_one");
const amountElement_2 = document.getElementById("amount_two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch exhange rate and update the DOM.
function calculate() {
  const currencyOne = currencyElement_1.value;
  const currencyTwo = currencyElement_2.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/1335f9ecee82321b9414c08b/latest/${currencyOne}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo];
      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amountElement_2.value = (amountElement_1.value * rate).toFixed(2);
    });
}

//swap exchange rate.
function swapFunc() {
  const temp = currencyElement_1.value;
  currencyElement_1.value = currencyElement_2.value;
  currencyElement_2.value = temp;
  calculate();
}

//event listeners
currencyElement_1.addEventListener("change", calculate);
amountElement_1.addEventListener("input", calculate);
currencyElement_2.addEventListener("change", calculate);
amountElement_2.addEventListener("input", calculate);
swap.addEventListener("click", swapFunc);

calculate();

// const currencyEl_one = document.getElementById("currency_one");
// const amountEl_one = document.getElementById("amount_one");
// const currencyEl_two = document.getElementById("currency_two");
// const amountEl_two = document.getElementById("amount_two");

// const rateEl = document.getElementById("rate");
// const swap = document.getElementById("swap");

// // Fetch exchange rates and update the DOM
// function caclulate() {
//   const currency_one = currencyEl_one.value;
//   const currency_two = currencyEl_two.value;

//   fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       const rate = data.rates[currency_two];

//       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

//       amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//     });
// }

// // Event listeners
// currencyEl_one.addEventListener("change", caclulate);
// amountEl_one.addEventListener("input", caclulate);
// currencyEl_two.addEventListener("change", caclulate);
// amountEl_two.addEventListener("input", caclulate);

// swap.addEventListener("click", () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   caclulate();
// });

// caclulate();

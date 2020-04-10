const currencyEone = document.getElementById("currency-one");
const amountEone = document.getElementById("amount-one");
const currencyEtwo = document.getElementById("currency-two");
const amountEtwo = document.getElementById("amount-two");

const rateE = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch exchange rate and update dom
function calculate() {
  const currency_one = currencyEone.value;
  const currency_two = currencyEtwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateE.innerHTML = `1 ${currency_one}=${rate} ${currency_two}`;
      amountEtwo.value = (amountEone.value * rate).toFixed(2);
    });
}

//event listeners
currencyEone.addEventListener("change", calculate);
amountEone.addEventListener("input", calculate);
currencyEtwo.addEventListener("change", calculate);
amountEtwo.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEone.value;
  currencyEone.value = currencyEtwo.value;
  currencyEtwo.value = temp;
  calculate();
});

// ============ FETCH API ============
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// ============ FETCH DOCUMENT SELECTOR ============
const dropDownSelect = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const exchangeIcon = document.querySelector(".exchange-icon");

// ============ LOOP FOR DROPDOWN COUNTRY CURRENCY ============
// for(code in countryList){
//     console.log(code, countryList[code])
// }

for (let select of dropDownSelect) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// ============ USER AMOUNT INPUT ============
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  //   console.log(amountValue);
  if (amountValue < 1 || isNaN(amountValue)) {
    amountValue = 1;
    amount.value = "1";
  }

  // GET CURRENCY RATE
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);

  let data = await response.json();

  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

  let finalAmount = (amountValue * rate).toFixed(2);

  msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

  console.log(data);
};

// ============ CHANGE THE FLAG ============
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  console.log(element);
};

// ============ GET CURRENCY EXCHANGE RATE ============
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// CHANGE EXCHANGE COUNTRY/CURRENCY
exchangeIcon.addEventListener("click", () => {
  // SWAP CURRENCY VALUES
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;

  // UPDATE FLAG
  updateFlag(fromCurr);
  updateFlag(toCurr);

  // UPDATE EXCHANGE RATE
  updateExchangeRate();
});

window.addEventListener("load", async () => {
  await updateExchangeRate();
});

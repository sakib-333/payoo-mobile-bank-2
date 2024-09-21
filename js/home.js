if (localStorage.getItem("isUser") !== "true") {
  window.location.href = "../index.html";
}


document.getElementById("btn-add-money").addEventListener("click", () => {
  showSingleForm("add-money-div");
});

document.getElementById("btn-cash-out").addEventListener("click", () => {
  showSingleForm("cash-out-div");
});

document.getElementById("btn-send-money").addEventListener("click", () => {
  showSingleForm("send-money-div");
});

document.getElementById("add-money-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = stringToNumber(getInputFieldValue("add-money-amount-field"));
  const pin = getInputFieldValue("add-money-pin-code-field");
  const balance = stringToNumber(
    document.getElementById("balance-field").innerText
  );

  performUserOperation("add-money", { amount, pin, balance });
});

document.getElementById("cash-out-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = stringToNumber(getInputFieldValue("cash-out-amount-field"));
  const pin = getInputFieldValue("cash-out-pin-code-field");
  const balance = stringToNumber(
    document.getElementById("balance-field").innerText
  );

  performUserOperation("cash-out", { amount, pin, balance });
});

document.getElementById("send-money-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const phone = stringToNumber(
    getInputFieldValue("send-money-receiver-number-field")
  );
  const amount = stringToNumber(getInputFieldValue("send-money-amount-field"));
  const pin = getInputFieldValue("send-money-pin-code-field");
  const balance = stringToNumber(
    document.getElementById("balance-field").innerText
  );

  performUserOperation("send-money", { phone, amount, pin, balance });
});

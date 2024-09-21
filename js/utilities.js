function getInputFieldValue(id) {
  return document.getElementById(id).value;
}

const transactionStatusDiv = document.getElementById("transaction-status-div");

function showSingleForm(id) {
  document.getElementById("add-money-div").classList.add("hidden");
  document.getElementById("cash-out-div").classList.add("hidden");
  document.getElementById("send-money-div").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

function stringToNumber(str) {
  return parseFloat(str);
}

function restoreInputField(id) {
  document.getElementById(id).value = "";
}

function getTransactionStatus(amount, operation) {
  const p = document.createElement("p");
  p.innerText = `${amount} tk ${operation}`;
  return p;
}

function performUserOperation(operation, { amount, pin, balance, phone }) {
  if (operation === "add-money") {
    if (pin === "1234") {
      document.getElementById("balance-field").innerText = `${
        amount + balance
      }`;

      transactionStatusDiv.appendChild(getTransactionStatus(amount, "added"));
    } else {
      window.alert("Wrong password");
    }

    restoreInputField("add-money-amount-field");
    restoreInputField("add-money-pin-code-field");
  } else if (operation === "cash-out") {
    if (pin === "1234") {
      document.getElementById("balance-field").innerText = `${
        balance - amount
      }`;
      transactionStatusDiv.appendChild(
        getTransactionStatus(amount, "deducted")
      );
    } else {
      window.alert("Wrong password");
    }

    restoreInputField("cash-out-amount-field");
    restoreInputField("cash-out-pin-code-field");
  } else if (operation === "send-money") {
    if (pin === "1234") {
      document.getElementById("balance-field").innerText = `${
        balance - amount
      }`;
      transactionStatusDiv.appendChild(getTransactionStatus(amount, "sent"));
    } else {
      window.alert("Wrong password");
    }

    restoreInputField("send-money-receiver-number-field");
    restoreInputField("send-money-amount-field");
    restoreInputField("send-money-pin-code-field");
  }
}

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const phoneNumber = getInputFieldValue("login-phone-number-field");
  const pinCode = getInputFieldValue("login-pin-code-field");

  if (phoneNumber === "01955207333" && pinCode === "1234") {
    localStorage.setItem("isUser", true);
    window.location.href = "./pages/home.html";
  } else {
    window.alert("Phone number does not match with pin code.");
  }
});

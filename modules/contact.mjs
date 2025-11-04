export function printContactMeView() {
  root.textContent = "";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Kontakt";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const facebookBtn = document.createElement("a");
  facebookBtn.href = "https://www.facebook.com/share/1EmSteT7kD/";
  facebookBtn.textContent = "Facebook";
  facebookBtn.target = "_blank";
  facebookBtn.className = "contact-btn facebook-btn";

  const emailBtn = document.createElement("a");
  emailBtn.href = "mailto:annie.fw@hotmail.com";
  emailBtn.textContent = "Mejl";
  emailBtn.className = "contact-btn email-btn";

  buttonContainer.append(facebookBtn, emailBtn);

  root.append(contactTitle, buttonContainer);
}

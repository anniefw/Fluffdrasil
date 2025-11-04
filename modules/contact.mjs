export function printContactMeView() {
  root.textContent = "";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Kontakt";

  // Skapa container för knappar
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  // Facebook-knapp
  const facebookBtn = document.createElement("a");
  facebookBtn.href = "https://www.facebook.com/share/1EmSteT7kD/"; // Byt ut mot din FB-länk
  facebookBtn.textContent = "Facebook";
  facebookBtn.target = "_blank";
  facebookBtn.className = "contact-btn facebook-btn";

  // E-post-knapp
  const emailBtn = document.createElement("a");
  emailBtn.href = "mailto:annie.fw@hotmail.com"; // Byt ut mot din e-post
  emailBtn.textContent = "Mejl";
  emailBtn.className = "contact-btn email-btn";

  // Lägg till knappar i containern
  buttonContainer.append(facebookBtn, emailBtn);

  // Lägg till allt i root
  root.append(contactTitle, buttonContainer);
}

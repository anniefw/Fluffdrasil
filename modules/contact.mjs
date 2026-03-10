export function printContactMeView() {
  root.textContent = "";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Kontakt";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const facebookBtn = document.createElement("a");
  facebookBtn.href = "https://www.facebook.com/profile.php/?id=61583218956154";
  facebookBtn.textContent = "Facebook";
  facebookBtn.target = "_blank";
  facebookBtn.className = "contact-btn facebook-btn";

  const emailBtn = document.createElement("a");
  emailBtn.href = "mailto:annie.fw@hotmail.com";
  emailBtn.textContent = "Mejl";
  emailBtn.className = "contact-btn email-btn";

  const instagramBtn = document.createElement("a");
  instagramBtn.href = "https://www.instagram.com/fluffdrasil/";
  instagramBtn.textContent = "Instagram";
  instagramBtn.target = "_blank";
  instagramBtn.className = "contact-btn instagram-btn";

  buttonContainer.append(facebookBtn, emailBtn, instagramBtn);

  root.append(contactTitle, buttonContainer);
}

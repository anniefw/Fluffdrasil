const root = document.getElementById("root");
const returnBtn = document.createElement("button");
returnBtn.textContent = "Tillbaka";

export function printMyCats() {
  root.textContent = "";
  const myCatsTitle = document.createElement("h2");
  myCatsTitle.textContent = "Mina katter";
  const FemalesText = document.createElement("h3");
  FemalesText.innerHTML = "Honor";
  const loaBtn = document.createElement("button");
  loaBtn.textContent = "Info om avelshona: Loa";
  const loaImg = document.createElement("img");
  loaImg.src = "Img/Loa_2.jpg";
  loaImg.alt = "Avelshona Loa";
  loaImg.classList.add("cat-image");

  const MalesText = document.createElement("h3");
  MalesText.innerHTML = "Hanar";
  const askeBtn = document.createElement("button");
  const askeImg = document.createElement("img");
  askeImg.src = "Img/testAske.webp";
  askeImg.alt = "Avelshane Aske";
  askeImg.classList.add("cat-image");
  askeBtn.textContent = "Info om avelshane: Aske";

  loaBtn.addEventListener("click", printLoa);
  askeBtn.addEventListener("click", printAske);

  root.append(
    myCatsTitle,
    FemalesText,
    loaImg,
    loaBtn,
    MalesText,
    askeImg,
    askeBtn,
  );
}

function printLoa() {
  root.textContent = "";
  const loaTitle = document.createElement("h2");
  loaTitle.textContent = "Loa (Gårvikstassens Marianne)";
  const loaText = document.createElement("p");
  loaText.innerHTML =
    "Inköpt från Gårvikstassens uppfödning, född 2023-09-21. <br> Färg: Svartsköldpaddsilvertabby-vit, MCO fs 09 22.<br> Personlighet: Söker alltid ögonkontakt och kvittrar så fort man pratar med henne! Vill ibland sova som en liten boll under armen på nätterna. Tycker dammsugare är djävulens påfund.";
  const loaImage = document.createElement("img");
  loaImage.src = "Img/testLoa.jpg";
  loaImage.alt = "Maine Coon female";

  const loa2Image = document.createElement("img");
  loa2Image.src = "Img/Loa_2.jpg";
  loa2Image.alt = "Maine Coon female";

  const loa3Image = document.createElement("img");
  loa3Image.src = "Img/Loa_3.jpg";
  loa3Image.alt = "Maine Coon female";

  const heritagelink = document.createElement("a");
  heritagelink.href = "https://findus.sverak.se/Stambok/Visa/575123";
  heritagelink.textContent = "Loas stamtavla";
  heritagelink.target = "_blank";
  const health = document.createElement("h2");
  health.textContent = "Hälsoinformation för Loa";
  const healthText = document.createElement("p");
  healthText.innerHTML =
    "HD: sker i mars 2026.<br> DNA: sker i mars 2026.<br> HCM: inväntar tidsbok.";

  root.append(
    loaTitle,
    loaText,
    loa3Image,
    heritagelink,
    health,
    healthText,
    loa2Image,
    loaImage,
    returnBtn,
  );
}

function printAske() {
  root.textContent = "";
  const askeTitle = document.createElement("h2");
  askeTitle.textContent = "Aske (Linnsan's Harry)";
  const askeText = document.createElement("p");
  askeText.innerHTML =
    "Inköpt från Linnsan's uppfödning, född 2024-09-11. <br> Färg: Svartsmoke, MCO ns <br> Personlighet: Helt otroligt kelig! Kommer i stort sett varje natt och vill gosa in huvudet i nacken när man sover. Så fina tofsar, och helt enorm svans. Ser tuff ut, men mjauar som en liten, liten bebis.";
  const askeImage = document.createElement("img");
  askeImage.src = "Img/testAske.webp";
  askeImage.alt = "Maine Coon male";
  const aske3Image = document.createElement("img");
  aske3Image.src = "Img/Aske_3.jpg";
  aske3Image.alt = "Maine Coon male";
  const aske2Image = document.createElement("img");
  aske2Image.src = "Img/Aske_2.jpg";
  askeImage.alt = "Maine Coon male";
  const heritagelink = document.createElement("a");
  heritagelink.href = "https://findus.sverak.se/Stambok/Visa/571322";
  heritagelink.textContent = "Askes stamtavla";
  heritagelink.target = "_blank";
  const health = document.createElement("h2");
  health.textContent = "Hälsoinformation för Aske";
  const healthText = document.createElement("p");
  healthText.innerHTML =
    "HD: sker i mars 2026.<br> DNA: sker i mars 2026.<br> HCM: inväntar tidsbok.";

  root.append(
    askeTitle,
    askeText,
    askeImage,
    heritagelink,
    health,
    healthText,
    aske3Image,
    aske2Image,
    returnBtn,
  );
}

returnBtn.addEventListener("click", printMyCats);

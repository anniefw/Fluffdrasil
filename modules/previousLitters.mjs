const root = document.getElementById("root");

export function printPreviousLitters() {
  root.textContent = "";
  const previousLittersTitle = document.createElement("h2");
  previousLittersTitle.textContent = "Tidigare kullar";
  const ABtn = document.createElement("button");
  ABtn.textContent = "A-kullen, född 2025-12-01";

  ABtn.addEventListener("click", printAlitter);

  root.append(previousLittersTitle, ABtn);

  function printAlitter() {
    root.textContent = "";
    const ATitle = document.createElement("h2");
    ATitle.textContent = "A-kullen (Aske x Loa), född 2025-12-01";
    const AText = document.createElement("p");
    AText.textContent =
      "Fina A-kullen föddes den 1 december 2025, med sex underbara kattungar: tre hanar och tre honor. Namnen för A-kullen är inspirerad av Aesir, asagudarna.";

    const AText1 = document.createElement("p");
    AText1.textContent = "Hane 1: Tor, rödtabby, MCO d 22";
    const AImage1 = document.createElement("img");
    AImage1.src = "/img/Tor_13.jpg";
    AImage1.alt = "A-kullen, född 2025-12-01";

    const AText2 = document.createElement("p");
    AText2.textContent = "Hane 2: Vale, rödsilver-tabby-vit, MCO ds 22 09";
    const AImage2 = document.createElement("img");
    AImage2.src = "/img/Vale_13.jpg";
    AImage2.alt = "A-kullen, född 2025-12-01";

    const AText3 = document.createElement("p");
    AText3.textContent = "Hane 3: Loke, svartsilver-tabby, MCO ns 22";
    const AImage3 = document.createElement("img");
    AImage3.src = "/img/Loke_13.jpg";
    AImage3.alt = "A-kullen, född 2025-12-01";

    const AText4 = document.createElement("p");
    AText4.textContent =
      "Hona 1: Idun, svartsköldpaddssilver-tabby-vit, MCO fs 09 22";
    const AImage4 = document.createElement("img");
    AImage4.src = "/img/Idun_13.jpg";
    AImage4.alt = "A-kullen, född 2025-12-01";

    const AText5 = document.createElement("p");
    AText5.textContent =
      "Hona 2: Freja, svartsköldpaddssilver-tabby-vit, MCO fs 09 22";
    const AImage5 = document.createElement("img");
    AImage5.src = "/img/Freja_13.jpg";
    AImage5.alt = "A-kullen, född 2025-12-01";

    const AText6 = document.createElement("p");
    AText6.textContent = "Hona 3: Sif, svart, MCO n";
    const AImage6 = document.createElement("img");
    AImage6.src = "/img/Sif_13.jpg";
    AImage6.alt = "A-kullen, född 2025-12-01";

    const AImage_11 = document.createElement("img");
    AImage_11.src = "/img/Samlingsfoto_Akullen.jpg";
    AImage_11.alt = "A-kullen, född 2025-12-01";

    const AImage = document.createElement("img");
    AImage.src = "/img/A-kullen.jpg";
    AImage.alt = "A-kullen, född 2025-12-01";

    const heritagelink = document.createElement("a");
    heritagelink.href = "https://findus.sverak.se/Stambok/Avkommor/575123";
    heritagelink.textContent = "A-kullens stamtavla";
    heritagelink.target = "_blank";

    const returnBtn = document.createElement("button");
    returnBtn.textContent = "Tillbaka till tidigare kullar";
    returnBtn.addEventListener("click", printPreviousLitters);

    root.append(
      ATitle,
      AText,
      AImage_11,
      AImage,
      heritagelink,
      AText1,
      AImage1,
      AText2,
      AImage2,
      AText3,
      AImage3,
      AText4,
      AImage4,
      AText5,
      AImage5,
      AText6,
      AImage6,
      returnBtn,
    );
  }
}

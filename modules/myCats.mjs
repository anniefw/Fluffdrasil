const root = document.getElementById("root");

export function printMyCats() {
  root.textContent = "";
  const myCatsTitle = document.createElement("h2");
  myCatsTitle.textContent = "Mina katter";
  const loaBtn = document.createElement("button");
  loaBtn.textContent = "Loa";
  const askeBtn = document.createElement("button");
  askeBtn.textContent = "Aske";

  loaBtn.addEventListener("click", printLoa);
  askeBtn.addEventListener("click", printAske);

  root.append(myCatsTitle, loaBtn, askeBtn);

  function printLoa() {
    root.textContent = "";
    const loaTitle = document.createElement("h2");
    loaTitle.textContent = "Loa";
    const loaText = document.createElement("p");
    loaText.textContent =
      "2 år gammal hona med stamtavla från Gårvikstassens uppfödning. Svartsköldpaddsilvertabbyy-vit, MCO fs 09 22.";
    const loaImage = document.createElement("img");
    loaImage.src = "testLoa.jpg";
    loaImage.alt = "Maine Coon female";

    root.append(loaTitle, loaText, loaImage, askeBtn);
  }

  function printAske() {
    root.textContent = "";
    const askeTitle = document.createElement("h2");
    askeTitle.textContent = "Aske";
    const askeText = document.createElement("p");
    askeText.textContent =
      "1 år gammal hane med stamtavla från Linnsan's uppfödning. Svartsmoke, MCO ns";
    const askeImage = document.createElement("img");
    askeImage.src = "testAske.webp";
    askeImage.alt = "Maine Coon male";

    root.append(askeTitle, askeText, askeImage, loaBtn);
  }
}

const root = document.getElementById("root");

export function printKittens() {
  root.textContent = "";
  const kittensTitle = document.createElement("h1");
  kittensTitle.textContent = "A-kullen flyttade i mars 2026 till sina nya hem!";
  const kittensText = document.createElement("p");
  kittensText.textContent = "Planer finns för ny kull hösten 2026.";
  const kittenImg = document.createElement("img");
  kittenImg.src = "Img/Samlingsfoto_Akullen.jpg";
  const kittensText2 = document.createElement("p");
  kittensText2.textContent = "A-kullen";

  root.append(kittensTitle, kittensText, kittenImg, kittensText2);
}

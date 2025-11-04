const root = document.getElementById("root");

export function printKittens() {
  root.textContent = "";
  const kittensTitle = document.createElement("h1");
  kittensTitle.textContent = "Kattungar väntas 30e NOVEMBER 2025";
  const kittensText = document.createElement("p");
  kittensText.textContent =
    "Kattungar födda av hona Loa (svartsköldpaddsilvertabbyy-vit, MCO fs 09 22) och hane Aske (svartsmoke, MCO ns).";
  const kittenImg = document.createElement("img");
  kittenImg.src = "kittenTest.jpg";
  const kittensText2 = document.createElement("p");
  kittensText2.textContent = "Aske som kattunge";

  root.append(kittensTitle, kittensText, kittenImg, kittensText2);
}

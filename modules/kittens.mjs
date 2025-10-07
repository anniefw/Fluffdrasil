const root = document.getElementById("root");

export function printKittens (){
    root.textContent = "";
    const kittensTitle = document.createElement("h1");
    kittensTitle.textContent = "Kattungar väntas DECEMBER 2025";
    const kittensText = document.createElement("p");
    kittensText.textContent = "Kattungar födda av hona Loa (silversköddspadd) och hane Aske (svartsmoke)";
    const kittenImg = document.createElement("img");
    kittenImg.src = "kittenTest.webp";

    root.append(kittensTitle, kittensText, kittenImg);
}
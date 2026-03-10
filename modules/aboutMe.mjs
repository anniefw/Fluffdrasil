const root = document.getElementById("root");

export function printAboutMe() {
  root.textContent = "";
  const aboutMeTitle = document.createElement("h1");
  aboutMeTitle.textContent = "Välkommen till Fluffdrasil:";
  const aboutMeTitle2 = document.createElement("h2");
  aboutMeTitle2.textContent = "Maine Coon-uppfödning i södra Småland";
  const aboutMeText = document.createElement("p");
  aboutMeText.textContent =
    "Jag heter Annie och driver Fluffdrasil, en småskalig uppfödning av Maine Coons på vår gård i hjärtat av södra Småland. Katter har alltid varit en stor del av mitt liv, och det är en glädje att få dela min vardag med dessa fantastiska varelser.";
  const aboutMeText2 = document.createElement("p");
  aboutMeText2.textContent =
    "Som uppfödare har jag genomgått SVERAKs kurs Uppfödarettan och erhållit godkänt diplom, vilket ger mig både teoretisk kunskap och praktiska färdigheter för att kunna ta hand om mina katter på bästa sätt.";
  const aboutMeText3 = document.createElement("p");
  aboutMeText3.textContent =
    "Alla mina katter är registrerade med stamtavla, vaccinerade och får omsorg och kärlek varje dag.";
  const aboutMeText4 = document.createElement("p");
  aboutMeText4.textContent =
    "Jag lägger stor vikt vid både deras hälsa och socialisering, så att varje kattunge får en trygg start i livet innan den flyttar till sitt nya hem.";
  const aboutMeText5 = document.createElement("h2");
  aboutMeText5.textContent =
    "Hos Fluffdrasil strävar jag efter att föda upp friska, sociala och välmående Maine Coons som kan bli älskade och keliga medlemmar i sin nya familj!";
  root.append(
    aboutMeTitle,
    aboutMeTitle2,
    aboutMeText,
    aboutMeText2,
    aboutMeText3,
    aboutMeText4,
    aboutMeText5,
  );
}

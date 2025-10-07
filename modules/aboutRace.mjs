export function printAboutRace () {
    root.textContent = "";
    const aboutRaceTitle = document.createElement("h2");
    aboutRaceTitle.textContent = "Om Maine Coon:";
    const aboutRaceText = document.createElement("p");
    aboutRaceText.textContent = "Maine coonkatten har sitt ursprung i den nordamerikanska delstaten Maine." + 
    " Det är en nyfiken och lättlärd ras med ett stabilt temperament. " +
    " En fullvuxen hane väger mellan sex och åtta kilo, och en hona väger mellan fyra och sex kilo. "
    const sverakLink = document.createElement("a");
    sverakLink.href = "https://www.sverak.se/for-kattagare/raskatt/kattraser/maine-coon/";
    sverakLink.textContent = "Sveraks sida om Maine Coon";

    root.append(aboutRaceTitle, aboutRaceText, sverakLink);
}
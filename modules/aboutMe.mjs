const root = document.getElementById("root");

export function printAboutMe(){
    root.textContent = "";
    const aboutMeTitle = document.createElement("h2");
    aboutMeTitle.textContent = "Om mig";
    const aboutMeText = document.createElement("p");
    aboutMeText.textContent = "Fluffdrasil är en småskalig uppfödare av Maine Coons på en gård i södra Småland." +
     " Jag som driver uppfödningen heter Annie och har haft katter i hela mitt liv."
    const certifications = document.createElement("p");
    certifications.textContent = " Jag har gått SVERAKS kurs Uppfödarettan med godkänt diplom. Mina katter har stamtavla, är vaccinerade och väl omhändertagna."
    const health = document.createElement("p");
    health.textContent = " Mina katter har stamtavla, är vaccinerade och väl omhändertagna."

     root.append(aboutMeTitle, aboutMeText, certifications, health);
}
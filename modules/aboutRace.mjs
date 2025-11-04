export function printAboutRace() {
  root.textContent = "";

  const aboutRaceTitle = document.createElement("h2");
  aboutRaceTitle.textContent = "Om Maine Coon:";
  root.appendChild(aboutRaceTitle);

  const paragraphs = [
    "Maine Coon-katten har sitt ursprung i den nordöstra delen av USA, i delstaten Maine, där den utvecklades som en robust arbetande katt på gårdar och i städer. Rasen godkändes av FIFe via SVERAK i början av 1980-talet.",

    "Maine Coon är en stor och kraftfull katt med muskulös kropp, bred bröstkorg och lång, yvig svans. Huvudet är mellanstort med höga kindben och ett fyrkantigt nosparti. Öronen är stora och ofta dekorerade med päls­tofsar. Pälsen är halvlång, silkesaktig och tät – kortare på huvud och skuldror, längre på rygg, sidor och bakben. Fullvuxna hanar väger mellan 6–8 kg och honor 4–6 kg. Det kan ta upp till 3–5 år innan katten når full fysisk mognad.",

    "Maine Coon är känd för sitt stabila, vänliga och sociala temperament. Den är nyfiken, lättlärd och tillgiven, och trivs i familjemiljö. Många Maine Coons visar också ett intresse för vatten.",

    "Rasen finns i många färgvarianter och mönster, inklusive olika grader av vitt och klassiska tabby-, tiger- och spottedmönster.",

    "Maine Coon passar särskilt bra för familjer som vill ha en trygg, social och aktiv katt. Rasen kräver plats och långsiktigt engagemang, men belönar sina ägare med en vänlig och nyfiken följeslagare.",
  ];

  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    root.appendChild(p);
  });

  const sverakLink = document.createElement("a");
  sverakLink.href =
    "https://www.sverak.se/for-kattagare/raskatt/kattraser/maine-coon/";
  sverakLink.textContent = "Sveraks sida om Maine Coon";
  sverakLink.target = "_blank";

  root.appendChild(sverakLink);
}

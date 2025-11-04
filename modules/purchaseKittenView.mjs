const root = document.getElementById("root");

export function printKittenPurchaseView() {
  root.textContent = "";
  const container = document.createElement("div");
  const sections = [
    {
      title: "Intresse och kontakt",
      content: `Om du är intresserad av att köpa en kattunge eller har frågor om våra katter, börja med att läsa igenom denna information. Skicka sedan ett mail och berätta vad du söker: hona eller hane, färgönskemål, samt om katten ska vara sällskap eller avel. Berätta även om ditt hem, eventuella andra djur och hur katten kommer att få vistas i vardagen.\n\nViktigt: Jag säljer endast katter som får möjlighet till utomhusvistelse.`,
    },
    {
      title: "Följande ingår vid köp av kattunge från Fluffdrail",
      content: `- Kattungarna levereras/hämtas vid 12–14 veckors ålder.
- Köpeavtal.
- Registrerad med stamtavla i SVERAK.
- Vaccinerad två gånger mot kattsnuva och kattpest (8 och 12 veckor).
- Veterinärbesiktigad med intyg som är max sju dagar gammalt.
- Dolda fel-försäkring.
- Försäkrad hos mig fram till leverans.
- ID-märkt med chip i nacken.
- Rumsren.
- Du får med stamtavla, övriga dokument, mjukdjur, fjädervippa, lite av kattungens mat och en filt med doft av mamma och syskon.`,
    },
    {
      title: "Kostnad",
      content: `- Tingningsavgift: 3 000 kr (ej återbetalningsbar).
- Resterande belopp betalas vid hämtning.
- Pris sällskapskatt: 14 000 kr.
- Avelskatt säljs endast till registrerade uppfödare.`,
    },
    {
      title: "Kölista och besök",
      content: `- Du kan ställa dig på intresselistan för kommande kullar, men kattungar kan inte tingas förrän de är 5–6 veckor gamla och går att träffa.
- För personliga besök prioriteras seriösa köpare; vid långt avstånd sker kontakt via telefon/Zoom.
- Jag vill säkerställa att kattungarna hamnar i kärleksfulla, långsiktiga hem.`,
    },
    {
      title: "Tips vid flytt till nytt hem",
      content: `- Försäkra kattungen samma dag som hämtning.
- Ta med kattväska i bilen.
- Placera kattungen i toalådan direkt vid ankomst.
- Begränsa ytor i början på stora hem för trygghet.
- Mata med blötmat morgon och kväll och låt torrfoder finnas tillgängligt.
- Introducera nytt foder gradvis.
- Låt inte händerna bli leksak – använd leksaker istället.
- Fortsätt socialiseringsträning (bad, kloklipp, hantering).
- Lek och mätta katten på kvällen för bättre nattsömn.`,
    },
    {
      title: "Kontrakt och kastrering",
      content: `- Sällskapskatter ska kastreras vid 6–9 månader.
- Kastrering är viktigt för kattens hälsa, välmående och för att undvika oönskade kullar och revirproblem.`,
    },
    {
      title: "Att tänka på innan köp",
      content: `- Katter lever 10–15 år eller mer.
- De fäller hår och behöver skötsel.
- Kostnader: mat, sand, försäkring, veterinär, vaccinationer.
- Katter bör inte lämnas ensamma för länge.
- Behöver motion, stimulans och socialisering för att må bra.
- Könsmogna katter kan markera revir och jama; kastrering förebygger detta.`,
    },
  ];

  sections.forEach((section) => {
    const h2 = document.createElement("h2");
    h2.textContent = section.title;
    container.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = section.content.replace(/\n/g, "<br>");
    container.appendChild(p);
  });

  root.appendChild(container);
}

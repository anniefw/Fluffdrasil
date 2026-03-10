const root = document.getElementById("root");

export function printKittenPurchaseView() {
  root.textContent = "";
  const container = document.createElement("div");
  const sections = [
    {
      title: "Intresse och kontakt",
      content: `Om du är intresserad av att köpa en kattunge eller har frågor om våra katter, börja med att läsa igenom denna information. Vid intresse/kontakt, berätta om dig själv och det hem du kan erbjuda en kattunge.`,
    },
    {
      title: "Följande ingår vid köp av kattunge från Fluffdrail",
      content: `- Kattungarna levereras/hämtas vid 12–14 veckors ålder.
- Köpeavtal.
- Registrerad med stamtavla i SVERAK.
- Vaccinerad två gånger enligt riktlinjer (10 och 14 veckor).
- Veterinärbesiktigad med intyg som är max sju dagar gammalt.
- Dolda fel-försäkring.
- Försäkrad hos mig fram till leverans.
- ID-märkt med chip i nacken.
- Rumsren.
- Du får med stamtavla, övriga dokument, erbjudanden, godis, lite av kattungens mat och en filt med doft av mamma och syskon.`,
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
      content: `- Du kan ställa dig på intresselistan för kommande kullar.
- För personliga besök prioriteras seriösa köpare; vid långt avstånd sker kontakt via telefon/Zoom.
- Jag vill säkerställa att kattungarna hamnar i kärleksfulla, långsiktiga hem. Jag väljer därmed själv vilka hem jag säljer till.`,
    },
    {
      title: "Tips vid flytt till nytt hem",
      content: `- Försäkra kattungen senast samma dag som hämtning.
      - Låt kattungen först få landa i ett rum i hushållet. Introducera inga andra djur i detta läget och försök ge den en lugn och trivsam miljö. 
- Tex kan du första dagen/kvällen sitta på golvet med lite godis och leksaker, medan kattungen i lugn och ro får utforska dig och rummet på egen hand.
- Låt kattlåda, mat och vatten redan stå i rummet. Du kan sätta kattungen i kattlådan ett par gånger under kvällen, för att visa tydligt vad den står. 
- Efter någon-några dagar (beroende på storlek på hushåll och andra djur) kan du introducera andra delar av hemmet och ställa låda, mat och vatten på den plats du vill ha dem.`,
    },
    {
      title: "Utfodring",
      content: `- Blötmat 2 ggr per dag (morgon/kväll)
- Låt alltid vatten stå fram, diska skålar varje till varannan dag 
- Låt alltid torrfoder stå framme, diska skål vid behov`,
    },
    {
      title: "Lek och stimulans",
      content: `- En kattunge är ett barn i en ny miljö. Att leka och gosa med din kattunge är viktigt för dess trivsel.
- Om du lägger tid på att stimulera din katt är det också mindre risk att du tex blir väckt på natten och dylikt.
- Tänk också på att bevara kattens vilostunder – stör inte kattungen om den sover, och försök gärna ge den en egen favoritplats dit den kan gå när den behöver där familjemedlemmar/andra djur inte stör. 
- Låt inte händerna bli leksak – använd leksaker istället.
`,
    },
    {
      title: "Introducera andra djur",
      content: `- Vänta minst 1 vecka innan du introducerar andra djur, så att kattungen får en trygg start i sitt nya hem.
- Börja sedan genom att ha tex ett kompostgaller eller plexiglas-skiva emellan dörrar så att djuren kan se och lukta på varandra utan risk för konflikt. 
- Efter några dagar – 1v så kan du börja släppa ihop dem korta stunder under uppsikt.  
- Fortsätt på detta sätt i ca 1v eller tills du känner dig trygg med att ha dem ihop även utan uppsikt. 
- En bra introduktion ökar chansen att de trivs på lång sikt. 
`,
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

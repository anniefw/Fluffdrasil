const root = document.getElementById("root");

export function printAboutMe() {
  root.textContent = "";
  const aboutMeTitle = document.createElement("h1");
  aboutMeTitle.textContent = "Välkommen till Fluffdrasil";
  const logo = document.createElement("img");
  logo.src = "Img/fluffdrasil_logo.png";
  logo.alt = "Fluffdrasil Logo";
  logo.classList.add("logo");

  const aboutMeTitle2 = document.createElement("h2");
  aboutMeTitle2.textContent = "Maine Coon-uppfödning i södra Småland";

  const container = document.createElement("div");
  container.classList.add("about-me-container");
  const sections = [
    {
      title: "Om Fluffdrasil",
      content: `Fluffdrasil är en småskalig uppfödning av Maine Coons på vår gård i hjärtat av södra Småland. Katter har alltid varit en stor del av mitt liv, och det är en glädje att få dela min vardag med dessa fantastiska varelser.`,
      img: "Img/Loke.jpg",
    },
    {
      title: "Familjemedlemmar först, katteri sen",
      content: `Jag säljer/köper inte av honor, utan mina katter lever i första hand som familjemedlemmar. Kattungarna föds direkt in i en trygg och kärleksfull miljö.`,
      img: "Img/Idun_1.jpg",
    },
    {
      title: "Fokus på glada och välmående katter",
      content: `Jag lägger massor med tid och energi på att leka, gosa och hantera varje enskild kattunge för att säkerställa att varje liten krabat blir så trygg som möjligt. Detta skapar förutsättningar som gör att de snabbt kan knyta an till sina nya ägare. Tidigare köpare har tex nämnt att deras kattungar redan första kvällen lägger sig nära och spinner, vilket är precis så jag vill att det ska vara.`,
      img: "Img/Vale.jpg",
    },
  ];

  // sections.forEach((section) => {
  //   const h2 = document.createElement("h2");
  //   h2.textContent = section.title;
  //   container.appendChild(h2);

  //   const p = document.createElement("p");
  //   p.innerHTML = section.content.replace(/\n/g, "<br>");
  //   container.appendChild(p);
  // });

  // root.append(aboutMeTitle, aboutMeTitle2, container, logo);

  sections.forEach((section) => {
    const h2 = document.createElement("h2");
    h2.textContent = section.title;
    container.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = section.content.replace(/\n/g, "<br>");
    container.appendChild(p);

    if (section.img) {
      const img = document.createElement("img");
      img.src = section.img;
      img.alt = section.title;
      img.classList.add("about-me-image");
      container.appendChild(img);
    }
  });
  root.append(aboutMeTitle, aboutMeTitle2, logo, container);
}

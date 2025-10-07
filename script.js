import { printAboutMe } from "./modules/aboutMe.mjs";
import { printMyCats } from "./modules/myCats.mjs";
import { printKittens } from "./modules/kittens.mjs";
import { printPlans } from "./modules/plans.mjs";
import { printAboutRace } from "./modules/aboutRace.mjs";

// const root = document.getElementById("root");
const aboutMeBtn = document.getElementById("aboutMeBtn");
const myCatsBtn = document.getElementById("myCatsBtn");
const kittensBtn = document.getElementById("kittensBtn");
const aboutRaceBtn = document.getElementById("aboutRaceBtn");

aboutMeBtn.addEventListener("click", printAboutMe);
myCatsBtn.addEventListener("click", printMyCats);
kittensBtn.addEventListener("click", printKittens);
plansBtn.addEventListener("click", printPlans);
aboutRaceBtn.addEventListener("click", printAboutRace);


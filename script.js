import { printAboutMe } from "./modules/aboutMe.mjs";
import { printMyCats } from "./modules/myCats.mjs";
import { printKittens } from "./modules/kittens.mjs";
import { printPlans } from "./modules/plans.mjs";
import { printAboutRace } from "./modules/aboutRace.mjs";
import { printKittenPurchaseView } from "./modules/purchaseKittenView.mjs";
import { printContactMeView } from "./modules/contact.mjs";

const aboutMeBtn = document.getElementById("aboutMeBtn");
const myCatsBtn = document.getElementById("myCatsBtn");
const kittensBtn = document.getElementById("kittensBtn");
const purchaseKittenBtn = document.getElementById("purchaseKittenBtn");
const aboutRaceBtn = document.getElementById("aboutRaceBtn");
const contactMeBtn = document.getElementById("contactMeBtn");

aboutMeBtn.addEventListener("click", printAboutMe);
myCatsBtn.addEventListener("click", printMyCats);
kittensBtn.addEventListener("click", printKittens);
plansBtn.addEventListener("click", printPlans);
purchaseKittenBtn.addEventListener("click", printKittenPurchaseView);
aboutRaceBtn.addEventListener("click", printAboutRace);
contactMeBtn.addEventListener("click", printContactMeView);

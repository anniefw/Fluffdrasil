export function printPlans() {
  root.textContent = "";
  const plansTitle = document.createElement("h2");
  plansTitle.textContent = "Planer för kommande kullar:";
  const plansText = document.createElement("p");
  plansText.textContent = "Kull beräknas till hösten 2026 mellan Aske och Loa.";

  root.append(plansTitle, plansText);
}

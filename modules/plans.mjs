export function printPlans() {
  root.textContent = "";
  const plansTitle = document.createElement("h2");
  plansTitle.textContent = "Planer för kommande kullar:";
  const plansText = document.createElement("p");
  plansText.textContent = "Kull beräknas till nov 2025.";

  root.append(plansTitle, plansText);
}

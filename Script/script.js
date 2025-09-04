const btn_randomizer = document.getElementById("randomize-button");
const perk1 = document.getElementById("perk1-name");
const perk2 = document.getElementById("perk2-name");
const perk3 = document.getElementById("perk3-name");
const perk4 = document.getElementById("perk4-name");
const perk1_img = document.querySelector("#perk1-img");
const perk2_img = document.querySelector("#perk2-img");
const perk3_img = document.querySelector("#perk3-img");
const perk4_img = document.querySelector("#perk4-img");

async function getRandomPerks(role) {
  const jsonPath =
    role === "Killer" ? "Source/Killer.json" : "Source/Survivor.json";
  const response = await fetch(jsonPath);
  const perks = await response.json();
  return perks;
}

btn_randomizer.onclick = async function () {
  const role = document.getElementById("role-select").value;
  const allPerks = await getRandomPerks(role);
  const perks = [];
  while (perks.length < 4) {
    const randomIndex = Math.floor(Math.random() * allPerks.length);
    const perk = allPerks[randomIndex];
    if (!perks.includes(perk)) {
      perks.push(perk);
    }
  }
  perk1_img.src = perks[0].icon;
  perk1.style.visibility = "visible";
  perk1.textContent = perks[0].name;
  perk2_img.src = perks[1].icon;
  perk2.style.visibility = "visible";
  perk2.textContent = perks[1].name;
  perk3_img.src = perks[2].icon;
  perk3.style.visibility = "visible";
  perk3.textContent = perks[2].name;
  perk4_img.src = perks[3].icon;
  perk4.style.visibility = "visible";
  perk4.textContent = perks[3].name;
};

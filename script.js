let data = {
  "Alucard": {
    role: "Fighter",
    skill: "Lifesteal tinggi & damage besar",
    kelebihan: "Kuat 1 vs 1",
    gambar: "alucard.jpg"
  },

  "Tigreal": {
    role: "Tank",
    skill: "Crowd control & tahan damage",
    kelebihan: "Melindungi tim",
    gambar: "tigreal.jpg"
  },

  "Eudora": {
    role: "Mage",
    skill: "Burst magic damage",
    kelebihan: "Kill cepat",
    gambar: "eudora.jpg"
  },

  "Gusion": {
    role: "Assassin",
    skill: "Combo cepat",
    kelebihan: "Burst tinggi",
    gambar: "gusion.jpg"
  },

  "Miya": {
    role: "Marksman",
    skill: "Attack speed tinggi",
    kelebihan: "Late game kuat",
    gambar: "miya.jpg"
  },

  "Rafaela": {
    role: "Support",
    skill: "Heal & slow musuh",
    kelebihan: "Bantu tim",
    gambar: "rafaela.jpg"
  }
};

function showHero(nama){
  let hero = data[nama];

  document.getElementById("judul").innerText = nama;
  document.getElementById("gambarHero").src = hero.gambar;

  document.getElementById("info").innerHTML = `
  <b>Role:</b> ${hero.role}<br>
  <b>Skill:</b> ${hero.skill}<br>
  <b>Kelebihan:</b> ${hero.kelebihan}
  `;

  let popup = document.getElementById("popup");
  popup.style.display = "flex";

  setTimeout(() => popup.classList.add("show"), 10);
}

function closePopup(){
  let popup = document.getElementById("popup");
  popup.classList.remove("show");

  setTimeout(() => popup.style.display = "none", 300);
}

document.getElementById("search").addEventListener("input", function(){
  let value = this.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

function filterRole(role){
  document.querySelectorAll(".card").forEach(card => {
    if(role === "all"){
      card.style.display = "block";
    } else {
      card.style.display = card.dataset.role === role ? "block" : "none";
    }
  });
}

window.addEventListener("click", function(e){
  if(e.target.id === "popup"){
    closePopup();
  }
});
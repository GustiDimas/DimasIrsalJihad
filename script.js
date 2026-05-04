const data = {
  Alucard:{role:"Fighter",skill:"Lifesteal tinggi",kelebihan:"1v1 kuat",gambar:"alucard.jpg"},
  Tigreal:{role:"Tank",skill:"CC kuat",kelebihan:"Tahan damage",gambar:"tigreal.jpg"},
  Eudora:{role:"Mage",skill:"Burst damage",kelebihan:"Kill cepat",gambar:"eudora.jpg"},
  Gusion:{role:"Assassin",skill:"Combo cepat",kelebihan:"Burst tinggi",gambar:"gusion.jpg"},
  Miya:{role:"Marksman",skill:"Attack speed",kelebihan:"Late game kuat",gambar:"miya.jpg"},
  Rafaela:{role:"Support",skill:"Heal",kelebihan:"Support tim",gambar:"rafaela.jpg"}
};

const container = document.getElementById("container");

function render(list){
  container.innerHTML = "";

  list.forEach((h,i)=>{
    container.innerHTML += `
      <div class="card" style="animation-delay:${i*0.05}s" onclick="showHero('${h}')">
        <img src="${data[h].gambar}">
        <p>${h}</p>
      </div>
    `;
  });
}

render(Object.keys(data));

function showHero(n){
  const h = data[n];

  document.getElementById("judul").innerText = n;
  document.getElementById("gambarHero").src = h.gambar;

  document.getElementById("info").innerHTML = `
    <b>Role:</b> ${h.role}<br>
    <b>Skill:</b> ${h.skill}<br>
    <b>Kelebihan:</b> ${h.kelebihan}
  `;

  document.getElementById("popup").classList.add("show");
}

function closePopup(){
  document.getElementById("popup").classList.remove("show");
}

document.getElementById("search").addEventListener("input", function(){
  const v = this.value.toLowerCase();
  render(Object.keys(data).filter(k => k.toLowerCase().includes(v)));
});

function filterRole(role){
  if(role === "all") return render(Object.keys(data));
  render(Object.keys(data).filter(k => data[k].role === role));
}

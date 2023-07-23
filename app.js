 const button = document.querySelector("button")
 const body = document.querySelector("body")
 const colors = ["black", "yellow" ,"blue","red","purple","green"]

 button.addEventListener("click", changeBackground)

 let sira= 0

 function changeBackground() {
    //   const rastgeleSayi = Math.floor(Math.random()*colors.length)
    //   console.log(rastgeleSayi)
    //   const secilenRenk = colors[rastgeleSayi]

      //body.style.backgroundColor =secilenRenk;
     if (sira==6) sira=0
     const secilenRenk = colors[sira]
     sira++;
     body.style.backgroundColor =secilenRenk;
 }


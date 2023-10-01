const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const heighy = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  // weight (kg) / [height (m)]2
  if (heighy === "" || heighy < 0 || isNaN(heighy)) {
    result.innerHTML = `Please give a valid height ${heighy}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((heighy * heighy) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    // if(r<18.6){
    //     result.innerHTML=`${r}</br> <p>you are under weight</p>`
    // }else if(18.6<r && r<24.9){
    //     result.innerHTML=`${r}</br> <p>you are Normal weight</p>`
    // }else if(r>24.9){
    //     result.innerHTML=`${r}</br> <p>you are over weight</p>`
    // }
  }
});

//thin bodytype
//((Körpergröße in cm - 100) + (Alter/ 10)) x 0,9 x 0,9

//Formel für Menschen mit einem eher breiten Körperbau:
// ((Körpergröße in cm - 100) + (Alter/ 10)) x 0,9 x 1,1



function calc() {
     let height= Number(document.getElementById('height').value)

    let age= Number(document.getElementById('age').value)

    let thin = document.getElementById("thin").checked ? true : false

    let calculationThin = Number(((height-100) +(age/10))*0.9*0.9)
console.log(calculationThin)

    let calculationWide = Number(((height-100) +(age/10))*0.9*1.1)
console.log(calculationWide)
    if (thin) {
        document.getElementById("result").innerHTML=`Dein Idealgewicht ist:${calculationThin}`
    }else {
        document.getElementById("result").innerHTML=`Dein Idealgewicht ist:${calculationWide}`
}
}


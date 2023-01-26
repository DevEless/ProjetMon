//VARIABLE BRASEGALI 
let degatLF = 15
let degatCC = 20
let defSpecialM = 10
let degatGH = 25

//VARIABLE JUNKO 

let degatTH = 15
let degatLFF = 20
let defSpecialD = 10
let degatVG = 25

// QUERYSELECTOR

let tableRandB = [degatLF, degatCC, defSpecialM, degatGH]

//div
const vieJunko = document.querySelector("#vieJunko");
const vieBrasegali = document.querySelector("#vieBrasegali");

const divChoix = document.querySelector('.choix')
const divPk1 = document.querySelector('.pk1')
const divPk2 = document.querySelector('.pk2')
const sectionAtk = document.querySelectorAll('section')[1]
const text = document.querySelector('#textCombat')
const vie1 = document.querySelector('#vie1')
const vie2 = document.querySelector('#vie2')
const niveau1 = document.getElementById('niveau1')
const niveau2 = document.getElementById('niveau2')

const name1 = document.getElementById('name1')
const name2 = document.getElementById('name2')

const progres1 = document.querySelectorAll('#progress')[0]
const progres2 = document.querySelectorAll('#progress')[1]


//buttonCHOIX
const btnChoix1 = document.querySelectorAll('button')[0]
const btnChoix2 = document.querySelectorAll('button')[1]
//buttonATK
const btnAtk1 = document.querySelectorAll('button')[2]
const btnAtk2 = document.querySelectorAll('button')[3]
const btnAtk3 = document.querySelectorAll('button')[4]
const btnAtk4 = document.querySelectorAll('button')[5]



//CLASS

class Poke1 {
    constructor(health, speed) {

        this.health = health
        this.speed = speed


    }

}

class Poke2 {
    constructor(health, speed) {
        this.health = health
        this.speed = speed

    }

}

var Junko = new Poke1(100, 120)
var Brasegali = new Poke2(100, 120)




// FONCTION 
function randomAtk(table) {
    return table[Math.floor(Math.random() * table.length)];
}


function setAtributes() {
    divChoix.classList.remove()
    divChoix.classList.add('vanish')

    sectionAtk.classList.add('txtbox')

    vie1.classList.add('vie1')
    vie2.classList.add('vie2')

    progres1.classList.add('progress')
    progres2.classList.add('progress')




}

function attributeAtkPk1() {
    btnAtk1.textContent = 'Tranche Herbe'
    btnAtk2.textContent = 'Lance Feuille'
    btnAtk3.textContent = 'Drain de Vie'
    btnAtk4.textContent = 'Vampi-Graine'
}

function attributeAtkPk2() {
    btnAtk1.textContent = 'Lance Flamme'
    btnAtk2.textContent = 'Close Combat'
    btnAtk3.textContent = 'Meditation'
    btnAtk4.textContent = 'GarlicHOO'
}



//ADDEVENTLISTENER








//JUNKO

btnChoix1.addEventListener("click", () => {
    setAtributes()
    attributeAtkPk1()
    const PkJ = document.createElement('span')
    PkJ.innerHTML = '<img src="./public/image/PK1DOS.png" alt="">'
    divPk1.appendChild(PkJ)

    const PkI = document.createElement('span')
    PkI.innerHTML = '<img src="./public/image/PK2FACE.png" alt="">'
    divPk2.appendChild(PkI)

    name1.textContent = 'Junko'
    name2.textContent = 'Brasegali'
    niveau1.textContent = 'Niv 87'
    niveau2.textContent = 'Niv 87'

    btnAtk1.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk1.style.pointerEvents = 'auto'
    }, "2000")

    btnAtk2.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk2.style.pointerEvents = 'auto'
    }, "2000")

    btnAtk3.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk3.style.pointerEvents = 'auto'
    }, "2000")

    btnAtk4.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk4.style.pointerEvents = 'auto'
    }, "2000")

    text.textContent = 'Je comptes sur toi Junko !'
    setTimeout(() => {
        text.textContent = `Que doit faire Junko ? `;
    }, "1000")



    btnAtk1.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Junko Utilise Lance Feuille !`
            Brasegali.health -= degatLFF
            vieBrasegali.style.width = `${Brasegali.health}%`;

            btnAtk1.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk1.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk2.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk2.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk3.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk3.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk4.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk4.style.pointerEvents = 'auto'
            }, "2000")
        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
                let random = randomAtk(tableRandB)
                Junko.health -= random
                setTimeout(() => {
                    text.textContent = `Brasegali utilise Lance-Flamme! `;
                    vieJunko.style.width = `${Junko.health}%`;
                }, "1000")
                setTimeout(() => {
                    text.textContent = `Que doit faire Junko ?`;
                }, "3000")
            }
            if (Junko.health <= 0) {

                text.textContent = 'Oh non ! Junko est KO'
                vieJunko.style.width = 0;
                return;
            }
        if (Brasegali.health <= 0) {
        text.textContent = 'Brasegali est KO !'
        vieBrasegali.style.width = 0;
        return;
        }


    });



    btnAtk2.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Junko Utilise Tranche-Herbe !`
            Brasegali.health -= degatTH
            vieBrasegali.style.width = `${Brasegali.health}%`;

            btnAtk1.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk1.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk2.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk2.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk3.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk3.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk4.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk4.style.pointerEvents = 'auto'
            }, "2000")
        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
            let random = randomAtk(tableRandB)
            Junko.health -= random
            setTimeout(() => {
                text.textContent = `Brasegali utilise Lance-Flamme! `;
                vieJunko.style.width = `${Junko.health}%`;
            }, "1000")
            setTimeout(() => {
                text.textContent = `Que doit faire Junko ?`;
            }, "3000")
        }
        if (Junko.health <= 0) {
            
            text.textContent = 'Oh non ! Junko est KO'
            vieJunko.style.width = 0;
            return;
        }
        if (Brasegali.health <= 0) {
            text.textContent = 'Brasegali est KO !'
            vieBrasegali.style.width = 0;
            return;
        }
        
        
    });



    btnAtk3.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Junko Drain de vie GO !`
            Junko.health += defSpecialM
            vieBrasegali.style.width = `${Brasegali.health}%`;

            btnAtk1.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk1.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk2.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk2.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk3.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk3.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk4.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk4.style.pointerEvents = 'auto'
            }, "2000")
        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
                let random = randomAtk(tableRandB)
                Junko.health -= random
                setTimeout(() => {
                    text.textContent = `Brasegali utilise Close-Comnbat! `;
                    vieJunko.style.width = `${Junko.health}%`;
                }, "1000")
                setTimeout(() => {
                    text.textContent = `Que doit faire Junko ?`;
                }, "3000")
            }
            if (Junko.health <= 0) {

                text.textContent = 'Oh non ! Junko est KO'
                vieJunko.style.width = 0;
                return;
            }
        if (Brasegali.health <= 0) {
        text.textContent = 'Brasegali est KO !'
        vieBrasegali.style.width = 0;
        return;
        }




    });
    btnAtk4.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Junko Utilise Vampi-Graine !`
            Brasegali.health -= degatVG
            vieBrasegali.style.width = `${Brasegali.health}%`;
  
            btnAtk1.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk1.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk2.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk2.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk3.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk3.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk4.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk4.style.pointerEvents = 'auto'
            }, "2000")

        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
                let random = randomAtk(tableRandB)
                Junko.health -= random
                setTimeout(() => {
                    text.textContent = `Brasegali utilise Poing Ardent! `;
                    vieJunko.style.width = `${Junko.health}%`;
                }, "1000")
                setTimeout(() => {
                    text.textContent = `Que doit faire Junko ?`;
                }, "3000")
            }
            if (Junko.health <= 0) {

                text.textContent = 'Oh non ! Junko est KO'
                vieJunko.style.width = 0;
                return;
            }
        if (Brasegali.health <= 0) {
        text.textContent = 'Brasegali est KO !'
        vieBrasegali.style.width = 0;
        return;
        }
    })
});










// BRASEGALI
btnChoix2.addEventListener("click", () => {
    setAtributes()
    attributeAtkPk2()
    const PkJ = document.createElement('span')
    PkJ.innerHTML = '<img src="./public/image/PK2DOS.png" alt="">'
    divPk1.appendChild(PkJ)

    const PkI = document.createElement('span')
    PkI.innerHTML = '<img src="./public/image/PK1FACE.png" alt="">'
    divPk2.appendChild(PkI)

    name2.textContent = 'Junko'
    name1.textContent = 'Brasegali'
    niveau2.textContent = 'Niv 87'
    niveau1.textContent = 'Niv 87'


    btnAtk1.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk1.style.pointerEvents = 'auto'
    }, "2000")

    btnAtk2.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk2.style.pointerEvents = 'auto'
    }, "2000")

    btnAtk3.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk3.style.pointerEvents = 'auto'
    }, "2000")

    btnAtk4.style.pointerEvents = 'none'
    setTimeout(() => {
    btnAtk4.style.pointerEvents = 'auto'
    }, "2000")

    text.textContent = 'En avant Brasegali !'

    setTimeout(() => {
        text.textContent = `Que doit faire Brasegali ? `;
    }, "1000")

    btnAtk1.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Brasegali utilise Lance FLamme !`
            Junko.health -= degatLF
            vieBrasegali.style.width = `${Junko.health}%`;


            btnAtk1.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk1.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk2.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk2.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk3.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk3.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk4.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk4.style.pointerEvents = 'auto'
            }, "2000")

        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
                let random = randomAtk(tableRandB)
                Brasegali.health -= random
                setTimeout(() => {
                    text.textContent = `Junko utilise Queue de fer ! `;
                    vieJunko.style.width = `${Brasegali.health}%`;
                }, "1000")
                setTimeout(() => {
                    text.textContent = `Que doit faire Brasegali ?`;
                }, "3000")
            }
        if (Junko.health <= 0) {

                text.textContent = ' Junko est KO !'
                vieBrasegali.style.width = 0;
                return;
            }
        if (Brasegali.health <= 0) {
        text.textContent = 'Brasegali est KO !'
        vieJunko.style.width = 0;
        return;
        }
    });

    btnAtk2.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Brasegali Close-Combat !`
            Junko.health -= degatCC
            
            vieBrasegali.style.width = `${Junko.health}%`;

            btnAtk1.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk1.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk2.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk2.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk3.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk3.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk4.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk4.style.pointerEvents = 'auto'
            }, "2000")

        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
                let random = randomAtk(tableRandB)
                Brasegali.health -= random
                setTimeout(() => {
                    text.textContent = `Junko utilise Tranche-feuille! `;
                    vieJunko.style.width = `${Brasegali.health}%`;
                }, "1000")
                setTimeout(() => {
                    text.textContent = `Que doit faire Brasegali ?`;
                }, "3000")
            }
        if (Junko.health <= 0) {

                text.textContent = ' Junko est KO !'
                vieBrasegali.style.width = 0;
                return;
            }
        if (Brasegali.health <= 0) {
        text.textContent == 'Brasegali est KO !'
        vieJunko.style.width = 0;
        return;
        }
    });

    btnAtk3.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Brasegali Medite et gagne des HP!`
            Junko.health += defSpecialM
            vieBrasegali.style.width = `${Junko.health}%`;


        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
                let random = randomAtk(tableRandB)
                Brasegali.health -= random
                setTimeout(() => {
                    text.textContent = `Junko utilise Ultra Laser! `;
                    vieJunko.style.width = `${Brasegali.health}%`;
                }, "1000")
                setTimeout(() => {
                    text.textContent = `Que doit faire Brasegali ?`;
                }, "3000")
            }
        if (Junko.health <= 0) {

                text.textContent = ' Junko est KO !'
                vieBrasegali.style.width = 0;
                return;
            }
        if (Brasegali.health <= 0) {
        text.textContent == 'Brasegali est KO !'
        vieJunko.style.width = 0;
        return;
        }
    });
    btnAtk4.addEventListener("click", () => {
        if (Junko.health > 0 && Brasegali.health > 0) {
            text.textContent = ` Brasegali utilise GarlicHOO`
            Junko.health -= degatGH
            vieBrasegali.style.width = `${Junko.health}%`;

            btnAtk1.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk1.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk2.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk2.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk3.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk3.style.pointerEvents = 'auto'
            }, "2000")

            btnAtk4.style.pointerEvents = 'none'
            setTimeout(() => {
            btnAtk4.style.pointerEvents = 'auto'
            }, "2000")

        }
        
        if (Brasegali.health > 0 && Junko.health > 0) {
                let random = randomAtk(tableRandB)
                Brasegali.health -= random
                setTimeout(() => {
                    text.textContent = `Junko utilise Close-Combat! `;
                    vieJunko.style.width = `${Brasegali.health}%`;
                }, "1000")
                setTimeout(() => {
                    text.textContent = `Que doit faire Brasegali ?`;
                }, "3000")
            }
        if (Junko.health <= 0) {

                text.textContent = ' Junko est KO !'
                vieBrasegali.style.width = 0;
                return;
            }
        if (Brasegali.health <= 0) {
        text.textContent == 'Brasegali est KO !'
        vieJunko.style.width = 0;
        return;
        }
    });


});
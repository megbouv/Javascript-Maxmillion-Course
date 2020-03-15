const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14
const STRONG_ATTACK_VALUE = 17
let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackMonster(attackType) {
    const damage = dealMonsterDamage(attackType)
    currentMonsterHealth -=damage
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage
    if (currentMonsterHealth <=0 && currentPlayerHealth > 0) {
        alert ('You won!')
    } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0) {
        alert('You lose!')
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0) {
        alert ('Draw')
    }
} 


function attackHandler() {
    attackMonster(ATTACK_VALUE)
}

    
function strongAttackHandler() {
    attackMonster(STRONG_ATTACK_VALUE)
}




attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
let direction = [0, 0]
let lastDirection = [0, 0]

window.addEventListener('keydown', e=>{
    switch(e.key){
        case 'ArrowUp':
            if (lastDirection[1] !== 0) break
            direction = [0, -1]
            break
        case 'ArrowDown':
            if (lastDirection[1] !== 0) break
            direction = [0, 1]
            break
        case 'ArrowLeft':
            if (lastDirection[0] !== 0) break
            direction = [-1, 0]
            break
        case 'ArrowRight':
            if (lastDirection[0] !== 0) break
            direction = [1, 0]
            break
    }

})

export function getInputDirection(){
    lastDirection = direction
    return direction
}
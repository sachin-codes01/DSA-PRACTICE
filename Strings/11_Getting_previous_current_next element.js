////Getting previous,current,next,element

let neighbour = 'Neighbour'
for (let i = 0; i < neighbour.length; i++) {
   let current = neighbour[i]
   let prev = neighbour[i-1]
   let next = neighbour[i+1]

   console.log(current,prev,next)
}
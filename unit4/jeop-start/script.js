import qs from './qs_organized.js'
// import qs from './qs_original.js'

const round = document.getElementById('round-num').innerText

// const cells = [
//   {},
//   {},
//   {},
//   {},
//   {}
// ]

for (let i = 1; i < 6; i++) {
  for (const div of document.querySelectorAll(`.r${i}`)) {
    // i is row number
    const divClasses = div.className.split(' ')
    // console.log(divClasses)

    // j is column number
    const colClass = divClasses.find(c => c.startsWith('c'))
    const j = colClass[1]
    // console.log(j)

    // cells[i - 1][j.toString() + '00'] = div
  }
  }

    let p1Score = 0
    let p2Score = 0
    
    // THIS SECTION IS FOR qs_original IMPORT
    div.addEventListener('click', () => {
      // alert(`Category ${j}, Worth $${i + '00'}`)
      const colOffset = (j - 1) * 10
      const roundOffset = (parseInt(round) - 1) * 5
      const rowOffset = i - 1

      const offset = colOffset + roundOffset + rowOffset
      console.log(`${colOffset} + ${roundOffset} + ${rowOffset}`)
      console.log(qs[offset])
    // what to do next goes here (add event listener)
    // display modal
    // get user answer when click button

      
    })


    // THIS SECTION IS FOR qs_organized IMPORT
//     div.addEventListener('click', () => {
//       // todo: add comment
//       const qObj = qs[parseInt(j) - 1][parseInt(round) - 1][i.toString() + '00']
//       console.log(qObj)
//     })
//   }
// }

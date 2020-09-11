var tvRemote = function (word) {

    const keyboard = [
        ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
        ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
        ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
        ['p', 'q', 'r', 's', 't', '.', '@', '0'],
        ['u', 'v', 'w', 'x', 'y', 'z', '-', '/']
    ]

    const getRowAndColumn = character => {
        const rowNum = keyboard.findIndex((row) => row.includes(character));
        const colNum = keyboard[rowNum].findIndex((item) => item === character);

        return [rowNum, colNum];
    }

    let curChar = 'a';
    const characters = word.split('');
    // need to output total number of key clicks
    // as our algorithm will only count the clicks between letters,
    // lets start with the length of word
    let totalClicks = word.length;

    let [curRowNum, curColNum] = getRowAndColumn(curChar);

    characters.forEach(char => {
        // const [curRowNum, curColNum] = getRowAndColumn(curChar);
        // // const curRowNum = getRowAndColumn(curChar)[0];
        // // const curColNum = getRowAndColumn(curChar)[1];

        const [nextRowNum, nextColNum] = getRowAndColumn(char);
        // const nextRowNum = getRowAndColumn(char)[0];
        // const nextColNum = getRowAndColumn(char)[1];

        totalClicks += Math.abs(nextRowNum - curRowNum) + Math.abs(nextColNum - curColNum);
        
        curRowNum = nextRowNum;
        curColNum = nextColNum;
        // curChar = char;
    })

    // // Below - just before refactoring those 2 findIndex for cur and next chars
    // characters.forEach(char => {
    //     const curRowNum = keyboard.findIndex((row) => row.includes(curChar));
    //     const curColNum = keyboard[curRowNum].findIndex((item) => item === curChar);

    //     const nextRowNum = keyboard.findIndex((row) => row.includes(char));
    //     const nextColNum = keyboard[nextRowNum].findIndex((item) => item === char);

    //     totalClicks += Math.abs(nextRowNum - curRowNum) + Math.abs(nextColNum - curColNum);

    //     curChar = char;
    // })

    return totalClicks;
}


    // const map = [
    //     ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    //     ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    //     ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    //     ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    //     ['u', 'v', 'w', 'x', 'y', 'z', '-', '/']
    // ]

    // let firstLetter = 'a';
    // let totalClicks = 0;

    // const findLocationOfLetter = letter => {
    //     //   let r = 0; c = 0;
    //     //   let found = false;
    //     //   for ( r = 0; r < map.length; r++ ) {
    //     //     for ( c = 0; c < map[r].length; c++) {
    //     //       if ( map[r][c] === letter ) {
    //     //         found = true;
    //     //         break;
    //     //       }
    //     //       if ( found ) break;
    //     //     }
    //     //     if ( found ) break;
    //     //   }
    //     //   return [r,c];

    //     return map.reduce(
    //         (pCoordA, r, i) =>
    //           pCoordA === null
    //             ? r.reduce(
    //                 (pCoordB, c, j) =>
    //                   pCoordB === null
    //                     ? (pCoordB =
    //                         pCoordB === null ? (c === letter ? [i, j] : null) : null)
    //                     : pCoordB,
    //                 null
    //               )
    //             : pCoordA,
    //         null
    //       );
    // }

    // let letters = word.toString().split("");
    // letters.forEach(letter => {
    //     let firstCoords = findLocationOfLetter(firstLetter);
    //     let secondCoords = findLocationOfLetter(letter);
    //     firstLetter = letter;
    //     totalClicks = totalClicks + (Math.abs(secondCoords[0] - firstCoords[0]) +
    //         Math.abs(secondCoords[1] - firstCoords[1]) + 1);
    //     //console.log(`fLet ${firstLetter} sLet ${letter} s0 = ${secondCoords[0]} f0 = ${firstCoords[0]} s1 = ${secondCoords[1]} f1 = ${firstCoords[1]}` );
    //     console.log(`fLet ${firstLetter}, ${letter} ${secondCoords[0]}${secondCoords[1]} ${firstCoords[0]}${firstCoords[1]} = ${totalClicks}`)
    // });

    // return totalClicks;
// }


module.exports = { tvRemote };
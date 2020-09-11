var tvRemote = function(word) {
  
    const map = [
                  ['a','b','c','d','e','1','2','3'],
                  ['f','g','h','i','j','4','5','6'], 
                  ['k','l','m','n','o','7','8','9'],
                  ['p','q','r','s','t','.', '@', '0'],
                  ['u','v','w','x','y','z','-','/']
    ]
    
    let firstLetter = 'a';
    let totalClicks = 0;
    
    const findLocationOfLetter = letter => {
      let rowNum = 0;
      let colNum = 0;
      let r = 0; c = 0;
      let found = false;
      for ( r = 0; r < map.length; r++ ) {
        for ( c = 0; c < map[r].length; c++) {
          if ( map[r][c] == letter ) {
            rowNum = r;
            colNum = c;
            found = true;
            break;
          }
          if ( found ) break;
        }
        if ( found ) break;
      }
      return [r,c];
    }
    
    let letters = word.toString().split("");
    letters.forEach( letter => {
      firstCoords =  findLocationOfLetter(firstLetter);
      secondCoords = findLocationOfLetter(letter);
      firstLetter = letter;
      totalClicks = totalClicks + ( Math.abs(secondCoords[0] - firstCoords[0]) + 
               Math.abs(secondCoords[1] - firstCoords[1]) + 1 );
      //console.log(`fLet ${firstLetter} sLet ${letter} s0 = ${secondCoords[0]} f0 = ${firstCoords[0]} s1 = ${secondCoords[1]} f1 = ${firstCoords[1]}` );
      console.log(`fLet ${firstLetter}, ${letter} ${secondCoords[0]}${secondCoords[1]} ${firstCoords[0]}${firstCoords[1]} = ${totalClicks}`)
    });
    
    return totalClicks;
  }
  
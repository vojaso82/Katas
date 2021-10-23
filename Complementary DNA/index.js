// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]




function DNAStrand(dna) {
    //your code here
    let arr = [];
    let dnaArr = dna.split("");
  
    for (let i = 0; i < dnaArr.length; i++) {
      if (dna[i] === "A") {
        arr.push("T");
      } else if (dna[i] === "T") {
        arr.push("A");
      } else if (dna[i] === "C") {
        arr.push("G");
      } else {
        arr.push("C");
      }
    }
    return arr.join("");
  }
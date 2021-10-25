// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
// Factory function
const pAequorFactory = (number, dnaArr) => {
  return {
    specimenNum: number,
    dna: dnaArr,
    mutate() {
      const randBase = this.dna[Math.floor(Math.random() * this.dna.length)];
      let newBase = returnRandBase();
      if (randBase === newBase) {
        newBase = returnRandBase();
      }
      randBase = newBase;
      return randBase
    },
    // Compare different DNA sequences to find similarities
    compareDNA(otherPOrg) {
      let simCount = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === otherPOrg.dna[i]) {
          simCount += 1;
        } else {
          return simCount;
        }
      }
      const percentOfDNAshared = (simCount / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimenNum} and ${otherPOrg.specimenNum} have ${percentageTo2Deci}% DNA in common.`);
    },
    // Chances of survival
    willLikelySurvive() {
      const survivalCalc = this.dna.filter(base => base === 'C' || base === 'G');
      const perc = survivalCalc.length / this.dna.length;
      if (perc >= 0.6) {
        return true;
      } false;
    }
  }
};
// Create naturally surviving specimen
const natSurvivingSpecimen = [];
let specimenCount = 1;

while (natSurvivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(specimenCount, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    natSurvivingSpecimen.push(newOrg);
  }
  specimenCount++;
};

console.log(natSurvivingSpecimen);




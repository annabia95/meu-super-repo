class WordAnalyzer {
  constructor(word) {
      // Implement a way to store the class argument into a property.
      const arr = word.split('');
      const checkSpace = (word) => word.indexOf('') >=0;
/*       const checkNumbers = (/[0-9]/).test(word);
      const checkPontuacion = (/[,.:;?¿¡!'"]/).test(word); */
      
      // Validate the word. If it's not valid or empty, throw an error.
      if(!arr) {
          throw 'Uma palavra é obrigatória'
      }
      
      if(checkSpace){
          throw 'Muitas palavras'
      }
/*       if(checkNumbers) {
          throw 'Uma palavra não pode conter números.'
      }
      if(checkPontuacion) {
          throw 'Uma palavra não pode conter sinais de pontuação.'
      } */
      
  }
  
  countVowels() {
      // Implement vowel counting here.
      const countVowels = word.match(/[aeiouáéíóúüãõàAEIOUÁÉÍÓÚÜÃÕÀ]/gi).length;
      return countVowels;
  }
  
  countConsonants() {
      // Implement consonant counting here.
      const countConsonants = word.length - countVowels;
      return countConsonants;
  }
  
  countCharacters() {
      // Implement character counting here.
      const obj = {
          vowels: countVowels(),
          consonants: countConsonants,
          total: word.length,
      }
      return obj
  }
}
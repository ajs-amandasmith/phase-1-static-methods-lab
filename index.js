// class StaticMethod {
//   static methodName() {
//     console.log('My method is static!');
//   }
// }

// StaticMethod.methodName();


class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    // return this.capitalize(string);

    // let array = string.split(' ');
    // let newArray = array.map(word => {
    //   word[0].toUpperCase() + word.slice(1)
    //   console.log(word);
    // })
    // console.log(newArray)
    // return newArray;



    // return string[0].toUpperCase() + string.slice(1).split(' ').map(letter => letter[0].toUpperCase() + letter.slice([1]));
    // return string.toUpperCase();

    // create result array (empty)
    // change string into an array
    // loop over array
      // if current word is one of the exceptions
        // push current word to result array
      // otherwise
        // capitalize and push the current word into the result array
    // return capitlized result array

    let result = [];
    let array = string.split(' ');
    for (let i = 0; i < array.length; i++) {
      let current = array[i];
      if (array[i] === 'a' || array[i] === 'an' || array[i] === 'but' || array[i] === 'of' || array[i] === 'and' || array[i] === 'for' || array[i] === 'at' || array[i] === 'by' || array[i] === 'from' || array[i] === 'the') {
        result.push(current.toLowerCase());
      } else {
        console.log(current[0]);
        result.push(current[0].toUpperCase() + current.slice(1));
      }
    }
    let finalResult = result.join(' ');
    return this.capitalize(result.join(' '));
  }
}

console.log(Formatter.titleize('a tale of two cities'));
console.log(Formatter.titleize('in the night kitchen'));
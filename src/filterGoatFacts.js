/**
 * filterGoatFacts - Filters goat facts based on word and index
 */
import { addGoatFacts } from './addGoatFacts'

export const filterGoatFacts = facts => {
  // console.error(`Step 6. Goat Facts filters!`)

  var form = document.querySelector("form");
  var text_input = document.createElement("INPUT");
  text_input.setAttribute("type", "text");
  text_input.addEventListener("input", filterGoats);
  form.appendChild(text_input);

  var number_input = document.createElement("INPUT");
  number_input.setAttribute("type", "number");
  number_input.addEventListener("input", filterGoats);
  form.appendChild(number_input);
  
  
  function filterGoats(){
    // console.log(number_input.value + " - " + text_input.value);
    // if input a word and text then filter the sentence (if both are non empty)
    let filteredFacts = facts;
    if (number_input.value.length !== 0 && text_input.value.length !== 0) {
      // console.log(facts);
      // console.log(number_input.value + " - " + text_input.value);
      facts.data = facts.data.map(fact => {
        let words = fact.text.split(" ");
        if(words[Number(number_input.value)] !== text_input.value) {
          fact.display = "none";
        }
        return fact;
      });
    } else {
      facts.data = facts.data.map(fact => {
        fact.display = "";
        return fact;
      });
    }
    addGoatFacts(filteredFacts);
  }
  

  return facts;
}




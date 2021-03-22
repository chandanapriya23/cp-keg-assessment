// import { forEachBail } from "enhanced-resolve";

/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {
  // console.error(`Step 5. Add Goat Facts to the DOM!`)
    const goatFactUl = document.getElementById('goat-facts-list');
    goatFactUl.innerHTML = "";
    facts.data.forEach(fact => {
      var li = document.createElement('li');
      li.innerHTML = fact.text;
      li.style.display = fact.display;
      goatFactUl.appendChild(li);
    });

}

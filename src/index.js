import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
const onGetGoatFacts = async () => {
  // console.error(`Step 3. Should be called by the Get Goat Facts button!`)
  const facts = await getGoatFacts()

  //Converting Array of strings to array of objects 
  facts.data = facts.data.map(fact => {
    let factObject = {};
    factObject.text= fact;
    factObject.display= '';
    return factObject;
  });
  const filteredFacts = filterGoatFacts(facts)
  addGoatFacts(filteredFacts)
}

;(async () => {
  const getGoatFactsButton = document.getElementById('get-goat-facts');
  getGoatFactsButton.addEventListener('click', await onGetGoatFacts);
  // console.error(`Step 2. Open the browser inspector!`)
})()
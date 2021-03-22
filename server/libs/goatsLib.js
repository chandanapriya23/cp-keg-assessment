const { doIt } = require('@keg-hub/jsutils')
// eslint-disable-next-line no-unused-vars
const factList = require('./goatFacts.json')

const factListLength = factList.length;

const getRandomFact = () => {
  const randomNumber = Math.round(Math.random() * factListLength);

  return factList[randomNumber];
}

const goatFacts = async () => {
  return doIt(20, global, () => getRandomFact())
}

module.exports = {
  goatFacts,
}

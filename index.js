/* eslint-disable global-require */

module.exports = {

  Name: 'Fortnite',
  Namespace: 'fn',
  StoreOfferId: '09176f4ff7564bbbb499bbe20bd6348f',
  EntitlementName: 'Fortnite_Free',
  Client: require('./src/Client'),

  ESubGame: require('./enums/SubGame'),
  
};

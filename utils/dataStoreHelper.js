/* attribute set an array of seal attributes
    e.g. {
    name: 'http://eidas.europa.eu/attributes/naturalperson/CurrentFamilyName',
    friendlyName: 'FamilyName',
    encoding: 'UTF-8',
    language: 'N/A',
    values: [ 'Garbini' ]
  },
  userSessionAttributes possibly null object contianing all theh attributes of the user 
  e.g.
  {
      eidas: {
          FamilyName : "Garbinin",
          GivenName:  "Ariana",
      },
      ...
  },
  dataSourceName the name of the datasource used to fetch the attributes 
  e.g. eidas

  example result:
  {
  eidas: {
    FamilyName: 'Garbini',
    GivenName: 'Arianna',
    DateOfBirth: '1968-05-22',
    PersonIdentifier: 'IT/GR/INFC0001TESTEU',
    LevelOfAssurance: '1',
    eidasDatasetIssuer: 'eIDAS_IT'
  }
}
*/
const parseSealAttributeSet = (
  attributeSet,
  userSessionAttributes,
  dataSourceName
) => {
  if (!userSessionAttributes) {
    userSessionAttributes = {};
  }

  attributeSet.forEach((attribute) => {
    if (!userSessionAttributes[dataSourceName])
      userSessionAttributes[dataSourceName] = {};
    userSessionAttributes[dataSourceName][attribute.friendlyName] =
      attribute.values[0];
  });

  return userSessionAttributes;
};

export { parseSealAttributeSet };

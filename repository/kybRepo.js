const mongoose = require("mongoose");
const Kyb = require("../config/mongooseSchema");

function addDataToDb(kybData) {
  return new Promise((resolve, reject) => {
    Kyb.findOne(
      {
        legal_person_identifier: kybData.legal_person_identifier,
        provider: "local",
      },
      function (err, kyb) {
        if (err) {
          console.log(err);
          return;
        }
        if (kyb) {
          console.log(
            "KYB already exists in DB with legal_person_identifier : " +
              kyb.legal_person_identifier
          );
          return;
        }
      }
    );

    const newKyb = new Kyb({
      legal_name: kybData.legal_name,
      legal_person_identifier: kybData.legal_person_identifier,
      jurisdiction_code: kybData.jurisdiction_code,
      business_role: kybData.business_role,
      address: kybData.address,
      lei: kybData.lei,
      vat_registration: kybData.vat_registration,
      birthdate: kybData.birthdate,
      trading_status: kybData.trading_status,
      given_name: kybData.given_name,
      family_name: kybData.family_name,
      sub_jurisdiction: kybData.sub_jurisdiction,
      personal_number:  kybData.personal_number,
    });

    console.log("kybRepo will try to save");
    console.log(newKyb);

    newKyb.save(function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve("OK");
      }
      // saved!
    });
  });
}


//TODO ensure this works correcttly
function getUserByeIDASIdenitifier(personalIdentifier) {
  console.log(`kybRepo.js:: searching for ${personalIdentifier}`)
  return new Promise((resolve, reject) => {
    Kyb.findOne(
      {
        personal_number: personalIdentifier,
        provider: "local",
      },
      function (err, kyb) {
        if (err) {
          console.log(err);
          reject(false);
        }
        if (kyb) {
          console.log(
            "KYB already exists in DB with legal_person_identifier : " +
              kyb.legal_person_identifier
          );
          resolve(kyb);
          return;
        }else{
          resolve(undefined)
        }
      }
    );
  });
}

async function findByLeiAndLegalName(lei, legalName, countryCode) {
    const filter = {};
    if(lei !== ""){
        filter.lei = lei;
    }
    if(legalName !== ""){
        filter.legal_name = legalName;
    }
    if(countryCode !== ""){
        filter.sub_jurisdiction = countryCode;
    }
    filter.provider = 'local'
    return await Kyb.find(filter).exec();

    /*promise.then(function (doc) {
        console.log("@@@@@@@@@@@@@@@ kyb @@@@@@@@@@@@@@@");
        console.log(doc);
        return doc;
    })*/
    // return kyb;
};

module.exports.addDataToDb = addDataToDb;
module.exports.getUserByeIDASIdenitifier = getUserByeIDASIdenitifier;
module.exports.findByLeiAndLegalName = findByLeiAndLegalName;

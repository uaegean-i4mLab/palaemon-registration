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

module.exports.addDataToDb = addDataToDb;

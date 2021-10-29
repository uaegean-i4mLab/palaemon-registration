import { addDataToDb } from "../repository/kybRepo";

describe("mongo Integration", function () {
  describe("setOrupdateUserDetails", function () {
    it("test pushing to mono test data", function () {
      let testUserDetails = {
        lei: "529900ENKWV3BZ5GYL12",
        address: null,
        birthdate: "1965-01-01",
        business_role: null,
        trading_status: "LIVE",
        legal_name: "360kompany AG",
        sub_jurisdiction: "AT",
        sic: '["7375 - Informationsabruf von entfernten Datenbanken","1450 - Media","73759903 - Remote data base information retrieval","63120 - Web portals"]',
        given_name: "claude",
        vat_registration: "ATU67091005",
        legal_person_identifier: "375714x",
        family_name: "Phil",
        personal_number: "el/el/11111",
      };

      addDataToDb(testUserDetails)
    });
  });
});

const getDefaultClaims = () => {
  return {
    userinfo: {
      verified_claims: {
        verification: {
          trust_framework: {
            value: "grids_kyb",
          },
          userinfo_endpoint: {
            value: "https://dp.kompany.com:8060/userinfo",
          },
          evidence: [
            {
              type: {
                value: "company_register",
              },
              registry: {
                organisation: {
                  essential: false,
                  purpose: "string",
                },
                country: {
                  essential: true,
                  purpose: "string",
                  value: "AT",
                },
              },
              time: {
                max_age: 31000000,
                essential: true,
                purpose: "string",
              },
              data: {
                essential: true,
                purpose: "string",
              },
              extractURL: {
                essential: true,
                purpose: "string",
              },
              document: {
                SKU: {
                  essential: false,
                  purpose: "string",
                },
                option: {
                  essential: false,
                  purpose: "string",
                },
              },
            },
          ],
        },
        claims: {
          family_name: null,
          given_name: null,
          birthdate: null,
          legal_name: null,
          legal_person_identifier: null,
          lei: null,
          vat_registration: null,
          address: null,
          tax_reference: null,
          sic: null,
          business_role: null,
          sub_jurisdiction: null,
          trading_status: null,
        },
      },
    },
    id_token: {
      verified_claims: {
        verification: {
          trust_framework: {
            value: "eidas",
          },
        },
        claims: {
          family_name: null,
          given_name: null,
          birthdate: null,
          person_identifier: null,
          place_of_birth: null,
          address: null,
          gender: null,
        },
      },
    },
  };
};

exports.defaultClaims = getDefaultClaims();

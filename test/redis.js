import { setOrUpdateSessionData, getSessionData } from "../services/redis";
import { getSealSessionData } from "../services/sealService";

describe("Redis Integration", function () {
  describe("setOrUpdateSessionData", function () {
    it("test pushing to redis 123", function () {
      setOrUpdateSessionData("123", "test", "testValue2");
    });
    
  });
  describe("getSessionData",  function () {
    it("test getting from redis 123", async function () {
      let result = await getSessionData("123")
      console.log(result)
    });
    it("test getting from redis 123 with variable test", async function () {
      let result = await getSessionData("123","test")
      console.log(result)
    });
    
  });
});

const { tvRemote } = require("../src/tvRemote");

describe("Sample Tests", () => {

    test("example", () => {
      expect(tvRemote("codewars")).toBe(36);
    });
    
    test("misc", () => {
      expect(tvRemote("does")).toBe(16);
      expect(tvRemote("your")).toBe(23);
      expect(tvRemote("solution")).toBe(33);
      expect(tvRemote("work")).toBe(20);
      expect(tvRemote("for")).toBe(12);
      expect(tvRemote("these")).toBe(27);
      expect(tvRemote("words")).toBe(25);
    });
    
  });



// describe("Sample Tests", function() {

//     it("example", function() {
//       Test.assertEquals(tvRemote("codewars"), 36);
//     });
    
//     it("misc", function() {
//       Test.assertEquals(tvRemote("does"), 16);
//       Test.assertEquals(tvRemote("your"), 23);
//       Test.assertEquals(tvRemote("solution"), 33);
//       Test.assertEquals(tvRemote("work"), 20);
//       Test.assertEquals(tvRemote("for"), 12);
//       Test.assertEquals(tvRemote("these"), 27);
//       Test.assertEquals(tvRemote("words"), 25);
//     });
    
//   });
  
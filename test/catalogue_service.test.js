const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookbyTitle", () => {
    test("returns true if the book exists", () => {
      expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
    });
    test("returns false if the book does not exists", () => {
      expect(catalogueService.checkBookByTitle("Boy")).toBe(false);
    });
  })

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books starting with given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("d")).toBe(1);
      expect(catalogueService.countBooksByFirstLetter("x")).toBe(0);
      expect(catalogueService.countBooksByFirstLetter("2")).toBe(1);
    });
  })

  describe("catalogueService.getQuantity", () => {
    test("returns quantity of book", () => {
      expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
    });
    test("returns not in catalogue if book does not appear", () => {
      expect(catalogueService.getQuantity("Boy")).toBe("Not in the catalogue");
    });
  })

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns array of books by author", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual(
        [
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]
      );
      expect(catalogueService.getBooksByAuthor("Stormzy")).toEqual([]);
    });
  })

  describe("catalogueService.checkQuantity", () => {
    test("returns true if there are at least as many books in stock as given quantity", () => {
      expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
    });
    test("returns false if there are fewer books in stock than given quantity", () => {
      expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
    });
  })

});



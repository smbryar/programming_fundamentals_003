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

});



describe("google search", () => {
  it("should work", () => {
    cy.visit("http://www.google.com");
    typeWord("apples");
    cy.get("#lst-ib").type("Hello world{enter}");
  });
});

function typeWord(word: string): string {
  console.log(word);
  return word;
}

describe(`template spec1`, () => {
  it(`should type a name, select from dropdown and verify the history log`, () => {
   
    cy.visit(`http://localhost:3000`); 


    cy.get(`input[name="username"]`).type(`Marko Nisiama`);

  
    cy.get(`select[name="options"]`).select(`Option1`); 


    cy.get(`form`).submit();


    cy.get(`.history-log`)
      .should(`contain`, `Marko Nisiama`)
      .and(`contain`, `1 attempt`);
  });
});
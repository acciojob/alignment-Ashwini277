describe('Table 1 Tests', () => {
    it('checks table classes', () => {
        cy.get('#table-1').should('be.visible').should('have.class', 'middle');
        cy.get('#t12').should('have.class', 'center');
        cy.get('#t13').should('have.class', 'right');
    });
});


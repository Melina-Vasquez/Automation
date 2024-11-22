describe('Informacion Solicitada', {testIsolation:false},()=>{

    it('Visitar la pagina', () =>{
        cy.visit('https://automationintesting.online/');
      });
    
      it('Verificar visualizacion de nombre de hotel', () => {
        cy.contains('Shady Meadows B&B').should('be.visible');
      });
      it('Verificar visualizacion de direccion', () => {
          cy.contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');
        });
    
      it('Verificar visualizacion de telefono', () => {
        cy.contains('012345678901').should('be.visible');
      });
    
      it('Verificar visualizacion de email', () => {
        cy.contains('fake@fakeemail.com').should('be.visible');
      });
    
      it('Verificar visualizacion de una imagen', () => {
        cy.get('img[src="https://loremflickr.com/500/500/cat?lock=7698"]').should('be.visible');
      });
    
      it('Verificar visualizacion de mensaje de bienvenida ', () => {
        cy.contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').should('be.visible');
  
      });

});

   
describe('API Integration Test', () => {
  it('should return expected response', () => {
    cy.request({
      method: 'GET',
      url: '/api/users',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(5);
      expect(response.body[0]).to.have.property('name', 'John');
      expect(response.body[1]).to.have.property('name', 'Jane');
      expect(response.body[2]).to.have.property('name', 'Bob');
      expect(response.body[3]).to.have.property('name', 'Alice');
      expect(response.body[4]).to.have.property('name', 'Mike');
    });
  });
});

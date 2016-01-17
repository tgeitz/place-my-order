import fixture from 'can-fixture';

const store = fixture.store([{
  /api/orders: 0,
  description: 'First item'
}, {
  /api/orders: 1,
  description: 'Second item'
}]);

fixture({
  'GET /order': store.findAll,
  'GET /order/{/api/orders}': store.findOne,
  'POST /order': store.create,
  'PUT /order/{/api/orders}': store.update,
  'DELETE /order/{/api/orders}': store.destroy
});

export default store;

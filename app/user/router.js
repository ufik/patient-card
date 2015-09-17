Router.route('/users', {
  name: 'users',
  controller: 'UserController',
  action: 'list'
});

Router.route('/user-create', {
  name: 'user-create',
  controller: 'UserController',
  action: 'create'
});

Router.route('/user-update/:id', {
  name: 'user-update',
  controller: 'UserController',
  action: 'update'
});

Router.route('/user-delete/:id', {
  name: 'user-delete',
  controller: 'UserController',
  action: 'delete'
});
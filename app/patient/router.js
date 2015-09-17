Router.route('/patients', {
  name: 'patients',
  controller: 'PatientController',
  action: 'list'
});

Router.route('/patient-create', {
  name: 'patient-create',
  controller: 'PatientController',
  action: 'create'
});

Router.route('/patient-update/:id', {
  name: 'patient-update',
  controller: 'PatientController',
  action: 'update'
});

Router.route('/patient-delete/:id', {
  name: 'patient-delete',
  controller: 'PatientController',
  action: 'delete'
});
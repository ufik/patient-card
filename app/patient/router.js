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

Router.route('/patient-bandages/:id', {
  name: 'patient-bandages',
  controller: 'BandageController',
  action: 'list'
});

Router.route('/bandage-create/:id', {
  name: 'bandage-create',
  controller: 'BandageController',
  action: 'create'
});

Router.route('/bandage-update/:id', {
  name: 'bandage-update',
  controller: 'BandageController',
  action: 'update'
});

Router.route('/bandage-delete/:id', {
  name: 'bandage-delete',
  controller: 'BandageController',
  action: 'delete'
});
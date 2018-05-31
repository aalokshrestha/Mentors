angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('landing', {
    url: '/page1',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('mentorSignUp', {
    url: '/page3',
    templateUrl: 'templates/mentorSignUp.html',
    controller: 'mentorSignUpCtrl'
  })

  .state('mentorSignUp2', {
    url: '/page4',
    templateUrl: 'templates/mentorSignUp2.html',
    controller: 'mentorSignUp2Ctrl'
  })

  .state('profile', {
    url: '/page15',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('startUpRegistration', {
    url: '/page6',
    templateUrl: 'templates/startUpRegistration.html',
    controller: 'startUpRegistrationCtrl'
  })

  .state('profile2', {
    url: '/page16',
    templateUrl: 'templates/profile2.html',
    controller: 'profile2Ctrl'
  })

  .state('startUpRegistration2', {
    url: '/page7',
    templateUrl: 'templates/startUpRegistration2.html',
    controller: 'startUpRegistration2Ctrl'
  })

  .state('type', {
    url: '/page8',
    templateUrl: 'templates/type.html',
    controller: 'typeCtrl'
  })

  .state('mentorDashBoard', {
    url: '/page9',
    cache: false,
    templateUrl: 'templates/mentorDashBoard.html',
    controller: 'mentorDashBoardCtrl'
  })

  .state('settings', {
    url: '/page10',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('settings2', {
    url: '/page17',
    templateUrl: 'templates/settings2.html',
    controller: 'settings2Ctrl'
  })

   .state('verification', {
    url: '/verification',
    templateUrl: 'templates/verification.html',
    controller: 'verificationCtrl'
  })

  .state('dashboard', {
    url: '/page11',
    cache: false,
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })

  .state('account', {
    url: '/page12',
    templateUrl: 'templates/account.html',
    controller: 'accountCtrl'
  })

   .state('accountMentor', {
    url: '/accountMentor',
    templateUrl: 'templates/accountMentor.html',
    controller: 'accountMentorCtrl'
  })

  .state('favourites', {
    url: '/page13',
    templateUrl: 'templates/favourites.html',
    controller: 'favouritesCtrl'
  })

$urlRouterProvider.otherwise('/page1')

});
angular.module('app.controllers', [])
  
.controller('landingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('details_mentorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('details_userCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

	$scope.userdetails = {
		email: '',
		password: ''
	};

	$scope.$error = {
		email: '',
		password: '',
		login: ''
	}

	$scope.login = function(){

		if(!$scope.validateEmail($scope.userdetails.email)){
			$scope.$error.email = "Please enter valid email";
			return;
		}

		if($scope.userdetails.email == ''){
			$scope.$error.email = "Please enter email";
			return;
		}

		if($scope.userdetails.password == ''){
			$scope.$error.email = "Please enter password";
			return;
		}

		if($scope.userdetails.email == 'user@gmail.com' && $scope.userdetails.password == 'pass'){
			window.location.href = "#/page9";
			return;
		}

		if($scope.userdetails.email == 'mentor@gmail.com' && $scope.userdetails.password == 'pass'){
			window.location.href = "#/page11";
			return;
		}

		$scope.$error.login = "Invalid email or password";
		return;
		
	}

	$scope.validateEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}


}])
   
.controller('mentorSignUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.userdata = {
		fname: '',
		lname: '',
		email: '',
		password: '',
		re_password: '',
		signup: ''
	};

	$scope.signup = function(){

		$scope.$error = {
			fname: '',
			lname: '',
			email: '',
			password: '',
			re_password: '',
			signup: ''
		};

		if($scope.userdata.fname == ''){
			$scope.$error.fname = "Please enter first name";
			return;
		}

		if($scope.userdata.lname == ''){
			$scope.$error.lname = "Please enter last name";
			return;
		}

		if($scope.userdata.email == ''){
			$scope.$error.email = "Please enter email";
			return;
		}

		if($scope.userdata.password == ''){
			$scope.$error.password = "Please enter password";
			return;
		}

		if($scope.userdata.re_password == ''){
			$scope.$error.re_password = "Please enter re-password";
			return;
		}

		if(!$scope.validateEmail($scope.userdata.email)){
			$scope.$error.email = "Please enter valid email";
			return;
		}

		if($scope.userdata.password != $scope.userdata.re_password){
			$scope.$error.signup = "Password doesn't match";
			return;
		}

		window.location.href = "#/page4";

	}

	$scope.validateEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}


}])
   
.controller('mentorSignUp2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.file = '';
	$scope.isImage = false;

	$scope.opencamera = function(){
		var file = document.getElementById('file');
		file.click();
	}

	$scope.uploadFile = function(event){
        var files = event.target.files;
		if (files && files[0]) {
	        var reader = new FileReader();
	        reader.readAsDataURL(files[0]);
		    reader.onload = (function(f) {
	            return function(e) {
	            	$scope.isImage = true;
	            	$scope.file = e.target.result;
	            };
	        })(files[0]);
		    reader.readAsDataURL(files[0]);
		    file.click();
		}
    };

}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('startUpRegistrationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.userdata = {
		name: '',
		description: '',
		email: '',
		password: '',
		re_password: ''
	};

	$scope.signup = function(){

		$scope.$error = {
			name: '',
			description: '',
			email: '',
			password: '',
			re_password: '',
			signup: ''
		};

		if($scope.userdata.name == ''){
			$scope.$error.name = "Please enter name";
			return;
		}

		if($scope.userdata.description == ''){
			$scope.$error.description = "Please enter description";
			return;
		}

		if($scope.userdata.email == ''){
			$scope.$error.email = "Please enter email";
			return;
		}

		if($scope.userdata.password == ''){
			$scope.$error.password = "Please enter password";
			return;
		}

		if($scope.userdata.re_password == ''){
			$scope.$error.re_password = "Please enter re-password";
			return;
		}

		if(!$scope.validateEmail($scope.userdata.email)){
			$scope.$error.email = "Please enter valid email";
			return;
		}

		if($scope.userdata.password != $scope.userdata.re_password){
			$scope.$error.signup = "Password doesn't match";
			return;
		}

		window.location.href = "#/page7";

	}

	$scope.validateEmail = function(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

}])
   
.controller('profile2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('startUpRegistration2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	
	$scope.file = '';
	$scope.isImage = false;

	$scope.opencamera = function(){
		var file = document.getElementById('file');
		file.click();
	}

	$scope.uploadFile = function(event){
        var files = event.target.files;
		if (files && files[0]) {
	        var reader = new FileReader();
	        reader.readAsDataURL(files[0]);
		    reader.onload = (function(f) {
	            return function(e) {
	            	$scope.isImage = true;
	            	$scope.file = e.target.result;
	            };
	        })(files[0]);
		    reader.readAsDataURL(files[0]);
		    file.click();
		}
    };
}])
   
.controller('typeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mentorDashBoardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.info = function(){
		window.location.href = "#/details_mentor";
	}

	var counter = 0;
	// console.log("here");
	$scope.throwoutleft = function(eventName, eventObject){
		console.log("left",eventName,eventObject);
		counter++;
		if(counter == 2){
			document.getElementById("match-found").style.visibility = 'visible';
			counter = 0;
		}
	};
	$scope.throwoutright = function(eventName, eventObject){
		console.log("right",eventName,eventObject);
	};

	$scope.hideOverlay = function(){
		document.getElementById("match-found").style.visibility = 'hidden';
	}

	$scope.options = {
	    isThrowOut: function (offset, element, throwOutConfidence) {
	        return throwOutConfidence > 0.6;
	    }
	};


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup) {

	$scope.disable = function(){
		$scope.showConfirm("Disable", "Are you sure you want to disable your account?");
	}

	$scope.showConfirm = function(title, msg) {
		var confirmPopup = $ionicPopup.confirm({
			title: title,
			template: '<br /><span style="text-align:center;width:100%">'+msg+'</span><br />'
		});

		confirmPopup.then(function(res) {
			if(res) {
				window.location.href = "#/";
			}
		});
	};

	$scope.logout = function(){
		$scope.showConfirm("Logout", "Are you sure you want to Logout?");
	}

}])
   
.controller('settings2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.disable = function(){
		$scope.showConfirm("Disable", "Are you sure you want to disable your account?");
	}

	$scope.showConfirm = function(title, msg) {
		var confirmPopup = $ionicPopup.confirm({
			title: title,
			template: '<br /><span style="text-align:center;width:100%">'+msg+'</span><br />'
		});

		confirmPopup.then(function(res) {
			if(res) {
				window.location.href = "#/";
			}
		});
	};

	$scope.logout = function(){
		$scope.showConfirm("Logout", "Are you sure you want to Logout?");
	}

}])

.controller('verificationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.info = function(){
		window.location.href = "#/details_user";
	}

	var counter = 0;
	// console.log("here");
	$scope.throwoutleft = function(eventName, eventObject){
		console.log("left",eventName,eventObject);
		counter++;
		if(counter == 2){
			document.getElementById("match-found").style.visibility = 'visible';
			counter = 0;
		}
	};
	$scope.throwoutright = function(eventName, eventObject){
		console.log("right",eventName,eventObject);
	};

	$scope.hideOverlay = function(){
		document.getElementById("match-found").style.visibility = 'hidden';
	}

	$scope.options = {
	    isThrowOut: function (offset, element, throwOutConfidence) {
	        return throwOutConfidence > 0.6;
	    }
	};
}])
   
.controller('accountCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.file = '';
	$scope.isImage = false;

	$scope.opencamera = function(){
		var file = document.getElementById('file');
		file.click();
	}

	$scope.uploadFile = function(event){
        var files = event.target.files;
		if (files && files[0]) {
	        var reader = new FileReader();
	        reader.readAsDataURL(files[0]);
		    reader.onload = (function(f) {
	            return function(e) {
	            	$scope.isImage = true;
	            	$scope.file = e.target.result;
	            };
	        })(files[0]);
		    file.click();
		}
    };

}])

.controller('accountMentorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.file = '';
	$scope.isImage = false;

	$scope.opencamera = function(){
		var file = document.getElementById('file');
		file.click();
	}

	$scope.uploadFile = function(event){
        var files = event.target.files;
		if (files && files[0]) {
	        var reader = new FileReader();
	        reader.readAsDataURL(files[0]);
		    reader.onload = (function(f) {
	            return function(e) {
	            	$scope.isImage = true;
	            	$scope.file = e.target.result;
	            };
	        })(files[0]);
		    file.click();
		}
    };

}])
   
.controller('favouritesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
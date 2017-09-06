(function() {
  'use strict';
	var app = angular.module("doctorSearchApp", []);
	app.controller("searchCtrl", ["$scope", function($scope){
		// List of avalible doctors
		$scope.doctors = {
			details:[
				{ 
					title: 'Dr',
					firstname: 'Mary',
					lastname: 'Johnson',
					specialty: 'Dermatology',
					rating: 5,
					description: 'Dr Johnson specialises in acne treatmeants for teenages and adults.',
					location: 'Sunnysprings',
					practice: 'Sunnysprings Skin and Smile'
				},
				{ 
					title: 'Dr',
					firstname: 'Frank',
					lastname: 'Johnson',
					specialty: 'Dermatology',
					rating: 3,
					description: 'Dr Johnson specialises skin cancer treatment and early detection.',
					location: 'Brisbane',
					practice: 'Queensland Skin Cancer Clinic'
				},
				{ 
					title: 'Dr',
					firstname: 'Jerry',
					lastname: 'Smith',
					specialty: 'Dermatology',
					rating: 4,
					description: 'Cosmetic, Medical & Laser.',
					location: 'Eorzea',
					practice: 'Eorzea Clear Skin Clinic'
				},
				{ 
					title: 'Dr',
					firstname: 'Leila',
					lastname: 'Wong',
					specialty: 'General Practice',
					rating: 5,
					description: 'GP with speciality in mental health.',
					location: 'Autumnhills',
					practice: 'Autumnhills Medical Center'
				},
				{ 
					title: 'Dr',
					firstname: 'Arnice',
					lastname: 'Azure',
					specialty: 'Dentist',
					rating: 3,
					description: 'Sunnysprings Skin and Smile specialises in teeth whitening and invisalign.',
					location: 'Sunnysprings',
					practice: 'Sunnysprings Skin and Smile'
				},
				{ 
					title: 'Dr',
					firstname: 'Timothy',
					lastname: 'Bass',
					specialty: 'General Practice',
					rating: 1,
					description: 'Dr Johnson specialises in GP who specialises in paediatrics.',
					location: 'Eorzea',
					practice: '24hr GPs'
				}
			]
		}

		$scope.moreDetails = function(doctor, index) {
			$scope.specialty = doctor.specialty;
			$scope.current = doctor;
			$scope.sameSpecialty = [ ];

			//Hide current active
			angular.forEach(angular.element(document.getElementsByClassName("doctor-wrapper__more")), function(el){
				angular.element(el).removeClass("active");
			});
			//Add active to currently selected doctor details
			angular.element(angular.element(document.getElementsByClassName("doctor-"+index))[0].getElementsByClassName("doctor-wrapper__more")).addClass("active");
			// Create list of doctors with the same specialty, excluding the current doctor
			angular.forEach($scope.doctors.details, function(value, key) {
				if ($scope.specialty == value.specialty && $scope.current != value) {
					$scope.sameSpecialty.push(value);
				}
			})
		}
	}]);
})();




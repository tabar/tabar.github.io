describe('searchCtrl', function() {
    var scope, createController;

    var first_doctor = { 
		title: 'Dr',
		firstname: 'Mary',
		lastname: 'Johnson',
		specialty: 'Dermatology',
		rating: 5,
		description: 'Dr Johnson specialises in acne treatmeants for teenages and adults.',
        location: 'Sunnysprings',
        practice: 'Sunnysprings Skin and Smile'
	};

	beforeEach(angular.mock.module('doctorSearchApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function () {
            return $controller('searchCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should have doctors', function() {
        var controller = createController();
        expect(scope.doctors).toBeDefined();
    });

    it('should have Mary as the first doctor', function() {
        var controller = createController();
        expect(scope.doctors.details[0]).toEqual(first_doctor);
    });

    it('should not equal ABC', function() {
        var controller = createController();
        expect(scope.doctors.details[0]).not.toEqual("ABC");
    });
});
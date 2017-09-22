describe('mapCtrl', function() {
    var scope, createController;

    // vendor: ["https://maps.googleapis.com/maps/api/js?key=AIzaSyDBB5hxZUdxmzG7ZwDq4SvzGmRoaKGs1Gs&libraries=places"];

    var first_park = { 
        name: 'Sea World Australia',
        lat: -27.9572369,
        lng: 153.4233274,
        country: "Australia",
        description: 'My personal favorite! I love seeing the Polar Bears and the Seals.',
        image: "polarbears"
    };

    beforeEach(angular.mock.module('mapApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function () {
            return $controller('mapCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should have themeparks', function() {
        var controller = createController();
        expect(scope.themepark).toBeDefined();
    });

    it('should have sea world as first themepark', function() {
        var controller = createController();
        expect(scope.themepark.details[0]).toEqual(first_park);
    });

    it('should not equal ABC', function() {
        var controller = createController();
        expect(scope.themepark.details[0]).not.toEqual("ABC");
    });
});
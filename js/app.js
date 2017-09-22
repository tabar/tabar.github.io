(function() {
    'use strict';
        var app = angular.module("mapApp", []);
        app.controller("mapCtrl", ["$scope", "$http", function($scope, $http){
            $scope.themepark = {
                details:[
                    { 
                        name: 'Sea World Australia',
                        lat: -27.9572369,
                        lng: 153.4233274,
                        country: "Australia",
                        description: 'My personal favorite! I love seeing the Polar Bears and the Seals.',
                        image: "polarbears"
                    },
                    { 
                        name: 'Dreamworld',
                        lat: -27.8635028,
                        lng: 153.3130644,
                        country: "Australia",
                        description: 'My favorite rides are The Claw and Kung Fu Panda.  Warning lots of spinning rides, prepare to get dizzy!',
                        image: "claw"
                    },
                    { 
                        name: 'Movie World',
                        lat: -27.9064462,
                        lng: 153.3103893,
                        country: "Australia",
                        description: 'Superman Escape is the best ride here! 0 to 100km in two seconds.',
                        image: "superman"
                    },
                    { 
                        name: 'Universal Studios Singapore',
                        lat: 1.2541727,
                        lng: 103.820856,
                        country: "Singapore",
                        description: 'My favorite part of the park was Jurassic Park.  My favorite ride was Transformers.',
                        image: "jurassicpark"
                    },
                    { 
                        name: 'Universal Studios Osaka',
                        lat: 34.6654464,
                        lng: 135.4301495,
                        country: "Japan",
                        description: 'It was great to explore Harry Potter World.  My favorite ride was The Flying Dinosaur, the queue took three hours but it was worth it.',
                        image: "harrypotter"
                    },
                    { 
                        name: 'Tokyo Sea',
                        lat: 35.6267151,
                        lng: 139.8828892,
                        country: "Japan",
                        description: 'Beautiful park with lots of classic Disney characters.',
                        image: "sea"
                    },
                    { 
                        name: 'Disneyland',
                        lat: 33.8120962,
                        lng: -117.9211629,
                        country: "USA",
                        description: 'Great rides and I had a Darth By Chocolate dessert.',
                        image: "castle"
                    },
                    { 
                        name: 'Universal Studios Hollywood',
                        lat: 34.1381212,
                        lng: -118.355567,
                        country: "USA",
                        description: 'My favorite ride was the Jurassic Park water ride.  I also really enjoyed the studio tour.',
                        image: "dinosaur"
                    }
                ]
            }

            // Theme Parks
            $scope.park = $scope.themepark.details[0];

            $scope.changePark = function(park) {
                $scope.currentpark = park;
                $scope.newlat = park.lat;
                $scope.newlong = park.lng;

                $scope.map = new google.maps.Map(document.getElementById('map'), {
                   center: {lat: $scope.newlat, lng: $scope.newlong},
                   zoom: 12
                });

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng($scope.newlat, $scope.newlong),
                });
            }

            google.maps.event.addDomListener(window, 'load', $scope.changePark($scope.themepark.details[0]));

            // Favorite City
            $scope.yourlat = 40.7128;
            $scope.yourlong = -74.0059;
            $scope.searchBy = 'museum';

            $scope.findYours = function() {
                $scope.map = new google.maps.Map(document.getElementById('yourmap'), {
                   center: {lat: $scope.yourlat, lng: $scope.yourlong},
                   zoom: 15
                });

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng($scope.yourlat, $scope.yourlong),
                });

                var place = new google.maps.places.PlacesService($scope.map);

                var data = place.nearbySearch({
                    location: new google.maps.LatLng($scope.yourlat, $scope.yourlong),
                    radius: '500',
                    type: [$scope.searchBy]
                }, callback);

                function callback(results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }
                    }
                }

                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: place.geometry.location
                    });
                }
            }
            google.maps.event.addDomListener(window, 'load', $scope.findYours);
    }]);
})();

require("angular/angular");
require("angular-mocks/angular-mocks");

var homeController = require("../../../../src/app/js/controllers/homeCtrl");

describe("Controller: HomeCtrl", function () {
    var scope,
        ctrl;

    beforeEach(function () {
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();

            ctrl = $controller(homeController, {
                $scope: scope
            });
        });
    });
    describe("Basic Test", function () {
        it("will set value to this is a test", function () {
            expect(scope.msg).toBe('This is a Test');
        });

    });

});
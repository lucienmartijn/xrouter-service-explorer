"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movies_module_1 = require("./movies.module");
describe('MoviesModule', function () {
    var moviesModule;
    beforeEach(function () {
        moviesModule = new movies_module_1.MoviesModule();
    });
    it('should create an instance', function () {
        expect(moviesModule).toBeTruthy();
    });
});
//# sourceMappingURL=movies.module.spec.js.map
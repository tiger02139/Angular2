System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pet;
    return {
        setters:[],
        execute: function() {
            Pet = (function () {
                function Pet(name, price, category) {
                    this.name = name;
                    this.price = price;
                    this.category = category;
                }
                return Pet;
            }());
            exports_1("Pet", Pet);
        }
    }
});
//# sourceMappingURL=pet.js.map
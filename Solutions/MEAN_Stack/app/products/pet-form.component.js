System.register(['@angular/core', '@angular/router', './pet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pet_1;
    var PetFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pet_1_1) {
                pet_1 = pet_1_1;
            }],
        execute: function() {
            PetFormComponent = (function () {
                //ADDED FOR ROUTER **********************
                function PetFormComponent(_router) {
                    this._router = _router;
                    this.categories = ['Dog', 'Cat',
                        'Rabbit', 'Other'];
                    this.model = new pet_1.Pet('Corgi', '', this.categories[0]);
                    this.submitted = false;
                    this.active = true;
                }
                PetFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                //ADDED FOR BACK BUTTON **********************
                PetFormComponent.prototype.onBack = function () {
                    this._router.navigate(['/products']);
                };
                PetFormComponent.prototype.newPet = function () {
                    var _this = this;
                    this.model = new pet_1.Pet('', '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                PetFormComponent = __decorate([
                    core_1.Component({
                        selector: 'pet-form',
                        templateUrl: 'app/products/pet-form.component.html' //UPDATED path ********************************
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], PetFormComponent);
                return PetFormComponent;
            }());
            exports_1("PetFormComponent", PetFormComponent);
        }
    }
});
//# sourceMappingURL=pet-form.component.js.map
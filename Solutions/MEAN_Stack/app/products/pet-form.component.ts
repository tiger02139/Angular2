import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router } from '@angular/router';  //ADDED ROUTER **********************

import { Pet }    from './pet';

@Component({
  selector: 'pet-form',
  templateUrl: 'app/products/pet-form.component.html'  //UPDATED path ********************************
})
export class PetFormComponent {

	//ADDED FOR ROUTER **********************
    constructor(private _router: Router) {
    }

  categories = ['Dog', 'Cat',
            'Rabbit', 'Other'];

  model = new Pet('Corgi',  '',  this.categories[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  //ADDED FOR BACK BUTTON **********************
   onBack(): void {
        this._router.navigate(['/products']);
    }

  active = true;

  newPet() {
    this.model = new Pet('', '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
 





}



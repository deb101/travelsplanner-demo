import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Place } from './../../models/place';

@Component({
  selector: 'tp-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.css']
})
export class AddPlacesComponent implements OnInit {
  placeForm: FormGroup;
  model: Place;
  submittedModel: Place;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.model = new Place( 1, 'Bangalore', 'Karnataka', 'tfth', 'adas', 'India');
    
    this.placeForm = this.formBuilder.group({
        name: [this.model.name],
        state: [this.model.state],
        description: [this.model.description],
        imgPath: [this.model.imgPath],
        country: [this.model.country]
    });
  }
  onSubmit({ value, valid }: { value: Place, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}
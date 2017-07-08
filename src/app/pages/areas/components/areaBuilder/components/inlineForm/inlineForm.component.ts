import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AreasService } from '../../../../areas.service'

interface Fields {
	title: string,
	area_profile: Array<any>,
	level: string,
}

@Component({
  selector: 'inline-form',
  styleUrls: ['./inlineForm.scss'],
  templateUrl: './inlineForm.html',
})

export class InlineForm {
	public fields: Fields;
  public createAreaForm:FormGroup;
  public title:AbstractControl;
  public area_profile:AbstractControl;
  public level:AbstractControl;
  public submitted:boolean = false;
  private hideInput: boolean = true;
 	private inputs: Array<any>;

  constructor(fb:FormBuilder, private areaService: AreasService) {
  	this.createAreaForm = fb.group({
  		'title': ['Enter a title for the area', Validators.compose([Validators.required ] ) ],
  		'level': ['', Validators.compose([Validators.required ] ) ],
  		'area_profile': ['', Validators.compose([Validators.required ] ) ],
  	});
  	this.title = this.createAreaForm.controls['title'];
  	this.level = this.createAreaForm.controls['level'];
  	this.area_profile = this.createAreaForm.controls['area_profile']
  }

  onSubmit() {
    // this.submitted = true;
    if (this.createAreaForm.valid) {
      this.areaService.create({area: this.createAreaForm.value})
      .then((data) => {
      	// TODO: Clear form after submission
      	console.log(this.createAreaForm)
      });
    }
  }

  public hideInputs(inputs: Array<any>) {
  	this.hideInput = false;
  	this.createAreaForm.controls['area_profile'].setValue(inputs);
  	this.inputs = inputs;
  }

}

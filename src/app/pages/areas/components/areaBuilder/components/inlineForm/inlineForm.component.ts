import {Component} from '@angular/core';

@Component({
  selector: 'inline-form',
  styleUrls: ['./inlineForm.scss'],
  templateUrl: './inlineForm.html',
})
export class InlineForm {
  private hideInput: boolean = true;
 	private inputs: Array<any>;
  // @Input() hideInputs: boolean = true;
  // @Input() minor: number;
  // changeLog: string[] = [];
 

  public hideInputs(inputs: Array<any>) {
  	this.hideInput = false;
  	this.inputs = inputs;
  }

  constructor() {
  }

}

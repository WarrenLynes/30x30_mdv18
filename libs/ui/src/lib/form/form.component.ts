import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from '@mdv18/core-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv18-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  form: FormGroup;

  @Input() selected: Item;
  @Output() saveItem = new EventEmitter<Item>();
  @Output() deleteItem = new EventEmitter<Item>();
  @Output() resett = new EventEmitter();

  constructor() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes.selected ) {
      this.buildForm();
    }
  }

  submit() {
    if(this.form.valid) {
      this.saveItem.emit({...this.selected, ...this.form.value});
      this.form.reset();
    }
  }

  buildForm() {
    if ( this.selected && this.selected.id ) {
      this.form = new FormGroup({
        name: new FormControl(this.selected.name),
        description: new FormControl(this.selected.description),
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
      });
    }
  }

  onCancel() {
    this.form.reset();
    this.resett.emit();
  }

}

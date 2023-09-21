import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent  {
  empForm: FormGroup;

  constructor(private _fb: FormBuilder, private _empService:EmployeeService, private _dialogRef: MatDialogRef<EmpAddEditComponent>) {
    this.empForm= this._fb.group({
      firstname:'',
      lastname:'',
      action:''
    });
   }

   onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          alert('success');
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.error(err);
        },
      })
    }
   }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { DataServiceService } from '../Services/data-service.service'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  componentproperty;
  formdata;
  
  constructor(private router: Router,private stateService: DataServiceService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      FirstName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      LastName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      Phone: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      Address: new FormControl("", Validators.compose([
        Validators.required,
      ]))
    });
  }

  onClickSubmit(data) {
    if(this.formdata.valid){
    this.stateService.data=data;
    this.router.navigateByUrl('details',{state: {data: data}});
    // console.log(data);
    }
    else
    {
      console.log('Invalid form');
    }
   }

}

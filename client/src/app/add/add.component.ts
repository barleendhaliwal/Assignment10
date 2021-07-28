import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: HttpRequestService) { }
  
  ngOnInit(): void {
  }
  addUserForm=this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3)]],
    middleName:[''],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required]],
    phoneNumber:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    role:['',[Validators.required]],
    address:['',[Validators.required]],
    customerName:['',[Validators.required]]
  })
   onSubmit(){
     this.httpService.post(this.addUserForm.value).subscribe(response=>{
      alert(response.message + "\nSee Show Users to see Changes !")
    }, error => {
      console.log(error)
      alert(error.error.message)
      
    })
     console.log(this.addUserForm)
   }
}

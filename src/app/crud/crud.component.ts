import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  login: FormGroup |any;
  data: any;


  constructor(private serv:SerService) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      name:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      qualification:new FormControl('',Validators.required),
      experience:new FormControl('',Validators.required),
      place:new FormControl('',Validators.required)
    })
  }
getdata(){
  this.serv.getdata().subscribe((res:any)=>{
    this.data=res;
    console.log(this.data);
  })

}

}

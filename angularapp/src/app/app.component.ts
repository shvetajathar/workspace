import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  employeeName:'John Doe';
 
  isPresent=true;
  onToggleAttendance(){
    this.isPresent=!this.isPresent;
   
  }
  imageUrl='https://test-image-url.com/johndoe.jpg';
  colSpan=2;
 
  isSpecial=true;
 
  textColor='red';
  employeeStatus='';
}
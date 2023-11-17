import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angularapp';
  employeeName:string='John Doe';

  isPresent:boolean=true;
  onToggleAttendance(){
    this.isPresent=!this.isPresent;
    
  }
  imageUrl='https://test-image-url.com/johndoe.jpg';
  colSpan=2;

  isSpecial=true;

  textColor='red';
  employeeStatus='';
}

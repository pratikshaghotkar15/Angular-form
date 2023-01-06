import { Component } from '@angular/core';
import {User} from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
topics=['angular','react','vue'];
topicHasError=true;
submitted=false;
errorMsg='';
  title = 'angularform';
  userModel=new User('rob','rob@test',5555989879,'default','morning',true);
  
  
  
  validateTopic(value:any){
  if (value=='default')
  {
  this.topicHasError=true;
  }else
  {
  this.topicHasError=false;
  }
  }
  
  constructor(private enrollmentService:EnrollmentService){}
  
  onSubmit(){
  
 // console.log(this.userModel);
 this.submitted=true;
 this.enrollmentService.enroll(this.userModel)
 .subscribe(
 data=>console.log('success!',data),
 error=>this.errorMsg=error.statusText
 )
  }
  
  
}




















/* <div ngModelGroup="address">
<div class="form-group">
<label>Street</label>
<input type="text" class="form-control" name="street" ngModel>
</div>

<div class="form-group">
<label>City</label>
<input type="text" class="form-control" name="city" ngModel>
</div>

<div class="form-group">
<label>State</label>
<input type="text" class="form-control" name="state" ngModel>
</div>

<div class="form-group">
<label>Postal Code</label>
<input type="text" class="form-control" name="postalcode" ngModel>
</div>

</div>
*/

/*{{userForm.value | json}}.
<hr/>
{{userModel | json}}

{{name.className}}
for the valid required necessary

{{name.pristine}}
{{name.untouched}}
{{name.valid}}
*/

//<small  class="text-danger" [class.d-none]="phone.valid || phone.untouched"> Phone no must be 10 digit</small>
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };


  constructor(
    private Jarvis: AuthService,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
   
  }


  onSubmit() {
    this.toastr.info('Wait...','' ,{timeOut: 3000,closeButton:true,progressBar:true});
     
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => {
        this.handleResponse(data);
      },
       error => this.toastr.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.toastr.info(res.data,'' ,{timeOut: 0});
    this.form.email = null;
  }
}

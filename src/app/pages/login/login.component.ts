import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup | undefined;
  killall = new Subject();
  loading = false;

  constructor(public fb: FormBuilder,private api: ApiService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)])
    });
  }

  logIn() {
    this.loading = true;
    this.api.login(this.authForm?.value).pipe(
      take(1),
      takeUntil(this.killall)
    ).subscribe({
      next: resp => {
        this.loading = false
        console.log(resp);

      },
      error : err =>{
        console.log(err);
        this.loading = false;
      }
    }
    );
  }

}

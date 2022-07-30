import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators,
    FormBuilder,
} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    registerform: FormGroup;

    constructor(private fb: FormBuilder) {
        this.registerform = new FormGroup({
            name: new FormControl('', [
                // Validators.minLength(3),
                Validators.required,
            ]),
            email: new FormControl('', [Validators.required, Validators.email]),
            username: new FormControl('', [
                // Validators.minLength(3),
                Validators.required,
                Validators.pattern('.*\\S.*[a-zA-z0-9_-]'),
            ]),
            password: new FormControl('', [
                Validators.minLength(8),
                Validators.required,
                // Validators.pattern(
                //     '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[#$@_!%&*?])[A-Za-zd#$@_!%&*?]{8,}$'
                // ),
            ]),
            ConfirmPassword: new FormControl('', [
                Validators.minLength(8),
                Validators.required,
                // Validators.pattern(
                //     '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[#$@_!%&*?])[A-Za-zd#$@_!%&*?]{8,}$'
                // ),
            ]),
        });
    }

    ngOnInit(): void {}

    submitfun() {
        console.log(this.registerform);
    }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoButtonModule,
  PoDynamicModule,
  PoInfoModule,
  PoMenuModule,
  PoModalModule,
  PoModule,
  PoNotificationService,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './load-service';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PoModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoButtonModule,
    PoDynamicModule,
    PoModalModule,
    PoInfoModule,
  ],
  providers: [PoDynamicFormContainerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reactiveForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,
    public poNotification: PoNotificationService,
  ) {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }
}

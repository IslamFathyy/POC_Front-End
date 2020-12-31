import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FlightDetails } from 'src/Models/FlightDetails.model';
import { FlightLevel } from 'src/Models/FlightLevel.model';
import { OrderInfo } from 'src/Models/OrderInfo.model';
import { Payment } from 'src/Models/Payment.model';
import { PaymentMethod } from 'src/Models/PaymentMethod.model';
import { RegistrationInfo } from 'src/Models/RegistrationInfo.model';
import { AddOrderService } from '../Services/add-order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd-App';
  

}

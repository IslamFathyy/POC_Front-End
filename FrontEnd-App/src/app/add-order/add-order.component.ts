import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { FlightDetails } from 'src/Models/FlightDetails.model';
import { FlightLevel } from 'src/Models/FlightLevel.model';
import { OrderInfo } from 'src/Models/OrderInfo.model';
import { Payment } from 'src/Models/Payment.model';
import { PaymentMethod } from 'src/Models/PaymentMethod.model';
import { RegistrationInfo } from 'src/Models/RegistrationInfo.model';
import { AddOrderService } from '../../Services/add-order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  data:any;
  payMethod: any;
  flightLevels:FlightLevel[] = [{Id:"1",Name:"Business"} , {Id:"2",Name:"Economy"},{Id:"3",Name:"VIP"}];
  paymentMethods:PaymentMethod[] = [{Id:"1",Name:"Credit Card"} , {Id:"2",Name:"Pay Cash"}];

  private registerationInfo: RegistrationInfo = new RegistrationInfo();
  private flightInfo: FlightDetails = new FlightDetails();
  private paymentMethodInfo:Payment = new Payment();
  private TicketOrderInfo:OrderInfo = new OrderInfo(); 

  constructor(private addService:AddOrderService, private router:Router) {}

  ngOnInit() {
  }

  registerInfo(registerationInfo:NgForm)
  {
    if(registerationInfo.valid)
    {
      this.registerationInfo.FirstName = registerationInfo.value.firstName;
      this.registerationInfo.LastName = registerationInfo.value.lastName;
      this.registerationInfo.Email = registerationInfo.value.email;
      this.registerationInfo.Mobile = registerationInfo.value.mobile;
      this.registerationInfo.BirthDate = registerationInfo.value.birthDate;
    }
  }

  flightDetailsInfo(flightDetailsInfoForm:NgForm)
  {
    this.flightInfo.FlightDate = flightDetailsInfoForm.value.flightDate;
    this.flightInfo.FlightLevelId= flightDetailsInfoForm.value.flightLevel;
  }

  paymentInfo(paymentMethodInfoForm:NgForm)
  {
    this.paymentMethodInfo.CreditCardNumber = paymentMethodInfoForm.value.creditCard;
    this.paymentMethodInfo.Address = paymentMethodInfoForm.value.address;
    this.paymentMethodInfo.PaymentMethodId = paymentMethodInfoForm.value.paymentMethod;
  }

  book()
  {
    this.TicketOrderInfo = {registerationInfo:this.registerationInfo , flightInfo:this.flightInfo , paymentMethodInfo:this.paymentMethodInfo};
    this.addService.bookOrder(this.TicketOrderInfo).subscribe
    (
      (res) => {
        this.data = res;
        if(this.data)
        {
          this.router.navigate(['ListOrders']);
        }
        else
        {
          alert("Sorry try again");
        }
      }
    );

    
  }
}

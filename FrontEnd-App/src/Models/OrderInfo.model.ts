import { FlightDetails } from "./FlightDetails.model";
import { Payment } from "./Payment.model";
import { RegistrationInfo } from "./RegistrationInfo.model";

export class OrderInfo
{
    registerationInfo:RegistrationInfo;
    flightInfo:FlightDetails;
    paymentMethodInfo:Payment;
}
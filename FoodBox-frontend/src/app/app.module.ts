import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login/admin-login.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { ManagePurchaseComponent } from './components/manage-purchase/manage-purchase.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    CartComponent,
    HeaderComponent,
    ManageCustomersComponent,
    ManagePurchaseComponent,
    OrderSummaryComponent,
    PaymentGatewayComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

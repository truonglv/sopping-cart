import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/vi";
registerLocaleData(localeFr, "vi");
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartHeaderComponent } from "./cart-header/cart-header.component";
import { CartBodyComponent } from "./cart-body/cart-body.component";
import { CartFooterComponent } from "./cart-footer/cart-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartBodyComponent,
    CartFooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

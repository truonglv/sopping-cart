import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PromocodeService {
  getPromoCode(code: string): number {
    if (code == "ABC") {
      return 300000;
    } else if (code == "abc") {
      return 30000;
    }
  }
}

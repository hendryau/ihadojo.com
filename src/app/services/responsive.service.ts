import { Injectable } from '@angular/core';

@Injectable()
export class ResponsiveService {

  public getScreenSize(): "xl" | "l" | "m" | "s" | "xs" {
    if (this.isXtraLarge()) {
      return "xl";
    } else if (this.isLarge()) {
      return "l";
    } else if (this.isMedium()) {
      return "m";
    } else if (this.isSmall()) {
      return "s";
    } else {
      return "xs";
    }
  }

  public isXtraLarge(): boolean {
    return window.innerWidth >= 1200;
  }

  public isLarge(): boolean {
    return window.innerWidth < 1200 && window.innerWidth >= 992;
  }

  public isMedium(): boolean {
    return window.innerWidth < 992 && window.innerWidth >= 768;
  }

  public isSmall(): boolean {
    return window.innerWidth < 768 && window.innerWidth >= 576;
  }

  public isXtraSmall(): boolean {
    return window.innerWidth < 576;
  }
}

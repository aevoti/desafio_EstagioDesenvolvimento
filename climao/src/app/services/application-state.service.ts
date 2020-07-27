import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private isMobileResolution: boolean;

  constructor() {
    this.isMobileResolution = window.innerWidth < 768;
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}

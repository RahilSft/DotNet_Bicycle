import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class BicycleComponent {
  
  public http: HttpClient;
  public currentCount = 0;
  public name: string | undefined;
  public email: string | undefined;
  public description: string | undefined;
   

  ngOnInit(): void {
    console.log(global);
    this.getBiCycleService();
  }
    getBiCycleService() {
      this.http
        .post<Response>(this.baseUrl + 'login/GetAdminConnections' })
        .subscribe(
          result => {
            this.result = result;

            if (result.intStatus == 1) {
              this.connectionsList = JSON.parse(result.jsonResponse);
              this.isLoadingMyConnection = false;
            } else if (result.intStatus == -1) {
              this.connectionsList = JSON.parse(result.jsonResponse);
              this.isLoadingMyConnection = false;
            } else if (result.intStatus == 0) {
              this.errMessage = result.responseMessage;
              this.isLoadingMyConnection = false;
            } else {
              this.errMessage = result.responseMessage;
              this.isLoadingMyConnection = false;
            }
          },
          error => console.error(error),
        );
    }

  createService() {

    this.router.navigate(['/addbicycle/create/']);
  }
}

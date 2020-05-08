import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private toast: ToastrService) {}

  public showError = (message: string) => {
    this.toast.error(message, 'Sorry something went wrong');
  };
  showSuccess = (message: string) => {
    console.log(message);

    this.toast.success(message, 'Process Successful');
  };
  showWarning = (message: string) => {
    this.toast.warning(message);
  };
}

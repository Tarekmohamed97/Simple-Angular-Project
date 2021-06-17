import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  snackError(error: string) {
    this._snackBar.open(error, 'Dismiss', {
      duration: 5000,
    });
  }
  snackSuccess(msg:string){
    this._snackBar.open(msg, 'succeeded', {
      duration: 5000,
    });
  }

  constructor(private _snackBar: MatSnackBar) {
  }
}

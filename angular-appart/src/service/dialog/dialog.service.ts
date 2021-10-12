import {Injectable} from '@angular/core';
// @ts-ignore
import {MatDialog} from '@angular/material/dialog';
import {OkDialogComponent} from "../../app/components/dialogs/ok-dialog/ok-dialog.component";
import {YesNoDialogComponent} from "../../app/components/dialogs/yes-no-dialog/yes-no-dialog.component";

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }


  showOkDialog(message: any) {
    let ref = this.dialog.open(OkDialogComponent, {
      data: {
        message: message
      }
    });
  }

  async showYesNoDialog(message: any) {

    let ref = this.dialog.open(YesNoDialogComponent, {
      data: {
        message: message
      }
    });
    return await ref.afterClosed().toPromise();
  }

}

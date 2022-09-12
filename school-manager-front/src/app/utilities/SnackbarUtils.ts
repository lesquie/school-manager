import {MatSnackBar} from '@angular/material/snack-bar';

export default class SnackbarUtils {
    static snackbar: MatSnackBar;
    
    static showUserInformation(message : string, level : string) {
        this.snackbar.open(message, 'Fermer', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['mat-toolbar', 'mat-primary']
        })
    }

}
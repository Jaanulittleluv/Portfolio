import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; // <<< ADDED MatSnackBar and MatSnackBarModule

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  // <<< ADDED MatSnackBarModule to imports
  imports: [MatTabsModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule,MatListModule, MatSnackBarModule], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // Inject MatSnackBar service
  constructor(private snackBar: MatSnackBar) {} // <<< ADDED Constructor

  phoneNumber = signal('+94754019752');
  linkedinUrl = signal('https://www.linkedin.com/in/janani-thavarajah-52987a1b2');
  githubUrl = signal('https://github.com/Jaanulittleluv');
  cvUrl = signal('YOUR_CV_DOWNLOAD_LINK_HERE');
  prj1URL = signal('https://github.com/Jaanulittleluv/BookRates');
  prj2URL = signal('https://github.com/Jaanulittleluv/BookApp');
  prj3URL = signal('https://github.com/Jaanulittleluv/SpringBoot');
  prj4URL = signal('https://github.com/Jaanulittleluv/sql-employee-data-management');
  prj5URL = signal('https://github.com/Jaanulittleluv/Veget-store');
  prj6URL = signal('https://github.com/Jaanulittleluv/Bear-Jump');

  async copyPhoneNumber() {
  try {
    const number = this.phoneNumber(); // Get the phone number signal value
    await navigator.clipboard.writeText(number);
    console.log('Phone number copied to clipboard:', number);
    
    // Show a snackbar notification to the user
    this.snackBar.open('Number is copied', 'Dismiss', { // <<< ADDED SNACKBAR
        duration: 2000, // Show for 2 seconds
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
    });
  } catch (err) {
    console.error('Failed to copy phone number:', err);
    this.snackBar.open('Failed to copy number', 'Dismiss', {duration: 2000});
  }
}

  imagepath = signal('https://www.svgrepo.com/show/327335/logo-angular.svg');
  imagepath1 = signal('https://www.svgrepo.com/show/327386/logo-python.svg');
  imagepath2 = signal('https://www.svgrepo.com/show/473780/selenium.svg');
  imagepath3 = signal('https://images.icon-icons.com/3261/PNG/512/reactjs_logo_icon_206693.png');
  imagepath4 = signal('https://www.svgrepo.com/show/503404/language-typescript.svg');
  imagepath5 = signal('https://www.svgrepo.com/show/473731/mysql.svg');
  imagepath6 = signal('https://images.freeimages.com/fic/images/icons/2779/simple_icons/4096/php_4096_black.png');
  imagepath7 = signal('https://www.svgrepo.com/show/330083/bootstrap.svg');
  imagepath8 = signal('https://www.svgrepo.com/show/333604/spring-boot.svg');
  imagepath9 = signal('https://www.svgrepo.com/show/327348/logo-css3.svg');
  imagepath10 = signal('https://www.svgrepo.com/show/361494/figma-logo.svg');
}
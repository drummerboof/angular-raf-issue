import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isInZone: string;

  constructor(private changeDetector: ChangeDetectorRef) {}
  ngOnInit() {
    window.requestAnimationFrame(() => {
      this.isInZone = NgZone.isInAngularZone() ? 'In Zone!' : 'Not in Zone!';
      this.changeDetector.detectChanges();
    });
  }
}

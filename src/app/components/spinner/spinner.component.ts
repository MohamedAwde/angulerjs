import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="p-5 d-flex justify-content-center">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
  `,
})
export class SpinnerComponent {}

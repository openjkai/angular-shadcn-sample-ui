import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsPage {}

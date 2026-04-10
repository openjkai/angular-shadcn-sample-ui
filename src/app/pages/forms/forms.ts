import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  UbCardContentDirective,
  UbCardDescriptionDirective,
  UbCardDirective,
  UbCardHeaderDirective,
  UbCardTitleDirective,
} from '~/components/ui/card';

@Component({
  selector: 'app-forms-page',
  imports: [
    UbCardDirective,
    UbCardHeaderDirective,
    UbCardTitleDirective,
    UbCardDescriptionDirective,
    UbCardContentDirective,
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsPage {}

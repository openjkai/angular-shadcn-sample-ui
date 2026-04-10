import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  UbCardContentDirective,
  UbCardDescriptionDirective,
  UbCardDirective,
  UbCardHeaderDirective,
  UbCardTitleDirective,
} from '~/components/ui/card';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    UbCardDirective,
    UbCardHeaderDirective,
    UbCardTitleDirective,
    UbCardDescriptionDirective,
    UbCardContentDirective,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}

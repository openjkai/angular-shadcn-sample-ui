import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

import { UbButtonDirective } from '~/components/ui/button';
import {
  UbCardContentDirective,
  UbCardDescriptionDirective,
  UbCardDirective,
  UbCardHeaderDirective,
} from '~/components/ui/card';

@Component({
  selector: 'app-not-found-page',
  imports: [
    RouterLink,
    NgIcon,
    UbButtonDirective,
    UbCardDirective,
    UbCardHeaderDirective,
    UbCardDescriptionDirective,
    UbCardContentDirective,
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}

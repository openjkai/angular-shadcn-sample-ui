import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

import { UbButtonDirective } from '~/components/ui/button';
import {
  UbCardContentDirective,
  UbCardDescriptionDirective,
  UbCardDirective,
  UbCardHeaderDirective,
  UbCardTitleDirective,
} from '~/components/ui/card';

@Component({
  selector: 'app-contact-page',
  imports: [
    NgIcon,
    UbButtonDirective,
    UbCardDirective,
    UbCardHeaderDirective,
    UbCardTitleDirective,
    UbCardDescriptionDirective,
    UbCardContentDirective,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {}

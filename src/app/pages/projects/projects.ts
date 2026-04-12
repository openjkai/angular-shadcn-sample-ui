import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

import { UbButtonDirective } from '~/components/ui/button';
import {
  UbCardContentDirective,
  UbCardDescriptionDirective,
  UbCardDirective,
  UbCardFooterDirective,
  UbCardHeaderDirective,
  UbCardTitleDirective,
} from '~/components/ui/card';

export interface PortfolioProject {
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
}

const PROJECTS: readonly PortfolioProject[] = [
  {
    title: 'This portfolio',
    description:
      'Angular 21 standalone app with Tailwind CSS v4, shadcn-ng card primitives, and a responsive app shell with light/dark theme.',
    tags: ['Angular', 'Tailwind', 'shadcn-ng'],
    href: 'https://github.com',
    linkLabel: 'View source',
  },
  {
    title: 'Dashboard sample',
    description:
      'Dense grid layout for metrics and status cards—useful as a starting point for admin or analytics views.',
    tags: ['Layout', 'UI patterns'],
    href: '/dashboard',
    linkLabel: 'Open demo',
  },
  {
    title: 'Forms sample',
    description:
      'Form patterns and validation placeholders—extend with your control library or reactive forms.',
    tags: ['Forms', 'Accessibility'],
    href: '/forms',
    linkLabel: 'Open demo',
  },
];

@Component({
  selector: 'app-projects-page',
  imports: [
    NgIcon,
    UbButtonDirective,
    UbCardDirective,
    UbCardHeaderDirective,
    UbCardTitleDirective,
    UbCardDescriptionDirective,
    UbCardContentDirective,
    UbCardFooterDirective,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPage {
  protected readonly projects = PROJECTS;
}

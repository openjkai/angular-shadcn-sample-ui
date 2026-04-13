import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  UbCardContentDirective,
  UbCardDescriptionDirective,
  UbCardDirective,
  UbCardHeaderDirective,
  UbCardTitleDirective,
} from '~/components/ui/card';

export interface SkillItem {
  label: string;
}

export interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

const SKILLS: readonly SkillItem[] = [
  { label: 'Angular' },
  { label: 'TypeScript' },
  { label: 'Tailwind CSS' },
  { label: 'RxJS' },
  { label: 'Accessibility' },
  { label: 'REST APIs' },
];

const TIMELINE: readonly TimelineItem[] = [
  {
    title: 'Building this portfolio',
    period: 'Now',
    description:
      'Standalone components, lazy routes, theme toggle, and UI patterns you can extend with your own content.',
  },
  {
    title: 'Your previous role or education',
    period: 'Year range',
    description:
      'Replace this copy with a short summary of impact, stack, or outcomes. Keep each line scannable.',
  },
];

@Component({
  selector: 'app-about-page',
  imports: [
    UbCardDirective,
    UbCardHeaderDirective,
    UbCardTitleDirective,
    UbCardDescriptionDirective,
    UbCardContentDirective,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  protected readonly skills = SKILLS;
  protected readonly timeline = TIMELINE;
}

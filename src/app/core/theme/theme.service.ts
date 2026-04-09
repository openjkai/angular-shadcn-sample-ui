import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal, effect } from '@angular/core';

const STORAGE_KEY = 'angular-shadcn-sample-ui-theme';

export type ThemePreference = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;

  /** User choice; `system` follows OS preference. */
  readonly preference = signal<ThemePreference>(this.readStored());

  /** Resolved dark mode after applying `preference` (and media query for system). */
  readonly isDark = signal(false);

  constructor() {
    effect(() => {
      this.apply(this.preference());
    });

    this.window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.preference() === 'system') {
        this.apply('system');
      }
    });
  }

  /** Toggle between light and dark (persists explicit choice). */
  toggle(): void {
    this.setPreference(this.isDark() ? 'light' : 'dark');
  }

  setPreference(pref: ThemePreference): void {
    this.preference.set(pref);
    try {
      this.window?.localStorage.setItem(STORAGE_KEY, pref);
    } catch {
      /* ignore */
    }
  }

  private readStored(): ThemePreference {
    try {
      const v = this.window?.localStorage.getItem(STORAGE_KEY);
      if (v === 'light' || v === 'dark' || v === 'system') {
        return v;
      }
    } catch {
      /* ignore */
    }
    return 'system';
  }

  private apply(pref: ThemePreference): void {
    const root = this.document.documentElement;
    let dark = false;
    if (pref === 'dark') {
      dark = true;
    } else if (pref === 'light') {
      dark = false;
    } else {
      dark = this.window?.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
    }
    root.classList.toggle('dark', dark);
    this.isDark.set(dark);
  }
}

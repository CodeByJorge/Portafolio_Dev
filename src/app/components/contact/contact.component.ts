import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactConfig, ServiceInterest, SocialLink } from '../../config/portfolio.config';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() set contact(value: ContactConfig) {
    this.contactConfig = value;
    this.syncInterests(value.serviceInterests ?? []);
  }
  get contact(): ContactConfig {
    return this.contactConfig;
  }

  @Input() socials: SocialLink[] = [];
  @Input() title = 'Contact';
  @Input() subtitle = '';
  @Input() emailLabel = 'Email';
  @Input() whatsappLabel = 'WhatsApp';
  @Input() locationLabel = 'Location';
  @Input() socialsLabel = 'Socials';
  @Input() nameLabel = 'Your name';
  @Input() emailFieldLabel = 'Your email';
  @Input() companyLabel = 'Company';
  @Input() messageLabel = 'Your project';
  @Input() messagePlaceholder = '';
  @Input() interestsLabel = 'What are you interested in?';
  @Input() submitLabel = 'Send';
  @Input() sendingLabel = 'Sending…';
  @Input() successMessage = '';
  @Input() errorMessage = '';
  @Input() requiredHint = 'Required field';

  private contactConfig!: ContactConfig;

  // inject() rather than a constructor parameter: the form below is a field
  // initializer, which runs before constructor-assigned properties exist.
  private readonly fb = inject(FormBuilder);

  protected state: SubmitState = 'idle';

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(4000)]],
    interests: this.fb.array<FormControl<boolean>>([]),
    // Bots fill every field they find; a human never sees this one.
    website: [''],
  });

  protected get interests(): FormArray<FormControl<boolean>> {
    return this.form.controls.interests;
  }

  protected get serviceInterests(): ServiceInterest[] {
    return this.contactConfig?.serviceInterests ?? [];
  }

  protected get whatsappLink(): string | null {
    const number = this.whatsappDigits;
    return number ? `https://wa.me/${number}` : null;
  }

  /** Shown next to the link so the number is visible before anyone clicks. */
  protected get whatsappDisplay(): string {
    const number = this.whatsappDigits;
    return number ? `+${number}` : '';
  }

  private get whatsappDigits(): string {
    return this.contactConfig?.whatsapp?.replace(/\D/g, '') ?? '';
  }

  protected isInvalid(controlName: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  protected async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Honeypot tripped: pretend it worked rather than telling the bot otherwise.
    if (this.form.controls.website.value) {
      this.state = 'success';
      return;
    }

    const payload = this.buildPayload();
    const endpoint = this.contactConfig?.formEndpoint;

    // Without a configured endpoint the form would silently drop the lead,
    // so hand it to the visitor's mail client instead.
    if (!endpoint) {
      window.location.href = this.buildMailtoLink(payload);
      this.state = 'success';
      this.form.reset();
      return;
    }

    this.state = 'sending';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Form endpoint responded with ${response.status}`);
      }

      this.state = 'success';
      this.form.reset();
      this.syncInterests(this.serviceInterests);
    } catch {
      this.state = 'error';
    }
  }

  private buildPayload(): Record<string, string> {
    const { name, email, company, message } = this.form.getRawValue();

    return {
      name: name ?? '',
      email: email ?? '',
      company: company ?? '',
      message: message ?? '',
      interests: this.selectedInterestLabels().join(', '),
    };
  }

  private selectedInterestLabels(): string[] {
    return this.serviceInterests
      .filter((_, index) => this.interests.at(index)?.value)
      .map((interest) => interest.label);
  }

  private buildMailtoLink(payload: Record<string, string>): string {
    const body = [
      `${this.nameLabel}: ${payload['name']}`,
      `${this.emailFieldLabel}: ${payload['email']}`,
      payload['company'] ? `${this.companyLabel}: ${payload['company']}` : '',
      payload['interests'] ? `${this.interestsLabel} ${payload['interests']}` : '',
      '',
      payload['message'],
    ]
      .filter(Boolean)
      .join('\n');

    const subject = payload['company']
      ? `${this.title} — ${payload['name']} (${payload['company']})`
      : `${this.title} — ${payload['name']}`;

    return `mailto:${this.contactConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  /** Keeps one checkbox control per configured interest when the language changes. */
  private syncInterests(items: ServiceInterest[]): void {
    const array = this.form.controls.interests;
    array.clear({ emitEvent: false });
    items.forEach(() =>
      array.push(this.fb.nonNullable.control(false), { emitEvent: false }),
    );
  }

  getSocialIcon(id: string): string | null {
    switch (id) {
      case 'github':
        return '/icons/github_light.svg';
      case 'linkedin':
        return '/icons/linkedin.svg';
      case 'email':
        return '/icons/gmail.svg';
      default:
        return null;
    }
  }
}

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    static noWhitespace(message: string = 'Leading or trailing spaces are not allowed.'): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) {
                return null;
            }

            const isLeadingOrTrailing = control.value.startsWith(' ') || control.value.endsWith(' ');
            return isLeadingOrTrailing ? { whitespace: { message: message } } : null;
        };
    }
}

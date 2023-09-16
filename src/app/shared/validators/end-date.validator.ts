import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function endDateValidator(startDateControl: AbstractControl): ValidatorFn {
  return (endDateControl: AbstractControl): ValidationErrors | null => {
    const startDate = startDateControl.value as Date
    const endDate = endDateControl.value as Date

    if (startDate && endDate) {
       if (!(startDate <= endDate)){
       return  {endDateBeforeStartDate: true  }
      }
      
    }

    return null
  };
}
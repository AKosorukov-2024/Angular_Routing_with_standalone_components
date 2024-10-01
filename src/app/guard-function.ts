import { CanActivateFn } from '@angular/router';
export function guard(): CanActivateFn {

  return () => {
    const d = new Date();
    const day = d.getDay();
    if (day == 0) {
      return false;
    } else {
      return true;
    }
  }
}

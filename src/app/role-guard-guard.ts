import { CanActivateFn } from '@angular/router';
import { Authentication } from './authentication';
import { inject } from '@angular/core';


export const roleGuardGuard: CanActivateFn = (route, state) => {

  const authentication = inject(Authentication);

  console.log('roleGuardGuard called with route:', route, 'and state:', state);
  console.log(route.data)
  console.log(authentication.getJwtToken())
  return true;
};

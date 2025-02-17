import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../interfaces/user';
import { jwtDecode } from 'jwt-decode';

export const isTeacherGuard: CanActivateFn = () => {
  const _Router: Router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('userToken');
    if (!token) {
      _Router.navigate(['/login']);
      return false;
    }
    try {
      const user: User = jwtDecode(token);
      const { role } = user;
      if (role !== "Teacher") {
        _Router.navigate(['/home']);
        return false;
      }
    } catch (error) {
      _Router.navigate(['/login']);
      return false;
    }
  }
  return true;
};

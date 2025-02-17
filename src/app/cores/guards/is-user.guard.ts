import { jwtDecode } from 'jwt-decode';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../interfaces/user';
export const isUserGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('userToken');

    if (!token) {
      router.navigate(['/login']);
      return false;
    }

    try {
      const user: User = jwtDecode(token);
      const { role } = user;
      if (role !== "User") {
        router.navigate(['/home']);
        return false;
      }
    } catch (error) {
      router.navigate(['/login']);
      return false;
    }

  }
  return true;
};
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../interfaces/user';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export const isAdminGuard: CanActivateFn = () => {
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
        if (role !== "Admin") {
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
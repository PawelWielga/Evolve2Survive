import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ErrorHandler {
    handleError(error: HttpErrorResponse): string {
        if (isDevMode()) {
          if (error.status === 0) {
            console.error('An error occurred:', error.error);
          } else {
            console.error(
              `Backend returned code ${error.status}, body was: `, error.error);
          }
        }
    
        try { 
          return (Object.values(error.error.errors) as string[][])[0][0];
        }
        catch {
          
          return error?.error ?? 'Error, please try again later.';
        }
      }
}

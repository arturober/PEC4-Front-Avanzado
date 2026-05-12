import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req.clone({
    url: `https://api.rawg.io/api/${req.url}`
  }));
};

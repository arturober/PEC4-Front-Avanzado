import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  return next(
    req.clone({
      params: req.params.append('key', '155916d3f4ea42b083f18d4bcf3f811c'),
    }),
  );
};

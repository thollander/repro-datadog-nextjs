import tracer from 'dd-trace';

export function register() {
  tracer.init();
}

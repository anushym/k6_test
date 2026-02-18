import http from 'k6/http';
import { check, sleep } from 'k6';

// Options define the load pattern
export const options = {
  vus: 10,          // virtual users
  duration: '30s',  // test duration
};

export default function () {
  const url = 'https://test.k6.io';

  const res = http.get(url);

  // Assertions / checks
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // wait 1 second between iterations
}

import http from 'k6/http';
import { check } from 'k6';

// Create a custom metric as a Trend to track the number of iterations

export const options = {
    thresholds: {
      http_req_failed: ['rate<0.01'], // http errors should be less than 1%
      http_req_duration: ['p(95)<300'], // 95% of requests should be below 200ms
      http_req_waiting: ['p(95)<119'], // 95% of requests should be below 119ms
    },
    abortOnFail: false, 
    vus: 10, // Number of virtual users (concurrent users)
    duration: '30s', // Duration of the test
  };


export default function () {
  for (let id = 1; id <= 10; id++) {
    const res = http.get(`http://example.com/posts/${id}`, {
     tags: { name: 'PostsItemURL' }
    });

    check(res, {
        'body size is 1256 bytes': (r) => r.body.length == 1256,
        'is status 404': (r) => r.status === 404,
        'verify homepage text': (r) => r.body.includes('Example Domain')
      });

  }      
}

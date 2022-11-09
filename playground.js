const animals = ['lion', 'tiger', 'zebra', 'giraffe', 'elephant', 'kangaroo', 'bear', 'gorilla', 'fox'];

const animals2 = [
  { name: 'lion', continent: ['Africa', 'Asia'] },
  { name: 'tiger', continent: ['Asia'] },
  { name: 'zebra', continent: ['Africa'] },
  { name: 'giraffe', continent: ['Africa'] },
  { name: 'elephant', continent: ['Africa', 'Asia'] },
  { name: 'kangaroo', continent: ['Australia'] },
  { name: 'bear', continent: ['America', 'Europe', 'Asia'] },
  { name: 'gorilla', continent: ['Africa'] },
  { name: 'fox', continent: ['America', 'Europe', 'Asia', 'Africa'] }
];

const bestPractices = {
  name: 'Best Practices',
  evaluation: 'lighthouse',
  metrics: {
    browser_errors: {
      name: 'Browser errors',
      weight: 0.4,
      lighthouse_audits: {
        errors_in_console: {
          weight: 1,
          evaluation: 'Browser errors were logged to the console, indicating unresolved problems.',
          score: 1
        },
        doctype: {
          weight: 0.5,
          evaluation: 'Doctype is missing; specifying a doctype prevents the browser from switching to quirks_mode.',
          score: 1
        }
      },
      score: 1,
      evaluation: ''
    },
    size_of_images: {
      name: 'Size of images',
      weight: 0.6,
      lighthouse_audits: {
        image_aspect_ratio: {
          weight: 0.5,
          evaluation: 'Some image display dimensions do not match their natural aspect ratio.',
          score: 1
        },
        image_size_responsive: {
          weight: 1,
          evaluation: 'Some image sizes are not appropriate for all device sizes.',
          score: 1
        }
      },
      score: 1,
      evaluation: ''
    },
    security_vulnerabilities: {
      name: 'Security vulnerabilities',
      weight: 0.6,
      lighthouse_audits: {
        no_vulnerable_libraries: {
          weight: 1,
          evaluation: 'Some third_party sources in your website are not up to date.',
          score: 0.8
        },
        uses_http2: {
          weight: 1,
          evaluation: 'Some resources are not served using HTTP/2; this serves your page resources faster and with less data moving over the wire.',
          score: 0.9333333333333332
        },
        is_on_https: {
          weight: 1,
          evaluation: 'Your site does not use HTTPS protection. HTTPS prevents intruders from tampering with or passively listening in on the communications between your site and your users.',
          score: 1
        }
      },
      score: 0.91,
      evaluation: 'Some third_party sources in your website are not up to date.'
    },
    start_up_notifications: {
      name: 'Start_up notifications',
      weight: 1,
      lighthouse_audits: {
        geolocation_on_start: {
          weight: 1,
          evaluation: 'Your site requests geolocation data when the page loads.',
          score: 1
        },
        notification_on_start: {
          weight: 1,
          evaluation: 'Your site requests notification permission when the page loads.',
          score: 1
        }
      },
      score: 1,
      evaluation: ''
    },
    deprecated_apis: {
      name: 'Deprecated APIs',
      weight: 0.6,
      lighthouse_audits: {
        deprecations: {
          weight: 1,
          evaluation: 'Your site uses deprecated APIs.',
          score: 1
        }
      },
      score: 1,
      evaluation: ''
    }
  },
  score: 0.98
};

animals.forEach((animal) => {
  console.log(animal);
});

export const loader = ({request}) => {
  const url = new URL(request.url);

  return new Response(robotsTxtData(), {
    status: 200,
    headers: {
      'X-Custom': 'xss123'
      'content-type': 'text/plain',
      // Cache for 24 hours
      'cache-control': `max-age=${60 * 60 * 24}`,
    },
  });
};

function robotsTxtData() {

  return `
Hello World
`.trim();
}

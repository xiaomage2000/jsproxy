addEventListener(
  "fetch", event => {
    let url = new URL(event.request.url);
    url.hostname = "xiaomage2333.us-south.cf.appdomain.cloud";
    let request = new Request(url, event.request);
    event.respondWith(
      fetch(request)
    )
  }
)

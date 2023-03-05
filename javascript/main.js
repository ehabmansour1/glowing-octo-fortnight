let num;
let suggestedName;

let butt = document.querySelector("button");
butt.addEventListener("click", function () {
  num = document.querySelector("#num").value;
  suggestedName = document.querySelector("#name").value;
  if (num !== "" && suggestedName !== "") {
    for (let i = 0; i < 600; i++) {
      fetch(
        "https://asia-south1-truecaller-web.cloudfunctions.net/api/noneu/nameFeedback/v1",
        {
          headers: {
            accept: "application/json",
            "accept-language": "en-US,en;q=0.9,ar;q=0.8",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODA0NzQ4Nzk1NTQsInRva2VuIjoiYTF3MGQtLWR6ODM2aWtka0tEXzlmV2RkQkpKc2ZYdHoyODhCbEhvRFlEY0xYTDg1T1k2a3dUUlRVNmk1NWhCNiIsImVuaGFuY2VkU2VhcmNoIjp0cnVlLCJjb3VudHJ5Q29kZSI6ImVnIiwibmFtZSI6IkVoYSBCY2ZnIiwiZW1haWwiOiJtYW5zZWhhYjk5NkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGJPSW5HUnpGYXJyczJNOU1EbzJrQVh4bjdRVlN2dE9yMzdaNzF6PXM5Ni1jIiwiaWF0IjoxNjc3Nzk2NDc5fQ.VZhdSSlK2zxdFr90gpP_jrNeCU1El7Lqg7p9DMKKQ7Y",
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
          body: `{"entries":[{"phone":"+2${num}","feedback":1,"name":"","source":1,"ne_version":"20210210","suggestion":"${suggestedName}","suggestion_type":1}]}`,
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

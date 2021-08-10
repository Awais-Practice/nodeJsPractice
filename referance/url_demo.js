const url = require("url");
const myUrl = new URL(
  "https://www.express.com.pk:5000/epaper/Index.aspx?Issue=NP_LHE"
);
console.log(myUrl.href);
console.log(myUrl.toString());
// host
console.log(myUrl.host);

// host name
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams.append("ABC", "1213"));
console.log(myUrl.searchParams);

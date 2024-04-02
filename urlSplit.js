// 144. Write a JavaScript program to break an URL address and put its parts into an array.
// Note: url structure : ://.org[/] and there may be no part in the address.

function urlSplit(s) {
  const fSplit = s.split("://");
  const protocol = fSplit[0];
  const addressSplit = fSplit[1].split(".com");
  const dns = addressSplit[0];
  const endpoint = addressSplit[1].split("/");
  if (endpoint[1]) {
    return [protocol, dns, endpoint[1]];
  }
  return [protocol, dns];
}

var url_add = "https://www.w3resource.com/javascript-exercises/";
console.log(urlSplit(url_add));

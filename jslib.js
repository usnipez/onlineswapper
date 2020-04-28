var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}


function sleep(milliseconds) {
          let timeStart = new Date().getTime();
          while (true) {
              let elapsedTime = new Date().getTime() - timeStart;
              if (elapsedTime > milliseconds) {
                  break;
              }
          }
      }

function clearPages() {
  document.getElementById("skinsPage1").style.display = "none";
  document.getElementById("skinsPage2").style.display = "none";
  document.getElementById("skinsPage3").style.display = "none";
}

function goPage2() {
  clearPages();
  document.getElementById("skinsPage2").style.display = "block";
}


function goPage1() {
  clearPages();
  document.getElementById("skinsPage1").style.display = "block";
}

function goPage3() {
  clearPages();
  document.getElementById("skinsPage3").style.display = "block";
}

function convertFNCS(){
  document.getElementById("shinytofncs").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("shinytofncs").innerHTML = "finished!"; }, 600);
  setTimeout(function(){ document.getElementById("shinytofncs").innerHTML = "shiny -> fncs pickaxe"; }, 1200);
  doSend("W2luZl0KaW5mMT1VR2xqYTJGNFpWOUpSRjh6TnpaZlJrNURVeTVRYVdOcllYaGxYMGxFWHpNM05sOUdUa05UCmluZjI9TkRBNE5qQXpNelkxCmluZjU9MQppbnQ0PTI=");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlYyVmhjRzl1Y3k5R1QxSlVYMDFsYkdWbEwxQnBZMnRoZUdWZlJrNURVeTlOWlhOb1pYTXZVMHRmVUdsamEyRjRaVjlHVGtOVExsTkxYMUJwWTJ0aGVHVmZSazVEVXc9PQppbmYyPU5EVTRNemt3TVRZPQppbmY1PTIKaW50ND0z");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlZVa3ZSbTkxYm1SaGRHbHZiaTlVWlhoMGRYSmxjeTlKWTI5dWN5OVhaV0Z3YjI1ekwwbDBaVzF6TDFRdFNXTnZiaTFRYVdOcllYaGxjeTFHVGtOVFVHbGphMkY0WlM1VUxVbGpiMjR0VUdsamEyRjRaWE10Ums1RFUxQnBZMnRoZUdVPQppbmYyPU5EVTRNemd5TURZPQppbmY1PTIKaW50ND0yOA==");
}

function revertFNCS(){
  document.getElementById("fncstoshiny").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("fncstoshiny").innerHTML = "finished!"; }, 600);
  setTimeout(function(){ document.getElementById("fncstoshiny").innerHTML = "fncs pickaxe -> shiny"; }, 1200);
  doSend("W2luZl0KaW5mMT1VR2xqYTJGNFpWOUpSRjh4TmpaZlUyaHBibmt1VUdsamEyRjRaVjlKUkY4eE5qWmZVMmhwYm5rPQppbmYyPU5EQTROakF6TXpZMQppbmY1PTEKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlZVa3ZSbTkxYm1SaGRHbHZiaTlVWlhoMGRYSmxjeTlKWTI5dWN5OVhaV0Z3YjI1ekwwbDBaVzF6TDFRdFNXTnZiaTFRYVdOcllYaGxjeTFYU1VRdFNHRnlkbVZ6ZEMxUWFXTnJZWGhsTFZOb2FXNTVMbFF0U1dOdmJpMVFhV05yWVhobGN5MVhTVVF0U0dGeWRtVnpkQzFRYVdOcllYaGxMVk5vYVc1NQppbmYyPU5EVTRNemd5TURZPQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlYyVmhjRzl1Y3k5R1QxSlVYMDFsYkdWbEwxQnBZMnRoZUdWZlUyaHBibmt2VFdWemFHVnpMMU5MWDFCcFkydGhlR1ZmVTJocGJua3VVMHRmVUdsamEyRjRaVjlUYUdsdWVRPT0KaW5mMj1ORFU0TXprd01UWT0KaW5mNT0yCmludDQ9MA==");
}

function convertRaidersRevenge(){
  document.getElementById("defaulttoraiders").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("defaulttoraiders").innerHTML = "finished!"; }, 600);
  setTimeout(function(){ document.getElementById("defaulttoraiders").innerHTML = "default pickaxe -> raiders revenge"; }, 1200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlYyVmhjRzl1Y3k5R1QxSlVYMDFsYkdWbEwwMWxjMmhsY3k5VFMxOVFhV05yWVhobFgxQnZjM1JCY0c5allXeDVjSFJwWXk1VFMxOVFhV05yWVhobFgxQnZjM1JCY0c5allXeDVjSFJwWXc9PQppbmYyPU5qUTBNamcwTnpjPQppbmY1PTIKaW50ND0yMw==");
}

function revertRaidersRevenge(){
  document.getElementById("raiderstodefault").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("raiderstodefault").innerHTML = "finished!"; }, 600);
  setTimeout(function(){ document.getElementById("raiderstodefault").innerHTML = "raiders revenge -> default pickaxe"; }, 1200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlYyVmhjRzl1Y3k5R1QxSlVYMDFsYkdWbEwxQnBZMnRoZUdWZlJHVm1ZWFZzZEY5TllYSnJTVWt2VFdWemFHVnpMMU5MWDFCcFkydGhlR1ZmUkdWbVlYVnNkRjlOWVhKclgwbEpMbE5MWDFCcFkydGhlR1ZmUkdWbVlYVnNkRjlOWVhKclgwbEoKaW5mMj1OalEwTWpnME56Yz0KaW5mNT0yCmludDQ9MA==");
}

function convertTrustNo2() {
  document.getElementById("defaulttotrusty").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("defaulttotrusty").innerHTML = "finished!"; }, 600);
  setTimeout(function(){ document.getElementById("defaulttotrusty").innerHTML = "default pickaxe -> trusty no.2"; }, 1200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlYyVmhjRzl1Y3k5R1QxSlVYMDFsYkdWbEwxQnBZMnRoZUdWZk16RXZUV1Z6YUdWekwxTkxYMUJwWTJ0aGVHVmZNekV1VTB0ZlVHbGphMkY0WlM1VFMxOVFhV05yWVhobFh6TXgKaW5mMj1ORFU0TXprd01UWT0KaW5mNT0yCmludDQ9Mjc=");
}

function revertTrustNo2() {
  document.getElementById("trustytodefault").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("trustytodefault").innerHTML = "finished!"; }, 600);
  setTimeout(function(){ document.getElementById("trustytodefault").innerHTML = "trusty no.2 -> default pickaxe"; }, 1200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlYyVmhjRzl1Y3k5R1QxSlVYMDFsYkdWbEwxQnBZMnRoZUdWZlJHVm1ZWFZzZEY5TllYSnJTVWt2VFdWemFHVnpMMU5MWDFCcFkydGhlR1ZmUkdWbVlYVnNkRjlOWVhKclgwbEpMbE5MWDFCcFkydGhlR1ZmUkdWbVlYVnNkRjlOWVhKclgwbEoKaW5mMj1OalEwTWpnME56Yz0KaW5mNT0yCmludDQ9MA==");
}

function convertHeadhunter() {
  document.getElementById("evergreentoheadhunter").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("evergreentoheadhunter").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("evergreentoheadhunter").innerHTML = "lt evergreen -> headhunter (og default)"; }, 2900);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYekF3TVY5QmRHaGxibUZmUW05a2VTNURVRjh3TURGZlFYUm9aVzVoWDBKdlpIaz0KaW5mMj1ORFV6TXpFMk9BPT0KaW5mNT0yCmludDQ9MzI=");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZTR1ZoWkhNdlJsOU5SVVJmUVZOT1gxTmhjbUZvWDBobFlXUmZNREZmUVZSSUxrWmZUVVZFWDBGVFRsOVRZWEpoYUY5SVpXRmtYekF4WDBGVVNBPT0KaW5mMj1ORFV6TmpZM05RPT0KaW5mNT0yCmludDQ9MTU=");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTRNell5TnpJNU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTRNell5T0RRMk13PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTROall6TnpnMU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTROall6TnprMk1BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTROall6TnpreU53PT0KaW5mNT0yCmludDQ9MA==");
}

function revertHeadhunter(){
  document.getElementById("headhuntertoevergreen").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("headhuntertoevergreen").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("headhuntertoevergreen").innerHTML = "headhunter (og default) -> lt evergreen"; }, 2900);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYMEp2WkhsZlEyOXRiV0Z1Wkc5ZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZRbTlrZVY5RGIyMXRZVzVrYjE5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpNekUyT0E9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VFdWa2FYVnRMMGhsWVdSekwwTlFYMGhsWVdSZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZTR1ZoWkY5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpOalkzTlE9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTRNell5TnpJNU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTRNell5T0RRMk13PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTROall6TnpnMU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTROall6TnprMk1BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTROall6TnpreU53PT0KaW5mNT0yCmludDQ9MA==");
}

function convertStealthReflex(){
  document.getElementById("evergreentostealth").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("evergreentostealth").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("evergreentostealth").innerHTML = "lt evergreen -> stealth reflex"; }, 2900);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYMEYwYUdWdVlWOUNiMlI1WDAxZlUzUnlaV1YwVDNCelUzUmxZV3gwYUM1RFVGOUJkR2hsYm1GZlFtOWtlVjlOWDFOMGNtVmxkRTl3YzFOMFpXRnNkR2c9CmluZjI9TkRVek16RTJPQT09CmluZjU9MgppbnQ0PTI=");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1lXTmxRV05qWlhOemIzSnBaWE12UTFCZlRWOU5SVVJmVTNSeVpXVjBUM0J6VTNSbFlXeDBhQzVEVUY5TlgwMUZSRjlUZEhKbFpYUlBjSE5UZEdWaGJIUm8KaW5mMj1ORFV6TmpZM05RPT0KaW5mNT0yCmludDQ9NA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTRNell5TnpJNU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTRNell5T0RRMk13PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTROall6TnpnMU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTROall6TnprMk1BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTROall6TnpreU53PT0KaW5mNT0yCmludDQ9MA==");
}

function revertStealthReflex(){
  document.getElementById("stealthtoevergreen").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("stealthtoevergreen").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("stealthtoevergreen").innerHTML = "stealth reflex -> lt evergreen"; }, 2900);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYMEp2WkhsZlEyOXRiV0Z1Wkc5ZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZRbTlrZVY5RGIyMXRZVzVrYjE5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpNekUyT0E9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VFdWa2FYVnRMMGhsWVdSekwwTlFYMGhsWVdSZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZTR1ZoWkY5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpOalkzTlE9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTRNell5TnpJNU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTRNell5T0RRMk13PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTROall6TnpnMU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTROall6TnprMk1BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTROall6TnpreU53PT0KaW5mNT0yCmludDQ9MA==");
}

function convertBlackKnight(){
  document.getElementById("evergreentoblackknight").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("evergreentoblackknight").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("evergreentoblackknight").innerHTML = "lt evergreen -> black knight"; }, 2900);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYMk52YlcxaGJtUnZYMHR1YVdkb2RFSmZUUzVEVUY5amIyMXRZVzVrYjE5TGJtbG5hSFJDWDAwPQppbmYyPU5EVXpNekUyT0E9PQppbmY1PTIKaW50ND0yNg==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5SVlYUnpMMGhoZEY5TlgwTnZiVzFoYm1SdlgwSnNZV05yUzI1cFoyaDBMa2hoZEY5TlgwTnZiVzFoYm1SdlgwSnNZV05yUzI1cFoyaDAKaW5mMj1ORFV6TmpZM05RPT0KaW5mNT0yCmludDQ9MTM=");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTRNell5TnpJNU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1F4WlhJPQppbmYyPU1USTRNell5T0RRMk13PT0KaW5mNT0yCmludDQ9MA==");
}

function revertBlackKnight(){
  document.getElementById("blackknighttoevergreen").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("blackknighttoevergreen").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("blackknighttoevergreen").innerHTML = "black knight -> lt evergreen"; }, 2900);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYMEp2WkhsZlEyOXRiV0Z1Wkc5ZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZRbTlrZVY5RGIyMXRZVzVrYjE5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpNekUyT0E9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VFdWa2FYVnRMMGhsWVdSekwwTlFYMGhsWVdSZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZTR1ZoWkY5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpOalkzTlE9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTRNell5TnpJNU1nPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUVhSb1pXNWhYMEp2WkhsZlRWOVBjbTVoYldWdWRGTnZiR1JwWlhJPQppbmYyPU1USTRNell5T0RRMk13PT0KaW5mNT0yCmludDQ9MA==");
}

function convertCyberNinja(){
  document.getElementById("woolytocyberninja").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("woolytocyberninja").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("woolytocyberninja").innerHTML = "wooly warrior -> cyber ninja"; }, 2900);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMjV2WW1KNQppbmYyPU1USTROVEExTWpjd01BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMjV2WW1KNQppbmYyPU1USTROVEExTXpjME9BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VTIxaGJHd3ZRbTlrYVdWekwwTlFYMEp2WkhsZlRtbHVhbUZmTURFMVgwWmZWakZmVTFJdVExQmZRbTlrZVY5T2FXNXFZVjh3TVRWZlJsOVdNVjlUVWc9PQppbmYyPU5EVXpNekUyT0E9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VTIxaGJHd3ZTR1ZoWkhNdlExQmZTR1ZoWkY5T2FXNXFZVjh3TVRWZlJsOVdNVjlUVWk1RFVGOUlaV0ZrWDA1cGJtcGhYekF4TlY5R1gxWXhYMU5TCmluZjI9TkRVek5qWTNOUT09CmluZjU9MgppbnQ0PTE=");
}

function revertCyberNinja(){
  document.getElementById("cyberninjatowooly").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("cyberninjatowooly").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("cyberninjatowooly").innerHTML = "cyber ninja -> wooly warrior"; }, 2900);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMWR2Ykd4NQppbmYyPU1USTROVEExTWpjd01BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMWR2Ykd4NQppbmYyPU1USTROVEExTXpjME9BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYMEp2WkhsZlEyOXRiV0Z1Wkc5ZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZRbTlrZVY5RGIyMXRZVzVrYjE5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpNekUyT0E9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VFdWa2FYVnRMMGhsWVdSekwwTlFYMGhsWVdSZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZTR1ZoWkY5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpOalkzTlE9PQppbmY1PTIKaW50ND0w");
}

function convertValentineNinja(){
  document.getElementById("woolytovalninja").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("woolytovalninja").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("woolytovalninja").innerHTML = "wooly warrior -> valentine ninja"; }, 2900);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMjV2WW1KNQppbmYyPU1USTROVEExTWpjd01BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMjV2WW1KNQppbmYyPU1USTROVEExTXpjME9BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmU0dWaFpGOUdYMjV2YjJKNQppbmYyPU1USTROalkwTWpNMU53PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmU0dWaFpGOUdYMjV2YjJKNQppbmYyPU1USTROalkwTWpRek13PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VTIxaGJHd3ZRbTlrYVdWekwwWmZVMDFNWDA1cGJtcGhYMEp2WkhsZk1ERmZWRll6Tnk1R1gxTk5URjlPYVc1cVlWOUNiMlI1WHpBeFgxUldNemM9CmluZjI9TkRVek16RTJPQT09CmluZjU9MgppbnQ0PTI=");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VTIxaGJHd3ZTR1ZoWkhNdlJsOVRYMDVwYm1waFh6QXhYMGhsWVdSZlZGWXpOeTVHWDFOZlRtbHVhbUZmTURGZlNHVmhaRjlVVmpNMwppbmYyPU5EVXpOalkzTlE9PQppbmY1PTIKaW50ND03");
}

function revertValentineNinja(){
  document.getElementById("valninjatowooly").innerHTML = "working...";
  setTimeout(function(){ document.getElementById("valninjatowooly").innerHTML = "finished!"; }, 2000);
  setTimeout(function(){ document.getElementById("valninjatowooly").innerHTML = "valentine ninja -> wooly warrior"; }, 2900);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMWR2Ykd4NQppbmYyPU1USTROVEExTWpjd01BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmUW05a2VWOURiMjF0WVc1a2IxOUdYMWR2Ykd4NQppbmYyPU1USTROVEExTXpjME9BPT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmU0dWaFpGOUdYMWR2Ykd4NQppbmYyPU1USTROalkwTWpNMU53PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1RMUJmU0dWaFpGOUdYMWR2Ykd4NQppbmYyPU1USTROalkwTWpRek13PT0KaW5mNT0yCmludDQ9MA==");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlFYUm9aVzVoTDBobGNtOWxjeTlOWlhOb1pYTXZRbTlrYVdWekwwTlFYMEp2WkhsZlEyOXRiV0Z1Wkc5ZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZRbTlrZVY5RGIyMXRZVzVrYjE5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpNekUyT0E9PQppbmY1PTIKaW50ND0w");
  sleep(200);
  doSend("W2luZl0KaW5mMT1MMGRoYldVdlEyaGhjbUZqZEdWeWN5OURhR0Z5WVdOMFpYSlFZWEowY3k5R1pXMWhiR1V2VFdWa2FYVnRMMGhsWVdSekwwTlFYMGhsWVdSZlJsOVNaV0pwY25Sb1JHVm1ZWFZzZEVFdVExQmZTR1ZoWkY5R1gxSmxZbWx5ZEdoRVpXWmhkV3gwUVE9PQppbmYyPU5EVXpOalkzTlE9PQppbmY1PTIKaW50ND0w");
}


function confirmPak(){
  var location = document.getElementById("pakFolder").value;
  var encodedString = Base64.encode(location);
  doSend(encodedString);
}

function settingsButtonVALID(){
  document.getElementById("pakStatus").innerHTML = "saved!";
  var reS = setTimeout(revertSettingsbutton, 2000);
}

function settingsButtonINVALID(){
  document.getElementById("pakStatus").innerHTML = "invalid pak location";
  var reS = setTimeout(revertSettingsbutton, 2000);
}

function revertSettingsbutton(){
  document.getElementById("pakStatus").innerHTML = "set pak location";
}

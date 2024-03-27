let tapper = document.querySelector("#tapper");
let counternumber = document.querySelector("#count-number");
let subtitle = document.querySelector("#subtitle");
let tcount = document.querySelector("#T");
let reset = document.querySelector("#reset");

function rset(){
  counternumber.innerHTML = 0;
  tcount.innerHTML = "Total Tasbih Count:0";
  countn=0;
  totalCount=0;
}

let Tasbih= ['"Subhanallah"', '"Alhamdulillah"', '"Allahu Akbar"'];
let c =0;
let totalCount = 0;

let countn = 0;
let noOfCount = 33;

function count() {
  totalCount++;
   countn ++;
  if (countn == noOfCount) {
    c++;
    subtitle.innerHTML = Tasbih[c];
    countn = 0;
    
    if (c == 2) {
      c = 0-1;
    }
  }
  
  counternumber.innerHTML = countn;
  tcount.innerHTML = "Total Tasbih Count:"+totalCount;;
}
tapper.addEventListener("click", count);
reset.addEventListener("click", rset);
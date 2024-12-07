const endDate = new Date("07 Dec, 2024 11:50:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function UpdateTimer(){
    const nows = new Date().getTime();
    const distCovered = nows - startDate;
    const distPanding = endDate - nows;

    const oneDay=(24*60*60*1000);
    const oneHour=(60*60*1000);
    const oneMin=(60*1000);
    const oneSec=(1000);
    // Calculate days, hrs, min, sec left
    const days = Math.floor(distPanding / (oneDay));
    const hours = Math.floor((distPanding%(oneDay) / (oneHour)));
    const mins = Math.floor((distPanding%(oneHour))/ (oneMin));
    const secs = Math.floor((distPanding%(oneMin))/(oneSec));

    // Populate in UI
    document.getElementById("days").innerHTML=days;
    document.getElementById("hrs").innerHTML=hours;
    document.getElementById("mins").innerHTML=mins;
    document.getElementById("secs").innerHTML=secs;

    // Progress Bar
    const totalDist = endDate - startDate;
    let percentageDist = (distCovered/totalDist)*100;


    // Set width for progress bar
    document.getElementById("progress-bar").style.width=percentageDist+"%";

    if(distPanding<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementById("progress-bar").style.width= "100%";
    }

}
,1000);
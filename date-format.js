getDate(){
    let dateNow = new Date();
    let day = dateNow.getUTCDate();
    let monthIndex = dateNow.getUTCMonth();
    let year = dateNow.getUTCFullYear();
    let minutes = dateNow.getUTCMinutes();
    let hours = dateNow.getUTCHours();
    let seconds = dateNow.getUTCSeconds();
    let formattedDate = year+"/"+(monthIndex+1)+"/"+day+" "+ hours+":"+minutes+":"+seconds;
    return formattedDate;
  }

export default class Day{
  constructor(date){
    this.date=date;
  }
  calculateDay(){
    let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    let input= this.date;
    console.log(input);
    console.log(typeof input)
    let  dateWithSlash = input.replace(/-/g,'/');
    let formattedDate = new Date(dateWithSlash);
    let output=dayArray[formattedDate.getDay()];
    console.log(output);
    return output;
  }
}
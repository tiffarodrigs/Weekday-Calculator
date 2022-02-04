import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import Day from '../src/js/day.js';
$("#dateButton").click(function(){
  let inputDate=$("#inDate").val();
  console.log("date"+inputDate);
  let day1=new Day(inputDate);
  console.log("day1",day1);

  day1.calculateDay();
});
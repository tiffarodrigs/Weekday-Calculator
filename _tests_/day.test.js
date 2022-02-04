import Day from '../src/js/day.js';
describe ('Day', ()=>{
  test('should display Friday when 2022-02-25 is entered', () => {
    let date= "2022-02-25";
    const day1 = new Day(date);
    expect(day1.calculateDay()).toEqual("Friday");
});
});
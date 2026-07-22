var api_key = 'e1f10a1e78da46f5b10a1e78da96f525';

var apperanceSettings = {
  providerName: "HashPie Media",
  loop: true,
  marqueeType: "both", 
  //Default is both. Set to 'none' to hide the lower detail information, Set to 'observations' for only observations, 'ad' for only advertisements, 'both' for alternation between observations and advertisements.
  marqueeAd:  ["If you are interested in TWC, EAS, or anything weather/tech related, join Mist Weather Media! https://mistwx.com/discord"],
  onlyLDLMode: false,
  startupTime: 5000,//set to 0 if you want to skip, not recommended
  aspectRatio: 4/3,
}

var slideSettings = {
  order:[
    {slideLineup:[
      {function:"currentConditions"},
      {function:"bulletin"},
      {function:"hourlyObservation"},
      {function:"regionalConditions"},
      {function:"regionalForecast"},
      {function:"almanac"},
      {function:"dayPartForecast"},
      {function:"extendedForecast"},
      {function:"travelForecast"},
    ]}
  ]   
}

var audioSettings = {
  enableMusic: true,
  shuffle: true,
  randomStart: true,
  order: [1,2,3,4],
}

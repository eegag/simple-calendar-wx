# Simple Calendar Wx
A weather hex flower macro for the Simple Calendar module in FoundryVTT.

This macro will generate basic weather results and add them as a note for the current day in Simple Calendar.

The results are derived from a hex flower, so they are based on the previous day's weather and will follow a general pattern of Clear to Partly Cloudy to Mostly Cloudy to Precipitation and back to Clear.

The BASIC script only includes standard conditions and wind direction, with seasonally appropirate precipitation. The ADVANCED script adds a 1-in-6 chance for severe conditions and links to rollable tables where you can input your own severe results.

## Instructions for the BASIC script:

1. As a GM user, copy the script from weather-gen-basic.js into a macro slot in FoundryVTT.

2. Set the current date in Simple Calendar.

3. Execute the macro. It will display a private chat message with the results.

4. When you advance to the next day in Simple Calendar, run the macro again. The results will generate based on the previous day's results.

## Instructions for ADVANCED script:

1. As a GM user, copy the script from weather-gen-adv.js into a macro slot in FoundryVTT.

2. Create rollable tables as described below, and add several entires to each. These tables will add unique descriptions when the script checks for severe or weird weather.

3. Set the current date in Simple Calendar.

4. Execute the macro. It will display a private chat message with the results.

5. When you advance to the next day in Simple Calendar, run the macro again. The results will generate based on the previous day's results.

## Rollable tables for ADVANCED script:

Tables with the "Severe Weather" suffix are for severe weather when the daily weather result does not have precipitation (e.g. high winds). Tables with the "Severe Precipitation" suffix are for severe weather when the daily weather result includes precip (e.g. a tropical storm). The "Weird Weather" table can be anything you want, not necessarily severe (e.g. a double rainbow!).

Rollable tables needed for ADVANCED macro:

Spring Severe Precipitation  
Spring Severe Weather  
Summer Severe Precipitation  
Summer Severe Weather  
Autumn Severe Precipitation  
Autumn Severe Weather  
Winter Severe Precipitation  
Winter Severe Weather  
Weird Weather  

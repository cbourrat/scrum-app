start /min cmd /c mongodStart.bat
start /min cmd /c mongoStart.bat

cls
ng build & node server.js
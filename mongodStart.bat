set titre=Deamon MongoDB (Don't touch, Don't close !!)

taskkill /F /FI "WindowTitle eq %titre%" /T
title %titre%
cd "C:\Program Files\MongoDB\Server\3.4\bin\"
mongod.exe
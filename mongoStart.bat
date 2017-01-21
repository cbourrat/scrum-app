set titre=Explorateur MongoDB (En ligne de commande)

taskkill /F /FI "WindowTitle eq %titre%" /T
title %titre%
cd "C:\Program Files\MongoDB\Server\3.4\bin\"
mongo.exe scrumappdb
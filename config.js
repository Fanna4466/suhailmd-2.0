const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_03_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTExLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieTZaUnpCY3U4WUJUb3RiODZyT25XaTE1bzh3SWdEcGRaZktmR2NGQitIOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieE9WSk5TYmVRUU9LX2J2a0FXMTc2UVwiLFxuICBcInBob25lSWRcIjogXCI3OGNlZjk1YS0zODUzLTQ5MjItOGVkYS1jNjA0Y2ZiNzVhMTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAxMzgsXG4gICAgICAyMjAsXG4gICAgICAyMDAsXG4gICAgICAxMjQsXG4gICAgICAxMDEsXG4gICAgICA3OCxcbiAgICAgIDI1MSxcbiAgICAgIDUsXG4gICAgICAxMDIsXG4gICAgICAxNTMsXG4gICAgICAyMzgsXG4gICAgICAxODcsXG4gICAgICAyNDEsXG4gICAgICAyMzUsXG4gICAgICAyNDUsXG4gICAgICAxMzYsXG4gICAgICAzMixcbiAgICAgIDE0NyxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMTk2LFxuICAgICAgMTM2LFxuICAgICAgMTk1LFxuICAgICAgMTk4LFxuICAgICAgNTUsXG4gICAgICAxMTksXG4gICAgICAyMTYsXG4gICAgICAxNCxcbiAgICAgIDEwNyxcbiAgICAgIDI1NCxcbiAgICAgIDE1OSxcbiAgICAgIDEyMixcbiAgICAgIDIyOSxcbiAgICAgIDE4NCxcbiAgICAgIDY1LFxuICAgICAgNDcsXG4gICAgICA5NSxcbiAgICAgIDE2NSxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5UkhaTlNROVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzMzIwNDQ2NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjI0MzEyOTMwODM3MTc6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNmd3L2NGRUlxSGtyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5QS2c2U1FhSWRqYUNPUlhQekhGOFBGSEdKZW03b0Nncnp6RjkrTkJDM1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQzdYKzJuZTZUVjA4OEx2cWFseWgxdklPYm11OWRzTmhNOWVraFlTcG1nc0pJdCtHMGM2M3hvSTFhSVQ0MHpOUERQWjRBZDlrQjdsM3dhZTZKQmxxQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZVBKRk5vTUQ4UnZLL2hET0I0eFBmYVhNeElDY3EzZlAyTzd3QWY4UzcxdW9CRTdFZUZqUlNQKzRmK2swSnFOcmZaVU1vZ092NHl6YzlXWDQwdGQzQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzMzIwNDQ2NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1NDMzNzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

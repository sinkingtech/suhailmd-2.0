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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ca3524b5910d72a0844b7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Don tech inc 💀" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256704376077";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256704376077,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_04_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDcxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNuZTFtd3VaRk9MRElHY1hOMU1aQVNkOE1xL2cyMVFHZHFTZkxYSC9LVWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlh5bWJodEsxUXpPbTNycDBGQmxTNEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjNiMGI0NzQtMmQ0Mi00YmZiLTg5MzAtZmIxNmUyZWRmNDNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDYsXG4gICAgICA2NCxcbiAgICAgIDEzNSxcbiAgICAgIDEwNCxcbiAgICAgIDExOCxcbiAgICAgIDYzLFxuICAgICAgMjMwLFxuICAgICAgMTc3LFxuICAgICAgMTQ3LFxuICAgICAgNTEsXG4gICAgICAxNjgsXG4gICAgICAxODEsXG4gICAgICAxMzcsXG4gICAgICAxOTQsXG4gICAgICA4MixcbiAgICAgIDIsXG4gICAgICA5NCxcbiAgICAgIDEyOCxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAzLFxuICAgICAgODUsXG4gICAgICAyMjUsXG4gICAgICAxMzIsXG4gICAgICAxNTMsXG4gICAgICAxMzksXG4gICAgICAxMjgsXG4gICAgICA0OSxcbiAgICAgIDk1LFxuICAgICAgMzgsXG4gICAgICAxNTksXG4gICAgICAyMTcsXG4gICAgICA2MixcbiAgICAgIDEyOCxcbiAgICAgIDUyLFxuICAgICAgNDQsXG4gICAgICA1MixcbiAgICAgIDIzNixcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSM0FLOE1WV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA0Mzc2MDc3OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qg1xcbvCdkI5cXG7wnZCNIFxcbvCdkJNcXG7wnZCEXFxu8J2QglxcbvCdkIdcXG4g4bSw4bS84bS6IOG1gOG0seG2nOG0tCDhtLXhtLrhtpxcIixcbiAgICBcImxpZFwiOiBcIjg2NDIwMTExMTE1NTU6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1B0akE4UXdwQ3F1UVlZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYR0J5VGRzRlhEKzZGcGlBM0pFck1uUzNtMkI0QkcrYzU0UjNpNjlVVW04PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndvTnZGNEVXRjIvTVNVNllUaGRNSlBTbXFaNFpLd0U4dlBZcUV4VXFTcWFpWVd0SWJHVHcrQWJwV2k2WSt2THlzM21zSjY1N1UvaTZPTXo2TXJ5dEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFDVndJaFVUU2RVS0RPOVZac2ZBQTVyUjVVMkZJdzd3WkNISW5NR2JZOFBCNEtRZ0dzNlozSllSMHVxS21pZlZJZms2Rjk1UUhtSnM4SlJkSXhnMEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcwNDM3NjA3NzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg0MDY0OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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

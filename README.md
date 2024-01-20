# TuneVault
### Connecting people with the language of music
Your one step destination to a diverse music database!

## Accessing the site
To run the website go into the src folder and run the command "python3 app.py" in the terminal. Click on the server link and it will re-direct to the home page of the website. Further pages can be accessed through various well-defined links inside the website.  
  
## Search Page: 
Name of songs/artists can be searched in the search bar along with the filters available (optional) and the top 10 results from iTunes will be displayed.  
  
## Spotlight Page:  
The artist chosen for the page is "The Weeknd". As there was no upcoming album, so the sample date: '30th June, 2023 00:00' has been used.  
  
## Playlist Page:  
Every Songs page has a "+" button next to the song. On pressing the song button, the respective song is added to the playlist. On the pressing the button for a song aldready added, an alert message is displayed saying "Song is aldready in playlist". The added songs are displayed on the Playlist page where all the song information can be seen along with a "-" button which when pressed removes the song from the playlist.  

*** 
  
The navigation bar at the top includes the site logo and links to the following pages:  
 - Home  
 - Artists  
 - Search  
 - Spotlight  
 - Playlist  
 - About Us  
  
The footer also includes a link to the 'About Us' page along with other text.  
  
The structure of this project directory is as follows:  
  
.  
├── ASSUMPTIONS.md  
├── README.md  
└── src  
    ├── app.py  
    ├── playlist.db  
    ├── static  
    │   ├── img  
    │   │   ├── 1dc.png  
    │   │   ├── 1d.jpg  
    │   │   ├── 4c.png  
    │   │   ├── 4.jpg  
    │   │   ├── 5c.png  
    │   │   ├── 5.jpg  
    │   │   ├── abel.jpg  
    │   │   ├── after_hours.jpg  
    │   │   ├── after_hours.png  
    │   │   ├── agrim.jpeg  
    │   │   ├── ahc.png  
    │   │   ├── amc.png  
    │   │   ├── am.jpg  
    │   │   ├── bbc.png  
    │   │   ├── bbtm.jpg  
    │   │   ├── bg_alt.jpg  
    │   │   ├── bg.jpg  
    │   │   ├── bg_photo2.png  
    │   │   ├── blinding_lights.png  
    │   │   ├── dawn_fm.jpg  
    │   │   ├── dfmc.png  
    │   │   ├── divc.png  
    │   │   ├── div.jpg  
    │   │   ├── dsc.jpeg  
    │   │   ├── dsc.png  
    │   │   ├── dsotm.jpg  
    │   │   ├── ed.jpg  
    │   │   ├── ed_sheeran.png  
    │   │   ├── eosc.png  
    │   │   ├── eos.jpg  
    │   │   ├── eqc.png  
    │   │   ├── eq.jpg  
    │   │   ├── equals.png  
    │   │   ├── esc.png  
    │   │   ├── hc.png  
    │   │   ├── hobc.png  
    │   │   ├── hob.jpg  
    │   │   ├── hoth.jpg  
    │   │   ├── insta.png  
    │   │   ├── kiss_land.jpg  
    │   │   ├── klc.png  
    │   │   ├── led.png  
    │   │   ├── logo.jpg  
    │   │   ├── logo-removebg-preview (copy).png  
    │   │   ├── logo-removebg-preview.png  
    │   │   ├── lz1c.png  
    │   │   ├── lz2c.png  
    │   │   ├── lz2.jpg  
    │   │   ├── lz3c.png  
    │   │   ├── lz3.jpg  
    │   │   ├── lz4c.png  
    │   │   ├── lz4.jpg  
    │   │   ├── lzc.png  
    │   │   ├── lz.jpg  
    │   │   ├── mdmc.png  
    │   │   ├── mdm.jpg  
    │   │   ├── medc.png  
    │   │   ├── meddle.png  
    │   │   ├── mmc.png  
    │   │   ├── mm.jpg  
    │   │   ├── mulc.png  
    │   │   ├── pc.jpeg  
    │   │   ├── pc.png  
    │   │   ├── perfect.png  
    │   │   ├── pfc.png  
    │   │   ├── pink_floyd.png  
    │   │   ├── pink.jpg  
    │   │   ├── piper.png  
    │   │   ├── plusc.png  
    │   │   ├── plus.jpg  
    │   │   ├── prabhav.jpeg  
    │   │   ├── prec.png  
    │   │   ├── presence.jpg  
    │   │   ├── sax_main_blue.png  
    │   │   ├── sax_main_blue_trans.png  
    │   │   ├── sax_main.png  
    │   │   ├── sax.png  
    │   │   ├── sax_tv_blue.png  
    │   │   ├── sax_tv.png  
    │   │   ├── sbc.png  
    │   │   ├── shape_of_you.png  
    │   │   ├── starboy.jpg  
    │   │   ├── the_wall.png  
    │   │   ├── thuc.png  
    │   │   ├── thursday.jpg  
    │   │   ├── tmhc.png  
    │   │   ├── tmh.jpg  
    │   │   ├── trans.png  
    │   │   ├── trilogy.jpg  
    │   │   ├── twc.jpg  
    │   │   ├── twc.png  
    │   │   ├── upc.png  
    │   │   ├── up.jpg  
    │   │   ├── wall.png  
    │   │   ├── wc.png  
    │   │   ├── weeknd.png  
    │   │   ├── wywhc.png  
    │   │   ├── wywh.jpg  
    │   │   └── x.jpg  
    │   ├── nav.js  
    │   ├── playlist.css  
    │   ├── playlist.js  
    │   ├── search.js  
    │   ├── songs.js  
    │   ├── spotlight.js  
    │   ├── stylesheet.css  
    │   └── typeffect.js  
    └── templates  
        ├── 1d  
        │   ├── 1d.html  
        │   ├── 4.html  
        │   ├── am.html  
        │   ├── mm.html  
        │   ├── tmh.html  
        │   └── up.html  
        ├── about.html  
        ├── artists.html  
        ├── edsheeran  
        │   ├── divide.html  
        │   ├── edsheeran.html  
        │   ├── equals.html  
        │   ├── five.html  
        │   ├── multiply.html  
        │   └── plus.html  
        ├── home.html  
        ├── ledzeppelin  
        │   ├── hoth.html  
        │   ├── ledzeppelin.html  
        │   ├── lz2.html  
        │   ├── lz3.html  
        │   ├── lz4.html  
        │   ├── lz.html  
        │   └── presence.html  
        ├── pinkfloyd  
        │   ├── dsotm.html  
        │   ├── meddle.html  
        │   ├── pinkfloyd.html  
        │   ├── piper.html  
        │   ├── wall.html  
        │   └── wywh.html  
        ├── playlist.html  
        ├── search.html  
        ├── spotlight.html  
        └── theweeknd  
            ├── after.html  
            ├── bbtm.html  
            ├── dawn.html  
            ├── eos.html  
            ├── hob.html  
            ├── kiss.html  
            ├── mdm.html  
            ├── starboy.html  
            ├── theweeknd.html  
            └── thu.html  
              
9 directories, 152 files              


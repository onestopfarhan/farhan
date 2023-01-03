$(document).ready(function(){
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var mediaPath = 'https://archive.org/download/farhan-saeed/',
        tracks = [
        //     {
        //     "file": "Aadat - JAL (Farhan, Goher & Shazi)"
        // },
        {
            "file": "Bhool Na Jaana  Saddest Song"
        },{
            "file": "Bol Ke Lab Azaad Hein Song - Farhan Saeed - Urwa Hocane"
        },{
            "file": "Chalte Chalte  Jal Featuring Amrita Rao  Album Boondh"
        },{
            "file": "Coke Studio Season 10 Latthay Di Chaadar Quratulain Balouch & Farhan Saeed"
        },{
            "file": "Dil Hua Punchi - Official Video"
        },{
            "file": "Ehsaan Hai Tumhara  Tich Button"
        },{
            "file": "Farhan Saeed  Tu Thodi Der"
        },{
            "file": "Farhan Saeed - Pi Jaun (Official Video)"
        },{
            "file": "Farhan Saeed - Sawan"
        },{
            "file": "Farhan Saeed, Rishi Rich - Maula"
        },{
            "file": "Har Jagah Hai Jal - JAL the band"
        },{
            "file": "Hari Hari Aangan  OST by Farhan Saeed & Naveed Nashad  HUM Music"
        },{
            "file": "In The Box  Baliyay  Farhan Saeed  Saad Sultan"
        },{
            "file": "JAL THE BAND - Ik Din Ayega"
        },{
            "file": "Jab Se Mily Tum Udaari Song Recording"
        },{
            "file": "Jadon Andi Ae Teri Yaad Farhan Saeed"
        },{
            "file": "Jal The Band I Bikhra Hoon Main  Album Adat"
        },{
            "file": "Jal The Band I Morey Piya I Album Boondh"
        },{
            "file": "Jal _ Teri Yaad (Your Memories)"
        },{
            "file": "Ji Jaun   Farhan Saeed   2016"
        },{
            "file": "Kash Ye Pal Tham Jaye - Jal The Band"
        },{
            "file": "Kashmir Beats  Season 2  Khush Bichar Ker  Farhan Saeed"
        },{
            "file": "Kashmir Beats  Season 2  Naukar Shah Da  Farhan Saeed & Shuja Haider"
        },{
            "file": "Khwahishon - Farhan Saeed (Official Video 2011)"
        },{
            "file": "Kia Se Kia"
        },{
            "file": "Koi Rokay Na Mujhay"
        },{
            "file": "Main Mast Hoon - Boondh A Drop of Jal"
        },{
            "file": "Meethi Yaadein (Official Music Video)"
        },{
            "file": "Mere Ajnabi Drama OST Title Song by Farhan Saeed"
        },{
            "file": "Musafir  Lyrical Song  Parwaaz Hai Junoon  Farhan Saeed  Zenab Fatimah Sultan"
        },{
            "file": "Na Cher Malangaan Nu ft. Farhan Saeed & Aima Baig  Bilal Saeed"
        },{
            "file": "Naam - E - Wafa Full Song (Audio)  Creature 3D  Farhan Saeed, Tulsi Kumar  Bipasha Basu"
        },{
            "file": "Panchi - Jal"
        },{
            "file": "Payal Ka Shor  Farhan Saeed  After Evening"
        },{
            "file": "Payal-Jal"
        },{
            "file": "PremGali  Farhan Saeed & Nish Asher"
        },{
            "file": "Raatein"
        },{
            "file": "Rab Rakha  Farhan Saeed  Punjab Nahi Jaungi"
        },{
            "file": "Roiyaan - Farhan Saeed"
        },{
            "file": "SAATHIYA - By Farhan Saeed ft. Urwa Hocane"
        },{
            "file": "Sajni - Official Video Song  Boondh A Drop of Jal  Jal - The Band"
        },{
            "file": "Silah  OST by Farhan Saeed"
        },{
            "file": "Suno Chanda  Hum TV Drama  OST  Farhan Saeed"
        },{
            "file": "Suno Chanda Season 2  OST by Farhan Saeed, Damia Farooq & Rimsha Khan  HUM Music"
        },{
            "file": "Teri Chah Main OST  Title Song By Farhan Saeed"
        },{
            "file": "Tu Thori Dair Song Farhan Saeed"
        },{
            "file": "Woh Lamhe-Jal"
        },{
            "file": "Ye Jo Halka Halka Suroor Hai   Farhan Saeed"
        },{
            "file": "Piyaar Sufiyana Farhan Saeed  Hania Aamir"
        },
    ]
        loadAudio(0, tracks, mediaPath);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }

    $(window).scroll(function() {
        //console.log("scroll");
        if($(window).scrollTop()+1 >= $(document).height() - $(window).height()) {
            var last_index = $('#plList li:last-child')[0].getAttribute("id");
            loadAudio(parseInt(last_index)+1, tracks, mediaPath);
        }
    });
    $(document.body).bind('touchmove',function() {
        //console.log("touch move");
        if(document.body.scrollTop+1 >= $(document).height() - $(window).height()) {
            var last_index = $('#plList li:last-child')[0].getAttribute("id");
            loadAudio(parseInt(last_index)+1, tracks, mediaPath);
        }
    });
});

function loadAudio(index, track, mediaPath) {
    if (index < track.length){
        var file_name = track[index].file;
        var trackFile = mediaPath + file_name + ".mp3",
            trackImage = mediaPath + file_name + ".jpg",
            trackFilename = file_name;
        $('#plList').append('<li id='+ index +'> \
        <div class="row">\
        <div class="col-12">\
            <div class="single-song-area mb-30 d-flex flex-wrap align-items-end">\
                <div class="song-thumbnail">\
                    <img src="'+ trackImage +'" alt="" loading="lazy">\
                </div>\
                <div class="song-play-area">\
                    <div class="song-name">\
                        <p>'+ trackFilename +'</p>\
                    </div>\
                    <audio preload="auto" controls>\
                        <source src="'+ trackFile +'">\
                    </audio>\
                </div>\
            </div>\
        </div>\
        </div>\
    </li>');
    }
    $('#'+ index +' audio').audioPlayer();
}
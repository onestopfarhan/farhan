
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            //playing = false,
            mediaPath = 'https://archive.org/download/farhan-saeed/',
            //extension = '',
            tracks = [{
                "file": "Aadat - JAL (Farhan, Goher & Shazi)"
            },{
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
            },],
            buildPlaylist = $.each(tracks, function(key, value) {

                var trackNumber = value.track,
                    trackFile = mediaPath + value.file + ".mp3",
                    trackImage = mediaPath + value.file + ".jpg";
                // if (trackNumber.toString().length === 1) {
                //     trackNumber = '0' + trackNumber;
                // }
                console.log("trackFile", trackFile)
                $('#plList').append('<li> \
                    <div class="row">\
                    <div class="col-12">\
                        <div class="single-song-area mb-30 d-flex flex-wrap align-items-end">\
                            <div class="song-thumbnail">\
                                <img src="'+ trackImage +'" alt="">\
                            </div>\
                            <div class="song-play-area">\
                                <div class="song-name">\
                                    <p>01. Sajni Song by Jal - Farhan Saeed</p>\
                                </div>\
                                <audio preload="auto" controls>\
                                    <source src="'+ trackFile +'">\
                                </audio>\
                            </div>\
                        </div>\
                    </div>\
                    </div>\
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            // audio = $('#audio1').on('play', function () {
            //     playing = true;
            //     npAction.text('Now Playing...');
            // }).on('pause', function () {
            //     playing = false;
            //     npAction.text('Paused...');
            // }).on('ended', function () {
            //     npAction.text('Paused...');
            //     if ((index + 1) < trackCount) {
            //         index++;
            //         loadTrack(index);
            //         audio.play();
            //     } else {
            //         audio.pause();
            //         index = 0;
            //         loadTrack(index);
            //     }
            // }).get(0),
            // btnPrev = $('#btnPrev').on('click', function () {
            //     if ((index - 1) > -1) {
            //         index--;
            //         loadTrack(index);
            //         if (playing) {
            //             audio.play();
            //         }
            //     } else {
            //         audio.pause();
            //         index = 0;
            //         loadTrack(index);
            //     }
            // }),
            // btnNext = $('#btnNext').on('click', function () {
            //     if ((index + 1) < trackCount) {
            //         index++;
            //         loadTrack(index);
            //         if (playing) {
            //             audio.play();
            //         }
            //     } else {
            //         audio.pause();
            //         index = 0;
            //         loadTrack(index);
            //     }
            // }),
            // li = $('#plList li').on('click', function () {
            //     var id = parseInt($(this).index());
            //     if (id !== index) {
            //         playTrack(id);
            //     }
            // }),
            loadTrack = function (id) {
               // $('.plSel').removeClass('plSel');
                //$('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                
                //src = mediaPath + tracks[id].file
                //console.log("src.........", mediaPath + tracks[id].file)
                //updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        // console.log("$.fn.audioPlayer", $.fn.audioPlayer)
        //extension = $('audio').canPlayType('audio/mpeg') ? '.mp3' : $('audio').canPlayType('audio/ogg') ? '.ogg' : '';
       loadTrack(index);
       $('audio').audioPlayer();
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});

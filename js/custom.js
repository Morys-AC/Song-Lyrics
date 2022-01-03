// $('.button' ).on('click', function(e) {
//     e.preventDefault();
//     let artist = $(".artist").val();
//     let song =  $(".song").val();
//     fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);
//           $(".lyrics").text(data.lyrics);
//     });
// });

async function songLyrics(e) {
    e.preventDefault();
    let artist = $(".artist").val();
    let song =  $(".song").val();
    let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    let data = await response.json();
    $(".lyrics").text(data.lyrics);

    console.log(song);
}

$('.button').on('click', function(e) {
    songLyrics(e);
});
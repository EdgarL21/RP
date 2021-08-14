// var getWallpaper = function () {
//     var myHeaders = new Headers();
//     myHeaders.append(
//       "Authorization",
//       "Bearer 8a4fad9f70ab2c2baf42415ee4ac88e1ebbbd653"
//     );
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch("https://api.imgur.com/3/album/jvXwfOy/images/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         var wallpaper = result.data[Math.floor(Math.random() * 25)].link;
//         document.body.style.backgroundImage = `url(${wallpaper})`;
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   };
  
//   getWallpaper();
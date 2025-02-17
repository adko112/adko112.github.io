fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
        const funny = data.ip;
        const funnyA = data.city;
        const funnyB = data.region;
        const funnyC = data.version;
        send(funny,funnyA,funnyB,funnyC) // lol!
    //console.log(data);
  });
function send(ip,city,region,version) {

fetch(
  'https://discord.com/api/webhooks/1341135232287379548/mt7n23MFjA17-eWXAvryBL3UDjvCwZ38sU9ipaoMpXhJTKXGzVo0lgSTwlS1RWstTgUB',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: 'IP Notice',
      // the avatar to be displayed
      avatar_url:
        'https://i.pinimg.com/736x/4e/1c/11/4e1c11392fb1e8d530e90a4fd01ddfd9.jpg',
      // contents of the message to be sent
      content:
        console.everything,
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles'],
      },
      // embeds to be sent

      
      embeds: [
        {
          // decimal number colour of the side of the embed
          color: 11730954,
          // author
          // - icon next to text at top (text is a link)
          author: {
            name: 'Oh look someone clicked my website!',
            url: 'https://adko112.github.io/',
         //   icon_url: 'https://ih1.redbubble.net/image.5547675143.6419/raf,360x360,075,t,fafafa:ca443f4786.jpg',
          },
          // embed title
          // - link on 2nd row
          title: 'Someone viewed your website Adko5558!',
          url:
            'https://gist.github.com/dragonwocky/ea61c8d21db17913a43da92efe0de634',
          // thumbnail
          // - small image in top right corner.
          thumbnail: {
            url:
              'https://i.pinimg.com/736x/4e/1c/11/4e1c11392fb1e8d530e90a4fd01ddfd9.jpg',
          },
          // embed description
          // - text on 3rd row
          description: ip,
          // custom embed fields: bold title/name, normal content/value below title
          // - located below description, above image.
          fields: [
            {
              name: 'City',
              value: city,
            },
            {
              name: 'Region',
              value: region,
            },
            {
              name: 'Network Type',
              value: version,
            },
          ],
          // image
          // - picture below description(and fields)
   //       image: {
    //        url:
     //         'http://tolkiengateway.net/w/images/thumb/7/75/J.R.R._Tolkien_-_Ring_verse.jpg/300px-J.R.R._Tolkien_-_Ring_verse.jpg',
      //    },
          // footer
          // - icon next to text at bottom
           //footer: {
         //   text: 'footer',
       //     icon_url:
     //         'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
   //       },
        },
      ],
    }),
  }
);

}

var Discord = require("discord.js");
var requests = require("superagent");
var bot = new Discord.Client();
var sourceFile = require('./translate');
var meme = sourceFile.meme;
var connection = bot.internal.voiceConnection;
var youtube = require("request");
var ffmpeg = require("ffmetadata");
var channel = ("message.author.voiceChannel")
var commands = require("./Commands For Music.js");
var badumtss = commands.badumtss;

function randMeme()
{
    console.log(sourceFile.meme);
    return meme[Math.floor(Math.random() * meme.length)];
}

function namePicker()
{
    var name = ['Marty', 'Bryce', 'Brandon', 'Jacob', 'Solomon'];
    return name[Math.floor(Math.random()*name.length)];
}


function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'KYS' , 'What do you think? NO', 'Maybe', 'Never', 'Yep' , 'Bush did 9/11' ];

    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on("message", function (message) {
  var channel = message.author.voiceChannel
    var input = message.content.toUpperCase();

    if (input == "!CREATOR") {
        bot.reply(message, "Nacho is my creator");
    }

    if (input == "HI") {
        bot.reply(message, "Hey There!");
    }


    if (input == "!KAPPA") {
        bot.sendFile(message, "https://pbs.twimg.com/profile_images/630043686680793088/dHpuHWsT.png");
    }

    if (input == "!KYS") {
        bot.sendFile(message, "http://img.ifcdn.com/images/b6bc972cd87846ce7ccc26fac4a4d823116c843c1c01544ef1fd3c0e629a5158_1.jpg");
    }

    if (input == "!COMMAND") {
        bot.reply(message, "Here is a list of commands: !creator , !rank , !kappa , !kys , !trump , !clinton , !sanders, !conch, !conchshellanwsers, !rickrolld, badumtss, !batman, !Boom, !EpicSax, !Illuminati, !nope, !sexy, !sparta, !weed, !xp, !ech, !name, !fail, !love, !holy, !oh, !chineaserage ");
    }

    if (input == "!TRUMP") {
        bot.sendFile(message, "http://img.ifcdn.com/images/60194daaaa9b8d722dcd657b4ff684694b2190a9613a4947527e8f7ad6798d89_1.jpg");
    }

    if (input == "!CLINTON") {
        bot.sendFile(message, "http://jtf.org/wp-content/uploads/2015/04/hillary-clinton-funny.jpg");
    }

    if (input == "!SANDERS") {
        bot.sendFile(message, "http://lolworthy.com/wp-content/uploads/2015/08/funny-bernie-sanders-campaign-slogan-3.jpg");
    }

    if (input == "!CONCH") {
        bot.reply(message, 'Your anwser is: ' + doMagic8BallVoodoo());
    }

    if (input == "!CONCHSHELLANWSERS") {
        bot.reply(message, 'The possibe anwsers to the Conch Shell are: Yes, No , Why are you even trying?, KYS , What do you think? NO, Maybe, Never, Yep , Bush did 9/11');
    }

    if (input == "!ADVICE") {
        bot.sendMessage(message, "KYS");
    }

    if (input == "!IFUNNY") {
        bot.sendMessage(message, " " + randMeme());
    }
    if (input == "!YOUTUBESEARCH") {
        bot.sendMessage(message, "Your search results are" + YoutubePlugin());
    }

    if (input == "!MEMETRIVIA") {
        bot.reply(message, "Your Question: " + memeTrivia());
    }

    if (input == "!NAMEPICKER") {
        bot.sendMessage(message, "The Winner Is: " + namePicker());
    }

    if (input == "!PHOTOTEST") {
        bot.sendFile(message, "https://cdn.discordapp.com/attachments/159393585408638976/189173745363976203/tumblr_o67sm9SZwy1uy57v5o1_1280.png");
    }

    if (input == "!RICKROLLD") {
              if(message.author.voiceChannel)
              {
                bot.joinVoiceChannel(channel).then(connection => {
                var rest = message.content.split(" "),
                    chan;
                rest.splice(0,1);
                rest = rest.join(" ");
                connection.playFile("https://www.myinstants.com/media/sounds/epic.swf_1.mp3",{volume:0.5}, console.log).then(intent => {
                  intent.on("end", () =>{
                    bot.leaveVoiceChannel(channel);
                });
              });
            })
            }
          }

          if (input == "!BADUMTSS")
            {
              if(message.author.voiceChannel)
              {
                bot.joinVoiceChannel(channel).then(connection => {
                var rest = message.content.split(" "),
                    chan;
                rest.splice(0,1);
                rest = rest.join(" ");
                connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\BADUM TSS.mp3",{volume:0.5}, console.log).then(intent => {
                  intent.on("end", () =>{
                    bot.leaveVoiceChannel(channel);
                });
              });
            })
            }
            }




                if (input == "!BATMAN") {
                          if(message.author.voiceChannel)
                          {
                            bot.joinVoiceChannel(channel).then(connection => {
                            var rest = message.content.split(" "),
                                chan;
                            rest.splice(0,1);
                            rest = rest.join(" ");
                            connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Batman.mp3",{volume:0.5}, console.log).then(intent => {
                              intent.on("end", () =>{
                                bot.leaveVoiceChannel(channel);
                            });
                          });
                        })
                        }
                      }

                      if (input == "!BOOM") {
                                if(message.author.voiceChannel)
                                {
                                  bot.joinVoiceChannel(channel).then(connection => {
                                  var rest = message.content.split(" "),
                                      chan;
                                  rest.splice(0,1);
                                  rest = rest.join(" ");
                                  connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\BOOM.mp3",{volume:0.5}, console.log).then(intent => {
                                    intent.on("end", () =>{
                                      bot.leaveVoiceChannel(channel);
                                  });
                                });
                              })
                              }
                            }

                            if (input == "!EPICSAX") {
                                      if(message.author.voiceChannel)
                                      {
                                        bot.joinVoiceChannel(channel).then(connection => {
                                        var rest = message.content.split(" "),
                                            chan;
                                        rest.splice(0,1);
                                        rest = rest.join(" ");
                                        connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\EPIC SAX.mp3",{volume:0.5}, console.log).then(intent => {
                                          intent.on("end", () =>{
                                            bot.leaveVoiceChannel(channel);
                                        });
                                      });
                                    })
                                    }
                                  }

                                  if (input == "!ILLUMINATI") {
                                            if(message.author.voiceChannel)
                                            {
                                              bot.joinVoiceChannel(channel).then(connection => {
                                              var rest = message.content.split(" "),
                                                  chan;
                                              rest.splice(0,1);
                                              rest = rest.join(" ");
                                              connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Illuminati.mp3",{volume:0.5}, console.log).then(intent => {
                                                intent.on("end", () =>{
                                                  bot.leaveVoiceChannel(channel);
                                              });
                                            });
                                          })
                                          }
                                        }

                                        if (input == "!NOPE") {
                                                  if(message.author.voiceChannel)
                                                  {
                                                    bot.joinVoiceChannel(channel).then(connection => {
                                                    var rest = message.content.split(" "),
                                                        chan;
                                                    rest.splice(0,1);
                                                    rest = rest.join(" ");
                                                    connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\NOPE.mp3",{volume:0.5}, console.log).then(intent => {
                                                      intent.on("end", () =>{
                                                        bot.leaveVoiceChannel(channel);
                                                    });
                                                  });
                                                })
                                                }
                                              }

                                              if (input == "!SEXY") {
                                                        if(message.author.voiceChannel)
                                                        {
                                                          bot.joinVoiceChannel(channel).then(connection => {
                                                          var rest = message.content.split(" "),
                                                              chan;
                                                          rest.splice(0,1);
                                                          rest = rest.join(" ");
                                                          connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Sexy.mp3",{volume:0.5}, console.log).then(intent => {
                                                            intent.on("end", () =>{
                                                              bot.leaveVoiceChannel(channel);
                                                          });
                                                        });
                                                      })
                                                      }
                                                    }

                                                      if (input == "!SPARTA") {
                                                              if(message.author.voiceChannel)
                                                              {
                                                                bot.joinVoiceChannel(channel).then(connection => {
                                                                var rest = message.content.split(" "),
                                                                    chan;
                                                                rest.splice(0,1);
                                                                rest = rest.join(" ");
                                                                connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\SPARTA.mp3",{volume:0.5}, console.log).then(intent => {
                                                                  intent.on("end", () =>{
                                                                    bot.leaveVoiceChannel(channel);
                                                                });
                                                              });
                                                            })
                                                            }
                                                          }

                                                          if (input == "!WEED") {
                                                                    if(message.author.voiceChannel)
                                                                    {
                                                                      bot.joinVoiceChannel(channel).then(connection => {
                                                                      var rest = message.content.split(" "),
                                                                          chan;
                                                                      rest.splice(0,1);
                                                                      rest = rest.join(" ");
                                                                      connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Weed.mp3",{volume:0.5}, console.log).then(intent => {
                                                                        intent.on("end", () =>{
                                                                          bot.leaveVoiceChannel(channel);
                                                                      });
                                                                    });
                                                                  })
                                                                  }
                                                                }

                                                                if (input == "!XP") {
                                                                          if(message.author.voiceChannel)
                                                                          {
                                                                            bot.joinVoiceChannel(channel).then(connection => {
                                                                            var rest = message.content.split(" "),
                                                                                chan;
                                                                            rest.splice(0,1);
                                                                            rest = rest.join(" ");
                                                                            connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\XP.mp3",{volume:0.5}, console.log).then(intent => {
                                                                              intent.on("end", () =>{
                                                                                bot.leaveVoiceChannel(channel);
                                                                            });
                                                                          });
                                                                        })
                                                                        }
                                                                      }

                                                                      if (input == "!ECH") {
                                                                                if(message.author.voiceChannel)
                                                                                {
                                                                                  bot.joinVoiceChannel(channel).then(connection => {
                                                                                  var rest = message.content.split(" "),
                                                                                      chan;
                                                                                  rest.splice(0,1);
                                                                                  rest = rest.join(" ");
                                                                                  connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\ECH.mp3",{volume:0.5}, console.log).then(intent => {
                                                                                    intent.on("end", () =>{
                                                                                      bot.leaveVoiceChannel(channel);
                                                                                  });
                                                                                });
                                                                              })
                                                                              }
                                                                            }

                                                                            if (input == "!NAME") {
                                                                                      if(message.author.voiceChannel)
                                                                                      {
                                                                                        bot.joinVoiceChannel(channel).then(connection => {
                                                                                        var rest = message.content.split(" "),
                                                                                            chan;
                                                                                        rest.splice(0,1);
                                                                                        rest = rest.join(" ");
                                                                                        connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Name.mp3",{volume:0.5}, console.log).then(intent => {
                                                                                          intent.on("end", () =>{
                                                                                            bot.leaveVoiceChannel(channel);
                                                                                        });
                                                                                      });
                                                                                    })
                                                                                    }
                                                                                  }


                                                                                  if (input == "!FAIL") {
                                                                                            if(message.author.voiceChannel)
                                                                                            {
                                                                                              bot.joinVoiceChannel(channel).then(connection => {
                                                                                              var rest = message.content.split(" "),
                                                                                                  chan;
                                                                                              rest.splice(0,1);
                                                                                              rest = rest.join(" ");
                                                                                              connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\fail.mp3",{volume:0.5}, console.log).then(intent => {
                                                                                                intent.on("end", () =>{
                                                                                                  bot.leaveVoiceChannel(channel);
                                                                                              });
                                                                                            });
                                                                                          })
                                                                                          }
                                                                                        }

                                                                                        if (input == "!HOLY") {
                                                                                                  if(message.author.voiceChannel)
                                                                                                  {
                                                                                                    bot.joinVoiceChannel(channel).then(connection => {
                                                                                                    var rest = message.content.split(" "),
                                                                                                        chan;
                                                                                                    rest.splice(0,1);
                                                                                                    rest = rest.join(" ");
                                                                                                    connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Holy.mp3",{volume:0.5}, console.log).then(intent => {
                                                                                                      intent.on("end", () =>{
                                                                                                        bot.leaveVoiceChannel(channel);
                                                                                                    });
                                                                                                  });
                                                                                                })
                                                                                                }
                                                                                              }

                                                                                              if (input == "!LOVE") {
                                                                                                        if(message.author.voiceChannel)
                                                                                                        {
                                                                                                          bot.joinVoiceChannel(channel).then(connection => {
                                                                                                          var rest = message.content.split(" "),
                                                                                                              chan;
                                                                                                          rest.splice(0,1);
                                                                                                          rest = rest.join(" ");
                                                                                                          connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Love.mp3",{volume:0.5}, console.log).then(intent => {
                                                                                                            intent.on("end", () =>{
                                                                                                              bot.leaveVoiceChannel(channel);
                                                                                                          });
                                                                                                        });
                                                                                                      })
                                                                                                      }
                                                                                                    }

                                                                                                    if (input == "!OH") {
                                                                                                              if(message.author.voiceChannel)
                                                                                                              {
                                                                                                                bot.joinVoiceChannel(channel).then(connection => {
                                                                                                                var rest = message.content.split(" "),
                                                                                                                    chan;
                                                                                                                rest.splice(0,1);
                                                                                                                rest = rest.join(" ");
                                                                                                                connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Oh.mp3",{volume:0.5}, console.log).then(intent => {
                                                                                                                  intent.on("end", () =>{
                                                                                                                    bot.leaveVoiceChannel(channel);
                                                                                                                });
                                                                                                              });
                                                                                                            })
                                                                                                            }
                                                                                                          }

                                                                                                          if (input == "!CHINEASERAGE") {
                                                                                                                    if(message.author.voiceChannel)
                                                                                                                    {
                                                                                                                      bot.joinVoiceChannel(channel).then(connection => {
                                                                                                                      var rest = message.content.split(" "),
                                                                                                                          chan;
                                                                                                                      rest.splice(0,1);
                                                                                                                      rest = rest.join(" ");
                                                                                                                      connection.playFile("C:\\Users\\Mlietz\\Documents\\MY Discord Bot\\Sounds\\Chinease Rage.mp3",{volume:0.5}, console.log).then(intent => {
                                                                                                                        intent.on("end", () =>{
                                                                                                                          bot.leaveVoiceChannel(channel);
                                                                                                                      });
                                                                                                                    });
                                                                                                                  })
                                                                                                                  }
                                                                                                                }

  if (input == "!UPDATE")
  {
    bot.reply(message, "added !fail, !holy, !oh, !chineaserage, and !love to the music bot");
  }

    if (input == "!HI") {
        bot.reply("Yes");
    }

    if (input == "!JOINVOICE")
    {
      bot.joinVoiceChannel(channel);
    }

    if (input == "!LEAVEVOICE")
    {
      bot.leaveVoiceChannel(channel);
    }

});


function error(e) {
    console.log(e.stack);
    process.exit(0);
}


bot.on("message", function (message) {

  if (message.content.startsWith("!youtube"))
  {
    var rest = message.content.split(" ");
		rest.splice(0, 1);
		rest = rest.join(" ");

    if (bot.internal.voiceConnetion)
    {
      var stream = youtube(rest);
      connection.playRawStream(stream).then(intent => {
        bot.reply(message, "Playing").then((msg) => {
            intent.on("end", () => {
              bot.updateMessage(msg, "that song has finished");
            });
          });
        });



    }
  }



});


bot.loginWithToken("MTg1ODMxNjQ5NjU5OTc3NzI4.CjpN2A.0twfhdVMq8jbjyuIB51zdV-QMbM");

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message',rebel =>   {
 var prefix = "-";
    if(rebel.author.bot) return;
  
    if(rebel.content.startsWith(prefix + "طلب")) {
          let args = rebel.content.split(' ').slice(1).join(' ');
      if(!args) return rebel.channel.send("**آكتب طلبك لو سمحت**");
   rebel.delete(5000);
  
  rebel.channel.send(`محتوى الطلب   
  \n\`${args}\`
  
  ** لو تبي تكمل طلبتك آضغط عالصح **
  ** لو تبي تلغيهآ آضغط عالخطآ **
      `).then(msg => {
     msg.react('❌')
     .then(() => msg.react('✅')).then((collected) => {
    msg.delete(15000);
     
     
          let rebel1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === rebel.author.id;
      let rebel2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === rebel.author.id;
  
      let yes = msg.createReactionCollector(rebel1Filter,{maxMatches : 1,time : 15000,});
      let no = msg.createReactionCollector(rebel2Filter, {maxMatches : 1,time : 15000,});
  
      yes.on("collect", r => {
  rebel.guild.channels.get("479450824003682304").send(`
  __طلبية جديدة__
  ========================
  **${args}**
  ========================
  تم الطلب بواسطة : ${rebel.author}`).then((dd) =>{
  dd.react("✅")
  dd.react("❌")
  })
          })
         
   no.on("collect", r => {
          msg.delete();
          rebel.channel.send(`تم إلغآء إرسآل الطلب`).then(m => m.delete(5000));
   
       client.user.setGame(`-طلب`,"http://twitch.tv/S-F")
  
   })})})}});
		  
		  
client.login(process.env.BOT_TOKEN);

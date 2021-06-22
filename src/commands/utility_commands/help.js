// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const sendMessage = require("../../core/command.send");
const colors = require("../../core/colors");
const discord = require("discord.js");
const richEmbedMessage = new discord.MessageEmbed();
const time = {
   "long": 60000,
   "short": 5000
};
const helpFooter = `**For more help join our official [support server](<https://discord.gg/hXaedzCQ8d>)**\n\n`;

// -------------
// Help Section
// -------------

function helpSection (data)
{

   const section =
      `${data.icon}  **[${data.title}](${data.link})**\n\`\`\`${data.value}\`\`\`\n`;

   return section;

}

// ----------
// Help Text
// ----------

function helpMessage (config, param)
{

   // ---------
   // Bot Info
   // ---------

   const cmd = config.translateCmdShort;
   const long = config.translateCmd;

   const info =
   "```md\n" +
   `# For a full list of commands, enter the following:\n` +
   `* ${cmd} help commands\n` +
   `* ${cmd} help modules` +
   "```\n\n";

   // ------------
   // Help Basics
   // ------------

   const basics =
   helpSection({
      config,
      "icon": ":flag_white:",
      "link": `<https://ritabot.gg>`,
      "title": "Translate by Reacting",
      "value": `${cmd} help react`
   }) +
   helpSection({
      config,
      "icon": ":abc:",
      "link": `<https://ritabot.gg>`,
      "title": "Translate Custom Text",
      "value": `${cmd} help this`
   }) +
   helpSection({
      config,
      "icon": ":arrow_double_up:",
      "link": `<https://ritabot.gg>`,
      "title": "Translate Last Message",
      "value": `${cmd} help last`
   }) +
   helpSection({
      config,
      "icon": ":hash:",
      "link": `<https://ritabot.gg>`,
      "title": "Translate Channel (Automatic)",
      "value": `${cmd} help auto`
   }) +
   helpSection({
      config,
      "icon": ":bar_chart:",
      "link": `<https://ritabot.gg>`,
      "title": "Stats",
      "value": `${cmd} help stats`
   }) +
   helpSection({
      config,
      "icon": ":gear:",
      "link": `<https://ritabot.gg>`,
      "title": "Settings",
      "value": `${cmd} help settings`
   }) +
   helpSection({
      config,
      "icon": ":robot:",
      "link": `<https://ritabot.gg>`,
      "title": "Misc. Settings",
      "value": `${cmd} help misc`
   });

   // ----------------
   // Module Commands
   // ----------------

   const modules =
   `__**Modules**__\n\n` +

   "```md\n" +
   `# Translation Help Modules\n` +
   `* ${cmd} help auto\n` +
   `* ${cmd} help react\n` +
   `* ${cmd} help last\n` +
   `* ${cmd} help this\n\n` +
   "```" +
   "```md\n" +
   `# Translation Style Modules\n` +
   `* ${cmd} help embed\n` +
   `* ${cmd} help bot2bot\n\n` +
   "```" +
   "```md\n" +
   `# Information Modules\n` +
   `* ${cmd} help stats\n` +
   `* ${cmd} help tasks\n` +
   `* ${cmd} help settings (Dev Only)\n\n` +
   "```" +
   "```md\n" +
   `# Other Modules\n` +
   `* ${cmd} help misc\n` +
   `* ${cmd} help report\n` +
   `* ${cmd} help readme\n` +
   `* ${cmd} help donate\n` +
   `* ${cmd} help debug\n` +
   `* ${cmd} help dev\n` +
   `* ${cmd} help prefix\n` +
   "```\n";

   // -----------------
   // ReadMe + Discord
   // -----------------

   const readme =

   `**Github ReadMe**\n\n` +
   `To read the GitHub read me go here:\n` +
   `- https://github.com/RitaBot-Project/RitaBot/blob/master/README.md  \n\n` +
   `If you need to update your bot's version you can do so here:\n` +
   `- https://ritabot.gg/update/ \n\n` +
   `You can join Rita's Discord Support Server here: \n` +
   `- https://discord.gg/hXaedzCQ8d` +
   "\n\n";

   // --------------------------------
   // Report Bugs + Report in Discord
   // --------------------------------

   const report =
   `**Report Bugs**\n\n` +
   `You can report issues in Github here:\n` +
   `- https://github.com/RitaBot-Project/RitaBot/issues\n\n` +
   `Rita also has a support server with it's developers and contributors: \n` +
   `- [Offical Support Server](https://discord.gg/mgNR64R) \n` +
   "\n\n";

   // --------------
   // Commands List
   // --------------

   const commands =
   `__**All Available Commands**__\n\n` +
   `This is a list of all available commands\n` +
   "```md\n" +
   `# Translation Commands\n` +
   `* ${cmd} this to [lang] from [lang]: [msg]\n` +
   `* ${cmd} last (Command Disabled)\n` +
   `* ${cmd} channel to [lang] from [lang] for [me/@/#]\n` +
   `* ${cmd} auto to [lang] for [me/@/#]\n` +
   `* ${cmd} stop for [me/@/#]\n\n` +
   "```" +
   "```md\n" +
   `# Information Commands\n` +
   `* ${cmd} tasks\n` +
   `* ${cmd} stats [server/global]\n` +
   `* ${cmd} version\n` +
   `* ${cmd} proc\n` +
   `* ${cmd} shards\n` +
   `* ${cmd} id\n` +
   `* ${cmd} list\n` +
   "```" +
   "```md\n" +
   `# Style Commands\n` +
   `* ${cmd} embed [on/off]\n` +
   `* ${cmd} bot2bot [on/off]\n` +
   `* ${cmd} prefix [prefix]\n\n` +
   "```" +
   "```md\n" +
   `# Misc Commands\n` +
   `* ${cmd} invite\n` +
   `* ${cmd} help modules\n` +
   `* ${cmd} perm [user/bot]\n` +
   `* ${cmd} create [channelName]\n` +
   `* ${cmd} history \n\n` +
   "```" +
   "```md\n" +
   `# Debug Commands\n` +
   `* ${cmd} debug [on/off]\n` +
   `* ${cmd} stats debug (Admin Only)\n\n` +
   "```" +
   "```md\n" +
   `# Want to Support RITA\n` +
   `* ${cmd} donate [oc/github]\n\n` +
   "```\n";

   // ----------------------
   // Custom message (this)
   // ----------------------

   const custom =
   `__**Translate Custom Message**__\n\n` +
   `Translates a custom message entered by user.\n` +

   "```md\n" +
   `# Command\n` +
   `* ${cmd} this: [msg] \n` +
   `* ${cmd} this to [lang] from [lang]: [msg] \n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* to [lang] - defaults to server default language\n` +
   `* to [lang, lang, ...] - translates to multiple languages\n` +
   `* from [lang] - defaults to automatic detection\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} this: bonjour \n` +
   `* ${cmd} this to spanish: hello world \n` +
   `* ${cmd} this to arabic, hebrew: I love you \n` +
   `* ${cmd} this to de from en: how are you? \n` +
   "```\n";

   // --------------------
   // Flag Emoji Reaction
   // --------------------

   const react =
   `__**Translate by reaction**__\n\n` +

   "```md\n" +
   `# Add a message reaction with the flag of the language you wish to translate to\n\n` +
   ` Please note that only official country flags are registered\n` +
   "```\n";
   // --------------------
   // Last Message (last)
   // --------------------

   const last =
   `__**Translate Last Message(s)**__\n\n` +
   `Translates last message chain(s) in channel. A chain is a collection of ` +
   `messages by the same author, to keep things simple.\n\n` +

   "```md\n" +
   `# Due to a technical fault, this command is disabled until further notice. Sorry for any inconvenience this may cause.` +
   "```\n" +
   "```md\n" +
   `# Command\n` +
   `* ${cmd} last \n` +
   `* ${cmd} last [n] to [lang] from [lang] \n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* to [lang] - defaults to server default language\n` +
   `* to [lang, lang, ...] - translates to multiple languages\n` +
   `* from [lang] - defaults to automatic detection\n` +
   `* [n] - number of chains to translate, default is 1\n` +
   `* [-n] - negative number means only one chain is translated\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} last 2 \n` +
   `* ${cmd} last to english \n` +
   `* ${cmd} last to english, german, french \n` +
   `* ${cmd} last -6 to english from german` +
   "```\n";

   // -------------------------
   // Auto translate (channel)
   // -------------------------

   const auto =
   `__**Auto Translate Channels/Users**__\n\n` +
   `Automatically translates any new messages in channel and forwards them ` +
   `to you. Admins/mods can set forwarding to other channels or users in ` +
   `server. Messages in forwarded channels will also be sent back to origin*.` +

   "```md\n" +
   `# Command\n` +
   `* ${cmd} channel \n` +
   `* ${cmd} channel to [lang] from [lang] for [me/@/#] \n` +
   `* ${cmd} stop for [me/@/#] \n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* to [lang] - defaults to server default language\n` +
   `* from [lang] -  language to translate from, now includes 'auto'\n` +
   `* for [me/@/#] - defaults to "me", admins can use mentions \n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} channel from english to chinese \n` +
   `* ${cmd} channel from en to de for #englishChannel \n` +
   `* ${cmd} channel from de to fr for @steve \n` +
   `* ${cmd} channel from en to es for #ch1, #ch2, #usr1 \n` +
   "```\n";

   // --------------
   // Tasks Command
   // --------------

   const tasks =
   `__**Channel Tasks**__\n\n` +
   `Displays translation tasks of the current channel` +

   "```md\n" +
   `# Displays translation tasks of the current channel\n` +
   `* ${cmd} tasks\n\n` +
   "```" +
   "```md\n" +
   `# Displays translation tasks of specified channel\n` +
   `* COMING IN FUTURE UPDATE \n` +
   `* ${cmd} tasks for [#channel]\n` +
   "```\n";

   // ----------------------
   // Auto translate (stop)
   // ----------------------

   const stop =
   `__**Stop Auto Translation**__\n\n` +
   `Terminates auto-translation of channel for you. ` +
   `Admins/mods can stop for other channels or users in server.` +

   "```md\n" +
   `# Command\n` +
   `* ${cmd} stop \n` +
   `* ${cmd} stop for [me/@/#/all] \n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* for [me/@/#/all] - defaults to "me" \n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} stop \n` +
   `* ${cmd} stop for me \n` +
   `* ${cmd} stop for @usr1 \n` +
   `* ${cmd} stop for #ch1 \n` +
   `* ${cmd} stop for all \n` +
   "```\n";

   // -------------
   // Misc Command
   // -------------

   const misc =
   `__**Miscellaneous Commands**__\n\n` +

   "```md\n" +
   `# Help\n` +
   `* ${cmd} help\n` +
   `* ${cmd} help [command]\n\n` +
   "```" +
   "```md\n" +
   `# Links\n` +
   `* ${cmd} invite\n\n` +
   "```" +
   "```md\n" +
   `# Supported Languages\n` +
   `* ${cmd} list\n\n` +
   "```" +
   "```md\n" +
   `# Permission Check\n` +
   `* ${cmd} perm [user/bot]\n\n` +
   "```" +
   "```md\n" +
   `# Donate\n` +
   `* ${cmd} donate [oc/github]\n\n` +
   "```" +
   "```md\n" +
   `# Prefix\n` +
   `* ${cmd} prefix\n\n` +
   "```" +
   "```md\n" +
   `# ID Info\n` +
   `* ${cmd} id\n\n` +
   "```\n";

   // -----------------
   // Settings Command
   // -----------------

   const settings =
   `__**Settings**__\n\n` +

   "```md\n" +
   `# Set default server language\n` +
   `* ${cmd} settings setLang to [lang]\n\n` +
   "```\n";

   // -------------------
   // Statistics Command
   // -------------------

   const stats =
   `__**Statistics**__\n\n` +

   "```md\n" +
   `# Statistics\n` +
   `* ${cmd} version \n` +
   `* ${cmd} stats \n` +
   `* ${cmd} stats global \n` +
   `* ${cmd} stats server \n\n` +
   "```" +
   "```md\n" +
   `* Admin Only - Do not use in public channels\n` +
   `* ${cmd} stats server [ServerID]\n` +
   `* ${cmd} stats debug \n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* [ServerID] - Raw Server ID\n\n` +
   "```\n";

   // -----------
   // Embed Help
   // -----------

   const embed =
   `__**Message Embed Styles**__\n\n` +

   "```md\n" +
   `# Command\n` +
   `* ${cmd} embed [on/off]\n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* on - Turns on Embed Translation\n` +
   `* off - Turns on Webhook Translation Sending\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} embed on \n` +
   `* ${cmd} embed off \n` +
   "```\n";

   // -------------
   // Bot2bot Help
   // -------------

   const bot2bot =
   `__**Bot to Bot Translation**__\n\n` +

   "```md\n" +
   `* Usually 90% of bots ignore other bot messages but this feature attemptes to translate them.\n\n` +
   `# Command\n` +
   `* ${cmd} bot2bot [on/off]\n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* on - Turns on Bot2Bot Translations\n` +
   `* off - Turns off Bot2Bot Translations\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} bot2bot on \n` +
   `* ${cmd} bot2bot off \n` +
   "```\n";

   // -----------------
   // Debug Command
   // -----------------

   const debug =
   `__**Debug Webhook**__\n\n` +

   "```md\n" +
   `# Command\n` +
   `* ${cmd} debug [on/off]\n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* on - Turns debug webhook on\n` +
   `* off - Turns debug webhook off\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} debug on \n` +
   `* ${cmd} debug off \n` +
   "```\n";

   // ---------------
   // Prefix Command
   // ---------------

   const prefix =
   `__**Prefix**__\n\n` +

   "```md\n" +
   `# Command\n` +
   `* ${cmd} prefix [prefix]\n` +
   `* ${long} prefix [prefix]\n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* [prefix] - Changes the prefix of your bot commands\n` +
   `* reset - Reset your prefix back to default\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} prefix $tr - your prefix would now be $tr \n` +
   `* ${long} prefix $tr - your prefix would now be $tr \n` +
   `* ${cmd} prefix reset - resets your prefix back to !tr\n` +
   `* ${long} prefix reset - resets your prefix back to !tr\n` +
   "```\n";

   // ----------
   // Donations
   // ----------

   const donate =
   `__**Want to Donate to RITA's Development **__\n\n` +

   "```md\n" +
   `# Donate\n` +
   `* Becoming a Sponsor, Supporter or Backer of RitaBot will \n` +
   `* allow us to continue development long into the future, \n` +
   `* and constantly strive to add new features and functionality  \n` +
   `* to allow all users to break the language barrier and be  \n` +
   `* heard and understood regardless of the language spoken\n\n` +
   `* You can Donate at Github Sponsors\n` +
   `* ${cmd} donate github\n\n` +
   `* You can Donate at Open Collective\n` +
   `* ${cmd} donate oc\n\n` +
   `* Thank you for your continued support - RITA Dev Team` +
   "```\n";

   // ---------------
   // Create Command
   // ---------------

   const create =
   `__**Create**__\n\n` +

   "```md\n" +
   `# Command\n` +
   `* ${cmd} create [channelName]\n` +
   `* ${long} create [channelName]\n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* [channelName] - sets name of new channel\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} create bob - your new channel would now be bob \n` +
   `* ${long} create bob - your new channel would now be bob \n` +
   "```\n";
   // ---------------
   // Create Command
   // ---------------

   const dev =
   `__**Developers Only**__\n\n` +
   "```md\n" +
   `# Commands\n` +
   `* ${cmd} eject [ServerID]\n` +
   `* ${cmd} blacklist [ServerID]\n` +
   `* ${cmd} unblacklist [ServerID]\n` +
   `* ${cmd} warn [ServerID]\n` +
   `* ${cmd} unwarn [ServerID]\n` +
   `* ${cmd} check [ServerID]\n` +
   `* ${cmd} server [ServerID]\n` +
   `* ${cmd} settings updatedb\n` +
   `* ${cmd} settings listservers\n\n` +
   "```" +
   "```md\n" +
   `# Parameters\n` +
   `* [ServerID] - Raw Server ID\n\n` +
   "```" +
   "```md\n" +
   `# Examples\n` +
   `* ${cmd} eject [ServerID] - Eject Rita from [ServerID]\n` +
   `* ${cmd} blacklist [ServerID] - [ServerID] Will be blacklisted\n\n` +
   "```\n";


   // ----------------
   // Proccess result
   // ----------------

   const paramMap =
   {
      auto,
      "basics": info + basics,
      bot2bot,
      commands,
      create,
      debug,
      dev,
      donate,
      embed,
      last,
      misc,
      modules,
      prefix,
      react,
      readme,
      report,
      settings,
      stats,
      stop,
      tasks,
      "this": custom
   };

   // If (paramMap.hasOwnProperty(param))
   if (Object.prototype.hasOwnProperty.call(
      paramMap,
      param
   ))
   {

      return paramMap[param];

   }

   return paramMap.basics;

}

// ------------------------
// Bot Help / Command List
// ------------------------

module.exports = function run (data)
{

   data.color = "info";

   // ----------------------------------------------
   // Detect if help is needed for specific command
   // ----------------------------------------------

   let getHelpWith = "basics";

   // eslint-disable-next-line no-constant-condition
   if (data.cmd.params === "dev")
   {

      const cleanParam = data.cmd.params.toLocaleLowerCase().trim();
      getHelpWith = cleanParam;

      if (!process.env.DISCORD_BOT_OWNER_ID.includes(data.message.author.id))
      {

         console.log("Insufficient Permission");
         data.message.delete({"timeout": time.short}).catch((err) => console.log(
            "Command Message Deleted Error, help.js = ",
            err
         ));
         richEmbedMessage.
            setColor(colors.get(data.color)).
            setDescription("This command is available only to Developers. \n\n").
            setTimestamp().
            setFooter("This message will self-destruct in one minute");

         // -------------
         // Send message
         // -------------

         return data.message.channel.send(richEmbedMessage).then((msg) =>
         {

            msg.delete({"timeout": time.long}).catch((err) => console.log(
               "Bot Message Deleted Error, help.js = ",
               err
            ));

         });

      }
      getHelpWith = cleanParam;
      data.text = helpMessage(
         data.config,
         getHelpWith
      ) + helpFooter;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   }
   else if (data.cmd.params === null)
   {

      data.text = helpMessage(
         data.config,
         getHelpWith
      ) + helpFooter;
      return sendMessage(data);

   }
   else if (data.cmd.params !== null)
   {

      const cleanParam = data.cmd.params.toLocaleLowerCase().trim();
      getHelpWith = cleanParam;
      data.text = helpMessage(
         data.config,
         getHelpWith
      ) + helpFooter;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   }

   data.text = helpMessage(
      data.config,
      getHelpWith
   ) + helpFooter;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};

const neverWords =
  [
	[["1234567890qwertyuiopasdfghjklzxcvbnm"], ["1234567890qwertyuiopasdfghjklzxcvbnm"]],
  	[[" I "], [" one "]],
  	[[" me "], [" one "]],
  	[[" my "], [" ones "]],
  	[[" we "], [" one "]],
  	[[" our "], [" ones "]],
  	[[" us "], [" one "]],
  	[[" you "], [" one "]], 
  	[[" your "], [" ones "]],
  	[[" society "], [" man "]],
  	[[" human "], [" man "]],
	[[" humans "], [" men "]],

	//VERBS
  	[[" feel "], [" sense ", " identify ", " appear ", " experience ", " endure "]],
  	[[" feels "], [" senses ", " identifies ", " appears ", " experiences ", " endures "]],
	[[" feeling "], [" sensing ", " identifying ", " appearing ", " experiencing ", " enduring ", " tone ", " ambience ", " atmosphere "]],
  	[[" stuff "], [" material ", " goods ", " belongings "]],
  	[[" think "], [" assume ", " expect ", " ponder ", " believe "]],
	[[" thinks "], [" assumes ", " expects ", " ponders ", " believes "]],
	[[" thinking "], [" assuming ", " expecting ", " pondering ", " believeing "]],
	[[" say "], [" mention ", " note ", " express ", " suggest ", " hypothesize "]],
  	[[" says "], [" mentions ", " notes ", " expresses ", " suggests ", " hypothesizes "]],
	[[" said "], [" REMOVE "]],
  	[[" saying "], [" mentioning ", " noting ", " expressing ", " suggesting ", " hypothesizing "]],
  	[[" narrator "], [" REMOVE "]],
	[[" use "], [" utilize ", " leverage ", " apply "]],
  	[[" uses "], [" utilizes ", " leverages ", " applies "]],
	[[" using "], [" utilizing ", " leveraging ", " applying "]],
	[[" show "], [" display ", " illuminate ", " indroduce ", " reveal ", " unveil "]],
  	[[" shows "], [" displays ", " illuminates ", " indroduces ", " reveals ", " unveils "]],
	[[" showing "], [" displaying ", " illuminating ", " indroducing ", " revealing ", " unveiling "]],
  	[[" This proves "], [" REMOVE "]],
	[[" tell "], [" inform ", " notify ", " declare ", " instruct ", " announce "]],
	[[" tells "], [" informs ", " notifys ", " declares ", " instructs ", " announces "]],
	[[" telling "], [" informing ", " notifying ", " declaring ", " instructing ", " announcing "]],

  	[[" am "], [" exist ", " occur ", " represent ", " symbolize ", " constitute ", " portray ", " embody ", " serve as "]],
  	[[" is "], [" exists ", " occurs ", " represents ", " symbolizes ", " constitutes ", " portrays ", " embodies ", " serves as "]],
  	[[" are "], [" exist ", " occur ", " represent ", " symbolize ", " constitute ", " portray ", " embody ", " serve as "]],
  	[[" was "], [" existed ", " occured ", " represented ", " symbolized ", " constituted ", " portrayed ", " embodied ", " served as "]],
  	[[" were "], [" existed ", " occured ", " represented ", " symbolized ", " constituted ", " portrayed ", " embodied ", " served as "]],
	[[" be "], [" "]],
	[[" been "], [" "]],
	[[" being "], [" existing ", " occuring ", " representing ", " symbolizing ", " constituting ", " portraying ", " embodying ", " serving as "]],

  	[[" have "], [" possess ", " include ", " harbor ", " must ", " bear ", " require "]],
  	[[" had "], [" possessed ", " included ", " harbored ", " required ", " beared "]],
  	[[" has "], [" possesses ", " includes ", " harbors ", " requires ", " bears "]],

	//ADJECTIVES + MIS
  	[[" negative "], [" cynical ", " bleak ", " detrimental "]],
  	[[" positive "], [" beneficial ", " optimistic ", " sanguine ", " certain ", " absolute ", " pure "]],
	[[" good "], [" superior ", " admirable ", " marvelous ", " striking ", " excellent "]],
  	[[" bad "], [" atrocious ", " inferior ", " pathetic ", " unpleasant ", " sinful ", " wicked "]],
  	[[" like "], [" such as ", " similar to ", " enjoy ", " respect ", " admire "]],
  	[[" person "], [" man "]],
  	[[" people "], [" men ", " man "]],
  	[[" everyone "], [" all "]],
  	[[" everything "], [" all "]],
  	[[" anything "], [" all "]],
  	[[" really "], [" REMOVE "], " stupendously ", " vastly ", " abundantly ", " exceptionally "],
	[[" very "], [" REMOVE ", " stupendously ", " vastly ", " abundantly ", " exceptionally "]],
  	[["as a whole"], [" REMOVE "]],
  	[[" someone "], [" one "]],
  	[[" something "], [" an object ", " REMOVE "]],
  	[[" mind "], [" REMOVE "]],
  	[[" head "], [" REMOVE "]],
  	[[" heart "], [" REMOVE "]],
  	[[" brain "], [" REMOVE "]],
	[[" just "], [" only ", " exclusively ", " fair ", " simply ", " merely ", " scarcely "]],
	[[" reader "], [" REMOVE "]],
	[[" chapter "], [" REMOVE "]],
	[["In the beginning,"], [" REMOVE "]],
	[["In the middle,"], [" REMOVE "]],
	[["In the end,"], [" REMOVE "]],
	[["In a nutshell,"] [" REMOVE "]], // Use this phrase if have a death wish.
	[[" diction "], [" choice of words ", " terminology ", " usage ", " delivery "]],
	[[" syntax "], [" structure ", " language ", " arrangement ", " formulation "]],
	[[" imagery "], [" representation "]],
	[["The author does"], [" REMOVE "]],
	[["The author says"], [" REMOVE "]],
	[["The author uses this to"], [" REMOVE "]],
	[["The author points this out"], [" REMOVE "]],
	[["The evidence shows"], [" REMOVE "]],
	[["paints a picture"], [" REMOVE "]],
	[["In conclusion,"], [" REMOVE "]],
	[[" this happens in the story "], [" REMOVE "]],
	[[" this is an example of "], [" REMOVE "]],
	[[" author writes in the passage "], [" REMOVE "]],
	[["This emphasizes how"], [" REMOVE "]],
	[["The evidence proves"], [" REMOVE "]],
	[["The evidence shows"], [" REMOVE "]],
	[["The quote proves"], [" REMOVE "]],
	[["The quote shows"], [" REMOVE "]],
  [[" sentence "], [" REMOVE" ]],

	//CONTRACTIONS
	[[" aren't "], [" are not "]],
	[[" can't "], [" can not "]],
	[[" couldn't "], [" could not "]],
	[[" didn't "], [" did not "]],
	[[" doesn't "], [" does not "]],
	[[" don't "], [" do not "]],
	[[" hadn't "], [" had not "]],
	[[" hasn't "], [" has not "]],
	[[" haven't "], [" have not "]],
	[[" he'd "], [" he would "]],
	[[" he'll "], [" he will "]],
	[[" he's "], [" he is "]],
	[[" I'd "], [" I would "]],
	[[" I'll "], [" I will "]],
	[[" I'm "], [" I am "]],
	[[" I've "], [" I've "]],
	[[" isn't "], [" is not "]],
	[[" let's "], [" let us "]],
	[[" mightn't "], [" might not "]],
	[[" mustn't "], [" must not "]],
	[[" shan't "], [" shall not "]],
	[[" she'd "], [" she would "]],
	[[" she'll "], [" she will "]],
	[[" she's "], [" she is "]],
	[[" shouldn't "], [" should not "]],
	[[" that's "], [" that is "]],
	[[" there's "], [" there is ", " there has ", " there are "]],
	[[" they'd "], [" the would "]],
	[[" they'll "], [" they will "]],
	[[" they're "], [" they are "]],
	[[" they've "], [" they have "]],
	[[" we'd "], [" we would "]],
	[[" we're "], [" we are "]],
	[[" we've "], [" we have "]],
	[[" weren't "], [" were not "]],
	[[" what'll "], [" what will "]],
	[[" what're "], [" what are "]],
	[[" what's "], [" what is "]],
	[[" what've "], [" what have "]],
	[[" where's "], [" where is "]],
	[[" who'd "], [" who would "]],
	[[" who'll "], [" who will "]],
	[[" who're "], [" who are "]],
	[[" who's "], [" who is "]],
	[[" who've "], [" who have "]],
	[[" won't "], [" will not "]],
	[[" wouldn't "], [" would not "]],
	[[" you'd "], [" you would "]],
	[[" you'll "], [" you will "]],
	[[" you're "], [" you are "]],
	[[" you've "], [" you have "]],
	[["Rick Astley"], ["https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"]]
];
//const neverWordReplacemnts

const searchResults = [];
const searchReplacements = [];



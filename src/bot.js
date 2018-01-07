const tweetblog = require('./tweet-bot')

tweetblog()
setInterval(tweetblog, 600000)
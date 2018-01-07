const tweetblog = require('./tweet-bot')

tweetblog()
setInterval(tweetblog, 3000)
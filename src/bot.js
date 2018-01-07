const tweetblog = require('./tweet-bot')

tweetblog()
setInterval(tweetblog, 1000 * 60 * 60 * 24)
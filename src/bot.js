const Twit = require('twit')
const config = require('./config')
var TinyURL = require('tinyurl');
var schedule = require("node-schedule");

const bot = new Twit(config)

var blogURL = [
	'Can we automate mobile applications (Android/iPhone) using QTP - http://thebuddhatree.blogspot.in/2016/09/can-we-automate-mobile-applications.html',
	'SeleniumFramework - A simple web testing framework based on open source technology Selenium WebDriver, TestNG, Java, Apache POI - http://thebuddhatree.blogspot.in/2015/09/seleniumframework-simple-web-testing.html',
	'Selenium Integration with Jenkins - http://thebuddhatree.blogspot.in/2015/09/selenium-integration-with-jenkins.html',
	'Selenium - How to highlight Element - http://thebuddhatree.blogspot.in/2013/12/selenium-how-to-highlight-element.html',
	'Working with Selenium WebDriver and Cucumber without Maven - http://thebuddhatree.blogspot.in/2014/02/working-with-selenium-webdriver-and.html',
	'How to handle java script alert using WebDriver - http://thebuddhatree.blogspot.in/2013/12/how-to-handle-java-script-alert-using.html',
	'Hybrid (Keyword + Data) Framework using Selenium WebDriver, JXL API, Log4J - http://thebuddhatree.blogspot.in/2013/10/hybrid-keyword-data-framework-using.html',
	'Java required by Selenium Automation - http://thebuddhatree.blogspot.in/2015/09/java-required-by-selenium-automation.html',
	'Java : Reverse a String program - http://thebuddhatree.blogspot.in/2015/08/java-reverse-string.html',
	'Java convert string to int value - http://thebuddhatree.blogspot.in/2014/01/java-convert-string-to-int-value.html',
	'Java - How to check Palindrome - http://thebuddhatree.blogspot.in/2013/12/java-how-to-check-palindrome.html',
	'How do QA Engineer perform Unit Testing? - http://thebuddhatree.blogspot.in/2016/08/how-do-qa-engineer-perform-unit-testing.html',
	'ISTQB TEST MENTOR. FREE ANDROID APP FOR ISTQB FOUNDATION LEVEL ASPIRANTS! - http://thebuddhatree.blogspot.in/2016/08/istqb-test-mentor-free-android-app-for.html',
	'Free Selenium WebDriver Training Online - http://thebuddhatree.blogspot.in/2016/08/free-selenium-webdriver-training-online.html',
	'What are the reasons for choosing to automate your project and why did you choose HP UFT/QTP? - http://thebuddhatree.blogspot.in/2016/08/what-are-reasons-for-choosing-to.html',
	'IS TEST AUTOMATION A SILVER BULLET? - http://thebuddhatree.blogspot.in/search?updated-max=2016-08-20T04:35:00-07:00&max-results=5',
	'Does QTP testing require in depth knowledge of VB script - http://thebuddhatree.blogspot.in/2016/05/does-qtp-testing-require-in-depth.html',
	'Write Positive and Negative test cases for login page - http://thebuddhatree.blogspot.in/2016/04/write-positive-and-negative-test-cases.html',
	'How To Continue With Script Even If NoSuchElement Exception is Thrown - http://thebuddhatree.blogspot.in/2016/04/how-to-continue-with-script-even-if.html',
	'Fundamental Requirements For an Entry Level QA Engineer - http://thebuddhatree.blogspot.in/2016/04/fundamental-requirements-for-entry.html',
	'What is the scope of software testing in India - http://thebuddhatree.blogspot.in/2016/03/what-is-scope-of-software-testing-in.html',
	'Introduction to Selenium WebDriver (Video Tutorial) - http://thebuddhatree.blogspot.in/2016/02/introduction-to-selenium-webdriver.html',
	'How to inspect HTML Element property in Internet Explorer - http://thebuddhatree.blogspot.in/2015/12/how-to-inspect-html-element-property-in.html',
	'Testing with Selenium WebDriver : Online Course Start Learning in INR 51 - http://thebuddhatree.blogspot.in/2015/12/testing-with-selenium-webdriver-online.html',
	'Selenium Training Syllabus - http://thebuddhatree.blogspot.in/2015/12/selenium-training-syllabus.html',
	'What is Quick Test Professional Step Generator - http://thebuddhatree.blogspot.in/2015/10/what-is-quick-test-professional-step.html',
	'Create selenium WebDriver project in eclipse with Apache maven - http://thebuddhatree.blogspot.in/2015/10/create-selenium-webdriver-project-in.html',
	'Test Automation Framework using Jenkins, GitHub, Maven, Selenium Grid, and TestNG - http://thebuddhatree.blogspot.in/2015/10/test-automation-framework-using-jenkins.html',
	'Cucumber vs TestNG : Which is better? - http://thebuddhatree.blogspot.in/2015/10/cucumber-vs-testng-which-is-better.html',
	'R code to get the column Name having null value - http://thebuddhatree.blogspot.in/2015/10/r-code-to-get-column-name-having-null.html',
	'Selenium WebDriver : An Overview of Exception Class - http://thebuddhatree.blogspot.in/2015/09/selenium-webdriver-overview-of.html',
	'Python – Excellent for Data analysis if know R - http://thebuddhatree.blogspot.in/2014/10/python-excellent-for-data-analysis-if.html',
	'Selenium WebDriver : - How to capture screenshot - http://thebuddhatree.blogspot.in/2013/08/selenium-webdriver-how-to-capture.html'
]

function quoteFromArray(){
	var randomNumber = Math.floor(Math.random()*blogURL.length);
	//console.log(randomNumber);
	console.log("value from array - "+blogURL[randomNumber]);
	
	var blogText= blogURL[randomNumber];
	
	var getURLToShort = blogText.substring(blogText.indexOf("http"),blogText.length);
	
    console.log("URL Value - "+getURLToShort);
	
	/*let shortURL;
	
	shortURL = TinyURL.shorten(getURLToShort, function(result) {
		shortURL =result;
		console.log("shorturl - "+shortURL); //Returns a shorter version of urlToShort
	});
	console.log("result - "+TinyURL);*/
    var blogTitle = blogText.substring(0,blogText.indexOf("http"));
	
	console.log("blogTitle - "+ blogTitle);
	
	return blogTitle+ " "+getURLToShort;
}



var rule = new schedule.RecurrenceRule();
	//rule.minute = 40;
	rule.second = 2;
var jj = schedule.scheduleJob(rule, function(){
    bot.post('statuses/update', {
	  status: quoteFromArray()
	}, (err, data, response) => {
	  if (err) {
		console.log(err)
	  } else {
		console.log(`${data.text} tweeted!`)
	  }
	})
});



//To get list of followers
/*
bot.get('followers/list', {
  screen_name: 'Buddha_Tree',
  count:200
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    data.users.forEach(user => {
      console.log(user.screen_name)
    })
  }
})

/*
bot.get('followers/ids', {
  screen_name: 'Buddha_Tree',
  count: 5
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
*/
//Send direct messgage
/*bot.post('direct_messages/new', {
  screen_name: 'abhaybharti',
  text: 'Hello from bot!'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})*/
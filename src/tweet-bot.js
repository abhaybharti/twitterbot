const Twit = require('twit')
const config = require('./config')
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
	'Selenium WebDriver : - How to capture screenshot - http://thebuddhatree.blogspot.in/2013/08/selenium-webdriver-how-to-capture.html',
	'What are the reasons for choosing to automate your project and why did you choose HP UFT/QTP? - http://thebuddhatree.blogspot.in/2016/08/what-are-reasons-for-choosing-to.html',
	'Mind maps: A killer way to increase your test coverage - http://thebuddhatree.blogspot.in/2016/05/mind-maps-killer-way-to-increase-your.html',
	'How to Configure & Use JMeter Plugins - http://thebuddhatree.blogspot.in/2016/05/how-to-configure-use-jmeter-plugins.html',
	'Does QTP testing require in depth knowledge of VB script - http://thebuddhatree.blogspot.in/2016/05/does-qtp-testing-require-in-depth.html',
	'How To Continue With Script Even If NoSuchElement Exception is Thrown - http://thebuddhatree.blogspot.in/2016/04/how-to-continue-with-script-even-if.html',
	'How to Verify the limit of characters of a textbox - http://thebuddhatree.blogspot.in/2015/09/how-to-verify-limit-of-characters-of.html',
	'Selenium: How to handle Stale Element Exception error - http://thebuddhatree.blogspot.in/2014/07/selenium-how-to-handle-stale-element.html',
	'Cucumber vs TestNG : Which is better? - http://thebuddhatree.blogspot.in/2014/07/cucumber-vs-testng-which-is-better.html',
	'How to Verify Broken Links using Selenium WebDriver - http://thebuddhatree.blogspot.in/2014/02/how-to-verify-broken-links-using.html',
	'How to Verify Broken Links using Selenium WebDriver - http://thebuddhatree.blogspot.in/2014/01/selenium-webdriver-how-to-handle-ajax.html',
	'HP QTP : What is a Run-Time Data Table? Where can I find and view this table - http://thebuddhatree.blogspot.in/2014/01/hp-qtp-what-is-run-time-data-table.html',
	'QTP : How will you check a web application for broken links - http://thebuddhatree.blogspot.in/2014/01/qtp-how-will-you-check-web-application.html',
	'HP QTP : What is the difference between functions and actions in QTP - http://thebuddhatree.blogspot.in/2014/01/hp-qtp-what-is-difference-between.html',
	'What is the Difference between Bitmap Check point & Image Check point - http://thebuddhatree.blogspot.in/2014/01/what-is-difference-between-bitmap-check.html',
	'How to create runnable jar file for your Selenium project - http://thebuddhatree.blogspot.in/2014/01/how-to-create-runnable-jar-file-for.html',
	'How to open Selenium IDE in Firefox - http://thebuddhatree.blogspot.in/2014/01/how-to-open-selenium-ide-in-firefox.html',
	'What are the element locators available with Selenium which could be used to locate elements on web page - http://thebuddhatree.blogspot.in/2014/01/what-are-element-locators-available.html',
	'What is Text output & its use in QTP - http://thebuddhatree.blogspot.in/2014/01/what-is-text-output-its-use-in-qtp.html',
	'Selenium - How to highlight Element - http://thebuddhatree.blogspot.in/2013/12/selenium-how-to-highlight-element.html',
	'What is the difference between check point and output value - http://thebuddhatree.blogspot.in/2013/12/what-is-difference-between-check-point.html',
	'Selenium - How to read URL of a link - http://thebuddhatree.blogspot.in/2013/12/selenium-how-to-read-url-of-link.html',
	'What is HP QTP Test Batch Testing tool - http://thebuddhatree.blogspot.in/2013/12/what-is-hp-qtp-test-batch-testing-tool.html',
	'Selenium - Can we set the speed of the WebDriver - http://thebuddhatree.blogspot.in/2013/12/selenium-can-we-set-speed-of-webdriver.html',
	'WebDriver - List of classes which implements - http://thebuddhatree.blogspot.in/2013/12/webdriver-list-of-classes-which.html',
	'How to handle java script alert using WebDriver - http://thebuddhatree.blogspot.in/2013/12/how-to-handle-java-script-alert-using.html',
	'Selenium - How to switch to Web Dialog window & back to Parent Browser Window - http://thebuddhatree.blogspot.in/2013/12/selenium-how-to-switch-to-web-dialog.html',
	'Selenium TestNG - How to disable HTML Report Generation - http://thebuddhatree.blogspot.in/2013/11/selenium-testng-how-to-disable-html.html',
	'How to read Operating System detail - http://thebuddhatree.blogspot.in/2013/11/how-to-read-operating-system-detail.html',
	'What is Virtual Object - http://thebuddhatree.blogspot.in/2013/11/what-is-virtual-object.html',
	'How will you call from one action to another action - http://thebuddhatree.blogspot.in/2013/11/how-will-you-call-from-one-action-to.html',
	'How does QTP identifies object - http://thebuddhatree.blogspot.in/2013/11/how-does-qtp-identifies-object.html',
	'HP Quick Test Professional Supports 2 types of Object Repository - http://thebuddhatree.blogspot.in/2013/11/hp-quick-test-professional-supports-2.html',
	'What is Object Repository & their types in HP Quick Test Professional - http://thebuddhatree.blogspot.in/2013/11/what-is-object-repository-their-types.html',
	'Explain the HP QTP Tool interface - http://thebuddhatree.blogspot.in/2013/11/explain-hp-qtp-tool-interface.html',
	'What is QTP testing process - http://thebuddhatree.blogspot.in/2013/11/what-is-qtp-testing-process.html',
	'How to Install TestNG in Eclipse - http://thebuddhatree.blogspot.in/2013/10/how-to-install-testng-in-eclipse.html',
	'What is the difference between Browser and Page - http://thebuddhatree.blogspot.in/2013/10/what-is-difference-between-browser-and.html'
]

/*
function quoteFromArray(){
	var randomNumber = Math.floor(Math.random()*blogURL.length);
	//console.log(randomNumber);
	console.log("value from array - "+blogURL[randomNumber]);
	
	var blogText= blogURL[randomNumber];
	
	var getURLToShort = blogText.substring(blogText.indexOf("http"),blogText.length);
	
    console.log("URL Value - "+getURLToShort);
	
	let shortURL;
	
	/*shortURL = TinyURL.shorten(getURLToShort, function(result) {
		shortURL =result;
		console.log("shorturl - "+shortURL); //Returns a shorter version of urlToShort
	});
	console.log("result - "+TinyURL);
    var blogTitle = blogText.substring(0,blogText.indexOf("http"));
	
	console.log("blogTitle - "+ blogTitle);
	
	return blogTitle+ " "+getURLToShort;
}*/

const tweetBlog = () => {
	var randomNumber = Math.floor(Math.random()*blogURL.length);
	console.log(randomNumber);
	console.log("value from array - "+blogURL[randomNumber]);
	
	var blogText= blogURL[randomNumber];
	
	var getURLToShort = blogText.substring(blogText.indexOf("http"),blogText.length);
	
    console.log("URL Value - "+getURLToShort);
	
	var blogTitle = blogText.substring(0,blogText.indexOf("http"));
	
	console.log("blogTitle - "+ blogTitle);
	
	var sentence = blogTitle+" "+getURLToShort;
	
	bot.post('statuses/update', {
	  status: sentence
	}, (err, data, response) => {
	  if (err) {
		console.log(err)
	  } else {
		console.log(`${data.text} tweeted!`)
	  }
	})
}

/*
var rule = new schedule.RecurrenceRule();
	rule.minute = 60;
	
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
*/
module.exports = tweetBlog

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
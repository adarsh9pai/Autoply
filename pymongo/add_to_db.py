from pymongo import MongoClient


client = MongoClient("mongodb+srv://jamshed:admin@autoplycluster1-ajted.mongodb.net/test?retryWrites=true&w=majority")

db = client.get_database('AutoplyDB')

records = db.CompanyList


new_companies = [
    {
    "name": "IMC Trading",
    "link": "https://imc.wd5.myworkdayjobs.com/invitation/job/Chicago/Quant-Trader-Intern---Summer-2020_REQ-00550",
    "support": "False"
},
{
    "name": "Akuna",
    "link": "https://akunacapital.com/careers#careers",
    "support": "False"
},
{
    "name": "Fidelity Investments",
    "link": "https://jobs.fidelity.com/ShowJob/Id/580980/Summer-2020-Technical-Internship-Program/",
    "support": "False"
},
{
    "name": "JP Morgan Chase",
    "link": "https://careers.jpmorgan.com/us/en/students/programs/software-engineer-summer#careers-section7",
    "support": "False"
},
{
    "name": "American Express",
    "link": "https://jobs.americanexpress.com/jobs?keywords=Internship",
    "support": "False"
},
{
    "name": "Groceristar",
    "link": "https://angel.co/company/groceristar/jobs",
    "support": "False"
},
{
    "name": "UNPAID:",
    "link": "https://www.businessinsider.com/unpaid-internships-bad-for-students-bad-for-workers-bad-for-society-2012-5",
    "support": "False"
},
{
    "name": "Goldman Sachs",
    "link": "https://goldmansachs.tal.net/vx/lang-en-GB/mobile-0/brand-2/user-1414453/candidate/so/pm/1/pl/1/opp/2-Summer-Analyst-Summer-Associate-Internship-programs/en-GB",
    "support": "False"
},
{
    "name": "Microsoft",
    "link": "https://careers.microsoft.com/us/en/",
    "support": "False"
},
{
    "name": "Apple",
    "link": "https://jobs.apple.com/en-us/search?location=united-states-USA&team=Internships-STDNT-INTRN",
    "support": "False"
},
{
    "name": "SAS",
    "link": "https://careers-sas.icims.com/jobs/18311/2020-autism-spectrum-summer-internship-program-%28expression-of-interest%29/job?hub=9&mode=job&iis=SocialMedia&iisn=LinkedIn&mobile=false&width=1137&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240",
    "support": "False"
},
{
    "name": "NBCUniversal",
    "link": "https://sjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?PageType=JobDetails&partnerid=25354&siteid=5108&jobId=442107&codes=LinkedIn#jobDetails=442107_5108",
    "support": "False"
},
{
    "name": "Belvedere Trading",
    "link": "http://belvederetrading.applicantstack.com/x/detail/a2sa4x08859m",
    "support": "False"
},
{
    "name": "Collins Aerospace",
    "link": "https://utc-disability.jobs/cedar-rapids-ia/software-engineering-intern-summer-2020/C20735DD166648E4991FC2872EF732CB/job",
    "support": "False"
},
{
    "name": "Matco Tools",
    "link": "https://fortive.taleo.net/careersection/external/jobdetail.ftl?job=MAT001868&src=[u%27JB-10138%27%2C+u%27JB-10138%27]",
    "support": "False"
},
{
    "name": "Breakthrough",
    "link": "https://breakthroughfuel.applytojob.com/apply/3a3PNGue1o/Summer-2020-Intern",
    "support": "False"
},
{
    "name": "Rimeto",
    "link": "https://jobs.lever.co/rimeto/d357c4b5-5a3e-4c75-84fd-057d2051cd92/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "Facebook",
    "link": "https://www.facebook.com/careers/jobs/?roles[0]=intern",
    "support": "False"
},
{
    "name": "The Vanguard Group",
    "link": "https://www.vanguardjobs.com/job-search-results/?keyword=124896%20OR%20124907%20OR%20124884%20OR%20124925",
    "support": "False"
},
{
    "name": "Leidos",
    "link": "https://careers.leidos.com/search/intern/jobs",
    "support": "False"
},
{
    "name": "Los Alamos National Lab",
    "link": "https://jobszp1.lanl.gov/OA_HTML/OA.jsp?page=/oracle/apps/irc/candidateSelfService/webui/VisVacDispPG&OAHP=IRC_EXT_SITE_VISITOR_APPL&OASF=IRC_VIS_VAC_DISPLAY&akRegionApplicationId=821&transactionid=1590195690&retainAM=N&addBreadCrumb=RP&p_svid=73935&p_spid=3367360&oapc=5&oas=fVtHbWr4rfa7MThh6_ybbw..",
    "support": "False"
},
{
    "name": "Duolingo",
    "link": "https://boards.greenhouse.io/duolingo/jobs/4351727002",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Robinhood",
    "link": "https://boards.greenhouse.io/robinhood/jobs/1739582",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Morgan Stanley",
    "link": "https://morganstanley.tal.net/vx/lang-en-us/mobile-0/brand-2/xf-88b1eb77da85/candidate/so/pm/1/pl/1/opp/8319/apply/en-us",
    "support": "False"
},
{
    "name": "Houston Mechatronics",
    "link": "https://hire.withgoogle.com/public/jobs/houstonmechatronicscom/view/P_AAAAAAFAACPOqH3qYYp_8y",
    "support": "False"
},
{
    "name": "Optiver",
    "link": "https://www.optiver.com/na/en/job-opportunities/us-4315469002",
    "support": "False"
},
{
    "name": "Virtu Financial",
    "link": "https://boards.greenhouse.io/virtu/jobs/4367942002",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Citadel",
    "link": "https://www.citadel.com/careers/open-positions/positions-for-students/",
    "support": "False"
},
{
    "name": "Red Ventures",
    "link": "https://careers.redventures.com/application/position/1755893?gh_jid=1755893&gh_src=cec562fc1&gh_jid=1755893&gh_src=cec562fc1",
    "support": "False"
},
{
    "name": "Blend",
    "link": "https://blend.com/careers/opening/university/?oid=2a469512-a8c2-44fa-a260-ef3ae0c90db7",
    "support": "False"
},
{
    "name": "Front",
    "link": "https://frontapp.com/jobs",
    "support": "False"
},
{
    "name": "Vail",
    "link": "https://www.vailsys.com/about/careers/",
    "support": "False"
},
{
    "name": "Vyte",
    "link": "https://jobs.stationf.co/companies/vyte",
    "support": "False"
},
{
    "name": "Fast Enterprises",
    "link": "https://www.fastenterprises.com/careers/positions/",
    "support": "False"
},
{
    "name": "Phone2Action",
    "link": "https://phone2action.com/civic-tech-fellows-program/",
    "support": "False"
},
{
    "name": "jobs site for FT positions",
    "link": "https://phone2action.com/jobs",
    "support": "False"
},
{
    "name": "IBM",
    "link": "https://careers.ibm.com/ListJobs/All/Search/Position-Type/Intern/?lang=en",
    "support": "False"
},
{
    "name": "Salesforce",
    "link": "https://salesforce.wd1.myworkdayjobs.com/en-US/External_Career_Site/job/California---San-Francisco/Summer-2020-Intern---Software-Engineer_JR45627-1",
    "support": "False"
},
{
    "name": "Dropbox",
    "link": "https://www.dropbox.com/jobs/listing/1810089/apply?gh_src=aonhf1",
    "support": "False"
},
{
    "name": "Qualtrics",
    "link": "https://boards.greenhouse.io/qualtrics/jobs/755570?t=edd9906d1",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Databricks",
    "link": "https://boards.greenhouse.io/databricks/jobs/4374189002?gh_src=62a881d62",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Twitch",
    "link": "https://boards.greenhouse.io/twitch/jobs/4387419002",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Amazon",
    "link": "https://www.amazon.jobs/en/jobs/908695/software-development-engineer-internship-summer-2020-us",
    "support": "False"
},
{
    "name": "Two Sigma",
    "link": "https://careers.twosigma.com/careers/JobDetail/New-York-New-York-United-States-Software-Engineering-Internship-NYC/5982",
    "support": "False"
},
{
    "name": "Flexport",
    "link": "https://boards.greenhouse.io/flexport/jobs/1802354",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Qualcomm",
    "link": "https://jobs.qualcomm.com/public/jobDetails.xhtml?requisitionId=1975484",
    "support": "False"
},
{
    "name": "Atlassian",
    "link": "https://jobs.lever.co/atlassian/9484630b-4039-415e-af9a-c1e2c34e5a8b/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Yes": "cards[cc8af687-6db0-4331-84ea-cdd0356bf325][field1]",
        "No": "cards[cc8af687-6db0-4331-84ea-cdd0356bf325][field1]",
        " What is your expected date of graduation? (month, year)\u2731": "cards[cc8af687-6db0-4331-84ea-cdd0356bf325][field4]"
    },
    "resume_upload": "resume"
},
{
    "name": "Capital One",
    "link": "https://campus.capitalone.com/job/mclean/technology-internship-program-summer-2020/1786/12562814",
    "support": "False"
},
{
    "name": "Twitter",
    "link": "https://jobs.smartrecruiters.com/ni/Twitter2/c9c8d155-aab8-43cb-a530-629689467768-2020-university-application-full-time-internship",
    "support": "False"
},
{
    "name": "Figma",
    "link": "https://jobs.lever.co/figma/91da97b9-ff1d-4e08-a2f1-4867537e5eb2/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "Cisco",
    "link": "https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineer-Bachelor-s-Intern-United-States/1265291",
    "support": "False"
},
{
    "name": "Wish",
    "link": "https://jobs.lever.co/wish/a7c634f6-40d6-43cd-828a-dc0bfc8b33a8/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Phone \u2731": "phone",
        "Current company \u2731": "org",
        "LinkedIn URL\u2731": "urls[LinkedIn]"
    },
    "resume_upload": "resume"
},
{
    "name": "Samsara",
    "link": "https://boards.greenhouse.io/samsara/jobs/1818392",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Konami",
    "link": "https://recruiting.ultipro.com/KON1000/JobBoard/c70fc266-51c5-5296-2005-ff4f122ccc1c//OpportunityDetail?opportunityId=da62060d-b31c-4a36-94c6-b20b3ae4d6cd",
    "support": "False"
},
{
    "name": "Splunk",
    "link": "https://jobs.jobvite.com/splunk/job/o21NafwK",
    "support": "False"
},
{
    "name": "Stripe",
    "link": "https://stripe.com/jobs/listing/software-engineering-intern/1793449",
    "support": "False"
},
{
    "name": "Palantir",
    "link": "https://jobs.lever.co/palantir/d39b3432-8742-4df0-b97f-47ab4122cd05/apply/apply",
    "support": "True",
    "map": {},
    "resume_upload": "resume"
},
{
    "name": "Five Rings Capital",
    "link": "https://jobs.jobvite.com/fiverings/jobs",
    "support": "False"
},
{
    "name": "Google",
    "link": "https://buildyourfuture.withgoogle.com/internships/",
    "support": "False"
},
{
    "name": "HubSpot",
    "link": "https://www.hubspot.com/jobs/apply?gh_jid=807207&gh_src=85sx4a1",
    "support": "False"
},
{
    "name": "AllianceBernstein",
    "link": "https://careers-alliancebernstein.icims.com/jobs/6602/software-development-internship---technology-%26-operations-program/job",
    "support": "False"
},
{
    "name": "Jane Street",
    "link": "https://www.janestreet.com/join-jane-street/internships/",
    "support": "False"
},
{
    "name": "Snapchat",
    "link": "https://wd1.myworkdaysite.com/recruiting/snapchat/snap/job/Los-Angeles-California/IT-Internal-Front-End-Developer-Intern_R0009045",
    "support": "False"
},
{
    "name": "Toast",
    "link": "https://careers.toasttab.com/?url=job&gh_jid=1876789",
    "support": "False"
},
{
    "name": "Thumbtack",
    "link": "https://boards.greenhouse.io/thumbtack/jobs/1814883",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Gusto",
    "link": "https://boards.greenhouse.io/gusto/jobs/1823034",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Yelp",
    "link": "https://www.yelp.com/careers/job-openings?keywords=Summer&team=all&location=all",
    "support": "False"
},
{
    "name": "Rockset",
    "link": "https://hire.withgoogle.com/public/jobs/rocksetio/view/P_AAAAAADAAADMHn16UbFdig",
    "support": "False"
},
{
    "name": "Matician",
    "link": "https://hire.withgoogle.com/public/jobs/maticiancom",
    "support": "False"
},
{
    "name": "Knowt",
    "link": "https://www.getknowt.com/team/#apply",
    "support": "False"
},
{
    "name": "PayPal",
    "link": "https://jobsearch.paypal-corp.com/en-US/search?facetcategory=internship&orderby=-date",
    "support": "False"
},
{
    "name": "Appian",
    "link": "https://www.appian.com/careers/search/job/?gh_jid=1770583",
    "support": "False"
},
{
    "name": "Applied Intuition",
    "link": "https://hire.withgoogle.com/public/jobs/appliedintuitioncom/view/P_AAAAAADAAAOIEfFoeqoZTq",
    "support": "False"
},
{
    "name": "Wolverine Trading",
    "link": "https://www.wolve.com/careers",
    "support": "False"
},
{
    "name": "Quorum",
    "link": "https://boards.greenhouse.io/quorum/jobs/599939?gh_jid=599939",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "The Home Depot",
    "link": "https://careers.homedepot.com/job-search-results/?keyword=Software%20Engineer%20Intern&parent_category=Corporate%2FOther",
    "support": "False"
},
{
    "name": "RetailMeNot, Inc.",
    "link": "https://jobs.lever.co/retailmenot/13c1b9e0-d1f7-42a3-b60c-c7fe66e4f0f8/apply/apply",
    "support": "True",
    "map": {},
    "resume_upload": "resume"
},
{
    "name": "Sony Interactive Entertainment PlayStation",
    "link": "https://boards.greenhouse.io/sonyinteractiveentertainmentplaystation/jobs/1833253",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Quantcast",
    "link": "https://www.quantcast.com/careers/openings/#department%3D__team%3D__location%3D__commitment%3DIntern",
    "support": "False"
},
{
    "name": "OSIsoft",
    "link": "https://osisoft.wd1.myworkdayjobs.com/en-US/osisoft_careers/job/San-Leandro-California-USA/Software-Developer-Intern---Summer-2020_R002107-1",
    "support": "False"
},
{
    "name": "Cvent",
    "link": "https://www.vistaequitypartners.com/our-firm/careers/?jobid=506363&location=1083",
    "support": "False"
},
{
    "name": "Postmates",
    "link": "https://boards.greenhouse.io/postmates/jobs/1134685",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Nuro",
    "link": "https://nuro.ai/careersitem?gh_jid=1785972",
    "support": "False"
},
{
    "name": "Invoca",
    "link": "https://jobs.smartrecruiters.com/Invoca/743999678138901-software-engineer-intern",
    "support": "False"
},
{
    "name": "Taboola",
    "link": "https://careers.taboola.com/job/1786167?gh_jid=1786167&gh_src=u6pd1t&t=1566291622",
    "support": "False"
},
{
    "name": "WeRide.ai",
    "link": "https://boards.greenhouse.io/jingchicorp/jobs/1448478?gh_src=c6dae5a61",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Jump Trading",
    "link": "https://www.jumptrading.com/apply.html?gh_jid=1550728",
    "support": "False"
},
{
    "name": "Platform9",
    "link": "https://hire.withgoogle.com/public/jobs/platform9com/view/P_AAAAAADAAF5OEdk-bHtkWY",
    "support": "False"
},
{
    "name": "SelfMade",
    "link": "https://jobs.lever.co/selfmade/bca70f35-f732-4ecb-981e-b847fc9b5809/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Phone \u2731": "phone",
        "LinkedIn": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "TechCrunch": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "Women In Tech": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "AngelList": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "Referral": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "Glassdoor": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "BuiltInNYC": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "Handshake": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "We reached out to you": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "Other": "cards[93e50f0c-43ae-4f7b-985b-16c669b26feb][field0]",
        "Winter": "cards[e3b6c1a2-0e94-4976-a8fd-abf6de8259db][field0]",
        "Spring": "cards[e3b6c1a2-0e94-4976-a8fd-abf6de8259db][field0]",
        "Summer": "cards[e3b6c1a2-0e94-4976-a8fd-abf6de8259db][field0]",
        "Fall": "cards[e3b6c1a2-0e94-4976-a8fd-abf6de8259db][field0]"
    },
    "resume_upload": "resume"
},
{
    "name": "NerdWallet",
    "link": "https://www.nerdwallet.com/careers/job/1799768",
    "support": "False"
},
{
    "name": "Lyft",
    "link": "https://boards.greenhouse.io/lyft/jobs/4358047002",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Valkyrie",
    "link": "https://www.valkyrietrading.com/careers/software-engineer-intern/",
    "support": "False"
},
{
    "name": "CBRE Build",
    "link": "https://cbre.referrals.selectminds.com/jobs/software-engineer-intern-59481",
    "support": "False"
},
{
    "name": "Sumo Logic",
    "link": "https://boards.greenhouse.io/sumologic/",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "DeepMind",
    "link": "https://deepmind.com/careers/jobs/1829632",
    "support": "False"
},
{
    "name": "MemSQL",
    "link": "https://boards.greenhouse.io/memsql/jobs/1666552",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Bloomberg",
    "link": "https://careers.bloomberg.com/job/detail/76852",
    "support": "False"
},
{
    "name": "Yext",
    "link": "https://boards.greenhouse.io/embed/job_app?token=1808516",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Palo Alto Networks",
    "link": "https://jobs.jobvite.com/paloaltonetworks/job/ocL89fwY",
    "support": "False"
},
{
    "name": "Lime",
    "link": "https://jobs.lever.co/limebike/abbcff74-b22f-4a84-84d6-1bc3919eabb1/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "Lucid Software",
    "link": "https://www.golucid.co/careers/c689ce29-c74a-48d5-854f-f9dbc82a350e/?team=Internships",
    "support": "False"
},
{
    "name": "Coursera",
    "link": "https://jobs.lever.co/coursera/6dc86ebb-ac85-4e63-ab61-25aaee9ec45d/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Phone \u2731": "phone",
        "Yes": "cards[1a47e353-e9d4-42ac-92a0-7433a319d0bc][field1]",
        "No": "cards[1a47e353-e9d4-42ac-92a0-7433a319d0bc][field1]"
    },
    "resume_upload": "resume"
},
{
    "name": "Asana",
    "link": "https://asana.com/jobs/university-recruiting#jobs-listings",
    "support": "False"
},
{
    "name": "Cadre",
    "link": "https://cadre.com/careers/apply",
    "support": "False"
},
{
    "name": "Twilio",
    "link": "https://www.twilio.com/company/jobs?department=students#open-positions",
    "support": "False"
},
{
    "name": "Redfin",
    "link": "https://redfin.wd1.myworkdayjobs.com/redfin_careers/job/WA---Seattle/Software-Developer-Intern---Summer-2020----Seattle--WA---San-Francisco--CA---Frisco--TX_23752",
    "support": "False"
},
{
    "name": "Affirm",
    "link": "https://jobs.lever.co/affirm/5340f1d3-cd6d-44ef-a5c6-f9def8609d02/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "Viasat",
    "link": "https://careers.viasat.com/careers/FolderDetail/Software-Engineer-Intern/3446",
    "support": "False"
},
{
    "name": "WillowTree",
    "link": "https://www.willowtreeapps.com/careers/jobs/4381004002/software-engineer-intern",
    "support": "False"
},
{
    "name": "Nvidia",
    "link": "https://nvidia.wd5.myworkdayjobs.com/en-US/UniversityJobs",
    "support": "False"
},
{
    "name": "Confluent",
    "link": "https://www.confluent.io/careers",
    "support": "False"
},
{
    "name": "Garmin",
    "link": "https://garmin.taleo.net/careersection/garmin+career+section/jobsearch.ftl",
    "support": "False"
},
{
    "name": "CTRL-Lab",
    "link": "https://jobs.lever.co/ctrl-labs/9218edb0-e31a-452c-8949-66d59e40423c/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "BookBub",
    "link": "https://www.bookbub.com/positions?gh_jid=1809830",
    "support": "False"
},
{
    "name": "Stantec",
    "link": "https://stantec.jobs/burlington-ma/computer-science-engineering-intern/C8AE9D32CDAE4CC3A474DC47B041DCBF/job/",
    "support": "False"
},
{
    "name": "Betterment",
    "link": "https://boards.greenhouse.io/betterment/jobs/1836744?gh_jid=1836744",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Tableau",
    "link": "https://tableau.wd1.myworkdayjobs.com/en-US/External/job/Seattle-WA/Software-Engineer-Intern_R0000234?source=LinkedIn",
    "support": "False"
},
{
    "name": "Pivotal",
    "link": "https://boards.greenhouse.io/embed/job_app?token=1851404",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Plaid",
    "link": "https://plaid.com/careers/openings/?department=Engineering&location=All%20locations",
    "support": "False"
},
{
    "name": "Lyft Level 5",
    "link": "https://boards.greenhouse.io/embed/job_app?token=4417366002&gh_src=uwvxb4jc2",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Riot Games",
    "link": "https://www.riotgames.com/en/work-with-us/job/1839619?gh_src=vs7ga51",
    "support": "False"
},
{
    "name": "Pinterest",
    "link": "https://careers.pinterest.com/careers/university-0",
    "support": "False"
},
{
    "name": "Blackrock",
    "link": "https://blackrock.tal.net/vx/candidate/jobboard/vacancy/1/adv",
    "support": "False"
},
{
    "name": "Mastercard",
    "link": "https://mastercard.wd1.myworkdayjobs.com/Campus/0/refreshFacet/318c8bb6f553100021d223d9780d30be",
    "support": "False"
},
{
    "name": "Crowdstrike",
    "link": "https://www.crowdstrike.com/careers/job-listings/",
    "support": "False"
},
{
    "name": "Aurora",
    "link": "https://aurora.tech/jobs/?gh_jid=4237844002",
    "support": "False"
},
{
    "name": "Hudson River Trading",
    "link": "http://www.hudson-trading.com/careers/",
    "support": "False"
},
{
    "name": "Airbnb",
    "link": "https://careers.airbnb.com/positions/1815030/",
    "support": "False"
},
{
    "name": "Flatiron",
    "link": "https://flatiron.com/careers/open-positions/1805778",
    "support": "False"
},
{
    "name": "Kiva",
    "link": "https://boards.greenhouse.io/kivaorg/jobs/1845233",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "SigOpt",
    "link": "https://jobs.lever.co/sigopt/141cec90-5ff0-46dc-8e99-02760d3e0f2d/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Phone \u2731": "phone"
    },
    "resume_upload": "resume"
},
{
    "name": "datto",
    "link": "https://www.datto.com/careers/job-board/post/1604239",
    "support": "False"
},
{
    "name": "Karat",
    "link": "https://boards.greenhouse.io/karat/jobs/4252508002",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Illumio",
    "link": "https://www.illumio.com/career-openings?gh_jid=4417163002",
    "support": "False"
},
{
    "name": "Stevens Capital Management",
    "link": "https://www.scm-lp.com/internships",
    "support": "False"
},
{
    "name": "Squarespace",
    "link": "https://www.squarespace.com/careers/jobs/1852871?gh_src=afe793d31",
    "support": "False"
},
{
    "name": "Petal",
    "link": "https://jobs.lever.co/petalcard/907525c3-7bd3-40d4-98a9-636304415e4f/apply/apply",
    "support": "True",
    "map": {},
    "resume_upload": "resume"
},
{
    "name": "InterSystems",
    "link": "https://jobs-intersystems.icims.com/jobs/5277/intersystems-summer-internship-2020/job",
    "support": "False"
},
{
    "name": "Okta",
    "link": "https://www.okta.com/company/careers/",
    "support": "False"
},
{
    "name": "Blackstone",
    "link": "https://blackstone.wd1.myworkdayjobs.com/en-US/Blackstone_Campus_Careers/job/New-York/Innovations---Software-Developer---2020-Summer-Analyst_9144",
    "support": "False"
},
{
    "name": "TripAdvisor",
    "link": "https://careers.tripadvisor.com/c/campus-jobs",
    "support": "False"
},
{
    "name": "Etsy",
    "link": "https://jobs.lever.co/etsy/44a07d1f-d198-4a2a-9c28-64d0ad7db531/apply/apply",
    "support": "True",
    "map": {},
    "resume_upload": "resume"
},
{
    "name": "Kabbage",
    "link": "https://www.kabbage.com/company/careers/job/1861102",
    "support": "False"
},
{
    "name": "Enfusion",
    "link": "https://hire.withgoogle.com/public/jobs/enfusionsystemscom/view/P_AAAAAACAAKFDmOJkch85P4",
    "support": "False"
},
{
    "name": "C3.ai",
    "link": "https://boards.greenhouse.io/c3iot/jobs/4086849002",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Pocket Gems",
    "link": "https://boards.greenhouse.io/pocketgems/jobs/1849185?gh_src=%5Bu%270c25bb191%27%5D",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "CME Group",
    "link": "https://jobs.cmegroup.com/jobs/4575089-software-engineering-internship-summer-2020",
    "support": "False"
},
{
    "name": "Hyland",
    "link": "https://careers-hyland.icims.com/jobs/5425/software-development-internship-(summer-2020)/job",
    "support": "False"
},
{
    "name": "Bentley Systems",
    "link": "https://jobs.bentley.com/job/Austin-Software-Development-Intern-Summer-2020-TX-78730/589840200/",
    "support": "False"
},
{
    "name": "ServiceNow",
    "link": "https://jobs.jobvite.com/servicenow/job/oPtSafw4",
    "support": "False"
},
{
    "name": "New Relic",
    "link": "http://jobs.jobvite.com/newrelic/job/oJHXafwh",
    "support": "False"
},
{
    "name": "MongoDB",
    "link": "https://www.mongodb.com/careers/jobs/1855372?gh_src=0wcvpq1",
    "support": "False"
},
{
    "name": "KeepTruckin",
    "link": "https://keeptruckin.com/careers",
    "support": "False"
},
{
    "name": "Tubular Labs",
    "link": "https://jobs.lever.co/tubularlabs/f3907864-0713-4fe0-b70d-4859b54d2d5e/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "Rubrik",
    "link": "https://www.rubrik.com/company/careers/university-talent/jobs/software-engineering-internship-783507/",
    "support": "False"
},
{
    "name": "Pure Storage",
    "link": "https://boards.greenhouse.io/purestorage/jobs/1852570",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "GrammaTech",
    "link": "https://careers-grammatech.icims.com/jobs/1128/software-engineer-intern-%28research%29---summer-2020/job",
    "support": "False"
},
{
    "name": "Huobi",
    "link": "https://jobs.lever.co/huobi/c454e383-9302-4bec-88c0-7a9f749cb5f9/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Phone \u2731": "phone",
        "Current company \u2731": "org",
        "LinkedIn URL\u2731": "urls[LinkedIn]",
        "US Citizen": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field1]",
        "Green Card": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field1]",
        "H1B": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field1]",
        "H4": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field1]",
        "OPT/CPT": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field1]",
        "Others": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field1]",
        "No": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field2]",
        "Yes": "cards[cd21ed92-25e0-4bd7-8d72-a658dfacd0dc][field2]",
        "within 2 weeks": "cards[97a07992-1118-4b26-bd0a-806f403a7f7f][field0]",
        "~1 month": "cards[97a07992-1118-4b26-bd0a-806f403a7f7f][field0]",
        "1-3 months": "cards[97a07992-1118-4b26-bd0a-806f403a7f7f][field0]",
        "More": "cards[97a07992-1118-4b26-bd0a-806f403a7f7f][field0]"
    },
    "resume_upload": "resume"
},
{
    "name": "Honey",
    "link": "https://www.joinhoney.com/careers/internships",
    "support": "False"
},
{
    "name": "LinkedIn",
    "link": "https://careers.linkedin.com/students/Internships/Technical",
    "support": "False"
},
{
    "name": "Oscar",
    "link": "https://www.hioscar.com/careers/1845429",
    "support": "False"
},
{
    "name": "Uber",
    "link": "https://www.uber.com/global/en/careers/list/54737/",
    "support": "False"
},
{
    "name": "Cambly",
    "link": "https://jobs.lever.co/cambly/21350d5c-8ef0-4284-8348-8d3218d24ecd/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "Cogo Labs",
    "link": "https://boards.greenhouse.io/cogolabs",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Expedia",
    "link": "https://expedia.wd5.myworkdayjobs.com/search/job/Washington---Seattle-HQ/Internship---Multiple-Locations---Software-Development_R-46462",
    "support": "False"
},
{
    "name": "Cruise",
    "link": "https://www.getcruise.com/careers/university",
    "support": "False"
},
{
    "name": "GitHub",
    "link": "https://github.com/about/careers#internships",
    "support": "False"
},
{
    "name": "Roblox",
    "link": "https://corp.roblox.com/careers/listing/?gh_jid=1860562",
    "support": "False"
},
{
    "name": "Mozilla",
    "link": "https://careers.mozilla.org/listings/?position_type=Internteam=Engineering",
    "support": "False"
},
{
    "name": "Tesla",
    "link": "https://www.tesla.com/careers/search#/?keyword=Intern&department=1",
    "support": "False"
},
{
    "name": "Kleiner Perkins Fellows Program",
    "link": "https://boards.greenhouse.io/2020kpfellows",
    "support": "True",
    "map": {},
    "resume_upload": "resume_chosen"
},
{
    "name": "Vimeo",
    "link": "https://boards.greenhouse.io/vimeo/jobs/1851794",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Slack",
    "link": "https://slack.com/careers/university-recruiting#openings",
    "support": "False"
},
{
    "name": "Zillow",
    "link": "http://careers.zillowgroup.com/ShowJob/Id/355556/Software%20Development%20Engineer%20%20%20Intern",
    "support": "False"
},
{
    "name": "Lob",
    "link": "https://boards.greenhouse.io/lob/jobs/1862312",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "TripActions",
    "link": "https://tripactions.com/job-openings",
    "support": "False"
},
{
    "name": "Box",
    "link": "https://careers.box.com/job/1862637/Software-Engineering-Intern-Summer-2020",
    "support": "False"
},
{
    "name": "Kensho",
    "link": "https://jobs.lever.co/kensho/2c82a1f0-3f96-47e1-a785-cfd2acdbed7a/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Phone \u2731": "phone",
        " What is your favorite tool and why?\u2731": "cards[7378d60d-7c63-4938-a42f-051bf68649d2][field0]",
        " How did you hear about Kensho?\u2731": "cards[7378d60d-7c63-4938-a42f-051bf68649d2][field1]"
    },
    "resume_upload": "resume"
},
{
    "name": "Ironclad",
    "link": "https://jobs.lever.co/ironcladapp/7dc69333-8b40-40d9-b1c1-b8165471d88c/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email"
    },
    "resume_upload": "resume"
},
{
    "name": "Nextdoor",
    "link": "https://about.nextdoor.com/careers-list/?gh_jid=1871040",
    "support": "False"
},
{
    "name": "Square",
    "link": "https://jobs.smartrecruiters.com/Square/743999695283477-software-engineer-intern",
    "support": "False"
},
{
    "name": "Convoy",
    "link": "https://jobs.lever.co/convoy/63403442-d175-4f25-9521-d8ee4121433b/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "Phone \u2731": "phone",
        " How did you hear about Convoy?\u2731": "cards[d9ba0bdd-120f-4ee6-9148-b26f8979fb20][field0]",
        "Yes": "cards[d9ba0bdd-120f-4ee6-9148-b26f8979fb20][field6]",
        "No": "cards[d9ba0bdd-120f-4ee6-9148-b26f8979fb20][field6]"
    },
    "resume_upload": "resume"
},
{
    "name": "Fivestars",
    "link": "https://boards.greenhouse.io/fivestars/jobs/1874507",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
},
{
    "name": "Transfix",
    "link": "https://jobs.lever.co/transfix/c9c05b4f-18f7-4ba3-9361-bacd89192589/apply",
    "support": "True",
    "map": {
        "Full name\u2731": "name",
        "Email\u2731": "email",
        "LinkedIn URL\u2731": "urls[LinkedIn]"
    },
    "resume_upload": "resume"
},
{
    "name": "Checkr",
    "link": "https://boards.greenhouse.io/embed/job_app?token=1870995",
    "support": "True",
    "map": {
        "\nPhone *\n\n": "phone"
    },
    "resume_upload": "resume_chosen"
}

]

records.insert_many(new_companies)

#print total documents in db
x = records.count_documents({})
print("There are currently " + str(x) + " documents in the DB.")

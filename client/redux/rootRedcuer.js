import { ServerName } from "../secret";

const initState = {
    jobs: [
        {
            "name": "Fidelity Investments",
            "link": "https://jobs.fidelity.com/ShowJob/Id/580980/Summer-2020-Technical-Internship-Program/",
            "support": "False",
            "logo": "https://logo.clearbit.com/FidelityInvestments.com"
        },
        {
            "name": "JP Morgan Chase",
            "link": "https://careers.jpmorgan.com/us/en/students/programs/software-engineer-summer#careers-section7",
            "support": "False",
            "logo": "https://logo.clearbit.com/JPMorganChase.com"
        },
        {
            "name": "American Express",
            "link": "https://jobs.americanexpress.com/jobs?keywords=Internship",
            "support": "False",
            "logo": "https://logo.clearbit.com/AmericanExpress.com"
        },
        {
            "name": "Goldman Sachs",
            "link": "https://goldmansachs.tal.net/vx/lang-en-GB/mobile-0/brand-2/user-1414453/candidate/so/pm/1/pl/1/opp/2-Summer-Analyst-Summer-Associate-Internship-programs/en-GB",
            "support": "False",
            "logo": "https://logo.clearbit.com/GoldmanSachs.com"
        },
        {
            "name": "Microsoft",
            "link": "https://careers.microsoft.com/us/en/",
            "support": "False",
            "logo": "https://logo.clearbit.com/Microsoft.com"
        },
        {
            "name": "Apple",
            "link": "https://jobs.apple.com/en-us/search?location=united-states-USA&team=Internships-STDNT-INTRN",
            "support": "False",
            "logo": "https://logo.clearbit.com/Apple.com"
        },
        {
            "name": "Rimeto",
            "link": "https://jobs.lever.co/rimeto/d357c4b5-5a3e-4c75-84fd-057d2051cd92/apply",
            "support": "True",
            "map": {
                "Full name\u2731": "name",
                "Email\u2731": "email"
            },
            "resume_upload": "resume",
            "logo": "https://logo.clearbit.com/Rimeto.com"
        },
        {
            "name": "Facebook",
            "link": "https://www.facebook.com/careers/jobs/?roles[0]=intern",
            "support": "False",
            "logo": "https://logo.clearbit.com/Facebook.com"
        },
        {
            "name": "Duolingo",
            "link": "https://boards.greenhouse.io/duolingo/jobs/4351727002",
            "support": "False",
            "logo": "https://logo.clearbit.com/Duolingo.com"
        },
        {
            "name": "Robinhood",
            "link": "https://boards.greenhouse.io/robinhood/jobs/1739582",
            "support": "False",
            "logo": "https://logo.clearbit.com/Robinhood.com"
        },
        {
            "name": "Morgan Stanley",
            "link": "https://morganstanley.tal.net/vx/lang-en-us/mobile-0/brand-2/xf-88b1eb77da85/candidate/so/pm/1/pl/1/opp/8319/apply/en-us",
            "support": "False",
            "logo": "https://logo.clearbit.com/MorganStanley.com"
        },
        {
            "name": "Qualtrics",
            "link": "https://boards.greenhouse.io/qualtrics/jobs/755570?t=edd9906d1",
            "support": "False",
            "logo": "https://logo.clearbit.com/Qualtrics.com"
        },
        {
            "name": "Databricks",
            "link": "https://boards.greenhouse.io/databricks/jobs/4374189002?gh_src=62a881d62",
            "support": "False",
            "logo": "https://logo.clearbit.com/Databricks.com"
        },
        {
            "name": "Twitch",
            "link": "https://boards.greenhouse.io/twitch/jobs/4387419002",
            "support": "False",
            "logo": "https://logo.clearbit.com/Twitch.com"
        },
        {
            "name": "Amazon",
            "link": "https://www.amazon.jobs/en/jobs/908695/software-development-engineer-internship-summer-2020-us",
            "support": "False",
            "logo": "https://logo.clearbit.com/Amazon.com"
        },
        {
            "name": "Flexport",
            "link": "https://boards.greenhouse.io/flexport/jobs/1802354",
            "support": "False",
            "logo": "https://logo.clearbit.com/Flexport.com"
        },
        {
            "name": "Capital One",
            "link": "https://campus.capitalone.com/job/mclean/technology-internship-program-summer-2020/1786/12562814",
            "support": "False",
            "logo": "https://logo.clearbit.com/CapitalOne.com"
        },
        {
            "name": "Twitter",
            "link": "https://jobs.smartrecruiters.com/ni/Twitter2/c9c8d155-aab8-43cb-a530-629689467768-2020-university-application-full-time-internship",
            "support": "False",
            "logo": "https://logo.clearbit.com/Twitter.com"
        },
        {
            "name": "Figma",
            "link": "https://jobs.lever.co/figma/91da97b9-ff1d-4e08-a2f1-4867537e5eb2/apply",
            "support": "True",
            "map": {
                "Full name\u2731": "name",
                "Email\u2731": "email"
            },
            "resume_upload": "resume",
            "logo": "https://logo.clearbit.com/Figma.com"
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
            "resume_upload": "resume",
            "logo": "https://logo.clearbit.com/Wish.com"
        },
        {
            "name": "Konami",
            "link": "https://recruiting.ultipro.com/KON1000/JobBoard/c70fc266-51c5-5296-2005-ff4f122ccc1c//OpportunityDetail?opportunityId=da62060d-b31c-4a36-94c6-b20b3ae4d6cd",
            "support": "False",
            "logo": "https://logo.clearbit.com/Konami.com"
        },
        {
            "name": "Google",
            "link": "https://buildyourfuture.withgoogle.com/internships/",
            "support": "False",
            "logo": "https://logo.clearbit.com/Google.com"
        },
        {
            "name": "Snapchat",
            "link": "https://wd1.myworkdaysite.com/recruiting/snapchat/snap/job/Los-Angeles-California/IT-Internal-Front-End-Developer-Intern_R0009045",
            "support": "False",
            "logo": "https://logo.clearbit.com/Snapchat.com"
        },
        {
            "name": "Yelp",
            "link": "https://www.yelp.com/careers/job-openings?keywords=Summer&team=all&location=all",
            "support": "False",
            "logo": "https://logo.clearbit.com/Yelp.com"
        },
        {
            "name": "PayPal",
            "link": "https://jobsearch.paypal-corp.com/en-US/search?facetcategory=internship&orderby=-date",
            "support": "False",
            "logo": "https://logo.clearbit.com/PayPal.com"
        },
        {
            "name": "Lyft",
            "link": "https://boards.greenhouse.io/lyft/jobs/4358047002",
            "support": "False",
            "logo": "https://logo.clearbit.com/Lyft.com"
        },
        {
            "name": "Bloomberg",
            "link": "https://careers.bloomberg.com/job/detail/76852",
            "support": "False",
            "logo": "https://logo.clearbit.com/Bloomberg.com"
        },
        {
            "name": "Twilio",
            "link": "https://www.twilio.com/company/jobs?department=students#open-positions",
            "support": "False",
            "logo": "https://logo.clearbit.com/Twilio.com"
        },
        {
            "name": "Nvidia",
            "link": "https://nvidia.wd5.myworkdayjobs.com/en-US/UniversityJobs",
            "support": "False",
            "logo": "https://logo.clearbit.com/Nvidia.com"
        },
        {
            "name": "CTRL-Lab",
            "link": "https://jobs.lever.co/ctrl-labs/9218edb0-e31a-452c-8949-66d59e40423c/apply",
            "support": "True",
            "map": {
                "Full name\u2731": "name",
                "Email\u2731": "email"
            },
            "resume_upload": "resume",
            "logo": "https://logo.clearbit.com/CTRL-Lab.com"
        },
        {
            "name": "Pivotal",
            "link": "https://boards.greenhouse.io/embed/job_app?token=1851404",
            "support": "False",
            "logo": "https://logo.clearbit.com/Pivotal.com"
        },
        {
            "name": "Mastercard",
            "link": "https://mastercard.wd1.myworkdayjobs.com/Campus/0/refreshFacet/318c8bb6f553100021d223d9780d30be",
            "support": "False",
            "logo": "https://logo.clearbit.com/Mastercard.com"
        },
        {
            "name": "Airbnb",
            "link": "https://careers.airbnb.com/positions/1815030/",
            "support": "False",
            "logo": "https://logo.clearbit.com/Airbnb.com"
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
            "resume_upload": "resume",
            "logo": "https://logo.clearbit.com/SigOpt.com"
        },
        {
            "name": "Squarespace",
            "link": "https://www.squarespace.com/careers/jobs/1852871?gh_src=afe793d31",
            "support": "False",
            "logo": "https://logo.clearbit.com/Squarespace.com"
        },
        {
            "name": "MongoDB",
            "link": "https://www.mongodb.com/careers/jobs/1855372?gh_src=0wcvpq1",
            "support": "False",
            "logo": "https://logo.clearbit.com/MongoDB.com"
        },
        {
            "name": "Tubular Labs",
            "link": "https://jobs.lever.co/tubularlabs/f3907864-0713-4fe0-b70d-4859b54d2d5e/apply",
            "support": "True",
            "map": {
                "Full name\u2731": "name",
                "Email\u2731": "email"
            },
            "resume_upload": "resume",
            "logo": "https://logo.clearbit.com/TubularLabs.com"
        },
    
        {
            "name": "LinkedIn",
            "link": "https://careers.linkedin.com/students/Internships/Technical",
            "support": "False",
            "logo": "https://logo.clearbit.com/LinkedIn.com"
        },
        {
            "name": "Uber",
            "link": "https://www.uber.com/global/en/careers/list/54737/",
            "support": "False",
            "logo": "https://logo.clearbit.com/Uber.com"
        },
        {
            "name": "Cambly",
            "link": "https://jobs.lever.co/cambly/21350d5c-8ef0-4284-8348-8d3218d24ecd/apply",
            "support": "True",
            "map": {
                "Full name\u2731": "name",
                "Email\u2731": "email"
            },
            "resume_upload": "resume",
            "logo": "https://logo.clearbit.com/Cambly.com"
        },
        {
            "name": "GitHub",
            "link": "https://github.com/about/careers#internships",
            "support": "False",
            "logo": "https://logo.clearbit.com/GitHub.com"
        },
        {
            "name": "Mozilla",
            "link": "https://careers.mozilla.org/listings/?position_type=Internteam=Engineering",
            "support": "False",
            "logo": "https://logo.clearbit.com/Mozilla.com"
        },
        {
            "name": "Tesla",
            "link": "https://www.tesla.com/careers/search#/?keyword=Intern&department=1",
            "support": "False",
            "logo": "https://logo.clearbit.com/Tesla.com"
        },
        {
            "name": "Slack",
            "link": "https://slack.com/careers/university-recruiting#openings",
            "support": "False",
            "logo": "https://logo.clearbit.com/Slack.com"
        }
    ],
    user: {
        photoUrl: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/20479956_1384292284952067_5120349086823077972_n.jpg?_nc_cat=102&_nc_oc=AQnbTlHJ_9249ZJhw-dC6u7hyxem53PW1uRdWI2GWGR_u_IVVwPo9J61a1nMfxgaQmI&_nc_ht=scontent-dfw5-1.xx&oh=b23148a57dc0de340edb6ae578f802f7&oe=5E2A55BC',
        jobApplicationLocation: 'Arlington',
        universityName: 'University of Texas, Arlington',
        name: 'Adarsh Pai'
    },
}

export const RootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            console.log('action', action)
            break;

        default:
            // console.log('ran this')
            // const allCompanies = await fetch(ServerName + 'company/all').catch(err => console.log(err));
            // const companyJson = await allCompanies.json().catch(err => console.log(err));
            // console.log(companyJson)
            // state = {
            //     ...state,
            //     companies:[
            //         ...companyJson
            //     ],
            // }
            //free to use allCompanies 
            return state
    }
}
from flask_restful import Resource, Api, reqparse, abort
from activesoup import driver
import codecs
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import os
import urllib
import json


with open('metadata.json') as json_file:
    metadata = json.load(json_file)

xpath = metadata

class Apply(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('link')
        parser.add_argument('name')
        parser.add_argument('info',type=dict)
        payload = parser.parse_args()

        payload_url = payload['link']
        info = payload['info']

        chrome_opt = Options()
        chrome_opt.add_argument('--headless')
        #chrome_opt.add_argument('--no-sandbox')
        #chrome_opt.add_argument('--disable-dev-shm-usage')
        browser = webdriver.Chrome(chrome_options=chrome_opt)
        #browser = webdriver.Chrome()

        print("payload_url: ", payload_url)

        browser.get(str(payload_url))

        if "lever" in payload_url:

            resume = browser.find_element_by_name("resume")
            if os.path.isfile(os.getcwd()+'/'+info["id"]+'.jpeg'):
                resume.send_keys(os.getcwd()+'/'+info["id"]+'.jpeg')

            browser.find_element_by_name('name').send_keys(info['first_name'] + info['last_name'])
            browser.find_element_by_name('email').send_keys(info['email'])
            browser.find_element_by_name('phone').send_keys(info['phone'])
            info['button'] = "null_button"
        
            for companies in xpath:
                company = None

                if companies['Name'] == payload['name']:
                    company = companies  
                if company is not None:      
                    for key in company.keys():
                        if company[key] != payload['name']:
                            action = browser.find_element_by_xpath(key)
                            if info[company[key]] != None and company[key]:
                                action.send_keys(info[company[key]])

            browser.find_element_by_xpath(key).send_keys(Keys.ENTER)
            browser.close()
        return {
                message : "Success",
                job_applied_to : payload_url
        }, 200


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
        parser.add_argument('Current Company')
        parser.add_argument('Favorite Tool')
        parser.add_argument('Why Kensho')
        payload = parser.parse_args()

        payload_url = payload['link']
        info = payload['info']
        #chrome_opt = Options()
        #chrome_opt.add_argument('--headless')
        #chrome_opt.add_argument('--no-sandbox')
        #chrome_opt.add_argument('--disable-dev-shm-usage')
        #browser = webdriver.Chrome(chrome_options=chrome_opt)
        browser = webdriver.Chrome()
        browser.get(payload_url)

        if "greenhouse" in payload_url:

            first_name = browser.find_element_by_id("first_name")
            last_name = browser.find_element_by_id("last_name")
            email = browser.find_element_by_id("email")
            phone = browser.find_element_by_id("phone")
            

            resume = browser.find_element_by_name("file")
            first_name.send_keys("Adarsh Yogesh")
            last_name.send_keys("Pai")
            email.send_keys("adarsh9pai@gmail.com")
            phone.send_keys("6825512698")
            resume.send_keys(os.getcwd()+'/resume.pdf')
        
        if "lever" in payload_url:

            resume = browser.find_element_by_name("resume")
            resume.send_keys(os.getcwd()+'/image.jpeg')

        
            for companies in xpath:
                company = None

                if companies['Name'] == payload['name']:
                    company = companies  
                if company is not None:      
                    for key in company.keys():
                        if company[key] != payload['name']:
                            action = browser.find_element_by_xpath(key)
                            action.send_keys(info[company[key]])


        return {
            'message' : payload_url
        }, 200

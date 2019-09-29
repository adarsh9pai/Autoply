from bs4 import BeautifulSoup
from activesoup import driver
import codecs
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os
import urllib
import pprint
import requests

internship_listings = BeautifulSoup(codecs.open("data.html",'r',"utf-8").read(),'html.parser').find_all('a')
links = {}
unique_questions = set()

for link in internship_listings:

    if "lever.co" in link.get('href'):
        links[link.text.lower()] = {}
        links[link.text.lower()]['name'] = link.text
        links[link.text.lower()]['link'] = link.get('href') + "/apply"
        links[link.text.lower()]['support'] = 'True'

        url = links[link.text.lower()]['link']
        page = requests.get(url)
        soup = BeautifulSoup(page.text, "lxml")  
        required_input = soup.find_all(lambda tag: 'required' in tag.attrs)
        grandfather_map = {}
        for input_tag in required_input:
            grandfather_map[input_tag.parent.parent.get_text()] = input_tag.attrs['name']
        
        links[link.text.lower()]['map'] = grandfather_map
        links[link.text.lower()]['resume_upload'] = 'resume'


    elif "greenhouse.io" in link.get('href'):
        links[link.text.lower()] = {}
        links[link.text.lower()]['name'] = link.text
        links[link.text.lower()]['link'] = link.get('href')
        links[link.text.lower()]['support'] = 'True'

        url = links[link.text.lower()]['link']
        page = requests.get(url)
        soup = BeautifulSoup(page.text, "lxml")  
        required_input = soup.find_all(lambda tag: 'required' in tag.attrs)
        father_map = {}

        for input_tag in required_input:
            father_map[input_tag.parent.get_text()] = input_tag.attrs['id']
        
        links[link.text.lower()]['map'] = father_map
        links[link.text.lower()]['resume_upload'] = 'resume_chosen'

    else:
        links[link.text.lower()] = {}
        links[link.text.lower()]['name'] = link.text
        links[link.text.lower()]['link'] = link.get('href')
        links[link.text.lower()]['support'] = 'False'
        links[link.text.lower()]['logo'] = "https://logo.clearbit.com/" + links[link.text.lower()]['name'].replace(" ","")+".com"
      

lst = []
for companies in links.keys():
    lst.append(links[companies])

with open('data.json', 'w') as fp:
    json.dump(lst, fp, indent=4)
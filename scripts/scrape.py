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



        '''
        url = links[link.text.lower()]['link']
        page = requests.get(url)
        soup = BeautifulSoup(page.text, "lxml")
        textareas = soup.select('textarea')

        for textarea in textareas:
            if textarea.parent.parent.get_text() is not None:
                unique_questions.add(textarea.parent.parent.get_text())
        '''


data = []

for key in links.keys():
    data.append(links[key])


with open('data.json', 'w') as outfile:
    json.dump(data, outfile,indent=4)
'''
lst = list(unique_questions)

with open('questions.html', 'w') as outfile:
    json.dump(lst, outfile,indent=4)


'''

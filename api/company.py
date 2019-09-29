import os
import requests
from pymongo import MongoClient
from flask_restful import Resource, Api, reqparse, abort
import pprint
import json
from bson.json_util import dumps
import ast

class Company(Resource):
    def get(self):
        client = MongoClient("mongodb+srv://jamshed:admin@autoplycluster1-ajted.mongodb.net/test?retryWrites=true&w=majority")
        db = client.get_database('AutoplyDB')
        collection = db.CompanyList
        all_companies = dumps(collection.find({}))
        all_companies = json.JSONDecoder().decode(all_companies)

        return {
            "message" : "success",
            "list" : all_companies
        }, 200

from flask import Flask
from flask_restful import Resource, Api, reqparse, abort
from apply import Apply
from company import Company
from profile import Profile

app = Flask(__name__)
api = Api(app)


class APIGuide(Resource):
    def get(self):
        return {'message' : 'Welcome to the Autoply API'}, 200

api.add_resource(APIGuide,'/')
api.add_resource(Apply,'/apply')
api.add_resource(Company,'/company/all')
api.add_resource(Profile,'/profile')

if __name__ == '__main__':
    app.run('0.0.0.0', 5000)

from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class APIGuide(Resource):
    def get(self):
        return {'message' : 'Welcome to the Autoply API'}

api.add_resource(APIGuide,'/')

if __name__ == '__main__':
    app.run()
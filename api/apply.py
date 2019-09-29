from flask_restful import Resource, Api, reqparse, abort

class Apply(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('profile_payload')
        parser.add_argument('company_name')
        args = parser.parse_args()
        
        user_profile = args['profile_payload']
        company_name = args['company_name']

        return {
            'message' : 'selenium apply endpoint'
        }, 200

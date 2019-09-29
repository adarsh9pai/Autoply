from flask_restful import Resource, Api, reqparse, abort
import werkzeug

class Profile(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('pdf_payload', type=werkzeug.datastructures.FileStorage, location='files')
        args = parser.parse_args()
        pdf = args['pdf_payload']
        pdf.save("resume.pdf")
        return {"pdf_payload" : "yo"},200
from flask_restful import Resource, Api, reqparse, abort
import werkzeug

class Profile(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('photo', type=werkzeug.datastructures.FileStorage, location='files')
        args = parser.parse_args()
        pdf = args['photo']
        print(pdf)
        pdf.save("image.jpeg")
        return {"pdf_payload" : "yo"},200

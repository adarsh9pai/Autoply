from flask_restful import Resource, Api, reqparse, abort, request
import werkzeug
import img2pdf

class Profile(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=str,location='form')
        parser.add_argument('name', type=str, location='form')
        parser.add_argument('photo', type=werkzeug.datastructures.FileStorage, location='files')
        args = parser.parse_args()
        pdf = args['photo']
        _id = args['id']

        extension = split(args['name'], ".")
        extension = extension[len(extensions)-1]
        print('pdf: ' + str(pdf))
        print('id: ' + str(_id))
        pdf.save(_id + "." + extension)
        
        with open(_id + '.pdf', 'wb') as f1, open(_id + "." + extension) as f2:
            f1.write(img2pdf.convert(f2))

        
        return {"pdf_payload" : "yo"},200

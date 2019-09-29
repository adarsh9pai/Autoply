from flask_restful import Resource, Api, reqparse, abort, request
import werkzeug
import matplotlib.pyplot as plt
#import urllib2
import requests

class Profile(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=str,location='form')
        parser.add_argument('type', type=str, location='form')
        parser.add_argument('photo', type=werkzeug.datastructures.FileStorage, location='files')
        parser.add_argument('user', type=dict, location='form')
        args = parser.parse_args()
        pdf = args['photo']
        _id = args['id']
        data = args['user']

        extension = args['type']
        print('pdf: ' + str(pdf))
        print('id: ' + str(_id))
        pdf.save(_id + "." + extension)

        r = requests.post(url='http://localhost:5000/apply', data=data)
        #vals = urllib.urlencode(data)
        #req = urllib2.Request('http://localhost:5000/apply', vals);
        '''fetch('http://localhost:5000/apply', {
            method: 'POST',
            body: data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data"
            },
        })'''
        
        #with open(_id + '.pdf', 'wb') as f1, open(_id + "." + extension) as f2:
            #f1.write(img2pdf.convert(f2))

        plt.imread(_id + "." + extension)
        plt.savefig(_id + ".jpg", format='jpg')
        return {"pdf_payload" : "yo"},200

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST', 'OPTIONS'])
@cross_origin()
def index():
    if request.method == 'POST':
        var1 = request.form['fromDate']
        var2 = request.form['toDate']   
        var3 = request.form['inputDate']
        print(var1, var2, var3)
        return jsonify({'s1':[1,2,3,4], 's2':[2,3,4,5]})
    else:
        return '<h1>Hello World!</h1>'

app.run(debug=True)
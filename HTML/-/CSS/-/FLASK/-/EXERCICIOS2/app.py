from flask import Flask, jsonify, request
import json
app  = Flask(__name__)

@app.route('/')
def pessoa():
    return jsonify({'nome':'Rafael', 'profissao':'Desenvolvedor'})

@app.route('/soma', methods=['POST', 'GET'])
def soma():
    if request.method == 'POST':
        dados = json.loads(request.data)
        total = sum(dados['valores'])
    elif
        total = 10+10
    return jsonify({'soma': total})

if __name__=='__main__':
    app.run(debug=True)
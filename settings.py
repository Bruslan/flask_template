from flask_mongoengine import MongoEngine
from flask import Flask

global db
global app
app = Flask(__name__)
db = MongoEngine()
app.config['MONGODB_DB'] = 'paarfit'
app.config['MONGODB_HOST'] = 'ds263660.mlab.com'
app.config['MONGODB_PORT'] = 63660
app.config['MONGODB_USERNAME'] = 'bruslan'
app.config['MONGODB_PASSWORD'] = 'test123'
app.secret_key = "Am I being w@tched? Damn yes!"
db.init_app(app)

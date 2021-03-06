from flask_login import UserMixin, LoginManager, login_required, login_user, logout_user, current_user
from flask_mongoengine import MongoEngine, DoesNotExist
from werkzeug.security import generate_password_hash, check_password_hash
from settings import db
import datetime

# Database Modals
class User(UserMixin, db.Document):
	created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
	email = db.StringField(max_length=255,required = True)
	username = db.StringField(max_length=255, required=False)
	password = db.StringField(max_length=255, required=True)

	def __unicode__(self):
		return self.id

	def set_password(self, password):
		self.password = generate_password_hash(password)

	def is_authenticated(self):
		return True

	def is_active(self):
		return True

	def is_anonymous(self):
		return False

	def check_password(self, password):
		return check_password_hash(self.password_hash, password)

	@staticmethod
	def validate_login(password_hash, password):
		return check_password_hash(password_hash, password)

	meta = {
		'allow_inheritance': True,
		'indexes': ['-created_at', 'username'],
		'ordering': ['-created_at']
	}



class Stats(db.Document):
	created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
	user = db.ReferenceField(User)
	perfektewoche = db.IntField(max_length=255, required=True)
	trainingseinheiten = db.IntField(max_length=2000, required=True)
	trainingswochen = db.IntField(max_length=2000, required=True)
	stufe =  db.IntField(required=False)



class Workout(db.Document):
	created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
	user = db.ReferenceField(User)
	workout_id = db.StringField(max_length=255, required=True)
	workout_nr = db.IntField(max_length=20, required=True)
	week_nr = db.IntField(max_length=200, required=True)
	stufe = db.IntField(required=False)

class Rezept(db.Document):
	created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
	user = db.ReferenceField(User)
	rezept_titel = db.StringField(max_length=255, required=True)
	rezept_zubereitung = db.StringField( required=True)
	bild = db.StringField(max_length=255)
	zutaten = db.DictField()

	



from flask import Flask, request, jsonify, Blueprint
from api.models import db, User
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# [POST] /signup: Create a new user
@api.route('/signup', methods=['POST'])
def handle_signup():
    body = request.get_json()
    if User.query.filter_by(email=body.get("email")).first():
        return jsonify({"msg": "User already exists"}), 400
    
    new_user = User(email=body["email"], password=body["password"], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User created successfully"}), 201

# [POST] /login: Authenticate and return JWT
@api.route('/login', methods=['POST'])
def handle_login():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Invalid credentials"}), 401

    # Using identity as a string for JWT
    access_token = create_access_token(identity=str(user.id))
    return jsonify({"token": access_token, "user": user.serialize()}), 200

# [GET] /private: Protected area validation
@api.route('/private', methods=['GET'])
@jwt_required()
def handle_private():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify({"msg": f"Hello {user.email}, access granted"}), 200

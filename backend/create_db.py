from app import db, app

# Wrap the db.create_all() call inside the application context
with app.app_context():
    db.create_all()

print("Database tables created!")

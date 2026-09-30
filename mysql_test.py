import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Your_database_password",
    database="contact_manager"
)

print("Connected to MySQL successfully!")

connection.close()
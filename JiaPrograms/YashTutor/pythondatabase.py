import pymysql

# Open database connection
# Host/Ip Address, Database User, Database password, Database Name
db = pymysql.connect("localhost","root","jiadang2008","test_database" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

create_query = '''
CREATE TABLE PERSONS(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25) ,
   SALARY   DECIMAL (18, 2),       
   PRIMARY KEY (ID)
);
'''
data = [(1, 'Ramesh', 32, 'Ahmedabad', 2000.00 ),(2, 'Khilan', 25, 'Delhi', 1500.00 ),(3, 'kaushik', 23, 'Kota', 2000.00 ) ]


insert_query = '''
INSERT INTO PERSONS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (%s, %s, %s, %s, %s );
'''
select_query = '''
SELECT * FROM PERSONS;
'''

update_query = '''
UPDATE PERSONS
SET SALARY  = '1000'
WHERE ID = 6;
'''
delete_query = '''
DELETE FROM PERSONS
WHERE ID = 3;
'''
'''
for values in data:
    cursor.execute(insert_query, args=values)
db.commit()
print('Query executed successfully.')
'''
cursor.execute(update_query)
db.commit()
print('Query exicuted successfully.')
cursor.execute(delete_query)
db.commit()
print('Query exicuted successfully.')


# execute SQL query using execute() method.
#cursor.execute("SELECT VERSION()")

# Fetch a single row using fetchone() method.
#data = cursor.fetchone()
#print ("Database version : %s " % data)

# disconnect from server
db.close()
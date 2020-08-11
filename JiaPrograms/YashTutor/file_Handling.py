


# Three modes to open a file:
# 1. read: r
# 2. Write: w
# 3. Append: a
f = open('sample1.txt')
# a = input("Who's birthday are you looking for today? ")
person_name=input("Who's birthday are you looking for? ")
dictionary = {}
data = f.readlines()
for person in data:
    name, birthday = person.split(':')
    dictionary[name] = birthday.strip('\n')
if dictionary.get(person_name):
    print(f"{person_name}'s Birthday is on {dictionary[person_name]}")
else:
    print('Sorry')
# print(f.read(a))



# f.write('Hello Jia')

# Create a python program which reads birthdays of people from a file and ask user to check date of the person.

# File: dictionaries.txt
# Jia:06/14/2008
# Yash:08/23/1996

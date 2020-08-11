import re

#from likehangman import start_game

#start_game()

# Pattern: to identify some string
string = '''Hi Jia! how are you? Is the folowing your mobile number?
(714)396-4270
7143964270
+1 714-396-4270
+91 789-789-7899
He
'''
# \w: [a-z0-9_]
# \d: [0-9]

reg = re.findall('\d{10}|\+\d{1,3} \d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}', string, re.I)
print(reg)
#print(reg.span())
#print(reg.group())

# abc@gmail.com
# hello@abc.com
# abc.abc.com
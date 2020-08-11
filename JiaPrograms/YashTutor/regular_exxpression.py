import re
email= '''
abc@gmail.com
hello@abc.com
abc.abc.com
'''
reg = re.findall('\w+@\w+\.\w+',email,re.I)
print(reg)
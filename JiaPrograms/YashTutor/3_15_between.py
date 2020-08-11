worked=[]
for x in range(1000,3001):
    b=str(x)
    count = 0
    for i in range(0,4):
        if int(b[i]) % 2 == 0:
            count+=1
    if count == 4:
        worked.append(x)

# List Comprehention
#list_of_strings = []
#for element in worked:
#    list_of_strings.append(str(element))
#single_string = ','.join(list_of_strings)

#lst = []
#for x in range(10):
#    lst.append(x)

# print([x**3 for x in range(10)])
print(','.join([str(element) for element in worked]))
#print(worked)
#print(single_string)

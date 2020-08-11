a = input('Enter a list of numbers with elements: ')
b=[]
# lst=list(a)
# print(set(lst))
#for x in range(0, len(a),2):
#    if a[x] not in b:
#        b.append(a[x])
#print(b)
a = a.strip('[').strip(']')
a = a.split(',')
for x in a:
    if int(x) not in b:
        b.append(int(x))
print(b)






# [1,2,1,2,12,1,21,32,32,3,2]
# [123,456,789,9786,53423233,254,5,435,123,456]

# By using Set and without using set


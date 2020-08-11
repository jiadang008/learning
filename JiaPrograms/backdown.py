n = 5
k = 1
a = 4
for i in range(0,n):
    for j in range(0,a):
        print(" ",end=" ")
    a = a - 1
    for x in range(0,k):
        print(0,end=" ")
    k = k + 1
    print("\r")
p = 4
l = 4
s = 1
for i in range(0,p):
    for j in range(0,s):
        print(" ",end=" ")
    s = s + 1
    for x in range(0,l):
        print(0,end=" ")
    l = l - 1
    print("\r")
    

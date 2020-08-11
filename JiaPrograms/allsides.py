n = 5
a = 0
k = n 
for i in range(0,n):
    for j in range(0,k):
        print(0, end = " ")
    for x in range(0,a):
        print(" ", end = " ")
    a = a + 2
    for y in range(0,k):
        print(0, end= " ")
    k = k - 1
    print("\r")
p = 4
b = 6
l = 2
for i in range(0,p):
    for j in range(0,l):
        print(0, end = " ")
    for x in range(0,b):
        print(" ", end = " ")
    for y in range(0,l):
        print(0, end = " ")
    l = l + 1
    b = b - 2
    print("\r")

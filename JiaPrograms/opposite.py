n = 5
k = 8
a = 1
for i in range(0,n):
    for j in range(0,a):
        print(0, end= " ")
    for x in range(0,k):
        print(" ", end = " ")
    k = k - 2
    for y in range(0,a):
         print(0, end = " ")
    a = a + 1
    print("\r")
p = 4
l = 2
d = 4
for i in range(0,p):
    for  j in range(0,d):
        print(0, end  = " ")
    for x in range(0,l):
        print(" ", end  = " ")
    l = l + 2
    for y in range(0,d):
        print(0, end  = " ")
    d = d - 1
    print("\r")

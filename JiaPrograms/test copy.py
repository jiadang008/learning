n = 5
k = 1
a = 4
for i in range(0,n):
    for j in range(0,k):
        print("*",end = " ")
    k = k + 1
    for x in range(0,a):
        print(" ",end= " ")
    a = a - 1
    print("\r")
n = 5
k = 4
a = 1
for i in range(1,n):
    for j in range(0,k):
        print("*",end = " ")
    k = k - 1
    for x in range(0,a):
        print(" ",end= " ")
    a = a + 1
    print("\r")
        

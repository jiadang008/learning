n = 3
k = 5
a = 0
for i in range(0,n):
    for j in range(0,a):
        print(" ", end= " ")
    for x  in range(0,k):
        print(0, end = " ")
    k = k - 2
    for y in range(0,a):
        print(" ", end= " ")
    a = a + 1
    print("\r")
p = 2
l = 3
m = 1
for i in range(0,p):
    for j in range(0,m):
        print(" ", end= " ")
    for x  in range(0,l):
        print(0, end = " ")
    l = l + 2
    for y in range(0,m):
        print(" ", end= " ")
    m = m - 1
    print("\r")

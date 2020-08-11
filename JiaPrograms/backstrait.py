n = 5
k = 1
for i in range(0,n):
    z = 0
    for j  in range(0,k):
        if z == 0:
            print(0,end=" ")
            z = 1
        else:
            print(1,end=" ")
            z = 0
    k = k + 1
    print("\r")
s = 5
l = 4
for i in range(1,s):
    p = 0
    for j in range(0,l):
        if p == 0:
             print(0,end=" ")
             p = 1
        else:
            print(1,end=" ")
            p = 0
    l = l - 1
    print("\r")
    
    
        

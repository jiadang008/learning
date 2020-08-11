n = 5
for i in range(1,n):
    k= 0
    for j in range(1,i+1):
        if k == 0:
            print("1",end=" ")
            k=1
        else:
            print("0",end=" ")
            k=0
    print("\r")

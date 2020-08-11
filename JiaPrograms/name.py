n = 3
for l in range(1,1+n):
    k = 0
    for e in range(1,l+1):
        if k == 0:
            print("j",end= " ")
        elif k == 1:
            print("i",end= " ")
        else:
            print("a",end= " ")           
        print(end= " ")
        k=k+1
    print("\r")

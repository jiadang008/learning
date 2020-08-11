n = 5
for i in range(0,n):
    k = 0
    for j in range(0,n):
        while k <= 2:
            print(end= " ")
            k = k + 1
        for j in range(0,i+1):
            print("*", end= " ")
            k = 0
            while k >= 2:
                print(" ")
        for j in range(0,i+1):
                print("*")
            
            
        

n = int(input("Enter a number of lines : "))
k = 1
for i in range(0,n):
    for j in range(0,i+1):
        print(k, end= " ")
        k = k + 1
    print("\r")

    
   
#j=0
#k=1
#for i in range(1,n+1):
#    print(i, end=" ")
#    j=j+1
#    if j==k:
#        print("\r")
#        j=0
#        k=k+1
    


 

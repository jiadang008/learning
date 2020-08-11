held = input("How many classes were held?")
attended = input("How many classes were attended?")
product = (attended/float(held))*100
if product >= 75:
    print("able to sit in the test")
else:
    print("not able to attend")

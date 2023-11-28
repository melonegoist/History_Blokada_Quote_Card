x = int(input())
y = int(input())

decrease_type = input()
decrease_value = int(input())
ratio = x/y

if decrease_type == "x":
    x -= decrease_value
    y = x/ratio

elif decrease_type == "y":
    y -= decrease_value
    x = ratio*y

else:
    print("type x or y")


print(x, y)

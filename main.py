#print("Hello, World!")
#if 5 >2:
#    print("Five is greater than two");
#x = 5;
#y = "Cuong";
#casting in python
#x = str(3); #print '3'
#y = int(3); #print 3
#z = float(3); #print 3.0
#Many Values to Multiple Variables
#x,y,z = "Cuong","love", "Quymh";
#Unpack a collection
#a = ["Cuong","love","Quymh"];
#x ,y ,z =a;
#print(x);
#print(y);
#print(z);
#print(type(x));
#print(type(y));
#print(type(z));
#x = "Quynh";
#def myfunc():
#    global x;
#    x = "Quynh very much";
#    print("Cuong love " + x);

#myfunc();
#print Cuong love Quynh if x is not a global variable
#print Cuong love Quynh if x is a global variable
#print("Cuong love " + x);
#Specific Data type
#x = complex(1j);
#x = list(("Cuong", "love", "Quynh"))
#x = tuple(("Cuong","love","Quynh"));
#x = range(6);
#x= dict(name="Cuong",age=20);
#print(type(x));
#print(x);
#quantity = 3
#itemno = 567
#price = 49.95
#myorder = "I want {} pieces of item {} for {} dollars."
#print(myorder.format(quantity, itemno, price));
#quantity = 3
#itemno = 567
#price = 49.95
#myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
#print(myorder.format(quantity, itemno, price));
#def myFunction():
#    return True;

#if myFunction():
#    print("YES");
#else:
#    print("NO");
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"];
print(thislist[1]);
print(thislist[-1]);
print(thislist[2:5]);
print(thislist[:4]);
print(thislist[2:]);
print(thislist[-4:-1]);
if "apple" in thislist:
    print("Yes, 'apple' is in the fruits list");

thislist[1] = "blackcurrant"
print(thislist);
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist);
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist);
thislist[1:3] = ["watermelon"]
print(thislist)
thislist.insert(2, "banana")
print(thislist)
thislist.append("orange")
print(thislist)
thislist.insert(1, "orange")
print(thislist)
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist)
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
print(thislist)
thislist.remove("banana")
print(thislist)
thislist.pop(1)
print(thislist)
thislist.pop()
print(thislist)
del thislist[0]
print(thislist)
#del thislist
#thislist.clear()
for x in thislist:
    print(x)

for i in range(len(thislist)):
    print(thislist[i])

i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1

[print(x) for x in thislist]
newlist = [x for x in thislist if 'a' in x]
print(newlist)
newlist = [x.upper() for x in thislist]
print(newlist)
def myfunc(n):
  return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key = myfunc)
print(thislist)
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

(green, yellow, *red) = fruits

print(green)
print(yellow)
print(red)
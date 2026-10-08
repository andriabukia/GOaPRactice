# სეტის მეთოდები
# set2 = {1,2,3}
# set2.remove(2) # იღებს 1 არგუმენტს და შლის, თუ ვერ იპოვა error-ს გამოიტანს
# set2.discard(2,3,4) # შლის არგუმენტებს მაგრამ თუ ვერ იპოვა არ გამოიტანს error-ს
# set2.add(2) # ამატებს 1 არგუმენტს
# set2.update({5,6,7}) # ამატებს რამდენიმე არგუმენტს / განაახლებს და არ ქმნის ახალ სიმრავლეს
# set2.clear() # ამოშლის ყოველი სიმრავლის(set) ელემენტს
# set2.pop() # ამოშლის შემთხვევითობის პრინციპით
# print(set2)
 
# prices1 = {100,10,20,30}
# prices2 = {200,24,5120,20,100}
# realPrices = prices2.symmetric_difference(prices1)
# print(realPrices)
# union/intersection
    # გაერთიანება => გააერთიანებს ორ სიმრავლეს
# set1 = {"banana","vashli"}
# set2 = {"limoni","msxali"}

#მეთოდის ვარიანტი
# set3 = set1.union(set2)

#ოპერატორის ვარიანტი
# set3 = set1 | set2 # გაერთიანდა/შეიქმნა ახალი სიმრავლე


    # თანაკვეთა => გამოგვიტანს საერთო ელემენტებს
# set1 = {1,2,3,4}
# set2 = {2,3,5,6,7,8,9,10}

#მეთოდის ვარიანტი
# set3 = set1.intersection(set2)

#ოპერატორის ვარიანტი
# set3 = set1 & set2
# print(set3)

#difference/symetric_difference
# set4 = set1.difference(set2) # set1 - set2
# print(set4)
# #symetric
# set5 = set1.symmetric_difference(set2) # set1^set2
# print(set5)

# # in, not in
# if 2 in set1:
#     print("yello")

# if 6 not in set1:
#     print("yello not in")


# list1 = [1,2,3,1]
# list1 = set(list1)
# set0 = set(list1)

# sett = {"abc"}
# print(sett)
# sett2 = set("abc")
# print(sett2)

# list => სია
# set => სიმრავლე
# tuple => კორტეჟი
# dictionary => ბიბლიოთეკა



# difference -> აბრუნებს განსხვავებულ ელემენტებს პირველი სიიდან, ანუ:
# set1 = {1,2}
# set2 = {2,3}
# print(set1-set2) # ან print(set1.difference(set2)) ორივე დააბრუნებს {1}, იმიტომ რომ მხოლოდ პირველ სიმრავლეში იყო
# print(set2-set1) # ეს პირიქით დააბრუნებს მხოლოდ მეორეში რაც იყო, ანუ {3}

#symmetric_difference -> დააბრუნებს ორივე სიმრავლიდან მხოლოდ განსხვავებულ ელემენტებს, ანუ არა საერთოებს, მაგ:
# print(set1.symmetric_difference(set2)) # ან print(set1^set2) დააბრუნებს {1,3}
# print(set2.symmetric_difference(set1)) # ესეც ზუსტად იმავეს დააბრუნებს {1,3}

#intersection -> დააბრუნებს მხოლოდ საერთო ელემენტებს ორი სიმრავლიდან, მაგ:
# print(set1.intersection(set2)) # ან print(set1 & set2) დააბრუნებს {2}

#union -> აბრუნებს ახალ გაერთიანებულ სიმრავლეს:
# print(set1.union(set2)) # დააბრუნებს {1,2,3}

#შეასწორეთ მოცემული კოდი
# x= open("text.txt","w")
# x.write("Hello world")
# print(x.read())

#print() # funqcia
#.add() #methodi




# | -> union
# & -> intersection
# - -> difference
# ^ -> symetric_difference


# user1_friends = ["გიორგი", "ანა", "ნიკო", "ლაშა", "მარიამი"]
# user2_friends = ["მარიამი", "დავითი", "ანა", "სოფო"]
# user1_friends = set(user1_friends)
# user2_friends = set(user2_friends)
# user3 = user1_friends & user2_friends
# print(user3)

# friend1 = {"წიგნები", "ფეხბურთი", "ცურვა"}
# friend2 = {"ფეხბურთი", "ხატვა", "ცურვა", "მუსიკა"}
# friend3 = friend2 ^ friend1
# print(friend3)

# x = open("text.txt","r")
#  a -> append
#  w -> write
#  r -> read
# print(x.read()) # წაიკითხავს ყველა ტექსტს
# # print(x.readline()) # წაიკითხავს მხოლოდ 1 ხაზს
# # print(x.readlines()) # წაიკითხავს ყველა ხაზს და ლისტში სტრინგის სახით გამოგვიტანს
# x.close()
# #\n -> Enter
# writeComp = open("luka.txt","w")
# writeComp.write("Hello World2") # გადააწერს წინა ტექსტს

# appendComp = open("luka.txt","a")
# writeComp.write("\nHello World1") # დაამატებს ინფორმაციას წინა ტექსტს


# lastname ="bukia"
# print(f"gvari {lastname}")

# header = b"hello world"
# x = open("text.txt","w")
# x.write(header)

#*args, **kwargs
# def sayHi(*args):
#     return f"hi {args}"

# print(sayHi("andria","luka","nika"))

    #*args
    # - tuple-ის სახით აბრუნებს
    # - positional არგუმენტს იღებს
    # - რამდენიმე არგუმენტის გადაცემა შეგვიძლია

# def sayHello(**kwargs):
#     return f"Hello {kwargs}"
# print(sayHello(name="andria", lastname="bukia", role="admin"))

dictionary = {
    "name":"andria",
    "age":16
}
for key,value in dictionary.items():
    print(f"Key: {key}, Value: {value}")
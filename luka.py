set1 = set({1,3})
set2 = set({3,4,5})

    # .add  ამატებს 1 ელემენტს
    # .update ამატებს რამდენიმე ელემენტს
    # .remove ამოშლის 1 ელემენტს (ამოგვიგდებს ერორს თუ ვერ იპოვა)
    # .discard ამოშლის 1 ელემენტს (არ ამოგვიგდებს ერორს)
    # .clear ასუფთავებს მთლიან სიმრავლეს

    # .union |
    # .intersection &
    # .difference არ მახსოვს :(
    # .symetricDifference ^
set3 = set1 & set2
print(set3)
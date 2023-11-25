products={
    "leather wallet":{"quantity":1,"unitprice":1100,"gst":18},
    "umbrella":{"quantity":4,"unitprice":900,"gst":12},
    "cigerate":{"quantity":3,"unitprice":200,"gst":28},
    "honey":{"quantity":2,"unitprice":100,"gst":0}
}
maxproduct=None
maxamount=0

for product,details in products.items():
    quantity=details["quantity"]
    unitprice=details["unitprice"]
    gst=details["gst"]

    gstamount=gst*(unitprice*quantity)/100

    if gstamount>maxamount:
        maxamount=gstamount
        maxproduct=product

        totalamount = sum((details["quantity"] * details["unitprice"])+(details["quantity"]*details["unitprice"]*(details["gst"]/100)) for details in products.values())

print("Maximum gst product: ",maxproduct)
print("Maximum gst :",maxamount),
print("Total amount:",totalamount)


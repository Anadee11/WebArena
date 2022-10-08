from django.shortcuts import render, redirect
from .models import *
from django.http import JsonResponse
import json
import datetime
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

# Create your views here.
from .forms import CreateUserForm

def main(request):
    context={}
    return render(request,'store/main.html',context)

def store(request):
    context={}
    return render(request,'store/store.html',context)

def cart(request,username):
    user = User.objects.get(username=username)
    if user.is_authenticated:
        order, created = Order.objects.get_or_create(customer=user, complete=False)
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping': False}
        cartItems = order['get_cart_items']
        
        
    context={'items': items, 'order': order, 'cartItems': cartItems}
    return render(request,'store/cart.html',context)

def checkout(request,username):
    user = User.objects.get(username=username)
    if user.is_authenticated:
        order, created = Order.objects.get_or_create(customer=user, complete=False)
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping': False}
        cartItems = order['get_cart_items']
        
    context={'items': items, 'order': order, 'cartItems':cartItems}
    return render(request,'store/checkout.html',context)

def mainstore(request,username):
    
    user = User.objects.get(username=username)
    if user.is_authenticated:
        order, created = Order.objects.get_or_create(customer=user, complete=False)
        items = order.orderitem_set.all()
        cartItems = order.get_cart_items
    else:
        items = []
        order = {'get_cart_total':0, 'get_cart_items':0, 'shipping': False}
        cartItems = order['get_cart_items']
        
    
    products = Product.objects.all
    context={'products':products, 'cartItems': cartItems}
    return render(request,'store/mainstore.html',context)

def signup(request):
    form = CreateUserForm()
    
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user = form.cleaned_data.get('username')
            messages.success(request, 'Account was created for ' + user)
            return redirect('signin')
            
    context={'form':form}
    return render(request,'store/signup.html',context)

def signin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('mainstore',user.username)
    
    context = {}
    return render(request,'store/signin.html',context)

def logoutUser(request):
    logout(request)
    return redirect('main')

def updateItem(request, username):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']
    print('Action:', action)
    print('Product:',productId)
        
    # customer = request.user.customer
    user = User.objects.get(username=username)
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(customer=user, complete=False)
    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)
    if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)
        
    orderItem.save()
    
    if orderItem.quantity <= 0:
        orderItem.delete()
    return JsonResponse('Item was added',safe=False)

def processOrder(request,username):
    transaction_id = datetime.datetime.now().timestamp()
    data=json.loads(request.body)
    
    user = User.objects.get(username=username)
    if user.is_authenticated:
        order, created = Order.objects.get_or_create(customer=user, complete=False)
        total = float(data['form']['total'])
        order.transaction_id = transaction_id
        
        if total == order.get_cart_total:
            order.complete = True
        order.save()
        
        if order.shipping == True:
            ShippingAddress.objects.create(
                user=user,
                order=order,
                address=data['shipping']['address'],
                city=data['shipping']['city'],
                state=data['shipping']['state'],
                zipcode=data['shipping']['zipcode'],
                country=data['shipping']['country'],
            )
        
    else:
        print("User is not logged in")
    return JsonResponse(transaction_id, safe=False)
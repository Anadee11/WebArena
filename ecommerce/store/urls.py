from django.urls import path
from . import views

urlpatterns=[
    path('',views.main,name='main'),
    path('cart/<str:username>/',views.cart,name='cart'),
    path('checkout/<str:username>/',views.checkout,name='checkout'),
    path('mainstore/<str:username>/',views.mainstore,name='mainstore'),
    path('signup/',views.signup,name='signup'),
    path('signin/',views.signin,name='signin'),
    path('logout/',views.logoutUser,name='logout'),
    path('mainstore/<str:username>/update_item/',views.updateItem,name='update_item'),
    path('cart/<str:username>/update_item/',views.updateItem,name='update_item'),
    path('checkout/<str:username>/process_order/',views.processOrder,name='process_order'),
    
]
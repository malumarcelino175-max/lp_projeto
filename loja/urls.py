from django.urls import path
from . import views

app_name = "lp"

urlpatterns = [
    path("", views.home, name="home"),
    path("produtos/", views.produtos, name="produtos"),
    path("produtos/<slug:slug>/", views.produto, name="produto"),
    path("carrinho/", views.carrinho, name="carrinho"),
    path("sobre/", views.sobre, name="sobre"),
    path("contato/", views.contato, name="contato"),
    path("login/", views.login, name="login"),
    path("admin-loja/", views.admin, name="admin"),
]
